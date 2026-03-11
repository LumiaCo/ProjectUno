import type { PoliticalType } from '../data/politicians';
import { typeColors } from '../data/politicians';

interface TypeBadgeProps {
  type: PoliticalType;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  return (
    <span
      className="type-badge"
      style={{ backgroundColor: typeColors[type] }}
    >
      {type}
    </span>
  );
}
