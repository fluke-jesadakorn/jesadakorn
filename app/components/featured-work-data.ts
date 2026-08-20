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
  url?: string;
  linkLabel?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  screenshots: FeaturedScreenshot[];
}

export interface FeaturedFocus {
  title: string;
  label: string;
  detail: string;
}

export interface FeaturedCaseStudy {
  project: string;
  status: "Live side project" | "Working prototype";
  title: string;
  summary: string;
  repositoryUrl?: string;
  role: string;
  scope: string;
  responsibilities: string[];
  focusAreas: FeaturedFocus[];
  surfaces: FeaturedSurface[];
}

export const epsxCaseStudy: FeaturedCaseStudy = {
  project: "EPSX",
  status: "Live side project",
  title: "EPSX: Public analytics and internal operations interfaces.",
  summary:
    "EPSX is a personal side project with a public analytics product and a separate admin environment. The work brings data-heavy views, account access, notifications, payments, and developer tools into interfaces designed for different users.",
  repositoryUrl: "https://github.com/fluke-jesadakorn/epsx",
  role:
    "I worked across the product interfaces for both surfaces, translating requirements into navigation, access states, analytics views, and operational tools.",
  scope:
    "The project covers epsx.io and admin.epsx.io as connected parts of the same product, with different workflows for public users and operators.",
  responsibilities: [
    "Designed and built interface patterns shared across the public product and admin console.",
    "Mapped account access, wallet-related flows, analytics, notifications, and developer tools into a consistent product structure.",
    "Worked on the details needed for data-heavy and repetitive admin tasks, including filtering, status feedback, and access controls.",
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
      detail: "A live side project spanning customer-facing and internal interfaces.",
    },
  ],
  surfaces: [
    {
      id: "frontend",
      name: "epsx.io",
      label: "Public platform",
      url: "https://epsx.io",
      linkLabel: "Visit project",
      summary:
        "A public analytics product with plan-aware access, watchlists, search, filtering, and developer tools.",
      highlights: [
        "Introduces the product through landing, pricing, and account-entry flows.",
        "Organizes rankings, filtering, search, and access states for data-heavy views.",
        "Connects watchlists, portfolio tracking, and developer tools inside one product shell.",
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
      screenshots: [
        {
          src: "/featured-work/epsx/frontend/home.jpg",
          alt: "EPSX public homepage",
          title: "Landing and product framing",
          detail: "Product overview, supporting information, pricing, and entry points.",
        },
        {
          src: "/featured-work/epsx/frontend/analytics.jpg",
          alt: "EPSX analytics interface",
          title: "Analytics workspace",
          detail: "Filtering, ranking, access states, and table interaction.",
        },
        {
          src: "/featured-work/epsx/frontend/portfolio.jpg",
          alt: "EPSX portfolio interface",
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
      id: "admin",
      name: "admin.epsx.io",
      label: "Admin console",
      url: "https://admin.epsx.io",
      linkLabel: "Visit admin surface",
      summary:
        "An operations interface for wallet management, notifications, access, payments, and system information.",
      highlights: [
        "Groups operational modules and status information inside one dashboard shell.",
        "Supports wallet, subscription, access, and lifecycle tasks in dedicated workflows.",
        "Brings notifications, developer controls, and audit-oriented views into the same interface.",
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
      screenshots: [
        {
          src: "/featured-work/epsx/admin/dashboard.jpg",
          alt: "EPSX admin dashboard",
          title: "Operations dashboard",
          detail: "Module overview, system information, and access to common tasks.",
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
};

export const hrChatbotCaseStudy: FeaturedCaseStudy = {
  project: "HR AI Agent",
  status: "Working prototype",
  title: "HR AI Agent: Leave requests through LINE and an admin portal.",
  summary:
    "A working prototype that connects a LINE conversation with an n8n workflow, local language-model processing, structured leave data, and a web interface for review.",
  role:
    "I built the prototype flow, including webhooks, intent and detail extraction, conversation state, database updates, and the review interface.",
  scope:
    "The project explores how employees could submit leave information through a familiar chat interface while reviewers keep control of approval decisions.",
  responsibilities: [
    "Connected LINE Messaging API with n8n to receive and respond to employee messages.",
    "Implemented prompts for missing leave details and converted conversational text into structured data with a local model.",
    "Built a web interface for reviewing requests, updating their status, and returning the result through LINE.",
  ],
  focusAreas: [
    {
      title: "Conversation",
      label: "Employee flow",
      detail: "Collects leave type, dates, and context through LINE messages.",
    },
    {
      title: "Orchestration",
      label: "Automation",
      detail: "Uses n8n to connect messaging, local model processing, and stored data.",
    },
    {
      title: "Human review",
      label: "Admin flow",
      detail: "Keeps the approval or rejection decision in a web review interface.",
    },
  ],
  surfaces: [
    {
      id: "frontend",
      name: "LINE chatbot",
      label: "Employee interface",
      summary:
        "A conversational prototype where employees can enter leave information and receive status updates through LINE.",
      highlights: [
        "Extracts details from conversational Thai and asks follow-up questions when information is missing.",
        "Checks stored leave information before creating a request for review.",
        "Returns the updated request status through LINE messages.",
      ],
      stack: ["LINE Messaging API", "n8n", "Ollama", "Qwen", "PostgreSQL"],
      screenshots: [
        {
          src: "/featured-work/hr-chatbot/line-interface.svg",
          alt: "LINE chatbot leave-request prototype",
          title: "Conversational intake",
          detail: "A leave request being converted into structured information.",
        },
      ],
    },
    {
      id: "admin",
      name: "HR web portal",
      label: "Review interface",
      summary:
        "A prototype dashboard for reviewing leave information, request history, and status changes.",
      highlights: [
        "Presents pending requests and extracted details in a review queue.",
        "Provides controls for updating request status and leave information.",
        "Connects status changes back to the n8n messaging workflow.",
      ],
      stack: ["Next.js", "React", "Tailwind CSS", "n8n Webhook", "Node.js"],
      screenshots: [
        {
          src: "/featured-work/hr-chatbot/admin-portal.svg",
          alt: "HR web portal review prototype",
          title: "Request review queue",
          detail: "A review view showing employee status and extracted request data.",
        },
      ],
    },
  ],
};

export const contractAnalyzerCaseStudy: FeaturedCaseStudy = {
  project: "AI Contract Analyzer",
  status: "Working prototype",
  title: "AI Contract Analyzer: Assisted document review with local retrieval.",
  summary:
    "A working prototype that extracts contract information, retrieves related policy passages, and presents possible review points alongside the source document.",
  role:
    "I worked on document parsing, chunking, retrieval queries, and an interface that keeps the source document visible beside extracted information.",
  scope:
    "The project explores document-review assistance. Its output is intended to support a person reviewing the contract, not replace legal or compliance judgment.",
  responsibilities: [
    "Created extraction routines that turn PDF content into structured text for processing.",
    "Built chunking and retrieval steps for comparing passages with reference policies.",
    "Developed a split-screen interface for checking extracted information against the source document.",
  ],
  focusAreas: [
    {
      title: "Extraction",
      label: "Document processing",
      detail: "Converts document content into structured text and review fields.",
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
  surfaces: [
    {
      id: "frontend",
      name: "Analyzer console",
      label: "Reviewer workspace",
      summary:
        "An interface for uploading documents, reviewing extracted information, and comparing passages with reference material.",
      highlights: [
        "Places the source PDF beside extracted terms and possible review points.",
        "Groups information into categories such as obligations, dates, and policy references.",
        "Shows retrieved reference passages so a reviewer can check the context.",
      ],
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "LangChain",
        "Vector Database",
        "React PDF Viewer",
      ],
      screenshots: [
        {
          src: "/featured-work/contract/analyzer.svg",
          alt: "Contract analyzer review prototype",
          title: "Document review overview",
          detail: "A view of processed documents, extracted information, and review flags.",
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
