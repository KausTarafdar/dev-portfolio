"use client";

import { useEffect, useState } from "react";
import Sidebar, { Section } from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

const SECTIONS: Section[] = ["about", "experience", "projects", "education"];

function sectionFromHash(): Section {
  const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
  return SECTIONS.includes(hash as Section) ? (hash as Section) : "about";
}

export default function Home() {
  const [active, setActive] = useState<Section>("about");

  useEffect(() => {
    setActive(sectionFromHash());
    const onHashChange = () => setActive(sectionFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleChange = (section: Section) => {
    setActive(section);
    window.location.hash = section;
  };

  return (
    <div className="shell">
      <ThemeToggle />
      <Sidebar active={active} onChange={handleChange} />
      <main className="main">
        {active === "about" && <About />}
        {active === "experience" && <Experience />}
        {active === "projects" && <Projects />}
        {active === "education" && <Education />}
      </main>
    </div>
  );
}
