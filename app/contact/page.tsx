import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, Linkedin, MapPin, Wrench } from "lucide-react";

import { EmailSection } from "../components/EmailSection";
import { SectionReveal, SpotlightSurface } from "../components/CinematicMotion";
import SectionHeader from "../components/SectionHeader";
import { TrackedAnchor } from "../components/TrackedLink";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jesadakorn Kirtnu about a role opportunity or project collaboration in operations, software, automation, and technical delivery.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Jesadakorn Kirtnu",
    description: "Start a conversation about a role opportunity or project collaboration.",
    url: "/contact",
  },
};

const emailAddress = "jesadakorn.kirtnu@gmail.com";
const roleMailto = `mailto:${emailAddress}?subject=${encodeURIComponent("Role opportunity — Jesadakorn Kirtnu")}`;
const projectMailto = `mailto:${emailAddress}?subject=${encodeURIComponent("Project collaboration — Jesadakorn Kirtnu")}`;

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-frame outline-none">
      <section className="contact-route-hero section-block pb-10 pt-12 sm:pt-16">
        <SectionReveal>
          <div className="contact-route-hero__grid">
            <SectionHeader
              as="h1"
              eyebrow="Contact"
              title="Choose the conversation you want to start."
              description="I’m based in Phuket and open to roles or project work where operations, software, automation, and practical delivery overlap."
            />
            <div className="contact-route-signal">
              <span className="contact-route-signal__pulse" aria-hidden="true" />
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span>
                <small>Based in</small>
                Phuket, Thailand
              </span>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section aria-label="Contact options" className="section-block pt-4">
        <SectionReveal>
          <div className="contact-options-grid">
            <SpotlightSurface className="contact-option-wrap">
              <article className="contact-option contact-option--role">
                <div className="contact-option__number" aria-hidden="true">01</div>
                <BriefcaseBusiness className="h-7 w-7" aria-hidden="true" />
                <p className="mt-6 eyebrow">For hiring teams</p>
                <h2>Role opportunity</h2>
                <p>
                  For full-time or contract roles across IT operations, software, automation,
                  business systems, or technical project delivery.
                </p>
                <TrackedAnchor
                  href={roleMailto}
                  eventName="contact_role_click"
                  eventData={{ source: "contact_page" }}
                  className="button-primary mt-7 w-fit"
                >
                  Email about a role
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </TrackedAnchor>
              </article>
            </SpotlightSurface>

            <SpotlightSurface className="contact-option-wrap">
              <article className="contact-option contact-option--project">
                <div className="contact-option__number" aria-hidden="true">02</div>
                <Wrench className="h-7 w-7" aria-hidden="true" />
                <p className="mt-6 eyebrow">For project clients</p>
                <h2>Project collaboration</h2>
                <p>
                  For scoped systems, workflow automation, prototypes, integrations, or technical
                  coordination around an existing process.
                </p>
                <TrackedAnchor
                  href={projectMailto}
                  eventName="contact_project_click"
                  eventData={{ source: "contact_page" }}
                  className="button-primary mt-7 w-fit"
                >
                  Email about a project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </TrackedAnchor>
              </article>
            </SpotlightSurface>
          </div>

          <div className="contact-direct-grid">
            <EmailSection />
            <a
              href="https://www.linkedin.com/in/jesadakorn-kirtnu-81b9601b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-card"
            >
              <Linkedin className="h-6 w-6 text-[color:var(--accent-strong)]" aria-hidden="true" />
              <span>
                <span className="eyebrow">LinkedIn</span>
                <span className="mt-2 block font-display text-xl text-[color:var(--foreground)]">Jesadakorn Kirtnu</span>
              </span>
              <ArrowUpRight className="ml-auto h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
