import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  MapPin,
  Network,
  Settings2,
} from "lucide-react";

import SectionHeader from "./components/SectionHeader";
import { projects, projectTypeLabels } from "./work/project-data";

export const metadata: Metadata = {
  title: "Technical Generalist",
  description:
    "Jesadakorn Kirtnu connects technology operations, software development, and automation to build practical systems around real workflows.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jesadakorn Kirtnu | Technical Generalist",
    description:
      "Connecting operations, software, and automation to turn real workflows into practical systems.",
    url: "/",
  },
};

const capabilities = [
  {
    title: "Operate",
    subtitle: "Keep technology dependable",
    description:
      "Workplace systems, devices, networks, deployment, documentation, onboarding, and day-to-day support.",
    details: "Ansible · Munki · Tailscale · macOS · Infrastructure",
    icon: Network,
  },
  {
    title: "Build",
    subtitle: "Turn workflows into software",
    description:
      "Full-stack applications, business systems, role-aware interfaces, integrations, and working prototypes.",
    details: "Next.js · React · Node.js · Golang · PostgreSQL",
    icon: Blocks,
  },
  {
    title: "Improve",
    subtitle: "Make processes easier to run",
    description:
      "Process mapping, automation, applied AI experiments, documentation, and cross-team coordination.",
    details: "n8n · Ollama · RAG · Power BI · Project delivery",
    icon: Settings2,
  },
] as const;

const experience = [
  {
    period: "2024 — Present",
    role: "IT Infrastructure Manager",
    organization: "VIGNOLD · Thailand",
    description:
      "Supports IT operations, macOS deployment, networking, onboarding, documentation, and coordination between teams in Thailand and Germany.",
  },
  {
    period: "2024",
    role: "Senior Full-Stack Developer",
    organization: "Finstable",
    description:
      "Worked on ERP and cloud-connected applications across backend services, interfaces, approvals, and business workflows.",
  },
  {
    period: "2022 — 2024",
    role: "Head Engineer / Industrial Project Manager",
    organization: "Token Miner",
    description:
      "Worked across budgets, equipment, facilities, thermal and power planning, maintenance, procedures, and vendors.",
  },
  {
    period: "2021 — 2022",
    role: "IT, Web & Mobile Developer / Freelance Full-Stack Developer",
    organization: "IMT Group · Independent",
    description:
      "Built internal, POS, inventory, administration, and workflow-based applications while supporting IT planning and documentation.",
  },
] as const;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jesadakorn Kirtnu",
  url: "https://jesadakorn.com",
  image: "https://jesadakorn.com/portrait-upscaled.webp",
  jobTitle: "Technical Generalist",
  address: { "@type": "PostalAddress", addressLocality: "Phuket", addressCountry: "Thailand" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Prince of Songkla University, Phuket Campus",
  },
  sameAs: [
    "https://github.com/fluke-jesadakorn",
    "https://www.linkedin.com/in/jesadakorn-kirtnu-81b9601b9/",
  ],
};

