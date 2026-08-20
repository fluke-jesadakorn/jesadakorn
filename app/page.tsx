import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  CircleDot,
  GitBranch,
  MapPin,
  Network,
  Settings2,
  Wrench,
} from "lucide-react";

import {
  HeroParallax,
  SectionReveal,
  SpotlightSurface,
} from "./components/CinematicMotion";
import SectionHeader from "./components/SectionHeader";
import { TrackedAnchor } from "./components/TrackedLink";
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
    className: "capability-card--operate",
    nodes: ["Systems", "People", "Continuity"],
  },
  {
    title: "Build",
    subtitle: "Turn workflows into software",
    description:
      "Full-stack applications, business systems, role-aware interfaces, integrations, and working prototypes.",
    details: "Next.js · React · Node.js · Golang · PostgreSQL",
    icon: Blocks,
    className: "capability-card--build",
    nodes: ["Model", "Interface", "Delivery"],
  },
  {
    title: "Improve",
    subtitle: "Make processes easier to run",
    description:
      "Process mapping, automation, applied AI experiments, documentation, and cross-team coordination.",
    details: "n8n · Ollama · RAG · Power BI · Project delivery",
    icon: Settings2,
    className: "capability-card--improve",
    nodes: ["Observe", "Automate", "Review"],
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

const emailAddress = "jesadakorn.kirtnu@gmail.com";
const roleMailto = `mailto:${emailAddress}?subject=${encodeURIComponent("Role opportunity — Jesadakorn Kirtnu")}`;
const projectMailto = `mailto:${emailAddress}?subject=${encodeURIComponent("Project collaboration — Jesadakorn Kirtnu")}`;

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

      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Technical Generalist · Phuket, Thailand</p>
            <h1 id="hero-heading" className="hero-title">
              I connect operations, software, and automation to turn real workflows into practical
              systems.
            </h1>
            <p className="hero-intro">
              I&apos;m Jesadakorn Kirtnu. I work across day-to-day technology operations,
              full-stack development, workflow automation, and technical project delivery—especially
              where people, processes, and systems need to stay aligned.
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
            <div className="hero-system-note">
              <span className="hero-system-note__line" aria-hidden="true" />
              <span>See the workflow</span>
              <span>Connect the system</span>
              <span>Keep the human decision visible</span>
            </div>
          </div>

          <HeroParallax className="identity-system">
            <div className="identity-ambient" aria-hidden="true" />
            <div className="identity-ring identity-ring--outer" aria-hidden="true" />
            <div className="identity-ring identity-ring--inner" aria-hidden="true" />
            <span className="system-line system-line--operate" aria-hidden="true" />
            <span className="system-line system-line--build" aria-hidden="true" />
            <span className="system-line system-line--improve" aria-hidden="true" />

            <div className="system-module system-module--operate">
              <Network className="h-4 w-4" aria-hidden="true" />
              <span>Operate</span>
              <small>Dependable systems</small>
            </div>
            <div className="system-module system-module--build">
              <Blocks className="h-4 w-4" aria-hidden="true" />
              <span>Build</span>
              <small>Useful software</small>
            </div>
            <div className="system-module system-module--improve">
              <Settings2 className="h-4 w-4" aria-hidden="true" />
              <span>Improve</span>
              <small>Clearer workflows</small>
            </div>

            <aside className="identity-core" aria-label="Profile summary">
              <div className="identity-portrait">
                <Image
                  src="/portrait-upscaled.webp"
                  alt="Jesadakorn Kirtnu"
                  fill
                  priority
                  sizes="(max-width: 640px) 52vw, (max-width: 1024px) 260px, 300px"
                  className="object-cover"
                />
              </div>
              <div className="identity-core__caption">
                <span className="identity-status" aria-hidden="true" />
                <div>
                  <p>Jesadakorn Kirtnu</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-[color:var(--muted)]">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    Phuket, Thailand
                  </p>
                </div>
              </div>
            </aside>
          </HeroParallax>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="section-block">
        <SectionReveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="Operate. Build. Improve."
            description="Three connected ways I contribute—from keeping systems dependable to building tools and improving how work moves through a team."
            titleId="capabilities-heading"
          />
          <div className="capability-bento">
            {capabilities.map((capability, capabilityIndex) => {
              const Icon = capability.icon;
              return (
                <article
                  key={capability.title}
                  className={`capability-card ${capability.className}`}
                >
                  <div className="capability-card__topline">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="font-mono-ui text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--muted-soft)]">
                      0{capabilityIndex + 1} / 03
                    </span>
                  </div>
                  <div>
                    <p className="capability-card__verb">{capability.title}</p>
                    <h3>{capability.subtitle}</h3>
                    <p className="capability-card__description">{capability.description}</p>
                  </div>
                  <div className="capability-microvisual" aria-hidden="true">
                    {capability.nodes.map((node, index) => (
                      <span key={node}>
                        <i>{index + 1}</i>
                        {node}
                      </span>
                    ))}
                  </div>
                  <p className="capability-card__details">{capability.details}</p>
                </article>
              );
            })}
          </div>
        </SectionReveal>
      </section>

      <section id="work" aria-labelledby="work-heading" className="section-block scroll-mt-24">
        <SectionReveal>
          <SectionHeader
            eyebrow="Selected Work"
            title="Systems shaped around real workflows."
            description="A live product, a working business-system prototype, and two applied AI experiments. Each case study separates what is live from what is exploratory."
            titleId="work-heading"
          />

          <div className="work-stage">
            <SpotlightSurface theme={epsx.visualTheme} className="work-feature-wrap">
              <article className="work-feature">
                <div className="project-canvas project-canvas--feature">
                  <Image
                    src={epsx.cardImage}
                    alt={epsx.cardImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1120px"
                    className="object-cover"
                  />
                  <span className="project-canvas__index" aria-hidden="true">01</span>
                </div>
                <div className="work-feature__copy">
                  <div>
                    <p className="project-eyebrow">{projectTypeLabels[epsx.type]}</p>
                    <h3>{epsx.name}</h3>
                    <p className="work-project-title">{epsx.title}</p>
                  </div>
                  <div>
                    <p className="work-project-summary">{epsx.summary}</p>
                    <Link href={`/work/${epsx.slug}`} className="text-link mt-6">
                      Read case study
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </SpotlightSurface>

            <div className="work-secondary-grid">
              <SpotlightSurface theme={folio.visualTheme} className="work-secondary-wrap">
                <article className="work-secondary">
                  <div className="project-canvas">
                    <Image
                      src={folio.cardImage}
                      alt={folio.cardImageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className="object-cover"
                    />
                  </div>
                  <div className="work-secondary__copy">
                    <p className="project-eyebrow">{projectTypeLabels[folio.type]}</p>
                    <h3>{folio.name}</h3>
                    <p className="work-project-title">{folio.title}</p>
                    <p className="work-project-summary mt-4">{folio.summary}</p>
                    <Link href={`/work/${folio.slug}`} className="text-link mt-6">
                      Read case study
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </SpotlightSurface>

              <div className="experiment-stack">
                {experiments.map((project, index) => (
                  <SpotlightSurface
                    key={project.slug}
                    theme={project.visualTheme}
                    className="experiment-card-wrap"
                  >
                    <article className="experiment-card">
                      <div className="experiment-card__image">
                        <Image
                          src={project.cardImage}
                          alt={project.cardImageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 420px"
                          className="object-cover"
                        />
                      </div>
                      <div className="experiment-card__copy">
                        <p className="project-eyebrow">
                          0{index + 3} · {projectTypeLabels[project.type]}
                        </p>
                        <h3>{project.name}</h3>
                        <p className="work-project-summary">{project.summary}</p>
                        <Link href={`/work/${project.slug}`} className="text-link mt-4">
                          Read case study
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </SpotlightSurface>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section id="experience" aria-labelledby="experience-heading" className="section-block scroll-mt-24">
        <div className="experience-layout">
          <div className="experience-sticky">
            <SectionReveal>
              <SectionHeader
                eyebrow="Experience"
                title="A career across software and operations."
                description="The common thread is practical problem-solving across technology, processes, and the people responsible for them."
                titleId="experience-heading"
              />
              <div className="experience-signal" aria-hidden="true">
                <GitBranch className="h-5 w-5" />
                <span>One continuous operating thread</span>
              </div>
            </SectionReveal>
          </div>
          <div className="experience-timeline">
            {experience.map((item, index) => (
              <SectionReveal key={`${item.organization}-${item.period}`}>
                <article className="experience-item">
                  <span className="experience-node" aria-hidden="true">
                    <CircleDot className="h-4 w-4" />
                  </span>
                  <div className="experience-index" aria-hidden="true">
                    0{index + 1}
                  </div>
                  <p className="eyebrow">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="experience-organization">{item.organization}</p>
                  <p className="experience-description">{item.description}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block pb-24 lg:pb-28">
        <SectionReveal>
          <div className="contact-stage">
            <div className="contact-stage__intro">
              <p className="eyebrow">Hiring or project collaboration</p>
              <h2>
                Need someone who can understand the workflow and build the system around it?
              </h2>
              <Link href="/contact" className="text-link mt-5">
                View every contact option
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="contact-stage__paths">
              <TrackedAnchor
                href={roleMailto}
                eventName="contact_role_click"
                eventData={{ source: "home_cta" }}
                className="contact-path"
              >
                <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
                <span>
                  <small>For hiring teams</small>
                  Role opportunity
                </span>
                <ArrowUpRight className="ml-auto h-5 w-5" aria-hidden="true" />
              </TrackedAnchor>
              <TrackedAnchor
                href={projectMailto}
                eventName="contact_project_click"
                eventData={{ source: "home_cta" }}
                className="contact-path"
              >
                <Wrench className="h-6 w-6" aria-hidden="true" />
                <span>
                  <small>For scoped work</small>
                  Project collaboration
                </span>
                <ArrowUpRight className="ml-auto h-5 w-5" aria-hidden="true" />
              </TrackedAnchor>
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
