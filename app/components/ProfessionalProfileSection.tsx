import {
  ArrowDown,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Check,
  Cpu,
  Network,
} from "lucide-react";

import SectionHeader from "./SectionHeader";

const expertiseDomains = [
  {
    title: "IT Operations & Infrastructure",
    description:
      "Supporting the systems people rely on each day, from devices and networking to deployment, documentation, and access.",
    icon: Network,
    capabilities: [
      "macOS administration and software deployment with Ansible and Munki",
      "Networking, Tailscale, cloud, virtualization, and backup practices",
      "Hardware setup, onboarding, troubleshooting, and operational documentation",
      "Security-aware access and workplace support",
    ],
  },
  {
    title: "Software & Business Systems",
    description:
      "Building web, backend, and mobile applications around real business workflows and user needs.",
    icon: Blocks,
    capabilities: [
      "Full-stack development with Next.js, React, Node.js, Golang, and NestJS",
      "ERP, POS, inventory, administration, and approval workflows",
      "Role-based interfaces and backend service integration",
      "Mobile development with Flutter",
    ],
  },
  {
    title: "Workflow Automation & Applied AI",
    description:
      "Exploring how automation and local AI can reduce repetitive work while keeping review with the people responsible.",
    icon: Bot,
    capabilities: [
      "n8n workflows and LINE Messaging API integrations",
      "Local language-model experiments with Ollama and open-source models",
      "RAG, document extraction, structured data, and SQL workflows",
      "Human review steps for AI-assisted outputs",
    ],
  },
  {
    title: "Project & Process Coordination",
    description:
      "Connecting technical work with budgets, vendors, timelines, safety, and communication across teams.",
    icon: BriefcaseBusiness,
    capabilities: [
      "Process mapping, cost planning, and operational documentation",
      "Vendor and cross-functional coordination",
      "Collaboration between teams in Thailand and Germany",
      "Workplace Safety Committee Officer certification (คปอ.)",
    ],
  },
  {
    title: "Data & Technical Engineering",
    description:
      "Using data and engineering context to support practical decisions across software, finance, facilities, and equipment.",
    icon: Cpu,
    capabilities: [
      "Data analysis and visualization with Excel, Power BI, and Looker Studio",
      "Feasibility, cost, and operational analysis",
      "IoT experiments with Arduino, sensors, and device communication",
      "Mining infrastructure, thermal, power, and hardware operations",
    ],
  },
] as const;

const folioRoles = [
  "HR Officer",
  "HR Manager",
  "Accounting Staff",
  "Accounting Manager",
  "Financial Manager",
  "Accounting Supervisor",
  "CEO",
] as const;

const folioHighlights = [
  {
    title: "Role-based workflow",
    description:
      "Maps document intake, review, approval, accounting, and settlement into a workflow with responsibilities for each role.",
  },
  {
    title: "Task ownership and review",
    description:
      "Explores task-claiming and status checks to reduce conflicting updates when several people work in the same process.",
  },
  {
    title: "Local AI assistance",
    description:
      "Tests document extraction, policy lookup, account suggestions, and VAT checks while leaving final decisions to reviewers.",
  },
  {
    title: "Reporting and localization",
    description:
      "Presents workflow data in responsive views with support for English and Thai working contexts.",
  },
] as const;

const experienceGroups = [
  {
    label: "IT Infrastructure Manager",
    organization: "VIGNOLD · Thailand",
    icon: BriefcaseBusiness,
    achievements: [
      "Automates macOS configuration and software deployment with Ansible, Munki, and custom packages.",
      "Maintains operational documentation for assets, infrastructure changes, and onboarding.",
      "Coordinates devices, user environments, and network access for creative and administrative teams.",
      "Works with colleagues in Thailand and Germany and serves as a Workplace Safety Committee Officer (คปอ.).",
    ],
  },
  {
    label: "Software Development",
    organization: "Finstable · IMT Group · Independent",
    icon: Blocks,
    achievements: [
      "Worked on full-stack applications, backend services, and business workflows for ERP, POS, inventory, and administration use cases.",
      "Built interfaces and integrations around role-based approvals, operational data, and customer requirements.",
      "Developed personal projects to explore product design, analytics, workflow automation, and local AI.",
    ],
  },
  {
    label: "Technical Projects & Operations",
    organization: "Token Miner · Independent",
    icon: Cpu,
    achievements: [
      "Worked across budgets, procurement, hardware, thermal planning, power distribution, maintenance, and operating procedures.",
      "Used data analysis and visualization to support feasibility, cost, and operational decisions.",
      "Coordinated internal teams and external vendors around technical requirements and site operations.",
    ],
  },
] as const;

