import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 28, color: "#8a8a8a" }}>~/about</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>{profile.name}</div>
        <div style={{ fontSize: 34, color: "#8b5cf6", marginTop: 20 }}>{profile.title}</div>
        <div style={{ fontSize: 26, color: "#8a8a8a", marginTop: 40 }}>{profile.blurb}</div>
      </div>
    ),
    { ...size }
  );
}
