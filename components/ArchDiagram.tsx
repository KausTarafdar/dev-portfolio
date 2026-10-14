import type { ArchNode } from "@/data/content";

export default function ArchDiagram({ nodes }: { nodes: ArchNode[] }) {
  return (
    <ol className="arch" aria-label="Architecture flow">
      {nodes.map((n, i) => (
        <li className={`arch-node arch-${n.kind}`} key={n.label}>
          {n.label}
          {i < nodes.length - 1 && <span className="arch-arrow" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
