import { experience } from "@/data/content";
import Squiggle from "./Squiggle";

export default function Experience() {
  return (
    <section>
      <div className="breadcrumb">~/experience</div>
      <h2 className="section-title">
        where I&apos;ve <span className="accent-word">worked<Squiggle /></span>
      </h2>

      {experience.map((job) => (
        <div className="job" key={job.company}>
          <div className="job-meta">
            <span>{job.dates}</span>
            <span>{job.location}</span>
          </div>
          <a className="job-company" href={job.url} target="_blank" rel="noreferrer">
            {job.company} <span className="arrow">↗</span>
          </a>
          <div className="job-role">{job.role}</div>
          <p className="job-summary">{job.summary}</p>

          <div className="project-list">
            {job.projects.map((project) => (
              <div className="project-block" key={project.name}>
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
          </div>
        </div>
      ))}
    </section>
  );
}
