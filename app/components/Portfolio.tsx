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
    title: "IT Manager at VIGNOLD, Phuket",
    description:
      "Leading day-to-day IT operations, coordination, and business support while working closely between the Thailand and German branches.",
  },
  {
    label: "Side work",
    title: "EPSX",
    description:
      "Developed separately as a side project, with a public-facing product and internal admin environment shaped around clarity and practical use.",
  },
  {
    label: "Foundation",
    title: "Computer Engineering",
    description:
      "Prince of Songkla University, Phuket Campus, with formal study paired with practical experience across application development, system operations, and business-facing technical problem solving.",
  },
] as const;

const strengths = [
  {
    title: "Cross-branch coordination",
    description:
      "Works comfortably across the Thailand and German branches, keeping communication clear and expectations aligned.",
    icon: Settings2,
  },
  {
    title: "People and process support",
    description:
      "Supports teams through practical problem-solving, stable day-to-day operations, and a strong sense of responsibility.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Workflow clarity",
    description:
      "Improves business processes and internal coordination so work stays organized, clear, and dependable.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Practical digital thinking",
    description:
      "Brings a side-project builder mindset that stays grounded in useful outcomes rather than abstract ideas.",
    icon: Network,
  },
] as const;

const stackGroups = [
  {
    title: "Leadership and operations",
    items: [
      "IT management",
      "Cross-branch coordination",
      "Process improvement",
      "Business support",
      "Team collaboration",
      "AI-assisted operations",
    ],
  },
  {
    title: "Application stack",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Golang",
      "NestJS",
      "Rust",
      "Flutter",
      "LangChain",
    ],
  },
  {
    title: "Product and business systems",
    items: [
      "ERP systems",
      "Role-based approvals",
      "HR AI Chatbot",
      "LINE Messaging API",
      "Workflow optimization",
      "Technical support",
    ],
  },
  {
    title: "Data and operations",
    items: [
      "Financial analytics",
      "System administration",
      "Networking",
      "Cloud computing",
      "Vector Databases (RAG)",
      "Operational tooling",
    ],
  },
  {
    title: "Domain strengths",
    items: [
      "n8n Workflow Automation",
      "Ollama & Qwen (Local LLMs)",
      "Blockchain technology",
      "Developer tooling",
      "Cross-functional delivery",
      "Document Intelligence",
    ],
  },
] as const;

export default function Portfolio() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <section id="experience" className="space-y-8 pb-24">
        <SectionHeader
          eyebrow="Experience Snapshot"
          title="A profile shaped by product delivery, business workflows, and operating reality."
          description="The strongest through-line across Jesadakorn's work is not a single framework. It is the ability to translate complex, cross-functional requirements into software that teams can trust and keep using."
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
          title="Strengths that fit leadership, coordination, and business-facing IT roles."
          description="The strongest signal here is the ability to connect people, processes, and systems in a way that stays practical in day-to-day work."
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
          eyebrow="Experience Range"
          title="A mix of management responsibility, operations awareness, and hands-on digital work."
          description="The tools matter, but the more important signal is how they support teams, workflows, and practical outcomes."
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
