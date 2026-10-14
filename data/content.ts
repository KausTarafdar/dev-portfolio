export type Project = {
  name: string;
  url?: string;
  summary: string;
  stack: string[];
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
  focus: "distributed systems",
  blurb:
    "i build backends, ml inference infrastructure, and multi-tenant systems that stay up when the traffic does not behave.",
  kicker: "powered by curiosity, caffeine, and a very long log tail.",
  location: "India (GMT+5:30)",
  footerLeft: "backend / infra / ai",
  footerRight: "2 years of shipping things that scale.",
};

export const metrics = [
  { value: "80K", label: "users shipped to" },
  { value: "200x", label: "faster inference" },
  { value: "10", label: "GPU VMs orchestrated" },
  { value: "5x", label: "faster deploys" },
];

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
    summary:
      "I work across client platforms as a backend engineer, owning architecture, integrations and delivery pipelines. Most of my time goes to multi-tenant systems, third-party integrations and the CI/CD that keeps them shipping safely.",
    projects: [
      {
        name: "Gomotto",
        summary:
          "Lead-conversion platform for HVAC companies: a CRM integration and lead state layer, an AI call-analysis layer, and a mobile app for field sales.",
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Twilio"],
        bullets: [
          "Architected the backend so tenants could keep their existing CRM, integrating **ServiceTitan, CallTrackingMetrics and GoHighLevel** over an in-house polling and webhook pipeline.",
          "Led backend design and implementation for the mobile sales app: Redis leaderboards, the day's appointment list, AI call summaries and **Ask Gomotto**, an agent for company stats and analytics.",
          "Designed a geo-fencing feature that notifies sales reps automatically once they are near their next appointment.",
          "Built the team management system with an email-invite onboarding flow, plus the first tenant onboarding flow with SOP document ingestion and **agentic configuration**.",
          "Integrated **Twilio masked calling** through a two-way proxy number pool, and shipped ghost mode so reps' raw call recordings stay private while summaries stay shared.",
          "Implemented PostgreSQL **schema-per-tenant isolation** for multi-tenancy.",
        ],
      },
      {
        name: "BuyBox Cartel",
        url: "https://www.buyboxcartel.com/",
        summary:
          "Deal-evaluation engine for wholesale real estate, plugged into a verified network of cash buyers to answer whether a deal sells, who buys it and at what price.",
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Stripe"],
        bullets: [
          "Led the V2 re-architecture: migrated wholesaler modules to a Controller-Service-Repository pattern, enforced the repository SOP and guards, split the buybox controller and killed **N+1 queries**.",
          "Launched the **affiliate revenue channel** end-to-end, wiring commission tracking into Stripe webhooks with admin metrics APIs, saved banking details, autopay and bulk withdrawal approvals.",
          "Built **CI/CD from scratch** in GitHub Actions: isolated dev/stage/prod workflows sequencing build, migrate and deploy behind ESLint and TypeScript gates.",
          "Hardened observability with Papertrail logging tags, V2 health checks backed by DB statement timeouts, vendor error conventions and Stripe renewal failure tagging.",
          "Shipped bank-detail caching, subscription extension endpoints and conversion-rate fixes, plus reliability patches that stopped third-party failures from breaking signups.",
        ],
      },
      {
        name: "Binance Trade Bot",
        summary:
          "Algorithmic crypto futures system that researches, backtests and automates a rules-based strategy, with a live dashboard on top.",
        stack: ["Python", "CCXT", "Supabase", "Next.js", "Docker", "Fly.io"],
        bullets: [
          "Designed a modular four-phase pipeline (regime, setup, trigger, risk) shared identically between backtest and live execution to **eliminate backtest-live drift**.",
          "Built a Monte Carlo risk engine running **10,000+ trade-resampling simulations** (IID, permutation, block bootstrap) to derive drawdown, Calmar and profit-factor distributions.",
          "Deployed the live bot against Binance and OKX with dry-run and testnet safety modes, Supabase state persistence and containerized Fly.io deployment.",
          "Authored **25+ analysis scripts** for strategy research, including the evidence that retired an underperforming strategy.",
          "Built the analytics dashboard visualizing live and historical PnL, positions and trades.",
        ],
      },
      {
        name: "Linkme",
        summary:
          "Multi-tenant platform pairing a WhatsApp booking bot with an AI marketing and customer-intelligence system for salons.",
        stack: ["FastAPI", "LangChain", "Redis", "PostgreSQL", "S3", "Gemini"],
        bullets: [
          "Replaced manual salon bookings with a **multi-tenant FastAPI platform** driving a webhook-based WhatsApp bot.",
          "Implemented conversational flows, appointment booking, reminders and state management for real-time customer interaction.",
          "Built campaign generation, ad and content creation, and customer-insight engines on **LangChain with Gemini and OpenAI**.",
          "Connected Redis, PostgreSQL, S3 and WhatsApp/Meta services for production-ready automation on Docker and Fly.io.",
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
    summary:
      "I joined as the second engineer, with the rest of the team doing AI research. Over time I led the product team and owned architecture and infrastructure, acting as the first point of contact between the CEO and engineering.",
    projects: [
      {
        name: "Face Effects",
        summary:
          "A VFX product that ages and de-ages subjects in images and video using in-house GAN models.",
        stack: ["FastAPI", "Redis RQ", "Docker", "PyTorch", "Azure", "ffmpeg"],
        bullets: [
          "Architected a distributed GPU inference platform across **10 GPU VMs (160GB VRAM)**, supporting **40 concurrent video runs** at a peak of **50 requests/sec**.",
          "Cut per-image inference from **2s to ~0.01s** by profiling model timings and removing redundant image-to-byte conversions.",
          "Replaced the Flask monolith with an async FastAPI queue and ML-worker architecture on Redis RQ, with dead-letter queues for failure analysis.",
          "Diagnosed a production memory leak with GNU Debugger, a PyTorch pointer deallocation across shared threads, eliminating runtime crashes as the platform scaled to **5,000 users**.",
          "Extended codec support to **7 formats** via ffmpeg and H.264 handling, fixing empty containers and rotation issues from misaligned encoding tags.",
          "Led the **GCP to Azure migration** including Azure Blob Storage, and cut idle GPU spend by reaping orphaned processes on client disconnect.",
          "Shipped temporal-consistency processing and mid-frame streaming with progress percentages, behind custom nginx sticky-connection configs.",
        ],
      },
      {
        name: "WeClick",
        summary:
          "Group photo generation app for iOS and Android, putting people in photos with celebrities and distant or departed family. 80K users over its lifetime.",
        stack: ["FastAPI", "Supabase", "Azure Container Apps", "Flux-fill", "OpenCV"],
        bullets: [
          "**Sole backend owner**: data models, architecture and storage, authentication, and an in-app credit system wired to the iOS and Android payment SDKs.",
          "Designed an autoscaling inference queue-worker architecture on Azure Container Apps for the **80K-user launch**.",
          "Cut deployment time from **10 minutes to 2** by optimizing Docker containers and pipelines, and tuned container sizing out of runtime crashes.",
          "Built safeguards and DLQs around Azure Storage Queue requeue policies that were causing duplicate queueing.",
          "Deployed AI microservices for relighting and image scaling, integrated back into the ML inference workers.",
          "Built an internal analytics dashboard with index-optimised queries over user prompt and image data.",
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
      "Backend work on client products, handling public sites and internal admin dashboards.",
    projects: [
      {
        name: "Trishan Music School",
        url: "https://www.trishanschool.com/",
        summary:
          "Public website and internal admin dashboard for a Bangalore-based music school.",
        stack: ["Python", "AWS S3", "Google Calendar", "WhatsApp API"],
        bullets: [
          "Built a job application management system end-to-end: a **state machine** covering submission, interview scheduling and hire.",
          "Added S3 storage for resumes, performance videos and profile photos.",
          "Integrated Google Calendar scheduling and WhatsApp notifications for applicants and interviewers, replacing a manual hiring workflow.",
          "Streamlined class scheduling in the admin dashboard, cutting a multi-step Google Calendar workflow to **one-click student-to-class assignment**.",
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
    bullets: [
      "Built **consistent-hash load balancing**, dynamic routing and health-aware failover across registered services.",
      "Added authentication, structured logging and Docker deployment.",
      "Covered the routing and balancing paths with **30+ unit and integration tests**.",
    ],
  },
  {
    name: "pocket-url",
    url: "https://github.com/KausTarafdar/pocket-url",
    summary: "URL shortening platform with custom aliases and click analytics.",
    stack: ["PostgreSQL", "REST", "QR"],
    bullets: [
      "Supports custom aliases and QR code generation per short link.",
      "Tracks click analytics with **frequency and recency scoring** in PostgreSQL.",
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
    group: "Backend & Data",
    items: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Node.js",
      "Express",
      "Django",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    group: "AI & Inference",
    items: [
      "LangChain",
      "OpenAI",
      "Gemini",
      "PyTorch",
      "GPU Orchestration",
      "Inference Pipelines",
      "LLM Agents",
    ],
  },
  {
    group: "Infrastructure",
    items: [
      "Docker",
      "GitHub Actions",
      "Azure",
      "AWS",
      "GCP",
      "Fly.io",
      "Nginx",
      "Linux",
      "New Relic",
      "Papertrail",
    ],
  },
  {
    group: "Architecture",
    items: [
      "Distributed Systems",
      "Message Queues",
      "Event-Driven",
      "Multi-Tenancy",
      "Microservices",
      "API Design",
      "Performance",
    ],
  },
];
