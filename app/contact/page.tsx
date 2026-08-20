import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, Globe, Linkedin, MapPin } from "lucide-react";

import { EmailSection } from "../components/EmailSection";
import SectionHeader from "../components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jesadakorn Kirtnu about roles in technology operations, software, automation, business systems, and technical project delivery.",
  alternates: {
    canonical: "/contact",
  },
};

const contactActions = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jesadakorn-kirtnu-81b9601b9/",
    value: "linkedin.com/in/jesadakorn-kirtnu-81b9601b9",
    note: "Professional background, experience, and direct hiring conversations.",
    icon: Linkedin,
  },
  {
    label: "Website",
    href: "https://www.jesadakorn.com",
    value: "jesadakorn.com",
    note: "Portfolio overview and selected product work.",
    icon: Globe,
  },
] as const;

const conversationPoints = [
  "IT operations and infrastructure roles involving devices, networks, documentation, and user support.",
  "Software and business-system roles spanning frontend, backend, integrations, and workflow-based applications.",
  "Automation, applied AI, and technical project roles where process understanding and cross-team coordination matter.",
] as const;

function ContactLinkCard({
  label,
  href,
  value,
  note,
  icon: Icon,
}: (typeof contactActions)[number]) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="contact-card block">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-4">
          <div className="rounded-2xl bg-[color:var(--accent-soft)] p-3 text-[color:var(--accent-strong)] w-fit">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
              {label}
            </p>
            <p className="mt-3 font-display text-2xl text-[color:var(--foreground)] break-all">
              {value}
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--muted)]">
              {note}
            </p>
          </div>
        </div>

        <div className="button-secondary shrink-0 px-4 py-3 text-sm">
          Open
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <main className="page-frame">
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's talk about where my experience could support your team."
          description="For roles across technology operations, software, automation, or technical project delivery, email is the most direct way to reach me."
        />
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-24 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="section-shell px-6 py-7 md:px-8 md:py-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--background-strong)] px-4 py-2 text-sm text-[color:var(--foreground)]">
                <MapPin className="h-4 w-4 text-[color:var(--accent-strong)]" />
                Phuket, Thailand
              </div>
              <h2 className="font-display text-3xl text-[color:var(--foreground)]">
                Practical across systems, software, workflows, and coordination.
              </h2>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                I&apos;m open to conversations with teams that value hands-on problem-solving,
                clear communication, and technology that supports day-to-day work.
              </p>
            </div>

            <div className="metric-panel">
              <div className="flex items-center gap-3 text-[color:var(--foreground)]">
                <BriefcaseBusiness className="h-5 w-5 text-[color:var(--accent-strong)]" />
                <p className="font-display text-2xl">Open to conversations around</p>
              </div>
              <div className="mt-5 space-y-4">
                {conversationPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--background-strong)] px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-[color:var(--foreground)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <EmailSection />
          {contactActions.map((item) => (
            <ContactLinkCard key={item.label} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
