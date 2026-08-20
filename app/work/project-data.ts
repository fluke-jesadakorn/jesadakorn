export type ProjectType = "live" | "prototype" | "experiment";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "repository" | "public-site" | "admin-site";
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  title: string;
  detail: string;
}

export interface ProjectSurface {
  name: string;
  label: string;
  summary: string;
  highlights: string[];
  stack: string[];
  screenshots: ProjectScreenshot[];
}

export interface ProjectCaseStudy {
  slug: "epsx" | "folio-erp" | "hr-ai-agent" | "ai-contract-analyzer";
  type: ProjectType;
  name: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  scope: string;
  responsibilities: string[];
  focusAreas: Array<{
    title: string;
    label: string;
    detail: string;
  }>;
  stack: string[];
  cardImage: string;
  cardImageAlt: string;
  links?: ProjectLink[];
  demoUrl?: string;
  demoId?: string;
  demoPoster?: string;
  surfaces?: ProjectSurface[];
  structuredDataType: "SoftwareApplication" | "CreativeWork";
}

export const projectTypeLabels: Record<ProjectType, string> = {
  live: "Live project",
  prototype: "Working prototype",
  experiment: "Experiment",
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "epsx",
    type: "live",
    name: "EPSX",
    eyebrow: "Live side project",
    title: "Public analytics and internal operations interfaces.",
    summary:
      "A live side project spanning a public analytics product and a separate admin environment, with workflows for account access, data-heavy views, notifications, payments, and developer tools.",
    role:
      "I worked across both product interfaces, translating requirements into navigation, access states, analytics views, and operational tools.",
    scope:
      "The project connects epsx.io and admin.epsx.io as two surfaces with different workflows for public users and operators.",
    responsibilities: [
      "Designed and built interface patterns shared across the public product and admin console.",
      "Mapped account access, wallet-related flows, analytics, notifications, and developer tools into a consistent structure.",
      "Developed details for data-heavy and repetitive admin work, including filtering, status feedback, and access controls.",
    ],
    focusAreas: [
      {
        title: "Public product",
        label: "User experience",
        detail: "Landing, pricing, analytics, watchlists, portfolio views, and developer access.",
      },
      {
        title: "Admin console",
        label: "Operations",
        detail: "Wallet access, plans, payments, notifications, and developer controls.",
      },
      {
        title: "Connected delivery",
        label: "Project scope",
        detail: "Customer-facing and internal interfaces maintained as one product system.",
      },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Wagmi", "Radix UI", "React Query"],
    cardImage: "/featured-work/epsx/frontend/analytics.jpg",
    cardImageAlt: "EPSX analytics interface with rankings and filters",
    links: [
      {
        label: "Repository",
        href: "https://github.com/fluke-jesadakorn/epsx",
        kind: "repository",
      },
      {
        label: "Public site",
        href: "https://epsx.io",
        kind: "public-site",
      },
      {
        label: "Admin site",
        href: "https://admin.epsx.io",
        kind: "admin-site",
      },
    ],
    surfaces: [
      {
        name: "epsx.io",
        label: "Public platform",
        summary:
          "A public analytics product with plan-aware access, watchlists, search, filtering, and developer tools.",
        highlights: [
          "Introduces the product through landing, pricing, and account-entry flows.",
          "Organizes rankings, filtering, search, and access states for data-heavy views.",
          "Connects watchlists, portfolio tracking, and developer tools inside one product shell.",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "RainbowKit", "Wagmi", "React Query"],
        screenshots: [
          {
            src: "/featured-work/epsx/frontend/home.jpg",
            alt: "EPSX public homepage",
            title: "Landing and product framing",
            detail: "Product overview, pricing, and account entry points.",
          },
          {
            src: "/featured-work/epsx/frontend/analytics.jpg",
            alt: "EPSX analytics workspace",
            title: "Analytics workspace",
            detail: "Filtering, ranking, access states, and table interaction.",
          },
          {
            src: "/featured-work/epsx/frontend/portfolio.jpg",
            alt: "EPSX portfolio tracking interface",
            title: "Portfolio tracking",
            detail: "Watchlist-focused flows with status and monitoring cues.",
          },
          {
            src: "/featured-work/epsx/frontend/developer.jpg",
            alt: "EPSX developer portal",
            title: "Developer tools",
            detail: "API access, key lifecycle, and usage views.",
          },
        ],
      },
      {
        name: "admin.epsx.io",
        label: "Admin console",
        summary:
          "An operations interface for wallet management, notifications, access, payments, and system information.",
        highlights: [
          "Groups operational modules and status information inside one dashboard shell.",
          "Supports wallet, subscription, access, and lifecycle tasks in dedicated workflows.",
          "Brings notifications, developer controls, and audit-oriented views into the same interface.",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "Radix UI", "Wagmi", "DnD Kit"],
        screenshots: [
          {
            src: "/featured-work/epsx/admin/dashboard.jpg",
            alt: "EPSX admin dashboard",
            title: "Operations dashboard",
            detail: "Module overview, system information, and common tasks.",
          },
          {
            src: "/featured-work/epsx/admin/wallet-management.jpg",
            alt: "EPSX admin wallet management",
            title: "Wallet management",
            detail: "Subscriptions, credits, access state, and lifecycle controls.",
          },
          {
            src: "/featured-work/epsx/admin/notifications.jpg",
            alt: "EPSX admin notifications",
            title: "Notification workflows",
            detail: "Broadcast review, filters, and monitoring views.",
          },
          {
            src: "/featured-work/epsx/admin/developer-portal.jpg",
            alt: "EPSX admin developer portal",
            title: "Developer controls",
            detail: "Capability access, key management, and admin oversight.",
          },
        ],
      },
    ],
    structuredDataType: "SoftwareApplication",
  },
  {
    slug: "folio-erp",
    type: "prototype",
    name: "Folio ERP",
    eyebrow: "Working prototype",
    title: "A multi-stage financial workflow with human review.",
    summary:
      "A working prototype for document intake, multi-role approvals, accounting review, and settlement, with local AI features used for extraction and suggestions.",
    role:
      "I designed and built the workflow model, role-aware interfaces, review states, and AI-assisted document steps shown in the prototype.",
    scope:
      "The prototype explores how a financial process can move from intake to settlement while keeping responsibilities and approval decisions visible.",
    responsibilities: [
      "Mapped document intake, approval, accounting, and settlement into a role-based workflow.",
      "Explored task ownership and status checks for processes shared by several reviewers.",
      "Tested local document extraction, policy lookup, account suggestions, and VAT checks with human approval steps.",
    ],
    focusAreas: [
      {
        title: "Role-based flow",
        label: "Process design",
        detail: "Separates responsibilities across intake, review, approval, accounting, and settlement.",
      },
      {
        title: "Task ownership",
        label: "Coordination",
        detail: "Uses task claiming and status checks when several people work in the same process.",
      },
      {
        title: "Local assistance",
        label: "Applied AI",
        detail: "Treats extraction and suggestions as reviewer inputs rather than final decisions.",
      },
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Ollama", "Document processing"],
    cardImage: "/featured-work/folio-erp/demo-poster.svg",
    cardImageAlt: "Neutral diagram of the Folio ERP financial workflow",
    demoUrl: "https://youtu.be/pdDgCdmcYdA",
    demoId: "pdDgCdmcYdA",
    demoPoster: "/featured-work/folio-erp/demo-poster.svg",
    structuredDataType: "SoftwareApplication",
  },
  {
    slug: "hr-ai-agent",
    type: "experiment",
    name: "HR AI Agent",
    eyebrow: "Applied AI experiment",
    title: "Leave requests through LINE and a review portal.",
    summary:
      "An experiment connecting a LINE conversation with n8n, local language-model processing, structured leave data, and a web interface for review.",
    role:
      "I built the prototype flow across webhooks, intent and detail extraction, conversation state, database updates, and the review interface.",
    scope:
      "The experiment explores conversational leave intake while keeping approval and rejection decisions with a human reviewer.",
    responsibilities: [
      "Connected LINE Messaging API with n8n to receive and respond to employee messages.",
      "Prompted for missing leave details and converted conversational Thai into structured data with a local model.",
      "Built a web review interface for request status updates and return messages through LINE.",
    ],
    focusAreas: [
      {
        title: "Conversation",
        label: "Employee flow",
        detail: "Collects leave type, dates, and context through familiar chat interactions.",
      },
      {
        title: "Orchestration",
        label: "Automation",
        detail: "Connects messaging, local model processing, and stored data through n8n.",
      },
      {
        title: "Human review",
        label: "Decision point",
        detail: "Leaves the approval or rejection decision in a web review interface.",
      },
    ],
    stack: ["LINE Messaging API", "n8n", "Ollama", "Qwen", "PostgreSQL", "Next.js"],
    cardImage: "/featured-work/hr-chatbot/admin-portal.svg",
    cardImageAlt: "Neutral HR leave-request review interface prototype",
    surfaces: [
      {
        name: "Conversation and review",
        label: "Prototype flow",
        summary:
          "A conversational intake and web review flow for converting messages into structured leave requests.",
        highlights: [
          "Asks follow-up questions when required information is missing.",
          "Creates a structured request for a reviewer rather than making the decision automatically.",
          "Returns status changes through the messaging workflow.",
        ],
        stack: ["LINE Messaging API", "n8n", "Ollama", "PostgreSQL", "Next.js"],
        screenshots: [
          {
            src: "/featured-work/hr-chatbot/line-interface.svg",
            alt: "Leave-request conversation prototype",
            title: "Conversational intake",
            detail: "A leave request converted into structured information.",
          },
          {
            src: "/featured-work/hr-chatbot/admin-portal.svg",
            alt: "Leave-request review portal prototype",
            title: "Request review queue",
            detail: "A review view with extracted request data and status controls.",
          },
        ],
      },
    ],
    structuredDataType: "SoftwareApplication",
  },
  {
    slug: "ai-contract-analyzer",
    type: "experiment",
    name: "AI Contract Analyzer",
    eyebrow: "Applied AI experiment",
    title: "Assisted document review with local retrieval.",
    summary:
      "An experiment that extracts contract information, retrieves related policy passages, and presents possible review points beside the source document.",
    role:
      "I worked on document parsing, chunking, retrieval queries, and an interface that keeps the source visible beside extracted information.",
    scope:
      "The experiment supports document review; its output is not intended to replace legal, compliance, or business judgment.",
    responsibilities: [
      "Created extraction routines that turn PDF content into structured text for processing.",
      "Built chunking and retrieval steps for comparing contract passages with reference policies.",
      "Developed a split-screen interface for checking extracted information against the source document.",
    ],
    focusAreas: [
      {
        title: "Extraction",
        label: "Document processing",
        detail: "Converts source content into structured text and review fields.",
      },
      {
        title: "Reference lookup",
        label: "Local retrieval",
        detail: "Finds related passages from a locally indexed policy collection.",
      },
      {
        title: "Source checking",
        label: "Human review",
        detail: "Keeps suggested review points connected to the original document.",
      },
    ],
    stack: ["Next.js", "React", "LangChain", "Vector database", "PDF processing"],
    cardImage: "/featured-work/contract/analyzer.svg",
    cardImageAlt: "Neutral split-screen contract review interface prototype",
    surfaces: [
      {
        name: "Reviewer workspace",
        label: "Prototype interface",
        summary:
          "A split-screen workspace for comparing the source document with extracted terms and retrieved references.",
        highlights: [
          "Places the source PDF beside extracted terms and possible review points.",
          "Groups information into obligations, dates, and related policy passages.",
          "Shows retrieved references so a person can check the context.",
        ],
        stack: ["Next.js", "React", "LangChain", "Vector database", "PDF viewer"],
        screenshots: [
          {
            src: "/featured-work/contract/analyzer.svg",
            alt: "Contract analyzer reviewer workspace prototype",
            title: "Document review workspace",
            detail: "The source document, extracted information, and review points shown together.",
          },
        ],
      },
    ],
    structuredDataType: "CreativeWork",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
