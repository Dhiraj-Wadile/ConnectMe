export type SkillCategory = {
  name: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    icon: "server",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "REST APIs",
      "gRPC",
      "GraphQL",
      "Node.js",
      "Express",
    ],
  },
  {
    name: "AI & ML",
    icon: "brain",
    skills: [
      "AI Agents",
      "RAG Systems",
      "LangChain4j",
      "Claude API",
      "OpenAI API",
      "Natural Language Processing",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    name: "Databases",
    icon: "database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Elasticsearch",
      "Redis",
      "TimescaleDB",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    name: "Architecture",
    icon: "building",
    skills: [
      "Microservices",
      "Event-Driven Architecture",
      "CQRS",
      "Domain-Driven Design",
      "Distributed Systems",
      "System Design",
    ],
  },
  {
    name: "Messaging & Streaming",
    icon: "message-circle",
    skills: [
      "Apache Kafka",
      "RabbitMQ",
      "WebSocket",
      "Server-Sent Events",
      "Twilio API",
    ],
  },
  {
    name: "Frontend",
    icon: "monitor",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    name: "Languages",
    icon: "code",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
      "Bash",
    ],
  },
]
