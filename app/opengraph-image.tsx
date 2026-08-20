import { ImageResponse } from "next/og";

export const alt = "Jesadakorn Kirtnu — Technical Generalist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#f5efe7",
        background: "linear-gradient(145deg, #15110f 0%, #090b0e 52%, #0d1218 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          right: -80,
          top: -130,
          display: "flex",
          border: "1px solid rgba(240,180,135,0.22)",
          borderRadius: 520,
          boxShadow: "0 0 140px rgba(205,116,68,0.14)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 88,
          top: 126,
          width: 250,
          height: 250,
          display: "flex",
          border: "1px solid rgba(240,180,135,0.45)",
          borderRadius: 250,
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
        <span style={{ display: "flex", color: "#f0b487", letterSpacing: 4 }}>
          PERSONAL OPERATING SYSTEM
        </span>
        <span style={{ display: "flex", color: "#8f8781" }}>01 — 03</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
        <div style={{ display: "flex", fontSize: 80, fontWeight: 700, lineHeight: 0.98 }}>
          Operate. Build. Improve.
        </div>
        <div style={{ display: "flex", color: "#b8ada2", fontSize: 30, lineHeight: 1.35 }}>
          Connecting operations, software, and automation around real workflows.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          paddingTop: 26,
          fontSize: 24,
        }}
      >
        <span style={{ display: "flex" }}>Jesadakorn Kirtnu</span>
        <span style={{ display: "flex", color: "#b8ada2" }}>Technical Generalist · Phuket</span>
      </div>
    </div>,
    size,
  );
}
