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
  repositoryUrl: string;
  role: string;
  scope: string;
  responsibilities: string[];
  metrics: FeaturedMetric[];
  surfaces: FeaturedSurface[];
}

export const epsxCaseStudy: FeaturedCaseStudy = {
  project: "EPSX",
  title: "EPSX side project spanning public analytics and internal operations.",
  summary:
    "EPSX is a separate side project where I shaped a clear product experience for two audiences at once: people exploring market analytics on the public platform and operators managing access, payments, notifications, and developer workflows behind the scenes.",
  repositoryUrl: "https://github.com/fluke-jesadakorn/epsx",
  role:
    "A personal side project where I handled the product-facing interface delivery across both surfaces, turning complex requirements into structured navigation, plan-aware states, and day-to-day operational tooling.",
  scope:
    "The work covered epsx.io and admin.epsx.io as one connected system, with emphasis on high-density information, permission-sensitive flows, and interfaces that stay legible under real operating pressure.",
  responsibilities: [
    "Designed and built interface patterns shared across the public product and the internal admin console.",
    "Mapped gated states, wallet-related flows, analytics views, and developer-facing tooling into a coherent navigation system.",
    "Focused on clarity for heavy operational tasks rather than decorative UI, especially across admin, notifications, and access management.",
  ],
  metrics: [
    {
      value: "38",
      label: "Public product states",
      detail: "Landing, pricing, analytics, portfolio, notifications, plans, and developer experiences.",
    },
    {
      value: "46",
      label: "Admin states",
      detail: "Operations, wallet access, plans, payments, notifications, and audit-heavy tooling.",
    },
    {
      value: "2",
      label: "Live product surfaces",
      detail: "A public user-facing platform and a separate admin operating environment.",
    },
  ],
  surfaces: [
    {
      id: "frontend",
      name: "epsx.io",
      label: "Public Platform",
      url: "https://epsx.io",
      summary:
        "A public-facing analytics platform built around plan-aware access, watchlist workflows, and data-heavy product navigation without losing readability.",
      highlights: [
        "Established a landing and pricing experience that explains the product clearly before users enter gated flows.",
        "Structured rankings, filtering, search, and premium access states so dense information remains scannable.",
        "Connected watchlists, portfolio tracking, and developer tooling inside a product shell that feels consistent end to end.",
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
          title: "Landing and framing",
          detail: "Product positioning, supporting metrics, pricing, and entry points.",
        },
        {
          src: "/featured-work/epsx/frontend/analytics.jpg",
          alt: "EPSX analytics screen capture",
          title: "Analytics workspace",
          detail: "Filtering, ranking, gated data access, and dense table interaction.",
        },
        {
          src: "/featured-work/epsx/frontend/portfolio.jpg",
          alt: "EPSX portfolio screen capture",
          title: "Portfolio tracking",
          detail: "Watchlist-focused flows with clear states and monitoring cues.",
        },
        {
          src: "/featured-work/epsx/frontend/developer.jpg",
          alt: "EPSX developer portal screen capture",
          title: "Developer tooling",
          detail: "API access, key lifecycle, and usage views for external consumers.",
        },
      ],
    },
    {
      id: "admin",
      name: "admin.epsx.io",
      label: "Admin Console",
      url: "https://admin.epsx.io",
      summary:
        "An internal operations console that supports wallet management, notifications, access control, payments, and system-level observability inside one working environment.",
      highlights: [
        "Built a command-center shell for operations work where multiple modules need to stay connected and quickly actionable.",
        "Clarified wallet, subscription, access, and lifecycle controls for repetitive admin tasks with less friction.",
        "Grouped notifications, analytics, developer controls, and audit-oriented workflows into a single operational surface.",
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
          title: "Operations dashboard",
          detail: "Module visibility, health signals, and quick access to critical tasks.",
        },
        {
          src: "/featured-work/epsx/admin/wallet-management.jpg",
          alt: "EPSX admin wallet management capture",
          title: "Wallet management",
          detail: "Subscriptions, credits, access state, and lifecycle control tools.",
        },
        {
          src: "/featured-work/epsx/admin/notifications.jpg",
          alt: "EPSX admin notifications capture",
          title: "Notification workflows",
          detail: "Broadcast review, filters, and admin monitoring patterns.",
        },
        {
          src: "/featured-work/epsx/admin/developer-portal.jpg",
          alt: "EPSX admin developer portal capture",
          title: "Developer controls",
          detail: "Premium capability gating, key management, and admin oversight.",
        },
      ],
    },
  ],
};

