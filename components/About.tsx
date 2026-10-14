import { metrics, profile } from "@/data/content";

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
      <div className="identity">
        <span className="identity-name">{profile.name}</span>
        <span className="identity-title">{profile.title}</span>
      </div>
      <div className="about-copy">
        <p>
          Currently engineering distributed backend platforms and integration pipelines at{" "}
          <a className="company" href={profile.current.url} target="_blank" rel="noreferrer">
            {profile.current.company}
          </a>
          .
        </p>
        <p>{profile.blurb}</p>
        <p>
          based in <span className="highlight">{profile.location}</span>.
        </p>
        <p>{profile.kicker}</p>
      </div>
      <div className="metrics-grid">
        {metrics.map((m) => (
          <div className="metric" key={m.label}>
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
      <pre className="ascii">{ASCII}</pre>
      <div className="about-footer">
        <span>{profile.footerLeft}</span>
        <span>{profile.footerRight}</span>
      </div>
    </section>
  );
}
