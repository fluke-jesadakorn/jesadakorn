import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";

import { getProject, projectTypeLabels } from "../project-data";

export const alt = "Jesadakorn Kirtnu selected work case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

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
        background: "linear-gradient(135deg, #111820 0%, #090d11 62%, #2a1811 100%)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span style={{ color: "#f0b487", letterSpacing: 4 }}>{projectTypeLabels[project.type].toUpperCase()}</span>
        <span style={{ color: "#b1a497" }}>SELECTED WORK</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1 }}>{project.name}</div>
        <div style={{ display: "flex", maxWidth: 1000, color: "#b1a497", fontSize: 34, lineHeight: 1.25 }}>
          {project.title}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>Jesadakorn Kirtnu</span>
        <span style={{ color: "#b1a497" }}>jesadakorn.com</span>
      </div>
    </div>,
    size,
  );
}
