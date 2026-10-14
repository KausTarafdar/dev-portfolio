import { experience } from "@/data/content";
import CaseCard from "./CaseCard";
import Squiggle from "./Squiggle";

export default function Experience() {
  return (
    <section>
      <div className="breadcrumb">~/experience</div>
      <h2 className="section-title">
        where I&apos;ve <span className="accent-word">worked<Squiggle /></span>
      </h2>

      <ol className="timeline">
        {experience.map((job) => (
          <li className="job" key={job.company}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="job-meta">
              <span>{job.dates}</span>
              <span>{job.location}</span>
            </div>
            <div className="job-title">
              <span className="company-badge" aria-hidden="true">
                {job.company[0]}
              </span>
              <div>
                <a className="job-company" href={job.url} target="_blank" rel="noreferrer">
                  {job.company} <span className="arrow">↗</span>
                </a>
                <div className="job-role">{job.role}</div>
              </div>
            </div>
            <p className="job-summary">{job.summary}</p>
            <div className="case-grid">
              {job.projects.map((p) => (
                <CaseCard project={p} key={p.name} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
