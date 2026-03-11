import type { Politician } from '../data/politicians';
import { typeColors } from '../data/politicians';
import TypeBadge from './TypeBadge';

interface PoliticianCardProps {
  politician: Politician;
  onClick: () => void;
}

export default function PoliticianCard({ politician, onClick }: PoliticianCardProps) {
  const primaryColor = typeColors[politician.type];

  return (
    <button className="pokedex-card" onClick={onClick} style={{ borderTopColor: primaryColor }}>
      <div className="card-number">#{String(politician.id).padStart(3, '0')}</div>
      <div className="card-sprite">{politician.sprite}</div>
      <div className="card-name">{politician.name}</div>
      <div className="card-title">{politician.title}</div>
      <div className="card-types">
        <TypeBadge type={politician.type} />
        {politician.secondaryType && <TypeBadge type={politician.secondaryType} />}
      </div>
      <div className="card-state">{politician.state}</div>
    </button>
  );
}