export default function Home() {
  const [epsx, folio, ...experiments] = projects;

  return (
    <main id="main-content" tabIndex={-1} className="page-frame outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="max-w-4xl space-y-7">
            <p className="eyebrow">Technical Generalist · Phuket, Thailand</p>
            <h1 className="font-display text-[clamp(2.55rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[color:var(--foreground)]">
              I connect operations, software, and automation to turn real workflows into practical
              systems.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
              I&apos;m Jesadakorn Kirtnu. I work across day-to-day technology operations, full-stack
              development, workflow automation, and technical project delivery—especially where
              people, processes, and systems need to stay aligned.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="button-primary">
                View selected work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="/contact" className="button-secondary">
                Discuss a role or project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="identity-card" aria-label="Profile summary">
            <Image
              src="/portrait-upscaled.webp"
              alt="Jesadakorn Kirtnu"
              width={1180}
              height={1333}
              sizes="(max-width: 1024px) 96px, 112px"
              className="h-24 w-24 rounded-2xl object-cover sm:h-28 sm:w-28"
            />
            <div>
              <p className="font-display text-lg font-semibold text-[color:var(--foreground)]">
                Jesadakorn Kirtnu
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-[color:var(--muted)]">
                <MapPin className="h-4 w-4 text-[color:var(--accent-strong)]" aria-hidden="true" />
                Phuket, Thailand
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Hands-on across systems, software, workflows, and coordination.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="section-block">
        <SectionHeader
          eyebrow="Capabilities"
          title="Operate. Build. Improve."
          description="Three connected ways I contribute—from keeping systems dependable to building tools and improving how work moves through a team."
          titleId="capabilities-heading"
        />
        <div className="mt-9 grid border-y border-[color:var(--line)] md:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="capability-column">
                <Icon className="h-6 w-6 text-[color:var(--accent-strong)]" aria-hidden="true" />
                <p className="mt-6 font-display text-4xl text-[color:var(--foreground)]">
                  {capability.title}
                </p>
                <h3 className="mt-3 text-lg font-bold text-[color:var(--foreground)]">
                  {capability.subtitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {capability.description}
                </p>
                <p className="mt-5 font-mono-ui text-xs leading-6 text-[color:var(--muted-soft)]">
                  {capability.details}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="work" aria-labelledby="work-heading" className="section-block scroll-mt-24">
        <SectionHeader
          eyebrow="Selected Work"
          title="Systems shaped around real workflows."
          description="A live product, a working business-system prototype, and two applied AI experiments. Each case study separates what is live from what is exploratory."
          titleId="work-heading"
        />

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {[epsx, folio].map((project, index) => (
            <article key={project.slug} className={`project-card ${index === 0 ? "lg:col-span-2" : ""}`}>
              <div className={`grid h-full ${index === 0 ? "lg:grid-cols-[1.12fr_0.88fr]" : ""}`}>
                <div className="relative min-h-64 overflow-hidden border-b border-[color:var(--line)] lg:min-h-80 lg:border-b-0 lg:border-r">
                  <Image
                    src={project.cardImage}
                    alt={project.cardImageAlt}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 640px" : "(max-width: 1024px) 100vw, 540px"}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="eyebrow">{projectTypeLabels[project.type]}</p>
                  <h3 className="mt-4 font-display text-3xl text-[color:var(--foreground)]">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--foreground)]">
                    {project.title}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[color:var(--muted)]">
                    {project.summary}
                  </p>
                  <Link href={`/work/${project.slug}`} className="text-link mt-6">
                    Read case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <div className="grid gap-5 lg:col-start-2">
            {experiments.map((project) => (
              <article key={project.slug} className="experiment-row">
                <div>
                  <p className="eyebrow">{projectTypeLabels[project.type]}</p>
                  <h3 className="mt-3 font-display text-2xl text-[color:var(--foreground)]">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    {project.summary}
                  </p>
                </div>
                <Link href={`/work/${project.slug}`} className="text-link mt-5">
                  Read case study
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading" className="section-block scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeader
            eyebrow="Experience"
            title="A career across software and operations."
            description="The common thread is practical problem-solving across technology, processes, and the people responsible for them."
            titleId="experience-heading"
          />
          <div className="experience-list">
            {experience.map((item) => (
              <article key={`${item.organization}-${item.period}`} className="experience-item">
                <p className="eyebrow">{item.period}</p>
                <h3 className="mt-3 font-display text-2xl text-[color:var(--foreground)]">
                  {item.role}
                </h3>
                <p className="mt-2 font-semibold text-[color:var(--accent-strong)]">
                  {item.organization}
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block pb-24 lg:pb-28">
        <div className="contact-strip">
          <BriefcaseBusiness className="h-7 w-7 text-[color:var(--accent-strong)]" aria-hidden="true" />
          <div className="max-w-2xl">
            <p className="eyebrow">Hiring or project collaboration</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[color:var(--foreground)] sm:text-4xl">
              Need someone who can understand the workflow and build the system around it?
            </h2>
          </div>
          <Link href="/contact" className="button-primary lg:ml-auto">
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
