"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { socials } from "@/data/content";

const NAV = [
  { href: "/", label: "about", sigil: "~" },
  { href: "/experience", label: "experience", sigil: ">" },
  { href: "/projects", label: "side projects", sigil: "+" },
  { href: "/education", label: "education", sigil: "#" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="sidebar">
      <div>
        <div className="sidebar-dots">. . . . . . .</div>
        <ul className="nav-list">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-item${pathname === item.href ? " active" : ""}`}
              >
                <span className="nav-sigil">{item.sigil}</span>
                {item.label}
              </Link>
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
