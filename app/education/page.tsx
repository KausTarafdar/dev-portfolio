import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education",
  description: "Kaustav Tarafdar's education and technical skills.",
};

export default function Page() {
  return <Education />;
}
