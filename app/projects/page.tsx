import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Side Projects",
  description: "Personal projects by Kaustav Tarafdar, built outside of work.",
};

export default function Page() {
  return <Projects />;
}
