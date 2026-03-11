interface StatBarProps {
  label: string;
  value: number;
  color: string;
}

export default function StatBar({ label, value, color }: StatBarProps) {
  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      <div className="stat-track">
        <div
          className="stat-fill"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
