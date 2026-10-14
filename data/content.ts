export type ArchNode = {
  label: string;
  kind: "edge" | "queue" | "compute" | "store";
};

export type Project = {
  name: string;
  url?: string;
  summary: string;
  stack: string[];
  headline?: { value: string; label: string };
  arch?: ArchNode[];
  bullets: string[];
};

export type Job = {
  company: string;
  url: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  projects: Project[];
};

export const profile = {
  name: "Kaustav Tarafdar",
  handle: "kaustav",
  title: "Backend & AI Infrastructure Engineer",
  current: { company: "TechyMonks", url: "https://www.techymonks.com/" },
  focus: "Distributed Systems",
  blurb: "Distributed backends, ML inference pipelines and multi-tenant systems that stay up under load.",
  kicker: "Fueled by curiosity and a very long log tail.",
  location: "India (GMT+5:30)",
  footerLeft: "backend / infra / ai",
  footerRight: "2 years of shipping things that scale.",
};

export const metrics = [
  { value: "2 yrs", label: "shipping production backends" },
  { value: "80K", label: "users launched to" },
  { value: "50/s", label: "peak requests, GPU inference" },
  { value: "200x", label: "faster per-image inference" },
  { value: "10", label: "GPU VMs orchestrated" },
];

export const featured = ["Face Effects", "WeClick", "Gomotto"];

export const socials = [
  { label: "email", href: "mailto:kaustarafdar@gmail.com" },
  { label: "github", href: "https://github.com/KausTarafdar" },
  { label: "linkedin", href: "https://linkedin.com/in/kaustav-tarafdar" },
  { label: "resume", href: "/resume.pdf" },
];

