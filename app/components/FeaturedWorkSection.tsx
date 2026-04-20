import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  ExternalLink,
  Globe,
  Shield,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  type FeaturedScreenshot,
  type FeaturedSurface,
  epsxCaseStudy,
} from "./featured-work-data";

const surfaceIcons = {
  frontend: Globe,
  admin: Shield,
} as const;

const accentClasses = {
  frontend: {
    glow: "from-cyan-400/35 via-sky-500/15 to-transparent",
    badge: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200",
    icon: "from-cyan-400 to-blue-500",
    button:
      "from-orange-500 via-amber-400 to-pink-500 text-slate-950 shadow-[0_18px_40px_rgba(249,115,22,0.28)]",
  },
  admin: {
    glow: "from-fuchsia-500/30 via-violet-500/15 to-transparent",
    badge: "border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200",
    icon: "from-fuchsia-500 to-violet-500",
    button:
      "from-cyan-400 via-violet-500 to-fuchsia-500 text-white shadow-[0_18px_40px_rgba(139,92,246,0.28)]",
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
    <figure className={cn("epsx-shot group", featured && "sm:col-span-2")}>
      <div className="epsx-shot-image relative">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={1400}
          height={900}
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="epsx-shot-caption">
        <div>
          <p className="text-sm font-semibold text-white">{screenshot.title}</p>
          <p className="mt-1 text-sm text-slate-300">{screenshot.detail}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function SurfacePanel({ surface }: { surface: FeaturedSurface }) {
  const Icon = surfaceIcons[surface.id];
  const accent = accentClasses[surface.id];

  return (
    <article className="epsx-surface">
      <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            {surface.label}
            <span className="text-slate-500">/</span>
            {surface.stateCount} states
          </div>

          <div className="mt-5 flex items-start gap-4">
            <div
              className={cn(
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                accent.icon,
              )}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-3xl font-semibold text-white">{surface.name}</h3>
                <p className="mt-2 text-base leading-7 text-slate-300">{surface.summary}</p>
              </div>

              <a
                href={surface.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5",
                  accent.button,
                )}
              >
                Visit Live Surface
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {surface.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {surface.stack.map((item) => (
                <span key={item} className={cn("epsx-chip", accent.badge)}>
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
  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      <div className="epsx-case-study">
        <div className="relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Featured Work
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                EPSX
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
                Public analytics and admin operations, presented as one product system.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {epsxCaseStudy.summary}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                {epsxCaseStudy.ownership}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://epsx.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                epsx.io
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://admin.epsx.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-fuchsia-300/40 hover:bg-fuchsia-300/10"
              >
                admin.epsx.io
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {epsxCaseStudy.metrics.map((metric) => (
              <div key={metric.label} className="epsx-metric">
                <p className="text-4xl font-semibold text-white">{metric.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{metric.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            {epsxCaseStudy.surfaces.map((surface) => (
              <SurfacePanel key={surface.id} surface={surface} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
