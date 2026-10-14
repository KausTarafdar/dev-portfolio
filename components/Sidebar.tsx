"use client";

import { socials } from "@/data/content";

export type Section = "about" | "experience" | "projects" | "education";

const NAV: { id: Section; label: string; sigil: string }[] = [
  { id: "about", label: "about", sigil: "~" },
  { id: "experience", label: "experience", sigil: ">" },
  { id: "projects", label: "projects", sigil: "+" },
  { id: "education", label: "education", sigil: "#" },
];

export default function Sidebar({
  active,
  onChange,
}: {
  active: Section;
  onChange: (section: Section) => void;
}) {
  return (
    <nav className="sidebar">
      <div>
        <div className="sidebar-dots">. . . . . . .</div>
        <ul className="nav-list">
          {NAV.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item${active === item.id ? " active" : ""}`}
                onClick={() => onChange(item.id)}
              >
                <span className="nav-sigil">{item.sigil}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="socials">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            &gt; {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
