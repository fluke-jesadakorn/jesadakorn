import {
  Blocks,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Cpu,
  Network,
  Settings2,
} from "lucide-react";

import SectionHeader from "./SectionHeader";

const experienceSnapshot = [
  {
    label: "Current role",
    title: "IT Infrastructure Manager · VIGNOLD",
    description:
      "Supports day-to-day IT operations, macOS deployment, documentation, onboarding, networking, and coordination between teams in Thailand and Germany.",
  },
  {
    label: "Personal projects · 2024 - Present",
    title: "Product & Software Development · EPSX and Folio ERP",
    description:
      "Builds a live analytics side project and a financial-workflow prototype, covering product interfaces, backend workflows, permissions, and automation experiments.",
  },
  {
    label: "2024",
    title: "Senior Full-Stack Developer · Finstable",
    description:
      "Worked on ERP and cloud-connected applications spanning backend services, user interfaces, role-based approvals, and business workflow integration.",
  },
  {
    label: "2022 - 2024",
    title: "Head Engineer / Industrial Project Manager · Token Miner",
    description:
      "Worked across budgets, equipment, facility layouts, thermal and power planning, maintenance, operating procedures, data analysis, and vendor coordination.",
  },
  {
    label: "March 2021 - January 2022",
    title: "IT, Web & Mobile Developer · IMT Group",
    description:
      "Developed internal web and mobile applications, supported IT planning, evaluated tools, and documented workflows for business teams.",
  },
  {
    label: "2021 - 2022",
    title: "Freelance Full-Stack Developer · Independent",
    description:
      "Built web applications for POS, inventory, administration, and other workflow-based business needs.",
  },
] as const;

const strengths = [
  {
    title: "Clear coordination",
    description:
      "Keeps requirements, responsibilities, and next steps understandable across technical and non-technical teams.",
    icon: Settings2,
  },
  {
    title: "Operational awareness",
    description:
      "Looks at how a system will be supported day to day, not only how it works during a demonstration.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Workflow thinking",
    description:
      "Maps steps, decisions, roles, and exceptions before turning a business process into software or automation.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Hands-on delivery",
    description:
      "Moves between planning, implementation, testing, documentation, and support as the work requires.",
    icon: Network,
  },
] as const;

const stackGroups = [
  {
    title: "IT operations & infrastructure",
    items: [
      "macOS administration",
      "Ansible & Munki",
      "Networking & Tailscale",
      "Cloud & virtualization",
      "Hardware and user support",
      "Backup and access practices",
    ],
  },
  {
    title: "Software & business systems",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Golang",
      "NestJS",
      "Flutter",
      "ERP, POS & inventory",
      "Role-based workflows",
    ],
  },
  {
    title: "Automation & applied AI",
    items: [
      "n8n workflow automation",
      "LINE Messaging API",
      "Ollama & local models",
      "RAG experiments",
      "Document extraction",
      "SQL workflows",
    ],
  },
  {
    title: "Project & business coordination",
    items: [
      "Process mapping",
      "Cost and project planning",
      "Vendor coordination",
      "Cross-functional delivery",
      "Workplace safety",
      "International collaboration",
    ],
  },
  {
    title: "Data & technical engineering",
    items: [
      "Excel & Power BI",
      "Looker Studio",
      "Feasibility analysis",
      "IoT & Arduino",
      "Mining infrastructure",
      "Thermal and power planning",
    ],
  },
] as const;

export default function Portfolio() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <section id="experience" className="space-y-8 pb-24">
        <SectionHeader
          eyebrow="Experience Snapshot"
          title="Experience across IT, software, and technical operations."
          description="These roles show the range of work behind the portfolio, from workplace IT and business applications to industrial systems and personal software projects."
        />

        <div className="section-shell px-6 py-7 md:px-8 md:py-9">
          {experienceSnapshot.map((item) => (
            <div key={item.label} className="timeline-item">
              <div className="space-y-2">
                <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
                  {item.label}
                </p>
                <h3 className="font-display text-2xl text-[color:var(--foreground)]">
                  {item.title}
                </h3>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="strengths" className="space-y-8 pb-24">
        <SectionHeader
          eyebrow="Core Strengths"
          title="A practical way of working across different technical contexts."
          description="The emphasis is on understanding the operational need, communicating clearly, and carrying the work through to something people can use."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="strength-card">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[color:var(--accent-soft)] p-3 text-[color:var(--accent-strong)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[color:var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Capability Range"
          title="Tools and experience grouped by the work they support."
          description="This is a selected overview rather than a claim of equal depth in every tool. Project pages and work history provide the context behind each area."
        />

        <div className="section-shell px-6 py-7 md:px-8 md:py-9">
          <div className="grid gap-5 md:grid-cols-2">
            {stackGroups.map((group, index) => (
              <article
                key={group.title}
                className={index < stackGroups.length - 2 ? "pb-1" : undefined}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[color:var(--accent-soft)] p-3 text-[color:var(--accent-strong)]">
                    {index % 2 === 0 ? <Cpu className="h-5 w-5" /> : <Blocks className="h-5 w-5" />}
                  </div>
                  <h3 className="font-display text-2xl text-[color:var(--foreground)]">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
