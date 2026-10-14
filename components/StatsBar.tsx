import { metrics } from "@/data/content";

export default function StatsBar() {
  return (
    <dl className="stats">
      {metrics.map((m) => (
        <div className="stat" key={m.label}>
          <dt className="stat-value">{m.value}</dt>
          <dd className="stat-label">{m.label}</dd>
        </div>
      ))}
    </dl>
  );
}
