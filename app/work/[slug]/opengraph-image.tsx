import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { getProject, projectTypeLabels } from "../project-data";

export const alt = "Jesadakorn Kirtnu selected work case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const ogCoverPath = project.cardImage
    .replace("/featured-work/covers/", "/featured-work/covers/og/")
    .replace(/\.webp$/, ".jpg");
  const cover = await readFile(
    join(process.cwd(), "public", ogCoverPath.replace(/^\//, "")),
  );
  const coverData = `data:image/jpeg;base64,${cover.toString("base64")}`;

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
        color: "#f5efe7",
        background: "#080a0d",
      }}
    >
      <img
        src={coverData}
        alt=""
        width="1200"
        height="675"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.68,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background: "linear-gradient(90deg, rgba(5,7,9,0.94) 0%, rgba(5,7,9,0.58) 58%, rgba(5,7,9,0.18) 100%)",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", padding: "56px 64px 0", fontSize: 22 }}>
        <span style={{ display: "flex", color: "#f0b487", letterSpacing: 4 }}>{projectTypeLabels[project.type].toUpperCase()}</span>
        <span style={{ display: "flex", color: "#d1c9c2" }}>SELECTED WORK</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, padding: "0 64px", maxWidth: 970 }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 0.95 }}>{project.name}</div>
        <div style={{ display: "flex", maxWidth: 900, color: "#ded6cf", fontSize: 32, lineHeight: 1.25 }}>
          {project.title}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 64px",
          padding: "24px 0 40px",
          borderTop: "1px solid rgba(255,255,255,0.26)",
          fontSize: 22,
        }}
      >
        <span style={{ display: "flex" }}>Jesadakorn Kirtnu</span>
        <span style={{ display: "flex", color: "#d1c9c2" }}>jesadakorn.com</span>
      </div>
    </div>,
    size,
  );
}
