import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { ResumeActions } from "../components/ResumeActions";
import { publicResume } from "./resume-data";

export const metadata: Metadata = {
  title: "Public Resume",
  description:
    "One-page public resume for Jesadakorn Kirtnu, a Hybrid IT Manager and AI Systems Architect focused on infrastructure automation, local AI, and enterprise workflow systems.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <section className="resume-toolbar print:hidden" aria-label="Resume actions">
        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
            Public one-page resume
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--muted)]">
            A privacy-conscious professional summary with personal contact details intentionally
            omitted.
          </p>
        </div>
        <ResumeActions />
      </section>

      <article className="resume-sheet" aria-labelledby="resume-name">
        <aside className="resume-sidebar">
          <div className="resume-sidebar-header">
            <div className="resume-portrait-frame">
              <Image
                src={publicResume.identity.portrait}
                alt={`${publicResume.identity.name} portrait`}
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="resume-sidebar-content">
            <section aria-labelledby="resume-profile-label">
              <h2 id="resume-profile-label" className="resume-section-bar">
                Public Profile
              </h2>
              <div className="resume-sidebar-block">
                <p className="resume-small-label">Location</p>
                <p className="resume-sidebar-value inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {publicResume.identity.location}
                </p>
              </div>
            </section>

            <section aria-labelledby="resume-links-label">
              <h2 id="resume-links-label" className="resume-section-bar">
                Professional Links
              </h2>
              <div className="resume-sidebar-list">
                {publicResume.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-professional-link"
                  >
                    <span className="resume-small-label">{link.label}</span>
                    <span className="break-words">{link.display}</span>
                  </a>
                ))}
              </div>
            </section>

            <section aria-labelledby="resume-languages-label">
              <h2 id="resume-languages-label" className="resume-section-bar">
                Languages
              </h2>
              <p className="resume-sidebar-value">{publicResume.languages.join(" / ")}</p>
            </section>

            <section aria-labelledby="resume-expertise-label">
              <h2 id="resume-expertise-label" className="resume-section-bar">
                Core Expertise
              </h2>
              <ul className="resume-sidebar-bullets">
                {publicResume.expertise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="resume-leadership-label">
              <h2 id="resume-leadership-label" className="resume-section-bar">
                Leadership &amp; Compliance
              </h2>
              <ul className="resume-sidebar-bullets">
                {publicResume.leadership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="resume-education-label">
              <h2 id="resume-education-label" className="resume-section-bar">
                Education
              </h2>
              <div className="resume-sidebar-block space-y-1">
                <p className="font-bold text-[color:var(--resume-ink)]">
                  {publicResume.education.degree}
                </p>
                <p>{publicResume.education.institution}</p>
                <p className="resume-small-label">{publicResume.education.period}</p>
              </div>
            </section>
          </div>
        </aside>

        <div className="resume-main-column">
          <header className="resume-header">
            <h1 id="resume-name" className="resume-name">
              {publicResume.identity.name}
            </h1>
            <p className="resume-headline">{publicResume.identity.headline}</p>
            <div className="resume-rule" />
            <p className="resume-summary">{publicResume.summary}</p>
          </header>

          <section aria-labelledby="resume-experience-label">
            <h2 id="resume-experience-label" className="resume-section-bar">
              Experience
            </h2>
            <div className="resume-experience-list">
              {publicResume.experience.map((experience) => (
                <article key={`${experience.organization}-${experience.period}`} className="resume-experience-item">
                  <div className="resume-experience-heading">
                    <div>
                      <h3>{experience.role}</h3>
                      <p>{experience.organization}</p>
                    </div>
                    <p className="resume-period">{experience.period}</p>
                  </div>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-systems-label">
            <h2 id="resume-systems-label" className="resume-section-bar">
              Selected Systems
            </h2>
            <ul className="resume-main-bullets">
              {publicResume.selectedSystems.map((system) => (
                <li key={system}>{system}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="resume-technology-label">
            <h2 id="resume-technology-label" className="resume-section-bar">
              Technology
            </h2>
            <div className="resume-technology-list">
              {publicResume.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </section>

          <footer className="resume-sheet-footer">
            <span>Public professional resume</span>
            <span>Personal contact details intentionally omitted</span>
          </footer>
        </div>
      </article>

      <div className="resume-page-footer print:hidden">
        <Link href="/" className="resume-footer-link">
          Return to portfolio
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link href="/contact" className="resume-footer-link">
          Contact through the portfolio
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
