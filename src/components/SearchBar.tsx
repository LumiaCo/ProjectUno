import type { PoliticalType } from '../data/politicians';

const ALL_TYPES: PoliticalType[] = [
  'Democrat',
  'Republican',
  'Independent',
  'Socialist',
  'Libertarian',
  'Green',
];

interface SearchBarProps {
  query: string;
  selectedType: PoliticalType | 'All';
  onQueryChange: (q: string) => void;
  onTypeChange: (t: PoliticalType | 'All') => void;
}

export default function SearchBar({
  query,
  selectedType,
  onQueryChange,
  onTypeChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="search-input-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search politicians..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        {query && (
          <button className="clear-btn" onClick={() => onQueryChange('')}>
            ✕
          </button>
        )}
      </div>

      <div className="type-filters">
        <button
          className={`type-filter-btn ${selectedType === 'All' ? 'active' : ''}`}
          onClick={() => onTypeChange('All')}
        >
          All
        </button>
        {ALL_TYPES.map((type) => (
          <button
            key={type}
            className={`type-filter-btn ${selectedType === type ? 'active' : ''}`}
            onClick={() => onTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
