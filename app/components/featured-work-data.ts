export interface FeaturedScreenshot {
  src: string;
  alt: string;
  title: string;
  detail: string;
}

export interface FeaturedSurface {
  id: "frontend" | "admin";
  name: string;
  label: string;
  url: string;
  summary: string;
  highlights: string[];
  stack: string[];
  stateCount: number;
  screenshots: FeaturedScreenshot[];
}

export interface FeaturedMetric {
  value: string;
  label: string;
  detail: string;
}

export interface FeaturedCaseStudy {
  project: string;
  title: string;
  summary: string;
  ownership: string;
  metrics: FeaturedMetric[];
  surfaces: FeaturedSurface[];
}

export const epsxCaseStudy: FeaturedCaseStudy = {
  project: "EPSX",
  title: "Featured Work: EPSX Product Ecosystem",
  summary:
    "A paired product experience spanning a public analytics platform and an internal operations console, both designed to feel fast, data-rich, and production ready.",
  ownership:
    "I built the product surfaces for epsx.io and admin.epsx.io, then used the captured live UI states as the visual reference for this portfolio showcase.",
  metrics: [
    {
      value: "38",
      label: "Frontend States",
      detail: "Public, analytics, portfolio, notifications, plans, and developer flows.",
    },
    {
      value: "46",
      label: "Admin States",
      detail: "Operations, wallet access, plans, payments, notifications, and audit tooling.",
    },
    {
      value: "2",
      label: "Live Surfaces",
      detail: "A public user product and a separate admin control console.",
    },
  ],
  surfaces: [
    {
      id: "frontend",
      name: "epsx.io",
      label: "Public Platform",
      url: "https://epsx.io",
      summary:
        "A market analytics experience with plan-aware access, watchlist workflows, and developer tooling shaped around real-time stock intelligence.",
      highlights: [
        "Landing, pricing, and wallet-auth entry flow with a strong product narrative.",
        "Analytics rankings with filters, search, sorting, and plan-gated access states.",
        "Portfolio and permissions surfaces for watchlists, access visibility, and usage control.",
        "Developer portal with API keys, docs, and usage views for external consumers.",
      ],
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "RainbowKit",
        "Wagmi",
        "Radix UI",
        "React Query",
      ],
      stateCount: 38,
      screenshots: [
        {
          src: "/featured-work/epsx/frontend/home.jpg",
          alt: "EPSX public homepage capture",
          title: "Landing Experience",
          detail: "Hero, stats, pricing, and CTA framing.",
        },
        {
          src: "/featured-work/epsx/frontend/analytics.jpg",
          alt: "EPSX analytics screen capture",
          title: "Analytics",
          detail: "Plan gating with filters and ranking access.",
        },
        {
          src: "/featured-work/epsx/frontend/portfolio.jpg",
          alt: "EPSX portfolio screen capture",
          title: "Portfolio",
          detail: "Watchlist-focused tracking and empty states.",
        },
        {
          src: "/featured-work/epsx/frontend/developer.jpg",
          alt: "EPSX developer portal screen capture",
          title: "Developer Portal",
          detail: "API access, key lifecycle, and usage surfaces.",
        },
      ],
    },
    {
      id: "admin",
      name: "admin.epsx.io",
      label: "Admin Console",
      url: "https://admin.epsx.io",
      summary:
        "An internal command surface for operating the EPSX ecosystem, with wallet controls, permissions, notifications, and admin-facing observability.",
      highlights: [
        "Command-center dashboard for operational health and cross-system visibility.",
        "Wallet management hub for subscriptions, access, credits, and lifecycle controls.",
        "Notification workflows for broadcast, monitoring, and recent event review.",
        "Developer, analytics, payments, and audit-log tooling inside a unified admin shell.",
      ],
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Radix UI",
        "Wagmi",
        "DnD Kit",
        "Jest + Playwright",
      ],
      stateCount: 46,
      screenshots: [
        {
          src: "/featured-work/epsx/admin/dashboard.jpg",
          alt: "EPSX admin dashboard capture",
          title: "Command Center",
          detail: "Operational overview with health and module cards.",
        },
        {
          src: "/featured-work/epsx/admin/wallet-management.jpg",
          alt: "EPSX admin wallet management capture",
          title: "Wallet Management",
          detail: "Subscriptions, access, credits, and wallet lifecycle tools.",
        },
        {
          src: "/featured-work/epsx/admin/notifications.jpg",
          alt: "EPSX admin notifications capture",
          title: "Notifications",
          detail: "Broadcast overview, filtering, and monitoring states.",
        },
        {
          src: "/featured-work/epsx/admin/developer-portal.jpg",
          alt: "EPSX admin developer portal capture",
          title: "Developer Controls",
          detail: "API key management and premium capability gating.",
        },
      ],
    },
  ],
};
