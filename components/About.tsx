import { profile } from "@/data/content";

const ASCII = String.raw`
    /\_/\
   ( o.o )
    > ^ <
`;

export default function About() {
  return (
    <section>
      <div className="breadcrumb">~/about</div>
      <h1 className="hero">
        hey, i&apos;m {profile.handle}.<span className="cursor" />
      </h1>
      <div className="about-copy">
        {/* <p>
          right now, i&apos;m building <span className="highlight">{profile.focus}</span> at{" "}
          <a className="company" href={profile.current.url} target="_blank" rel="noreferrer">
            {profile.current.company}
          </a>
          .
        </p> */}
        <p>{profile.blurb}</p>
        <p>
          based in <span className="highlight">{profile.location}</span>.
        </p>
        <p>{profile.kicker}</p>
      </div>
      <pre className="ascii">{ASCII}</pre>
      <div className="about-footer">
        <span>{profile.footerLeft}</span>
        <span>{profile.footerRight}</span>
      </div>
    </section>
  );
}
