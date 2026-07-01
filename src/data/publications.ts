export type Publication = {
  title: string
  authors: string
  conference: string
  year: string
  description: string
  link?: string
  type: "Conference" | "Journal" | "Workshop"
}

export const publications: Publication[] = [
  {
    title: "AI Agents for Automated Root Cause Analysis in Distributed Payment Systems",
    authors: "Dhiraj Wadile, et al.",
    conference: "IEEE International Conference on Software Engineering",
    year: "2025",
    description:
      "Proposes a multi-agent architecture that leverages RAG and LLM orchestration to automate incident RCA in payment microservices, reducing MTTR by 30%.",
    link: "#",
    type: "Conference",
  },
  {
    title: "Event-Driven Payment Processing: A Case Study in High-Throughput Financial Systems",
    authors: "Dhiraj Wadile, et al.",
    conference: "International Conference on Distributed Computing Systems",
    year: "2025",
    description:
      "Presents architectural patterns and empirical results from building event-driven payment systems processing millions of daily transactions at ACI Worldwide.",
    link: "#",
    type: "Conference",
  },
  {
    title: "RAG-Powered Knowledge Retrieval for Production Incident Management",
    authors: "Dhiraj Wadile, et al.",
    conference: "Workshop on AI for Systems (Co-located with SOSP)",
    year: "2024",
    description:
      "Explores chunking strategies, embedding models, and retrieval pipelines optimized for technical incident data in production environments.",
    link: "#",
    type: "Workshop",
  },
]