export function ProfessionalProfileSection() {
  return (
    <section
      id="profile"
      aria-labelledby="professional-profile-heading"
      className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8"
    >
      <div className="space-y-10">
        <SectionHeader
          eyebrow="Professional Profile"
          title="Technology operations, software, and automation"
          description="A broad, hands-on profile covering day-to-day IT, application development, workflow improvement, applied AI prototypes, and technical project work."
          titleId="professional-profile-heading"
        />

        <div className="section-shell overflow-hidden px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 border-b border-[color:var(--line)] pb-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="space-y-4">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
                Working approach
              </p>
              <h2 className="font-display text-3xl leading-tight text-[color:var(--foreground)] md:text-4xl">
                Connect the operational problem to a system people can use.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
              My work often starts with an operational need: a device to configure, a process to
              clarify, a business rule to turn into software, or repetitive work to automate. I
              combine hands-on implementation with documentation and coordination so the result is
              understandable to both technical and non-technical teams.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {expertiseDomains.map((domain) => {
              const Icon = domain.icon;

              return (
                <article key={domain.title} className="profile-domain-card">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-[color:var(--accent-soft)] p-3 text-[color:var(--accent-strong)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[color:var(--foreground)]">
                        {domain.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                        {domain.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {domain.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3 text-sm leading-6">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-strong)]"
                          aria-hidden="true"
                        />
                        <span className="text-[color:var(--foreground)]">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        <article className="section-shell-dark px-6 py-8 md:px-10 md:py-12">
          <div className="relative z-10 space-y-10">
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="space-y-5">
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[#f0b487]">
                  Personal prototype · EPSX project
                </p>
                <h2 className="font-display text-4xl leading-tight text-[color:var(--feature-foreground)] md:text-5xl">
                  Folio ERP
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--feature-muted)]">
                  A working prototype that explores document intake, multi-stage approvals,
                  accounting review, and settlement in one role-based workflow. Local AI features
                  assist with extraction and suggestions, with people reviewing the output.
                </p>
                <a
                  href="#demos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-5 py-3 text-sm font-semibold text-[color:var(--feature-foreground)] transition hover:border-[rgba(240,180,135,0.42)] hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0b487] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d11]"
                >
                  Watch the workflow demo
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="metric-panel-dark">
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--feature-muted)]">
                  Project context
                </p>
                <p className="mt-4 font-display text-3xl text-[color:var(--feature-foreground)]">
                  Working prototype
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--feature-muted)]">
                  Built to explore how a multi-role financial process can be represented in
                  software, including where automation can assist and where human review remains
                  necessary.
                </p>
              </div>
            </div>

            <div className="folio-role-panel">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--feature-muted)]">
                Permission-aware workflow roles
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {folioRoles.map((role) => (
                  <span key={role} className="feature-chip">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {folioHighlights.map((highlight) => (
                <div key={highlight.title} className="folio-highlight-card">
                  <h3 className="font-display text-2xl text-[color:var(--feature-foreground)]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--feature-muted)]">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="space-y-8">
          <SectionHeader
            eyebrow="Professional Experience"
            title="Experience across operations, software, and technical projects."
            description="The common thread is practical problem-solving: understanding the work, building or improving the system around it, and coordinating with the people involved."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {experienceGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article key={group.label} className="professional-experience-card">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-[color:var(--accent-soft)] p-3 text-[color:var(--accent-strong)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
                        {group.organization}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-[color:var(--foreground)]">
                        {group.label}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {group.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-strong)]"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-7 text-[color:var(--muted)]">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
