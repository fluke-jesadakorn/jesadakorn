# Jesadakorn Kirtnu — Portfolio

Personal portfolio for Jesadakorn Kirtnu, a technical generalist based in Phuket, Thailand. The site connects three areas of work: technology operations, software, and workflow improvement.

## Structure

- Homepage: concise positioning, capabilities, selected work, experience, and contact path
- Static case studies:
  - `/work/epsx` — live side project
  - `/work/folio-erp` — working prototype
  - `/work/hr-ai-agent` — applied AI experiment
  - `/work/ai-contract-analyzer` — applied AI experiment
- `/resume` — single-column HTML resume with the one-page tagged PDF at the existing public URL
- `/contact` — separate paths for role opportunities and project collaboration

Project status and available outputs are explicit. EPSX links to its repository, public site, and admin site. Folio ERP includes a click-to-load YouTube demo. Experiments without public output URLs do not show repository, live-product, or demo links.

## Technology

- Next.js App Router, React, and TypeScript
- Tailwind CSS 4 with custom design tokens
- `next/image` and `next/font`
- Vercel Web Analytics with project, resume, and contact conversion events
- Metadata routes for `robots.txt` and `sitemap.xml`
- Person and project JSON-LD

## Development

```bash
bun install
bun run dev
```

Validation commands:

```bash
bun run lint
bun run build
bun run resume:pdf
git diff --check
```

## Resume

The HTML resume and downloadable PDF share content from `content/resume.public.json`. The PDF generator creates an ATS-first, tagged, one-page PDF through LibreOffice and keeps the public filename `Jesadakorn-Kirtnu-Resume.pdf`.

## Related Links

- Website: [jesadakorn.com](https://jesadakorn.com)
- GitHub: [github.com/fluke-jesadakorn](https://github.com/fluke-jesadakorn)
- LinkedIn: [Jesadakorn Kirtnu](https://www.linkedin.com/in/jesadakorn-kirtnu-81b9601b9/)
