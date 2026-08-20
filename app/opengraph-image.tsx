import { ImageResponse } from "next/og";

export const alt = "Jesadakorn Kirtnu — Technical Generalist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#f5efe7",
        background: "linear-gradient(135deg, #111820 0%, #090d11 65%, #2a1811 100%)",
      }}
    >
      <div style={{ display: "flex", color: "#f0b487", fontSize: 24, letterSpacing: 4 }}>
        TECHNICAL GENERALIST
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.02 }}>
          Operations. Software. Automation.
        </div>
        <div style={{ display: "flex", color: "#b1a497", fontSize: 30 }}>
          Practical systems for real workflows.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>Jesadakorn Kirtnu</span>
        <span style={{ color: "#b1a497" }}>Phuket, Thailand</span>
      </div>
    </div>,
    size,
  );
}
