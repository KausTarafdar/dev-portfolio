import type { Project } from "@/data/content";
import ArchDiagram from "./ArchDiagram";
import Bullet from "./Bullet";

const VISIBLE = 3;

export default function CaseCard({ project }: { project: Project }) {
  const shown = project.bullets.slice(0, VISIBLE);
  const rest = project.bullets.slice(VISIBLE);
  const hasDeep = rest.length > 0 || !!project.arch;

  return (
    <article className="case">
      <header className="case-head">
        <h3 className="project-name">{project.name}</h3>
        {project.headline && (
          <div className="case-headline">
            <span className="case-headline-value">{project.headline.value}</span>
            <span className="case-headline-label">{project.headline.label}</span>
          </div>
        )}
        {project.url && (
          <a className="case-link" href={project.url} target="_blank" rel="noreferrer">
            {project.url.includes("github.com") ? "Source" : "Visit"} ↗
          </a>
        )}
      </header>
      <p className="project-summary">{project.summary}</p>
      <div className="chips">
        {project.stack.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
      <ul className="bullets">
        {shown.map((b) => (
          <Bullet key={b} text={b} />
        ))}
      </ul>
      {hasDeep && (
        <details className="deep">
          <summary>
            <span className="deep-open">View architecture and deep dive</span>
            <span className="deep-close">Hide deep dive</span>
          </summary>
          {project.arch && <ArchDiagram nodes={project.arch} />}
          {rest.length > 0 && (
            <ul className="bullets">
              {rest.map((b) => (
                <Bullet key={b} text={b} />
              ))}
            </ul>
          )}
        </details>
      )}
    </article>
  );
}
