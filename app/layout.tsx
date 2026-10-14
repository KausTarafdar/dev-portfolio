import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Shell from "@/components/Shell";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kaustav Tarafdar — Backend & AI Infrastructure Engineer",
    template: "%s — Kaustav Tarafdar",
  },
  description: "Backend & AI infrastructure engineer. Distributed systems, ML inference, multi-tenant SaaS.",
  openGraph: {
    title: "Kaustav Tarafdar — Backend & AI Infrastructure Engineer",
    description: "Backend & AI infrastructure engineer. Distributed systems, ML inference, multi-tenant SaaS.",
    url: siteUrl,
    siteName: "Kaustav Tarafdar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaustav Tarafdar — Backend & AI Infrastructure Engineer",
    description: "Backend & AI infrastructure engineer. Distributed systems, ML inference, multi-tenant SaaS.",
  },
};

const THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={`${mono.variable} ${sans.variable}`}>
        <Shell>{children}</Shell>
        <Analytics />
      </body>
    </html>
  );
}
