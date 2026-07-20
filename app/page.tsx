import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import FeaturedWorkSection from "./components/FeaturedWorkSection";
import Portfolio from "./components/Portfolio";
import { ProfessionalProfileSection } from "./components/ProfessionalProfileSection";
import { VideoDemoSection } from "./components/VideoDemoSection";
import { featuredProjects } from "./components/featured-work-data";

export const metadata: Metadata = {
  title: "Hybrid IT Manager & AI Systems Architect",
  description:
    "Portfolio of Jesadakorn Kirtnu, a hybrid IT Manager and AI Systems Architect building enterprise infrastructure automation, local agentic AI systems, and Folio ERP.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jesadakorn Kirtnu | Hybrid IT Manager & AI Systems Architect",
    description:
      "Enterprise infrastructure automation, local agentic AI systems, and Folio ERP workflow orchestration.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jesadakorn Kirtnu — Hybrid IT Manager and AI Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesadakorn Kirtnu | Hybrid IT Manager & AI Systems Architect",
    description:
      "Enterprise infrastructure automation, local agentic AI systems, and Folio ERP workflow orchestration.",
    images: ["/og.png"],
  },
};

const profileDetails = [
  {
    label: "Based in",
    value: "Phuket, Thailand",
  },
  {
    label: "Current role",
    value: "IT Manager at VIGNOLD, Phuket",
  },
  {
    label: "Cross-branch work",
    value: "Thailand and German branches",
  },
  {
    label: "Side & AI work",
    value: "EPSX, HR AI Chatbot, and Contract AI systems",
  },
  {
    label: "Education",
    value: "Computer Engineering, Prince of Songkla University, Phuket Campus",
  },
] as const;

const totalMappedStates = featuredProjects.reduce(
  (sum, project) =>
    sum +
    project.surfaces.reduce((sSum, surface) => sSum + surface.stateCount, 0),
  0,
);

const totalSurfaces = featuredProjects.reduce(
  (sum, project) => sum + project.surfaces.length,
  0,
);

const proofPoints = [
  {
    value: `${totalMappedStates}+`,
    label: "mapped product states",
    detail: "Across my personal side work and AI automation project surfaces.",
  },
  {
    value: `${totalSurfaces}`,
    label: "live product surfaces",
    detail: "Connected interfaces for customer-facing systems, chatbots, and admin consoles.",
  },
  {
    value: "People + systems",
    label: "working style",
    detail: "Business coordination, operational support, and practical digital product delivery.",
  },
] as const;

export default function Home() {
  return (
    <main className="page-frame">
      <section className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-start">
          <div className="space-y-8">
            <div className="reveal-up">
              <span className="eyebrow-chip">IT Manager Portfolio</span>
            </div>

            <div className="reveal-up space-y-6" style={{ animationDelay: "80ms" }}>
              <h1 className="font-display text-5xl leading-[0.92] text-[color:var(--foreground)] sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]">
                IT leadership, AI automation workflows, and digital products.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                I&apos;m Jesadakorn Kirtnu, a Phuket-based IT Manager at VIGNOLD. In my current
                role, I work closely between the Thailand and German branches to support IT
                operations. Separately, I build AI-powered solutions, including conversational
                HR Chatbots (LINE + n8n + Ollama) and document intelligence systems, alongside
                custom platforms like EPSX.
              </p>
            </div>

            <div
              className="reveal-up flex flex-wrap gap-3"
              style={{ animationDelay: "160ms" }}
            >
              <a href="mailto:jesadakorn.kirtnu@gmail.com" className="button-primary">
                Email me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jesadakorn-kirtnu-81b9601b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                View LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div
              className="reveal-up grid gap-4 sm:grid-cols-3"
              style={{ animationDelay: "240ms" }}
            >
              {proofPoints.map((item) => (
                <article key={item.label} className="metric-panel">
                  <p className="font-display text-3xl text-[color:var(--foreground)]">
                    {item.value}
                  </p>
                  <p className="mt-3 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="portrait-panel reveal-up" style={{ animationDelay: "140ms" }}>
            <div className="subtle-grid absolute inset-0 opacity-40" />
            <div className="relative z-10 space-y-6 p-6 md:p-8">
              <div className="portrait-frame">
                <Image
                  src="/Portrait.jpg"
                  alt="Jesadakorn Kirtnu portrait"
                  width={900}
                  height={1200}
                  priority
                  className="h-[420px] w-full object-cover object-center"
                />
              </div>

              <div className="space-y-5">
                <div>
                  <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
                    At a glance
                  </p>
                  <p className="mt-3 font-display text-2xl text-[color:var(--foreground)]">
                    An IT Manager working between Thailand and Germany, with separate focus on AI
                    automation and workflow system design.
                  </p>
                </div>

                <div className="space-y-4">
                  {profileDetails.map((item) => (
                    <div key={item.label} className="grid gap-2 border-t border-[color:var(--line)] pt-4">
                      <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
                        {item.label}
                      </p>
                      <p className="text-base font-semibold text-[color:var(--foreground)]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="soft-divider" />

                <p className="text-sm leading-7 text-[color:var(--muted)]">
                  Best suited to roles where people, process, coordination, and dependable systems
                  all need to stay aligned.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ProfessionalProfileSection />
      <VideoDemoSection />
      <FeaturedWorkSection />
      <Portfolio />

      <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="section-shell px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
                Closing note
              </p>
              <h2 className="font-display text-3xl leading-tight text-[color:var(--foreground)] md:text-5xl">
                Open to IT leadership and consulting roles where clear coordination matters.
              </h2>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                If you&apos;re hiring for a role that combines leadership, cross-team
                communication, and business-focused IT support, let&apos;s talk.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="mailto:jesadakorn.kirtnu@gmail.com" className="button-secondary">
                Email directly
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
