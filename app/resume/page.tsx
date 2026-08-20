import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { ResumeActions } from "../components/ResumeActions";
import { publicResume } from "./resume-data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Public resume for Jesadakorn Kirtnu, covering technology operations, software development, automation, and technical project work.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Jesadakorn Kirtnu | Resume",
    description:
      "Technology operations, software development, automation, and technical project experience.",
    url: "/resume",
  },
};

export default function ResumePage() {
  return (
    <main id="main-content" tabIndex={-1} className="resume-page outline-none">
      <section className="resume-toolbar print:hidden" aria-label="Resume actions">
        <div>
          <p className="eyebrow">Public resume</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--muted)]">
            A readable HTML version and a one-page tagged PDF share the same source content.
          </p>
        </div>
        <ResumeActions />
      </section>

      <article className="resume-document" aria-labelledby="resume-name">
        <header className="resume-document-header">
          <h1 id="resume-name" className="resume-document-name">
            {publicResume.identity.name}
          </h1>
          <p className="resume-document-headline">{publicResume.identity.headline}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--resume-muted)]">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {publicResume.identity.location}
          </p>
          <nav aria-label="Professional links" className="resume-links">
            {publicResume.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </header>

        <section aria-labelledby="resume-summary-heading" className="resume-section">
          <h2 id="resume-summary-heading">Professional Summary</h2>
          <p>{publicResume.summary}</p>
        </section>

        <section aria-labelledby="resume-capabilities-heading" className="resume-section">
          <h2 id="resume-capabilities-heading">Core Capabilities</h2>
          <ul className="resume-grid-list">
            {publicResume.expertise.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section aria-labelledby="resume-experience-heading" className="resume-section">
          <h2 id="resume-experience-heading">Experience</h2>
          <div className="resume-experience-list">
            {publicResume.experience.map((item) => (
              <article key={`${item.organization}-${item.period}`} className="resume-experience-item">
                <div className="resume-experience-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <p className="resume-period">{item.period}</p>
                </div>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="resume-systems-heading" className="resume-section">
          <h2 id="resume-systems-heading">Selected Systems</h2>
          <ul className="resume-main-list">
            {publicResume.selectedSystems.map((system) => <li key={system}>{system}</li>)}
          </ul>
        </section>

        <section aria-labelledby="resume-education-heading" className="resume-section">
          <h2 id="resume-education-heading">Education &amp; Qualifications</h2>
          <div className="resume-education">
            <h3>{publicResume.education.degree}</h3>
            <p>{publicResume.education.institution} · {publicResume.education.period}</p>
          </div>
          <ul className="resume-main-list">
            <li>Languages: {publicResume.languages.join(" and ")}</li>
            {publicResume.additional.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section aria-labelledby="resume-technology-heading" className="resume-section">
          <h2 id="resume-technology-heading">Technology</h2>
          <p>{publicResume.technologies.join(" · ")}</p>
        </section>
      </article>

      <div className="resume-page-footer print:hidden">
        <Link href="/" className="text-link">Return to portfolio</Link>
        <Link href="/contact" className="text-link">Contact Jesadakorn</Link>
      </div>
    </main>
  );
}
