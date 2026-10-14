"use client";

import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <ThemeToggle />
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
}
