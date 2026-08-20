import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import FeaturedWorkSection from "./components/FeaturedWorkSection";
import Portfolio from "./components/Portfolio";
import { ProfessionalProfileSection } from "./components/ProfessionalProfileSection";
import { VideoDemoSection } from "./components/VideoDemoSection";

export const metadata: Metadata = {
  title: "Technology Operations, Software & Automation",
  description:
    "Jesadakorn Kirtnu works across IT operations, full-stack software, workflow automation, business systems, and technical project coordination.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jesadakorn Kirtnu | Technology Operations, Software & Automation",
    description:
      "Practical technology work across operations, software, automation, and business systems.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jesadakorn Kirtnu — Technology Operations, Software and Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesadakorn Kirtnu | Technology Operations, Software & Automation",
    description:
      "Practical technology work across operations, software, automation, and business systems.",
    images: ["/og.png"],
  },
};

const profileDetails = [
  {
    label: "Based in",
    value: "Phuket, Thailand",
  },
  {
    label: "Current work",
    value: "IT operations and cross-branch support at VIGNOLD",
  },
  {
    label: "Cross-branch work",
    value: "Thailand and German branches",
  },
  {
    label: "Projects",
    value: "Software products, workflow automation, and applied AI prototypes",
  },
  {
    label: "Education",
    value: "Computer Engineering, Prince of Songkla University, Phuket Campus",
  },
] as const;

const proofPoints = [
  {
    value: "Operate",
    label: "Technology operations",
    detail: "Day-to-day systems, devices, networks, documentation, and team support.",
  },
  {
    value: "Build",
    label: "Software and automation",
    detail: "Web applications, business workflows, integrations, and working prototypes.",
  },
  {
    value: "Improve",
    label: "Processes and projects",
    detail: "Clearer workflows, practical coordination, and tools that teams can maintain.",
  },
] as const;

export default function Home() {
  return (
    <main className="page-frame">
      <section className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-start">
          <div className="space-y-8">
            <div className="reveal-up">
              <span className="eyebrow-chip">Technology Operations · Software · Automation</span>
            </div>

            <div className="reveal-up space-y-6" style={{ animationDelay: "80ms" }}>
              <h1 className="font-display text-5xl leading-[0.92] text-[color:var(--foreground)] sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]">
                Practical technology work across operations, software, and automation.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                I&apos;m Jesadakorn Kirtnu, based in Phuket. My experience spans IT operations,
                full-stack development, workflow automation, technical projects, and cross-team
                coordination. I focus on building and improving systems that are useful,
                understandable, and maintainable.
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
                    A technology professional connecting day-to-day operations, software delivery,
                    automation, and practical business needs.
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
                  I work best where people, processes, and technology need to stay aligned through
                  clear communication and hands-on problem-solving.
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
                Open to roles across technology operations, software, automation, and technical project delivery.
              </h2>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                If your team needs someone who can understand operational needs, work across
                functions, and turn requirements into practical systems, let&apos;s talk.
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
