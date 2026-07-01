export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  architecture: string[]
  techStack: string[]
  challenges: string[]
  results: string[]
  impact: string[]
  lessons: string[]
  github?: string
  demo?: string
  featured: boolean
  year: string
  category: "AI" | "Backend" | "Full Stack" | "Research"
}

export const projects: Project[] = [
  {
    id: "empowertrace",
    title: "EmpowerTrace",
    tagline: "AI-Powered Root Cause Analysis for Payment Failures",
    description:
      "An intelligent agent system that automates payment failure RCA using RAG, reducing diagnosis time from hours to minutes.",
    problem:
      "Payment failures in production generate thousands of log lines, stack traces, and system metrics. Engineers spend hours manually correlating data across disparate systems to determine root cause. This delays resolution, impacts SLAs, and increases operational costs.",
    solution:
      "Built a multi-agent AI system that ingests logs, metrics, and transaction data — then uses Retrieval-Augmented Generation to automatically correlate signals, identify root cause, and suggest remediation steps.",
    architecture: [
      "Multi-agent orchestration layer using LangChain4j",
      "RAG pipeline with Elasticsearch for vector storage and retrieval",
      "gRPC-based communication between agents and payment systems",
      "Claude API integration for natural language reasoning",
      "Spring Boot microservice with reactive WebFlux",
      "Angular dashboard for interactive investigation",
    ],
    techStack: [
      "Java 21",
      "Spring Boot 3",
      "Angular 18",
      "Elasticsearch",
      "gRPC",
      "LangChain4j",
      "Claude API",
      "Docker",
      "Kubernetes",
      "Kafka",
    ],
    challenges: [
      "Designing agent orchestration that respects payment system security boundaries",
      "Achieving sub-100ms retrieval latency for real-time RCA queries",
      "Building reliable context windows from noisy production logs",
    ],
    results: [
      "Reduced mean-time-to-diagnosis from 45 minutes to under 5 minutes",
      "Achieved 87% accuracy in root cause identification across 500+ historical incidents",
      "Automated 70% of Level 2 support tickets related to payment failures",
    ],
    impact: [
      "Directly improved payment infrastructure reliability and uptime",
      "Freed senior engineers from repetitive debugging to focus on architecture",
      "Set foundation for AI-assisted incident management across the organization",
    ],
    lessons: [
      "Agent orchestration needs clear boundaries — unconstrained agents create more noise than signal",
      "RAG quality depends more on chunking strategy than model choice",
      "Production AI systems need the same observability as any other microservice",
    ],
    github: "https://github.com/dmwadile/empowertrace",
    featured: true,
    year: "2024",
    category: "AI",
  },
  {
    id: "judge-allocation",
    title: "Judge Allocation System",
    tagline: "Fair and Efficient Judicial Case Distribution Engine",
    description:
      "An intelligent allocation system that distributes legal cases to judges based on expertise, workload, and conflict detection.",
    problem:
      "Manual case allocation in judiciary systems leads to uneven workload distribution, potential bias, and delays. Existing systems lack intelligent conflict detection and expertise matching.",
    solution:
      "Designed a constraint-based allocation engine that considers judge specialization, current caseload, conflict history, and urgency to produce optimal case assignments.",
    architecture: [
      "Constraint satisfaction problem solver for allocation optimization",
      "Real-time workload monitoring and rebalancing",
      "Conflict detection using historical case graph analysis",
      "RESTful API design with comprehensive audit logging",
      "PostgreSQL with optimized query patterns for allocation queries",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST APIs",
      "JUnit",
      "Mockito",
    ],
    challenges: [
      "Balancing optimization speed with allocation fairness across multiple dimensions",
      "Designing conflict detection that scales with growing case history",
    ],
    results: [
      "Reduced allocation processing time by 60% compared to manual process",
      "Achieved 95% fairness score in workload distribution",
      "Detected 40+ potential conflicts during pilot phase",
    ],
    impact: [
      "Enabled transparent and auditable judicial allocation process",
      "Reduced administrative overhead for court clerks",
    ],
    lessons: [
      "Fairness constraints must be tunable — one-size-fits-all doesn't work across different court types",
      "Audit trails are as important as allocation speed in legal contexts",
    ],
    github: "https://github.com/dmwadile/judge-allocation",
    featured: true,
    year: "2024",
    category: "Backend",
  },
  {
    id: "voicemail",
    title: "Voice Mail System",
    tagline: "Enterprise-Grade VoIP Voice Messaging Platform",
    description:
      "A scalable voicemail system with Twilio integration, transcription, and unified messaging for enterprise communication.",
    problem:
      "Legacy voicemail systems lack modern features like transcription, search, and multi-device synchronization. Enterprises struggle with fragmented communication across voice, email, and messaging platforms.",
    solution:
      "Built a cloud-native voicemail platform with Twilio SIP integration, real-time transcription, and unified inbox across voice and text channels.",
    architecture: [
      "Twilio Programmable Voice API for SIP trunking and media handling",
      "Event-driven architecture using Kafka for async transcription and notification workflows",
      "Spring Boot microservices with WebSocket for real-time delivery",
      "PostgreSQL with TimescaleDB for time-series voicemail analytics",
      "React dashboard with real-time updates via Server-Sent Events",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Twilio API",
      "Kafka",
      "PostgreSQL",
      "TimescaleDB",
      "React",
      "WebSocket",
      "Docker",
    ],
    challenges: [
      "Handling concurrent SIP sessions with sub-100ms media processing latency",
      "Implementing reliable exactly-once delivery semantics for voicemail notifications",
      "Transcription accuracy across diverse accents and audio quality",
    ],
    results: [
      "Processed 10,000+ voicemail messages with 99.9% delivery reliability",
      "Achieved <2 second end-to-end delivery from recording to notification",
      "Reduced infrastructure cost by 40% compared to legacy on-premise system",
    ],
    impact: [
      "Enabled remote workforce with unified communication across devices",
      "Replaced legacy system with 60% lower total cost of ownership",
    ],
    lessons: [
      "Twilio's event system requires careful idempotency handling at scale",
      "Transcription is a latency bottleneck — async processing is essential for user experience",
    ],
    github: "https://github.com/dmwadile/voicemail",
    featured: true,
    year: "2024",
    category: "Full Stack",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
