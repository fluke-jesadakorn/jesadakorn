import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";

import ClickToPlayVideo from "@/app/components/ClickToPlayVideo";
import ProjectViewTracker from "@/app/components/ProjectViewTracker";
import { TrackedAnchor } from "@/app/components/TrackedLink";
import { getProject, projects, projectTypeLabels } from "../project-data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name} Case Study`;
  const description = `${project.title} ${project.summary}`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Selected Work`,
      description,
      url: `/work/${project.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectUrl = `https://jesadakorn.com/work/${project.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": project.structuredDataType,
    name: project.name,
    headline: project.title,
    description: project.summary,
    url: projectUrl,
    image: `https://jesadakorn.com${project.cardImage}`,
    creator: {
      "@type": "Person",
      name: "Jesadakorn Kirtnu",
      url: "https://jesadakorn.com",
    },
    ...(project.structuredDataType === "SoftwareApplication"
      ? { applicationCategory: "BusinessApplication", operatingSystem: "Web" }
      : {}),
    ...(project.links?.find((link) => link.kind === "repository")
      ? {
          codeRepository: project.links.find((link) => link.kind === "repository")?.href,
          sameAs: project.links.map((link) => link.href),
        }
      : {}),
  };

  return (
    <main id="main-content" tabIndex={-1} className="page-frame outline-none">
      <ProjectViewTracker slug={project.slug} type={project.type} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-28">
        <Link href="/#work" className="text-link">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to selected work
        </Link>

        <header className="mt-10 grid gap-9 border-b border-[color:var(--line)] pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 className="mt-5 font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.05em] text-[color:var(--foreground)]">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[color:var(--foreground)] sm:text-2xl">
              {project.title}
            </p>
          </div>
          <div>
            <p className="text-base leading-8 text-[color:var(--muted)]">{project.summary}</p>
            {project.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3" aria-label="Project links">
                {project.links.map((link) => (
                  <TrackedAnchor
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="external_project_click"
                    eventData={{ project: project.slug, destination: link.kind }}
                    className={link.kind === "public-site" ? "button-primary" : "button-secondary"}
                  >
                    {link.kind === "repository" ? (
                      <Github className="h-4 w-4" aria-hidden="true" />
                    ) : null}
                    {link.label}
                    {link.kind !== "repository" ? (
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    ) : null}
                  </TrackedAnchor>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <section aria-labelledby="project-context-heading" className="case-section">
          <h2 id="project-context-heading" className="sr-only">
            Project context
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="case-context">
              <p className="eyebrow">My contribution</p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--foreground)]">{project.role}</p>
            </div>
            <div className="case-context">
              <p className="eyebrow">Scope</p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--foreground)]">{project.scope}</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="focus-heading" className="case-section">
          <div className="case-heading-row">
            <div>
              <p className="eyebrow">System view</p>
              <h2 id="focus-heading" className="mt-4 font-display text-3xl text-[color:var(--foreground)] sm:text-4xl">
                What the work focused on
              </h2>
            </div>
            <span className="status-badge">{projectTypeLabels[project.type]}</span>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--line)] md:grid-cols-3">
            {project.focusAreas.map((focus) => (
              <article key={focus.title} className="bg-[color:var(--background-elevated)] p-6 sm:p-7">
                <p className="eyebrow">{focus.label}</p>
                <h3 className="mt-4 font-display text-2xl text-[color:var(--foreground)]">
                  {focus.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{focus.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="responsibilities-heading" className="case-section">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Delivery</p>
              <h2 id="responsibilities-heading" className="mt-4 font-display text-3xl text-[color:var(--foreground)] sm:text-4xl">
                What the work required
              </h2>
            </div>
            <ul className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
              {project.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-4 py-5 text-base leading-8 text-[color:var(--muted)]">
                  <Check className="mt-1.5 h-5 w-5 shrink-0 text-[color:var(--accent-strong)]" aria-hidden="true" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {project.demoId && project.demoUrl && project.demoPoster ? (
          <section aria-labelledby="demo-heading" className="case-section">
            <p className="eyebrow">Demo</p>
            <h2 id="demo-heading" className="mt-4 font-display text-3xl text-[color:var(--foreground)] sm:text-4xl">
              Watch the workflow from intake to review.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
              This demonstration shows the current prototype flow. It does not claim production deployment or measured business outcomes.
            </p>
            <div className="mt-8">
              <ClickToPlayVideo
                videoId={project.demoId}
                videoUrl={project.demoUrl}
                poster={project.demoPoster}
                title={project.name}
                projectSlug={project.slug}
              />
            </div>
          </section>
        ) : null}

        {project.surfaces?.map((surface) => (
          <section key={surface.name} aria-labelledby={`surface-${project.slug}-${surface.name.replaceAll(" ", "-")}`} className="case-section">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="eyebrow">{surface.label}</p>
                <h2
                  id={`surface-${project.slug}-${surface.name.replaceAll(" ", "-")}`}
                  className="mt-4 font-display text-3xl text-[color:var(--foreground)] sm:text-4xl"
                >
                  {surface.name}
                </h2>
                <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{surface.summary}</p>
                <ul className="mt-6 space-y-3">
                  {surface.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-[color:var(--muted)]">
                      <Check className="mt-1.5 h-4 w-4 shrink-0 text-[color:var(--accent-strong)]" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {surface.stack.map((item) => (
                    <span key={item} className="stack-chip">{item}</span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {surface.screenshots.map((screenshot, index) => (
                  <figure key={screenshot.src} className={`project-shot ${index === 0 ? "sm:col-span-2" : ""}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes={index === 0 ? "(max-width: 1024px) 100vw, 660px" : "(max-width: 1024px) 100vw, 330px"}
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="border-t border-[color:var(--line)] p-4">
                      <p className="font-semibold text-[color:var(--foreground)]">{screenshot.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{screenshot.detail}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}

        <footer className="case-footer">
          <p className="text-sm leading-7 text-[color:var(--muted)]">
            Looking for someone who can connect operational needs with software and automation?
          </p>
          <Link href="/contact" className="button-primary">
            Discuss a role or project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </footer>
      </article>
    </main>
  );
}
