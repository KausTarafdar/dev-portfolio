import { education, skills } from "@/data/content";
import Squiggle from "./Squiggle";

export default function Education() {
  return (
    <section>
      <div className="breadcrumb">~/education</div>
      <h2 className="section-title">
        where I&apos;ve <span className="accent-word">studied<Squiggle /></span>
      </h2>

      <div className="edu-block">
        <div className="job-meta">
          <span>{education.dates}</span>
          <span>{education.location}</span>
        </div>
        <div className="edu-school">{education.school}</div>
        <div className="edu-degree">{education.degree}</div>
        <p className="edu-note">{education.note}</p>
      </div>

      <div>
        <div className="skills-title">Things I build with</div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.group}>
              <div className="skill-group-name">{group.group}</div>
              <div className="skill-items">{group.items.join(", ")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
