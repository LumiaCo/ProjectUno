import type { Politician } from '../data/politicians';
import { typeColors } from '../data/politicians';
import TypeBadge from './TypeBadge';
import StatBar from './StatBar';

interface PoliticianDetailProps {
  politician: Politician;
  onBack: () => void;
}

const statConfig = [
  { key: 'charisma', label: 'Charisma' },
  { key: 'policy', label: 'Policy' },
  { key: 'experience', label: 'Experience' },
  { key: 'fundraising', label: 'Fundraising' },
  { key: 'approval', label: 'Approval' },
  { key: 'controversy', label: 'Controversy' },
] as const;

export default function PoliticianDetail({ politician, onBack }: PoliticianDetailProps) {
  const primaryColor = typeColors[politician.type];
  const totalStats = Object.values(politician.stats).reduce((a, b) => a + b, 0);

  return (
    <div className="detail-view" style={{ borderColor: primaryColor }}>
      {/* Header */}
      <div className="detail-header" style={{ backgroundColor: primaryColor }}>
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="detail-header-info">
          <span className="detail-number">#{String(politician.id).padStart(3, '0')}</span>
          <h2 className="detail-name">{politician.name}</h2>
          <p className="detail-title">{politician.title}</p>
        </div>
        <div className="detail-sprite">{politician.sprite}</div>
      </div>

      {/* Body */}
      <div className="detail-body">
        {/* Types */}
        <div className="detail-types">
          <TypeBadge type={politician.type} />
          {politician.secondaryType && <TypeBadge type={politician.secondaryType} />}
        </div>

        {/* Description */}
        <p className="detail-description">{politician.description}</p>

        {/* Profile Grid */}
        <div className="profile-grid">
          <div className="profile-item">
            <span className="profile-label">Party</span>
            <span className="profile-value">{politician.party}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">State</span>
            <span className="profile-value">{politician.state}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Height</span>
            <span className="profile-value">{politician.height}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Weight</span>
            <span className="profile-value">{politician.weight}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">First Elected</span>
            <span className="profile-value">{politician.firstElected}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Total Stats</span>
            <span className="profile-value" style={{ color: primaryColor, fontWeight: 700 }}>
              {totalStats}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section">
          <h3 className="section-title">Base Stats</h3>
          {statConfig.map(({ key, label }) => (
            <StatBar
              key={key}
              label={label}
              value={politician.stats[key]}
              color={key === 'controversy' ? '#ef4444' : primaryColor}
            />
          ))}
        </div>

        {/* Abilities */}
        <div className="abilities-section">
          <h3 className="section-title">Political Moves</h3>
          <div className="abilities-list">
            {politician.abilities.map((ability) => (
              <span
                key={ability}
                className="ability-badge"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                {ability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
