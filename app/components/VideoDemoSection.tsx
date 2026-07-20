import { ArrowUpRight, Play } from "lucide-react";

import SectionHeader from "./SectionHeader";

const videoDemos = [
  {
    id: "pdDgCdmcYdA",
    label: "Flagship ERP",
    title: "Folio ERP: Receipt-to-settlement orchestration",
    description:
      "One connected workflow from AI document extraction through approval, accounting review, and financial settlement.",
    youtubeUrl: "https://youtu.be/pdDgCdmcYdA",
  },
  {
    id: "jhZXK7BY-kY",
    label: "Modern Workplace",
    title: "HR AI Agent: LINE leave request to one-click approval",
    description:
      "A private, local-AI workflow that understands employee requests in LINE and routes them to a focused approval portal.",
    youtubeUrl: "https://youtu.be/jhZXK7BY-kY",
  },
  {
    id: "HYIIDeUxzis",
    label: "Document Intelligence",
    title: "AI Contract Analyzer: Secure organizational review",
    description:
      "A locally operated contract intelligence system that extracts obligations, cross-references policy, and flags risk for human review.",
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
          title="See the systems move from architecture to working software."
          description="Three end-to-end demonstrations covering enterprise ERP orchestration, conversational HR automation, and secure document intelligence."
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
