import { profile } from "@/data/content";
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
      <p className="lede">
        {profile.blurb} Now at{" "}
        <a className="company" href={profile.current.url} target="_blank" rel="noreferrer">
          {profile.current.company}
        </a>
        . <span className="highlight">{profile.location}</span>
      </p>

      <StatsBar />

      <h2 className="block-title">stack</h2>
      <StackChips />

      <div className="about-footer">
        <span>{profile.footerLeft}</span>
        <span>{profile.footerRight}</span>
      </div>
    </section>
  );
}
