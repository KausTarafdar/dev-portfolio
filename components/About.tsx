import Link from "next/link";
import { experience, profile, socials } from "@/data/content";
import StackChips from "./StackChips";
import StatsBar from "./StatsBar";

export default function About() {
  return (
    <section>
      <div className="breadcrumb">~/about</div>
      <h1 className="hero">
        hey, i&apos;m {profile.handle}.<span className="cursor" />
      </h1>
      <div className="identity">
        <span className="identity-name">{profile.name}</span>
        <span className="identity-title">{profile.title}</span>
      </div>
      <p className="lede">{profile.blurb}</p>
      <ul className="pills">
        <li className="pill pill-open">
          <span className="pill-dot" aria-hidden="true" />
          {profile.availability}
        </li>
        <li className="pill">
          Now at{" "}
          <a href={profile.current.url} target="_blank" rel="noreferrer">
            {profile.current.company}
          </a>
        </li>
        <li className="pill">{profile.location}</li>
      </ul>

      <StatsBar />

      <nav className="contact-row" aria-label="Contact">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {s.label} {s.label === "resume" ? "↓" : s.href.startsWith("http") ? "↗" : ""}
          </a>
        ))}
      </nav>

      <h2 className="block-title">experience</h2>
      <ul className="exp-preview">
        {experience.map((job) => (
          <li key={job.company}>
            <Link href="/experience" className="exp-row">
              <span className="company-badge" aria-hidden="true">
                {job.company[0]}
              </span>
              <span className="exp-main">
                <span className="exp-company">{job.company}</span>
                <span className="exp-role">{job.role}</span>
              </span>
              <span className="exp-projects">{job.projects.map((p) => p.name).join(" / ")}</span>
              <span className="exp-dates">{job.dates}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="block-title">stack</h2>
      <StackChips />

      <div className="about-footer">
        <span>{profile.footerLeft}</span>
        <span>{profile.footerRight}</span>
      </div>
    </section>
  );
}
