export const personalInfo = {
  name: "Dhiraj Wadile",
  title: "Software Engineer",
  headline: "Backend Engineer Building Distributed Systems, AI Agents & Scalable Infrastructure",
  subtitle: "Java · Spring Boot · Kafka · Kubernetes · AI · Distributed Systems",
  email: "dhirajwadileoffice@gmail.com",
  phone: "+91 8767766059",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Dhiraj-Wadile",
  linkedin: "https://www.linkedin.com/in/dhiraj-wadile/",
  resumeUrl: "/resume",
  calendly: "https://calendly.com/dmwadile",
  bio: [
    "I build production-grade distributed systems that process millions of transactions daily at ACI Worldwide, a global FinTech leader. My work spans microservices architecture, event-driven systems, AI agents, and real-time transaction infrastructure that powers enterprise payment platforms.",
    "I architect scalable backends using Java, Spring Boot, Kafka, and Kubernetes — reducing incident resolution times by 30%, shipping production features on 2-week cycles, and building reliable distributed systems that handle critical financial workflows across global networks.",
    "Beyond the enterprise, I explore how AI agents and RAG pipelines solve infrastructure problems: from automating production incident RCA to intelligent document processing. My research integrates AI with systems engineering, not as a replacement for fundamentals, but as a leverage multiplier.",
  ],
  engineeringPhilosophy: [
    "Systems should be observable before they are scalable.",
    "Clean architecture is not aesthetic — it's risk mitigation.",
    "AI is a tool for leverage, not a replacement for engineering fundamentals.",
    "The best code is the code you don't have to write.",
  ],
}

export const experience = [
  {
    company: "ACI Worldwide",
    location: "Pune, India",
    role: "Associate Software Engineer",
    period: "July 2024 — Present",
    type: "Full-time",
    highlights: [
      "Engineer mission-critical microservices for a high-throughput enterprise transaction platform processing millions of transactions daily across global financial networks.",
      "Architected event-driven systems with Kafka and gRPC, reducing inter-service latency by 40% and improving end-to-end reliability to 99.99% uptime.",
      "Reduced production incident MTTR by 30% through enhanced observability, structured logging, and automated runbooks — directly improving platform SLA compliance.",
      "Deliver production features on 2-week agile cycles with comprehensive CI/CD pipelines, automated testing, and OWASP-compliant security practices.",
      "Debug complex distributed system failures spanning service boundaries, databases, and message queues in production — building internal runbooks that reduced escalation frequency by 25%.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "gRPC",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    company: "Reboot Lab",
    location: "Bengaluru, India",
    role: "Software Development Engineer Intern",
    period: "July 2024 — Nov 2024",
    type: "Internship",
    highlights: [
      "Built an automated document processing pipeline for KYC identity verification, extracting structured data from government-issued IDs with 96% accuracy using computer vision.",
      "Implemented YOLOv8-based object detection for document field localization combined with OCR post-processing for text extraction.",
      "Containerized the full-stack application with Docker, featuring a Python/OpenCV backend and Angular dashboard for document review.",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "OCR",
      "Docker",
      "Angular",
      "Git",
    ],
  },
  {
    company: "Bitsolve Technologies",
    location: "Pune, India",
    role: "Software Development Engineer Intern",
    period: "Feb 2024 — May 2024",
    type: "Internship",
    highlights: [
      "Built an automated judge allocation system for the PICT InC technical event platform, reducing organizer effort by 5-6 hours.",
      "Designed a smart allocation system managing 250+ judges and 1000+ projects with constraint-based optimization.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
    ],
  },
]

export const education = [
  {
    school: "Pune Institute of Computer Technology",
    degree: "B.E. in Information Technology",
    period: "2021 — 2025",
    cgpa: "9.41 / 10.0",
    highlights: [
      "Top 5% of graduating class with 9.4 CGPA",
      "Published research on AI Agents, RAG systems, and inclusive communication technologies",
      "Led technical workshops and hackathons",
    ],
  },
]

export const statistics = [
  { value: "3+", label: "Production Features Shipped" },
  { value: "30%", label: "Incident MTTR Reduction" },
  { value: "Millions", label: "Daily Transactions" },
  { value: "125+", label: "Students Mentored" },
  { value: "4", label: "Research Publications" },
  { value: "600+", label: "DSA Problems Solved" },
]
