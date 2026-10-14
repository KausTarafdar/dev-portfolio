import Link from "next/link";
import { projects } from "@/data/content";
import Squiggle from "./Squiggle";

export default function Projects() {
  return (
    <section>
      <div className="breadcrumb">~/side-projects</div>
      <h2 className="section-title">
        side <span className="accent-word">projects<Squiggle /></span>
      </h2>
      <p className="section-intro">
        Personal projects, built outside of work. For the production systems I&apos;ve shipped,
        see <Link href="/experience">experience</Link>.
      </p>

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
