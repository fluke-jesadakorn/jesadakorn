# Jesadakorn Kirtnu — Portfolio Website

Personal portfolio website for Jesadakorn Kirtnu, a technology professional based in Phuket, Thailand.

The site presents experience across IT operations, software development, workflow automation, business systems, technical projects, and applied AI prototypes.

## Website Content

- Professional profile covering IT Operations & Infrastructure, Software & Business Systems, Workflow Automation & Applied AI, Project & Process Coordination, and Data & Technical Engineering.
- Folio ERP working prototype covering role-based financial workflows, task review, local AI assistance, and human approval steps.
- Interactive case studies with explicit status labels for the live EPSX side project and the HR AI Agent and AI Contract Analyzer prototypes.
- Responsive YouTube demo gallery with privacy-enhanced embedded players:
  - [Folio ERP](https://youtu.be/pdDgCdmcYdA)
  - [HR AI Agent](https://youtu.be/jhZXK7BY-kY)
  - [AI Contract Analyzer](https://youtu.be/HYIIDeUxzis)
- Resume/CV and direct contact pages.

## Technology

- Next.js App Router with React and TypeScript
- Tailwind CSS 4 and custom design tokens
- Lucide icons and `next/font`
- Bun package manager
- Static portfolio content with responsive, accessible layouts

## Getting Started

Install dependencies and start the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
bun dev       # Start the local development server
bun run build # Create a production build
bun run resume:pdf # Regenerate the one-page public resume PDF
bun start     # Serve the production build
bun run lint  # Run the configured Next.js lint command
```

## Project Structure

```text
app/
  page.tsx                         Homepage and metadata
  components/ProfessionalProfileSection.tsx
  components/VideoDemoSection.tsx
  components/FeaturedWorkSection.tsx
  components/Portfolio.tsx
  resume/page.tsx                  Resume/CV page
  contact/page.tsx                 Contact page
public/
  og.png                           Social preview image
  Jesadakorn-Kirtnu-Resume.pdf     Generated public one-page resume
```

## Updating the Resume

The web resume and downloadable PDF share the same public content source:

1. Edit `content/resume.public.json`.
2. Run `bun run resume:pdf` to refresh the metadata-stripped portrait and PDF.
3. Run `bun run build` to validate the website.

The generator uses `uv` to run Python with ReportLab and Pillow. The public resume intentionally excludes age, birth date, nationality, street address, phone number, and personal email.

## Related Links

- Website: [jesadakorn.com](https://jesadakorn.com)
- GitHub: [github.com/fluke-jesadakorn](https://github.com/fluke-jesadakorn)
- LinkedIn: [Jesadakorn Kirtnu](https://www.linkedin.com/in/jesadakorn-kirtnu-81b9601b9/)
