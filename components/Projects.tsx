import { projects } from "@/data/content";
import Squiggle from "./Squiggle";

export default function Projects() {
  return (
    <section>
      <div className="breadcrumb">~/projects</div>
      <h2 className="section-title">
        what I&apos;ve <span className="accent-word">built<Squiggle /></span>
      </h2>

      {projects.map((project) => (
        <div className="standalone-project" key={project.name}>
          <div className="project-head">
            <span className="project-name">{project.name}</span>
            {project.url && (
              <span className="project-links">
                <a href={project.url} target="_blank" rel="noreferrer">
                  Source ↗
                </a>
              </span>
            )}
          </div>
          <p className="project-summary">{project.summary}</p>
          <div className="stack-line">{project.stack.join(" / ")}</div>
          <ul className="bullets">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
