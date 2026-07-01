import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import ResumeActions from "../components/ResumeActions";
import { featuredProjects } from "../components/featured-work-data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume and CV page for Jesadakorn Kirtnu, focused on current IT Manager work at VIGNOLD in Phuket, collaboration with the German branch, and EPSX & AI Automation systems presented separately.",
  alternates: {
    canonical: "/resume",
  },
};

const profileFacts = [
  {
    label: "Location",
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
    value: "EPSX & AI Automation systems",
  },
] as const;

const contactLinks = [
  {
    label: "Email",
    value: "jesadakorn.kirtnu@gmail.com",
    href: "mailto:jesadakorn.kirtnu@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "jesadakorn-kirtnu-81b9601b9",
    href: "https://www.linkedin.com/in/jesadakorn-kirtnu-81b9601b9/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "fluke-jesadakorn",
    href: "https://github.com/fluke-jesadakorn",
    icon: Github,
  },
  {
    label: "Portfolio",
    value: "jesadakorn.com",
    href: "https://www.jesadakorn.com",
    icon: Globe,
  },
] as const;

const experienceEntries = [
  {
    title: "IT Manager",
    organization: "VIGNOLD, Phuket",
    period: "Current",
    bullets: [
      "Support day-to-day IT operations, process improvement, and dependable business continuity in the Phuket branch.",
      "Work closely between the Thailand and German branches to keep communication, coordination, and expectations aligned.",
      "Help teams stay organized and supported through practical problem-solving, stable systems, and people-focused follow-through.",
    ],
  },
  {
    title: "Side & AI Projects",
    organization: "@improve-the-world (YouTube & GitHub)",
    period: "Ongoing",
    bullets: [
      "HR AI Agent: Engineered a Modern Workplace system linking a LINE Chatbot (Messaging API) to n8n workflows and a Next.js admin dashboard, using local Ollama Qwen 2.5 LLM for secure, on-premise leave processing.",
      "AI Contract Analyzer: Built a document intelligence web application utilizing custom RAG (Retrieval-Augmented Generation), PDF text parsers, and semantic search to analyze obligations and flag clause risks.",
      "EPSX: Designed and developed a public analytics platform (epsx.io) and internal admin console (admin.epsx.io) with gated states and high-density tracking.",
    ],
  },
] as const;

const skillGroups = [
  {
    title: "Leadership and coordination",
    items: [
      "IT management",
      "Cross-branch communication",
      "Process improvement",
      "Business support",
      "Team collaboration",
      "Problem-solving",
      "AI process optimization",
    ],
  },
  {
    title: "Frontend and product UI",
    items: ["Next.js", "React", "Tailwind CSS", "Radix UI", "React Query", "Flutter", "LINE Messaging API"],
  },
  {
    title: "Backend and platform",
    items: ["Node.js", "NestJS", "Golang", "Rust", "System administration", "Cloud computing", "n8n Workflows"],
  },
  {
    title: "AI and Business systems",
    items: [
      "Ollama & Qwen (Local LLMs)",
      "LangChain",
      "Vector Databases (RAG)",
      "Document Intelligence",
      "ERP-oriented flows",
      "Role-based approvals",
    ],
  },
  {
    title: "Domain range",
    items: [
      "Financial analytics",
      "Blockchain technology",
      "Developer tooling",
      "Workflow automation",
      "Cross-functional delivery",
      "Technical support",
    ],
  },
] as const;

const applicationTargets = [
  "IT management or IT consulting roles where coordination, responsibility, and day-to-day execution all matter.",
  "Teams that need someone comfortable working between business needs, local operations, and international collaboration.",
  "Opportunities where leadership, process improvement, and people-focused communication are central to the role.",
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

const highlights = [
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
    detail: "Leadership, coordination, and practical digital product delivery.",
  },
] as const;

