import {
  ArrowDown,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Check,
  Cpu,
  Network,
  ShieldCheck,
} from "lucide-react";

import SectionHeader from "./SectionHeader";

const expertiseDomains = [
  {
    title: "Agentic AI & Data Architecture",
    description:
      "Designing autonomous, private AI systems that turn enterprise knowledge and operational data into accountable actions.",
    icon: Bot,
    capabilities: [
      "Autonomous AI agents with Hermes and open-source local models",
      "Retrieval-Augmented Generation (RAG) and advanced SQL analytics",
      "Local LLM optimization and quantization with Apple MLX",
      "Gemma 4 and Qwen 3.5 model workflows",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    description:
      "Building stable, automated infrastructure for creative and production teams with security designed into daily operations.",
    icon: Network,
    capabilities: [
      "Configuration management with Ansible",
      "Munki software deployment and custom macOS packages",
      "Fleet management across 50+ workstations",
      "Tailscale mesh networking and advanced OPSEC",
    ],
  },
  {
    title: "Enterprise Software Engineering",
    description:
      "Translating high-stakes business rules into resilient software, explicit permissions, and predictable workflow behavior.",
    icon: Blocks,
    capabilities: [
      "Full-stack and backend engineering",
      "Complex state-machine design with 84+ concurrent states",
      "Granular role-based access control (RBAC)",
      "High-concurrency and race-condition mitigation",
    ],
  },
  {
    title: "IT Operations & Compliance",
    description:
      "Connecting operational knowledge, workplace governance, and international stakeholder communication into dependable systems.",
    icon: ShieldCheck,
    capabilities: [
      "Obsidian IT Ops vault architecture and lifecycle records",
      "Certified Workplace Safety Committee Officer (คปอ.)",
      "Thailand labor and workplace safety compliance",
      "Cross-border stakeholder management across Thailand and Germany",
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
    title: "84+ State Machine & Multi-Role RBAC",
    description:
      "Orchestrates complex enterprise workflows across seven organizational roles with granular permission metrics and explicit state ownership.",
  },
  {
    title: "Claim Task Concurrency Protection",
    description:
      "A purpose-built claim pattern prevents dual approvals and conflicting edits in high-volume, distributed accounting teams.",
  },
  {
    title: "Local GenAI with Human Veto",
    description:
      "An offline advisory layer reads financial documents, cross-references company policy, recommends GL debit and credit entries, matches the Chart of Accounts, and validates 7% VAT while preserving absolute human control.",
  },
  {
    title: "Dynamic SQL-to-HTML Architecture",
    description:
      "Read-only SQL results compile into responsive, context-aware HTML views using active workflow and English or Thai localization parameters.",
  },
] as const;

const experienceGroups = [
  {
    label: "IT Infrastructure Manager",
    organization: "VIGNOLD · Thailand",
    icon: BriefcaseBusiness,
    achievements: [
      "Standardized and automated more than 50 macOS nodes with Ansible and Munki, achieving a 100% stable infrastructure with zero daily manual oversight.",
      "Engineered a centralized Obsidian IT Ops database with standardized frontmatter for asset lifecycle tracking, infrastructure logs, and onboarding automation.",
      "Provisioned hardware clusters, user environments, and network access for rapid production-team expansion across Layout, Retouch, Video, and Admin functions.",
      "Serves as a certified Workplace Safety Committee Officer (คปอ.), aligning local operations with Thailand labor and safety requirements.",
    ],
  },
  {
    label: "Software Developer & Crypto Systems Engineer",
    organization: "Independent / Startup",
    icon: Cpu,
    achievements: [
      "Built quantitative trading infrastructure for Spot Grid and Dollar-Cost Averaging strategies on global platforms including Binance.",
      "Designed and maintained cryptocurrency mining environments across hardware, thermal management, power distribution, and software-level kernel optimization.",
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
          title="Hybrid IT Manager & AI Systems Architect"
          description="A highly analytical technology leader bridging enterprise infrastructure automation and agentic AI systems—from dependable macOS operations to autonomous, local-first enterprise software."
          titleId="professional-profile-heading"
        />

        <div className="section-shell overflow-hidden px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 border-b border-[color:var(--line)] pb-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="space-y-4">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.3em] text-[color:var(--accent-strong)]">
                Leadership through-line
              </p>
              <h2 className="font-display text-3xl leading-tight text-[color:var(--foreground)] md:text-4xl">
                One operating mindset across infrastructure, software, and AI.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
              My work connects the reliability expected from enterprise IT with the systems
              thinking required for modern AI products. I automate operational foundations,
              design complex business workflows, and build local AI architectures that keep
              sensitive data close to the organization while leaving consequential decisions in
              human hands.
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
                  Flagship System · EPSX Project
                </p>
                <h2 className="font-display text-4xl leading-tight text-[color:var(--feature-foreground)] md:text-5xl">
                  Folio ERP
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--feature-muted)]">
                  An AI-powered, enterprise-grade workflow orchestration and resource management
                  platform connecting intelligent document extraction, multi-stage approvals,
                  accounting review, and financial settlement without cloud AI latency.
                </p>
                <a
                  href="#demos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-5 py-3 text-sm font-semibold text-[color:var(--feature-foreground)] transition hover:border-[rgba(240,180,135,0.42)] hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0b487] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090d11]"
                >
                  Watch the workflow demo
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="metric-panel-dark">
                  <p className="font-display text-4xl text-[color:var(--feature-foreground)]">84+</p>
                  <p className="mt-3 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--feature-muted)]">
                    workflow states
                  </p>
                </div>
                <div className="metric-panel-dark">
                  <p className="font-display text-4xl text-[color:var(--feature-foreground)]">7</p>
                  <p className="mt-3 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--feature-muted)]">
                    organizational roles
                  </p>
                </div>
                <div className="metric-panel-dark">
                  <p className="font-display text-4xl text-[color:var(--feature-foreground)]">100%</p>
                  <p className="mt-3 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--feature-muted)]">
                    human veto power
                  </p>
                </div>
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
            title="Operational leadership backed by hands-on engineering."
            description="The work spans enterprise fleet reliability, systemic knowledge management, rapid team growth, quantitative automation, and performance-focused infrastructure."
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
