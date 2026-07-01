"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Github,
  Globe,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

import SectionHeader from "./SectionHeader";
import {
  type FeaturedScreenshot,
  type FeaturedSurface,
  featuredProjects,
} from "./featured-work-data";

const surfaceIcons = {
  frontend: Globe,
  admin: ShieldCheck,
} as const;

const surfaceThemes = {
  frontend: {
    badge: "border-[rgba(184,106,61,0.28)] bg-[rgba(184,106,61,0.14)] text-[#f4d4bc]",
    icon: "bg-[rgba(184,106,61,0.16)] text-[#ffd3b4]",
    bullet: "text-[#f0c5a3]",
    link:
      "border-[rgba(184,106,61,0.24)] bg-[rgba(184,106,61,0.1)] text-[#fff7ef] hover:bg-[rgba(184,106,61,0.18)]",
  },
  admin: {
    badge: "border-white/[0.12] bg-white/[0.06] text-[#f2ece3]",
    icon: "bg-white/[0.1] text-white",
    bullet: "text-[#efe5d8]",
    link:
      "border-white/[0.12] bg-white/[0.06] text-[#fff7ef] hover:bg-white/[0.1]",
  },
} as const;

function ScreenshotCard({
  screenshot,
  featured,
}: {
  screenshot: FeaturedScreenshot;
  featured?: boolean;
}) {
  return (
    <figure className={cn("feature-shot group", featured && "sm:col-span-2")}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={1400}
          height={900}
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="feature-shot-caption">
        <p className="text-sm font-semibold text-[color:var(--feature-foreground)]">
          {screenshot.title}
        </p>
        <p className="mt-2 text-sm leading-6 text-[color:var(--feature-muted)]">
          {screenshot.detail}
        </p>
      </figcaption>
    </figure>
  );
}

function SurfacePanel({ surface }: { surface: FeaturedSurface }) {
  const Icon = surfaceIcons[surface.id];
  const theme = surfaceThemes[surface.id];

  return (
    <article className="surface-card p-6 md:p-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono-ui text-[11px] uppercase tracking-[0.28em]",
                theme.badge,
              )}
            >
              {surface.label}
              <span className="text-white/[0.35]">/</span>
              {surface.stateCount} states
            </div>

            <div className="flex items-start gap-4">
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                  theme.icon,
                )}
              >
                <Icon className="h-6 w-6" />
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-display text-3xl text-[color:var(--feature-foreground)]">
                    {surface.name}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[color:var(--feature-muted)]">
                    {surface.summary}
                  </p>
                </div>

                <a
                  href={surface.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition",
                    theme.link,
                  )}
                >
                  Visit live surface
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {surface.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <Check className={cn("mt-0.5 h-4 w-4 shrink-0", theme.bullet)} />
                  <p className="text-sm leading-6 text-[color:var(--feature-foreground)]">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--feature-muted)]">
              Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {surface.stack.map((item) => (
                <span key={item} className="feature-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {surface.screenshots.map((screenshot, index) => (
            <ScreenshotCard
              key={screenshot.src}
              screenshot={screenshot}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedWorkSection() {
  const [activeProject, setActiveProject] = useState(featuredProjects[0]);

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="section-shell-dark px-6 py-8 md:px-10 md:py-12">
        <div className="relative z-10 space-y-12">
          {/* Project Tabs Switcher */}
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--feature-muted)]">
              Select Side Project / Case Study
            </p>
            <div className="flex flex-wrap gap-2.5">
              {featuredProjects.map((project) => (
                <button
                  key={project.project}
                  onClick={() => setActiveProject(project)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 border cursor-pointer",
                    activeProject.project === project.project
                      ? "border-[#f0b487] bg-[rgba(240,180,135,0.14)] text-[#ffd3b4]"
                      : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                  )}
                >
                  {project.project}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <SectionHeader
              eyebrow="Selected Project"
              title={activeProject.title}
              description={activeProject.summary}
              tone="inverse"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="metric-panel-dark">
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--feature-muted)]">
                  Role
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--feature-foreground)]">
                  {activeProject.role}
                </p>
              </div>
              <div className="metric-panel-dark">
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--feature-muted)]">
                  Scope
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--feature-foreground)]">
                  {activeProject.scope}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {activeProject.metrics.map((metric) => (
              <div key={metric.label} className="metric-panel-dark">
                <p className="font-display text-4xl text-[color:var(--feature-foreground)]">
                  {metric.value}
                </p>
                <p className="mt-3 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--feature-muted)]">
                  {metric.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--feature-muted)]">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="metric-panel-dark">
              <div className="flex items-center gap-3 text-[color:var(--feature-foreground)]">
                <BriefcaseBusiness className="h-5 w-5 text-[#efc3a0]" />
                <p className="font-display text-2xl">What the work required</p>
              </div>
              <div className="mt-6 space-y-4">
                {activeProject.responsibilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-[color:var(--feature-foreground)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="metric-panel-dark flex flex-col justify-between gap-6">
              <div>
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--feature-muted)]">
                  Project Outputs &amp; Repositories
                </p>
                <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--feature-muted)]">
                  These surfaces and codebases show practical system delivery. Every component is
                  designed around clarity of information, secure integration, and responsive
                  interaction.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={activeProject.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-[color:var(--feature-foreground)] transition hover:bg-white/[0.1]"
                >
                  GitHub repo
                  <Github className="h-4 w-4" />
                </a>
                
                {activeProject.surfaces.map((surface) => (
                  <a
                    key={surface.id}
                    href={surface.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-[color:var(--feature-foreground)] transition hover:bg-white/[0.1]"
                  >
                    {surface.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {activeProject.surfaces.map((surface) => (
              <SurfacePanel key={surface.id} surface={surface} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