export default function ResumePage() {
  return (
    <main className="page-frame">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0">
        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,14,18,0.82)] shadow-[0_36px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl print:rounded-none print:border-none print:bg-white print:shadow-none">
          <section className="border-b border-white/10 px-6 py-8 sm:px-8 sm:py-10 print:border-zinc-200 print:px-0">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl space-y-5">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.3em] text-[#f0b487] print:border-zinc-300 print:bg-white print:text-zinc-600">
                  Resume / CV
                </div>

                <div className="space-y-4">
                  <h1 className="font-display text-4xl leading-[0.94] text-zinc-50 sm:text-5xl print:text-zinc-950">
                    Jesadakorn Kirtnu
                  </h1>
                  <p className="text-lg font-semibold text-[#f0b487] print:text-zinc-700">
                    IT Manager | Cross-Branch Collaboration | Side Project: EPSX
                  </p>
                  <p className="max-w-2xl text-base leading-8 text-zinc-300 print:text-zinc-700">
                    Phuket-based IT Manager currently working at VIGNOLD, with close collaboration
                    between the Thailand and German branches. EPSX is presented separately as a
                    side project. Strongest in roles where coordination, responsibility, and
                    practical problem-solving all need to stay aligned.
                  </p>
                </div>

                <ResumeActions />
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-[22rem] lg:grid-cols-1">
                {profileFacts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 print:border-zinc-200 print:bg-white"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-400 print:text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-zinc-100 print:text-zinc-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] print:gap-8 print:px-0">
            <div className="space-y-8">
              <section className="space-y-5">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="h-5 w-5 text-[#f0b487] print:text-zinc-700" />
                  <h2 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                    Professional Summary
                  </h2>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 print:border-zinc-200 print:bg-white">
                  <p className="text-base leading-8 text-zinc-300 print:text-zinc-700">
                    I currently work as an IT Manager at VIGNOLD in Phuket, where an important
                    part of my role is working closely between the Thailand and German branches.
                    That experience has strengthened my leadership, communication, and coordination
                    in an international working environment. Separately, I develop EPSX as a side
                    project, which reflects my interest in practical digital products and clear,
                    useful solutions.
                  </p>
                </div>
              </section>

              <section className="space-y-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#f0b487] print:text-zinc-700" />
                  <h2 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                    Experience
                  </h2>
                </div>
                <div className="space-y-4">
                  {experienceEntries.map((entry) => (
                    <article
                      key={entry.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 print:border-zinc-200 print:bg-white"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                            {entry.title}
                          </h3>
                          <p className="mt-2 text-sm font-semibold text-[#f0b487] print:text-zinc-700">
                            {entry.organization}
                          </p>
                        </div>
                        <p className="text-sm uppercase tracking-[0.22em] text-zinc-500 print:text-zinc-500">
                          {entry.period}
                        </p>
                      </div>

                      <div className="mt-5 space-y-3">
                        {entry.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className="flex gap-3 rounded-[1.15rem] border border-white/8 bg-black/20 px-4 py-3 print:border-zinc-200 print:bg-zinc-50"
                          >
                            <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f0b487] print:bg-zinc-700" />
                            <p className="text-sm leading-7 text-zinc-300 print:text-zinc-700">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-[#f0b487] print:text-zinc-700" />
                  <h2 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                    Education
                  </h2>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 print:border-zinc-200 print:bg-white">
                  <h3 className="font-display text-xl text-zinc-50 print:text-zinc-950">
                    Computer Engineering
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#f0b487] print:text-zinc-700">
                    Prince of Songkla University, Phuket Campus
                  </p>
                  <p className="mt-4 text-sm leading-7 text-zinc-300 print:text-zinc-700">
                    Formal engineering study combined with practical experience across application
                    development, system operations, and business-facing technical problem solving.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <section className="space-y-5">
                <h2 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                  Contact
                </h2>
                <div className="space-y-3">
                  {contactLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/4 p-4 transition-colors hover:border-[#f0b487]/40 hover:bg-white/8 print:border-zinc-200 print:bg-white"
                      >
                        <div className="rounded-2xl bg-[#ca7d4d]/12 p-3 text-[#f0b487] print:bg-zinc-100 print:text-zinc-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 print:text-zinc-500">
                            {item.label}
                          </p>
                          <p className="mt-2 break-all text-sm font-semibold leading-6 text-zinc-100 print:text-zinc-900">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                  Selected Highlights
                </h2>
                <div className="grid gap-3">
                  {highlights.map((item) => (
                    <article
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 print:border-zinc-200 print:bg-white"
                    >
                      <p className="font-display text-3xl text-zinc-50 print:text-zinc-950">
                        {item.value}
                      </p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[#f0b487] print:text-zinc-600">
                        {item.label}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-zinc-300 print:text-zinc-700">
                        {item.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                  Skills
                </h2>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <article
                      key={group.title}
                      className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 print:border-zinc-200 print:bg-white"
                    >
                      <h3 className="text-base font-semibold text-zinc-100 print:text-zinc-900">
                        {group.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 print:border-zinc-300 print:bg-zinc-50 print:text-zinc-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-5">
                <h2 className="font-display text-2xl text-zinc-50 print:text-zinc-950">
                  Open To
                </h2>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 print:border-zinc-200 print:bg-white">
                  <div className="space-y-3">
                    {applicationTargets.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-[1.15rem] border border-white/8 bg-black/20 px-4 py-3 print:border-zinc-200 print:bg-zinc-50"
                      >
                        <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f0b487] print:bg-zinc-700" />
                        <p className="text-sm leading-7 text-zinc-300 print:text-zinc-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="border-t border-white/10 px-6 py-6 sm:px-8 print:border-zinc-200 print:px-0">
            <div className="flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between print:text-zinc-600">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Phuket, Thailand
                </span>
                <span>Formatted to print cleanly for job applications.</span>
              </div>

              <div className="flex flex-wrap gap-4 print:hidden">
                <Link href="/" className="inline-flex items-center gap-2 hover:text-zinc-200">
                  Portfolio
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 hover:text-zinc-200">
                  Contact
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
