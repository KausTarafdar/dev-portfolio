import Link from "next/link";
import { projects } from "@/data/content";
import CaseCard from "./CaseCard";
import Squiggle from "./Squiggle";

export default function Projects() {
  return (
    <section>
      <div className="breadcrumb">~/side-projects</div>
      <h2 className="section-title">
        side <span className="accent-word">projects<Squiggle /></span>
      </h2>
      <p className="section-intro">
        Built outside of work. Production systems live under <Link href="/experience">experience</Link>.
      </p>
      <div className="case-grid">
        {projects.map((p) => (
          <CaseCard project={p} key={p.name} />
        ))}
      </div>
    </section>
  );
}