export const hrChatbotCaseStudy: FeaturedCaseStudy = {
  project: "HR AI Agent",
  title: "Modern HR leave request automation via LINE Chatbot and n8n orchestration.",
  summary:
    "Built a Modern Workplace HR AI Agent system integrating a LINE Chatbot conversational interface with a Web Admin Portal. It processes employee leave requests in natural language using a local LLM and orchestrates complex approval pipelines in n8n.",
  repositoryUrl: "https://github.com/fluke-jesadakorn/hr-ai-agent",
  role:
    "Sole developer creating the end-to-end integration: setting up n8n webhooks, intent classification with local LLMs, slot-filling state machine logic, and manager approval interfaces.",
  scope:
    "The project replaces paper-based leave requests with a 1-click digital approval workflow, ensuring strict data privacy by running NLP and database operations locally.",
  responsibilities: [
    "Integrated LINE Messaging API with n8n to ingest conversational messages from employees.",
    "Engineered slot-filling logic in n8n to prompt users for missing details (leave type, dates, reason) dynamically.",
    "Deployed local LLM (Ollama Qwen 2.5) to parse user intents and convert conversational text into structured JSON data.",
    "Created an HR web interface where administrators review pending leaves and approve/reject them in a single click.",
  ],
  metrics: [
    {
      value: "1 Click",
      label: "Leave Approval",
      detail: "Managers approve leaves instantly from a secure, clean web dashboard.",
    },
    {
      value: "100%",
      label: "Privacy-focused NLP",
      detail: "All user conversations are analyzed locally on-premise using Ollama and Qwen 2.5.",
    },
    {
      value: "Zero paper",
      label: "HR Efficiency",
      detail: "Leaves are logged directly in PostgreSQL databases, notifying employees automatically via LINE.",
    },
  ],
  surfaces: [
    {
      id: "frontend",
      name: "LINE Chatbot",
      label: "Employee Interface",
      url: "https://line.me",
      summary:
        "A conversational interface on LINE where employees query leave balance, check corporate holidays, and request leaves in natural language.",
      highlights: [
        "Understands casual Thai requests (e.g., 'ขอลากิจวันพรุ่งนี้ไปทำธุระ') and extracts details.",
        "Validates leave quotas dynamically before sending requests to the approval pipeline.",
        "Notifies employees instantly through LINE Push Messages once their leaves are approved or rejected.",
      ],
      stack: [
        "LINE Messaging API",
        "n8n",
        "Ollama",
        "Qwen 2.5",
        "PostgreSQL",
      ],
      stateCount: 12,
      screenshots: [
        {
          src: "/featured-work/hr-chatbot/line-interface.svg",
          alt: "LINE Chatbot conversational leave request",
          title: "Conversational intake",
          detail: "Natural language leave request being parsed by the AI bot.",
        },
      ],
    },
    {
      id: "admin",
      name: "HR Web Portal",
      label: "Admin Console",
      url: "https://github.com/fluke-jesadakorn/hr-ai-agent",
      summary:
        "A centralized dashboard for HR administrators to manage quotas, audit history, and process leave requests with real-time status updates.",
      highlights: [
        "Shows active leaves in a clean queue sorted by urgency and LLM extraction confidence.",
        "Allows HR to adjust quotas and leave policies directly without database manual edits.",
        "Triggers n8n callback nodes to send automated feedback to employees on LINE.",
      ],
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "n8n Webhook",
        "Node.js",
      ],
      stateCount: 8,
      screenshots: [
        {
          src: "/featured-work/hr-chatbot/admin-portal.svg",
          alt: "HR Web Portal approval interface",
          title: "Admin approval queue",
          detail: "One-click approval queue displaying employee status and LLM-extracted request data.",
        },
      ],
    },
  ],
};

export const contractAnalyzerCaseStudy: FeaturedCaseStudy = {
  project: "AI Contract Analyzer",
  title: "Automated organizational document intelligence and risk analysis system.",
  summary:
    "An AI-powered document analysis system that audits legal contracts. It extracts key metadata, analyzes commitments, and flags high-risk clauses (like unlimited liability or non-standard notice periods) using a secure, private RAG pipeline.",
  repositoryUrl: "https://github.com/fluke-jesadakorn/ai-contract-analyzer",
  role:
    "Developer shaping the document parsing pipeline, custom chunking algorithms, semantic vector search, and visual auditing interfaces.",
  scope:
    "Built for organizational teams to reduce manual review times of vendor agreements and contracts, keeping all sensitive files within a secure data perimeter.",
  responsibilities: [
    "Created PDF extraction routines to convert scanned documents into clean, structured markdown.",
    "Designed semantic chunking and RAG queries to verify clauses against standard company compliance policies.",
    "Built an interactive split-screen dashboard displaying the document on one side and AI-extracted audit flags on the other.",
  ],
  metrics: [
    {
      value: "80%+",
      label: "Review time saved",
      detail: "Reduces manual review efforts from hours to minutes for standard commercial contracts.",
    },
    {
      value: "Real-time",
      label: "Risk flagging",
      detail: "Instantly highlights liability caps, indemnification issues, and auto-renewals.",
    },
    {
      value: "Private RAG",
      label: "Data security",
      detail: "Runs securely using local vector indexing to prevent organizational document leaks.",
    },
  ],
  surfaces: [
    {
      id: "frontend",
      name: "Analyzer Console",
      label: "Auditor Workspace",
      url: "https://github.com/fluke-jesadakorn/ai-contract-analyzer",
      summary:
        "An interactive workspace for legal and compliance teams to upload documents, review obligation summaries, and search across past contracts.",
      highlights: [
        "Interactive PDF viewer that syncs directly with AI-flagged risk clauses and key terms.",
        "Categorized sidebar grouping extractions into Liabilities, Obligation Dates, and Compliance.",
        "Standard policy checker comparing contract terms against standard corporate guidelines.",
      ],
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "LangChain",
        "Vector Database",
        "React PDF Viewer",
      ],
      stateCount: 15,
      screenshots: [
        {
          src: "/featured-work/contract/analyzer.svg",
          alt: "Contract analyzer main dashboard",
          title: "Contract overview",
          detail: "Main view listing processed contracts, compliance percentages, and alert flags.",
        },
      ],
    },
  ],
};

export const featuredProjects: FeaturedCaseStudy[] = [
  hrChatbotCaseStudy,
  contractAnalyzerCaseStudy,
  epsxCaseStudy,
];
