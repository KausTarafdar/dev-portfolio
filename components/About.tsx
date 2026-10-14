import Link from "next/link";
import { experience, featured, profile } from "@/data/content";
import CaseCard from "./CaseCard";
import StackChips from "./StackChips";
import StatsBar from "./StatsBar";

export default function About() {
  const all = experience.flatMap((j) => j.projects);
  const picks = featured.map((n) => all.find((p) => p.name === n)!);

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
      <p className="lede">
        {profile.blurb} Now at{" "}
        <a className="company" href={profile.current.url} target="_blank" rel="noreferrer">
          {profile.current.company}
        </a>
        . <span className="highlight">{profile.location}</span>
      </p>

      <StatsBar />

      <h2 className="block-title">selected work</h2>
      <div className="case-grid">
        {picks.map((p) => (
          <CaseCard project={p} key={p.name} />
        ))}
      </div>
      <p className="more">
        <Link href="/experience">Full experience timeline →</Link>
      </p>

      <h2 className="block-title">stack</h2>
      <StackChips />

      <div className="about-footer">
        <span>{profile.footerLeft}</span>
        <span>{profile.footerRight}</span>
      </div>
    </section>
  );
}
