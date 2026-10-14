import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where Kaustav Tarafdar has worked: TechyMonks, Yonder Wonder AI, Agetware.",
};

export default function Page() {
  return <Experience />;
}