export const experience: Job[] = [
  {
    company: "TechyMonks",
    url: "https://www.techymonks.com/",
    role: "Software Engineer",
    dates: "Feb 2026 — Present",
    location: "Remote, India",
    summary: "Backend engineer owning architecture, integrations and CI/CD across client platforms.",
    projects: [
      {
        name: "Gomotto",
        summary: "Lead-conversion platform for HVAC companies: CRM sync, AI call analysis, field-sales mobile app.",
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Twilio"],
        headline: { value: "3 CRMs", label: "integrated per tenant" },
        arch: [
          { label: "ServiceTitan / CTM / GHL", kind: "edge" },
          { label: "Poll + webhooks", kind: "queue" },
          { label: "Node API", kind: "compute" },
          { label: "Redis", kind: "store" },
          { label: "Postgres, schema per tenant", kind: "store" },
        ],
        bullets: [
          "**Multi-tenant CRM layer.** ServiceTitan, CallTrackingMetrics and GoHighLevel over an in-house polling and webhook pipeline.",
          "**Schema-per-tenant isolation** in PostgreSQL for hard multi-tenancy.",
          "**Twilio masked calling** via a two-way proxy number pool, plus ghost mode to keep raw recordings private.",
          "**Mobile backend.** Redis leaderboards, daily appointments, AI call summaries and Ask Gomotto analytics agent.",
          "**Geo-fencing** notifies reps when they near their next appointment.",
          "**Onboarding.** Email-invite team management and SOP ingestion with agentic configuration.",
        ],
      },
      {
        name: "BuyBox Cartel",
        url: "https://www.buyboxcartel.com/",
        summary: "Deal-evaluation engine for wholesale real estate, backed by a verified cash-buyer network.",
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Stripe"],
        headline: { value: "V2", label: "re-architecture, CI/CD from scratch" },
        arch: [
          { label: "Client", kind: "edge" },
          { label: "Controller", kind: "compute" },
          { label: "Service", kind: "compute" },
          { label: "Repository", kind: "compute" },
          { label: "Postgres", kind: "store" },
        ],
        bullets: [
          "**V2 re-architecture.** Controller-Service-Repository, enforced repo SOP and guards, N+1 queries removed.",
          "**Affiliate revenue channel** shipped end-to-end on Stripe webhooks, with autopay and bulk withdrawals.",
          "**CI/CD from scratch.** Isolated dev/stage/prod GitHub Actions behind ESLint and TypeScript gates.",
          "**Observability.** Papertrail tags, V2 health checks with DB statement timeouts, Stripe renewal failure tagging.",
          "**Reliability.** Bank-detail caching and patches so third-party failures stop breaking signups.",
        ],
      },
      {
        name: "Binance Trade Bot",
        summary: "Rules-based crypto futures system with research, backtesting, live execution and dashboard.",
        stack: ["Python", "CCXT", "Supabase", "Next.js", "Docker", "Fly.io"],
        headline: { value: "10,000+", label: "Monte Carlo simulations" },
        arch: [
          { label: "Regime", kind: "compute" },
          { label: "Setup", kind: "compute" },
          { label: "Trigger", kind: "compute" },
          { label: "Risk", kind: "compute" },
          { label: "Binance / OKX", kind: "edge" },
        ],
        bullets: [
          "**Zero backtest-live drift.** One four-phase pipeline (regime, setup, trigger, risk) shared by both.",
          "**Monte Carlo risk engine.** 10,000+ resamples (IID, permutation, block bootstrap) for drawdown and Calmar distributions.",
          "**Live deploy** on Binance and OKX with dry-run and testnet modes, Supabase state, Fly.io containers.",
          "**25+ analysis scripts**, including the evidence that retired a weak strategy.",
          "**Dashboard** for live and historical PnL, positions and trades.",
        ],
      },
      {
        name: "Linkme",
        summary: "WhatsApp booking bot plus AI marketing and customer-insight engine for salons.",
        stack: ["FastAPI", "LangChain", "Redis", "PostgreSQL", "S3", "Gemini"],
        arch: [
          { label: "WhatsApp", kind: "edge" },
          { label: "Webhook", kind: "queue" },
          { label: "FastAPI", kind: "compute" },
          { label: "LangChain agents", kind: "compute" },
          { label: "Postgres / Redis / S3", kind: "store" },
        ],
        bullets: [
          "**Multi-tenant FastAPI platform** replacing manual salon bookings with a webhook WhatsApp bot.",
          "**Conversational flows.** Booking, reminders and state management in real time.",
          "**AI engines.** Campaign, ad-content and customer-insight generation on LangChain with Gemini and OpenAI.",
          "**Production wiring.** Redis, PostgreSQL, S3 and Meta services on Docker and Fly.io.",
        ],
      },
    ],
  },
  {
    company: "Yonder Wonder AI",
    url: "https://yonderwonder.ai/",
    role: "Software Engineer, Founding Team",
    dates: "Mar 2025 — Feb 2026",
    location: "Remote",
    summary: "Second engineer on the founding team. Grew into product lead, owning architecture and infra.",
    projects: [
      {
        name: "Face Effects",
        summary: "VFX product that ages and de-ages faces in images and video with in-house GAN models.",
        stack: ["FastAPI", "Redis RQ", "Docker", "PyTorch", "Azure", "ffmpeg"],
        headline: { value: "200x", label: "faster inference, 2s to 0.01s" },
        arch: [
          { label: "Client", kind: "edge" },
          { label: "nginx sticky", kind: "edge" },
          { label: "FastAPI", kind: "compute" },
          { label: "Redis RQ + DLQ", kind: "queue" },
          { label: "GPU workers x10", kind: "compute" },
          { label: "Azure Blob", kind: "store" },
        ],
        bullets: [
          "**Distributed GPU platform.** 10 VMs (160GB VRAM), 40 concurrent video runs, 50 req/s peak.",
          "**2s to ~0.01s** per image by profiling and removing redundant byte conversions.",
          "**Async re-architecture.** Flask monolith replaced by FastAPI queue and ML workers with dead-letter queues.",
          "**Memory leak found with GDB.** PyTorch pointer dealloc across shared threads, fixed at 5,000 users.",
          "**GCP to Azure migration**, and idle GPU spend cut by reaping orphaned processes on disconnect.",
          "**Codec support for 7 formats** via ffmpeg and H.264, plus temporal consistency and mid-frame streaming.",
        ],
      },
      {
        name: "WeClick",
        summary: "Group-photo app on iOS and Android that puts you in a photo with anyone.",
        stack: ["FastAPI", "Supabase", "Azure Container Apps", "Flux-fill", "OpenCV"],
        headline: { value: "80K", label: "users at launch" },
        arch: [
          { label: "iOS / Android", kind: "edge" },
          { label: "FastAPI", kind: "compute" },
          { label: "Azure Storage Queue + DLQ", kind: "queue" },
          { label: "Autoscaled workers", kind: "compute" },
          { label: "Supabase / Blob", kind: "store" },
        ],
        bullets: [
          "**Sole backend owner.** Data models, auth, storage and an in-app credit system on the payment SDKs.",
          "**Autoscaling inference workers** on Azure Container Apps for the 80K-user launch.",
          "**Deploys 10 min to 2 min** by optimizing Docker images and pipelines.",
          "**Duplicate-queue safeguards** and DLQs around Azure Storage Queue requeue policy.",
          "**AI microservices** for relighting and image scaling wired into the inference workers.",
          "**Analytics dashboard** with index-optimised queries over prompt and image data.",
        ],
      },
    ],
  },
  {
    company: "Agetware",
    url: "https://www.agetware.com/",
    role: "Backend Engineer Intern",
    dates: "Nov 2024 — Feb 2025",
    location: "Remote, India",
    summary:
      "Backend work on client sites and internal admin dashboards.",
    projects: [
      {
        name: "Trishan Music School",
        url: "https://www.trishanschool.com/",
        summary: "Public site and admin dashboard for a Bangalore music school.",
        stack: ["Python", "AWS S3", "Google Calendar", "WhatsApp API"],
        headline: { value: "1-click", label: "student-to-class assignment" },
        bullets: [
          "**Hiring state machine.** Submission, interview scheduling and hire, built end-to-end.",
          "**Integrations.** S3 for resumes and videos, Google Calendar and WhatsApp notifications.",
          "**One-click class assignment** replacing a multi-step Calendar workflow.",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Arbitor",
    url: "https://github.com/KausTarafdar/Arbitor",
    summary: "Self-hosted API gateway with service discovery and health-aware failover.",
    stack: ["JavaScript", "Docker", "REST"],
    headline: { value: "30+", label: "unit and integration tests" },
    arch: [
      { label: "Client", kind: "edge" },
      { label: "Gateway + auth", kind: "compute" },
      { label: "Consistent-hash LB", kind: "compute" },
      { label: "Health checks", kind: "queue" },
      { label: "Registered services", kind: "store" },
    ],
    bullets: [
      "**Consistent-hash load balancing**, dynamic routing and health-aware failover.",
      "**Auth, structured logging** and Docker deployment.",
      "**30+ tests** across routing and balancing paths.",
    ],
  },
  {
    name: "pocket-url",
    url: "https://github.com/KausTarafdar/pocket-url",
    summary: "URL shortening platform with custom aliases and click analytics.",
    stack: ["PostgreSQL", "REST", "QR"],
    bullets: [
      "**Custom aliases** and QR code per short link.",
      "**Click analytics** with frequency and recency scoring in PostgreSQL.",
    ],
  },
];

export const education = {
  dates: "2021-2025",
  school: "MAKAUT (FIEM), Kolkata",
  degree: "B.Tech, Computer Science & Engineering",
  location: "Kolkata, India",
  note: "College taught me the fundamentals. Production taught me that the happy path is a myth.",
};

export const skills = [
  {
    group: "Languages",
    sigil: "{}",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Backend & Frameworks",
    sigil: "::",
    items: ["FastAPI", "Node.js", "Express", "Django", "REST", "Webhooks"],
  },
  {
    group: "Distributed Systems & Storage",
    sigil: "<>",
    items: [
      "Redis",
      "Redis RQ",
      "BullMQ",
      "Azure Storage Queue",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Multi-tenancy",
      "Event-driven",
    ],
  },
  {
    group: "Cloud & Infra",
    sigil: "~/",
    items: ["Docker", "Azure", "AWS", "GCP", "Fly.io", "Nginx", "GitHub Actions", "New Relic", "Papertrail"],
  },
  {
    group: "AI Orchestration",
    sigil: "AI",
    items: ["PyTorch", "LangChain", "OpenAI", "Gemini", "LLM Agents", "GPU Orchestration", "Inference Pipelines"],
  },
];
