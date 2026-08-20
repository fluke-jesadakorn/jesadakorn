import { ArrowUpRight, Play } from "lucide-react";

import SectionHeader from "./SectionHeader";

const videoDemos = [
  {
    id: "pdDgCdmcYdA",
    label: "Working prototype",
    title: "Folio ERP: A multi-stage financial workflow",
    description:
      "A prototype connecting document intake, approval, accounting review, and settlement, with AI-assisted steps shown as suggestions for human review.",
    youtubeUrl: "https://youtu.be/pdDgCdmcYdA",
  },
  {
    id: "jhZXK7BY-kY",
    label: "Working prototype",
    title: "HR AI Agent: Leave requests through LINE",
    description:
      "An experiment using LINE, n8n, and a local language model to collect leave details and route requests to a review portal.",
    youtubeUrl: "https://youtu.be/jhZXK7BY-kY",
  },
  {
    id: "HYIIDeUxzis",
    label: "Working prototype",
    title: "AI Contract Analyzer: Assisted document review",
    description:
      "A prototype that extracts contract information, compares passages with reference policies, and presents possible review points to a person.",
    youtubeUrl: "https://youtu.be/HYIIDeUxzis",
  },
] as const;

export function VideoDemoSection() {
  return (
    <section
      id="demos"
      aria-labelledby="video-demos-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8"
    >
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Project Demos"
          title="See how the prototypes work from input to review."
          description="These demonstrations show the current implementation and interaction flow. They are project examples, not claims of production deployment or measured business outcomes."
          titleId="video-demos-heading"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {videoDemos.map((demo) => (
            <article key={demo.id} className="video-demo-card">
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${demo.id}?rel=0`}
                  title={`${demo.title} project demo video`}
                  width="560"
                  height="315"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-strong)]">
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  {demo.label}
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-[color:var(--foreground)]">
                  {demo.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[color:var(--muted)]">
                  {demo.description}
                </p>
                <a
                  href={demo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md text-sm font-semibold text-[color:var(--foreground)] transition-colors hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-strong)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--background-elevated)]"
                >
                  Open on YouTube
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
