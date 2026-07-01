export const personalInfo = {
  name: "Dhiraj Wadile",
  title: "Software Engineer",
  headline: "Building Enterprise Payment Solutions & AI Agents | Backend Engineer @ ACI Worldwide",
  subtitle: "Software Engineer @ ACI Worldwide",
  email: "dhirajwadileoffice@gmail.com",
  phone: "+91 8767766059",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Dhiraj-Wadile",
  linkedin: "https://www.linkedin.com/in/dhiraj-wadile/",
  resumeUrl: "/resume",
  calendly: "https://calendly.com/dmwadile",
  bio: [
    "I build production-grade distributed systems that process millions of transactions at ACI Worldwide. My work sits at the intersection of backend engineering, AI agents, and real-time payment infrastructure.",
    "At ACI, I engineer microservices that power global payment ecosystems — designing event-driven architectures, reducing incident resolution times, and shipping production features that handle critical financial workflows for the Speedpay platform.",
    "Beyond payments, I explore how AI agents and RAG systems solve real infrastructure problems — from automating document processing for KYC verification to building intelligent allocation systems.",
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
      "Engineer mission-critical payment microservices for the Speedpay FinTech platform, processing millions of transactions daily across global financial networks.",
      "Architected event-driven systems using Kafka and gRPC, reducing inter-service latency and improving system reliability.",
      "Reduced production incident mean-time-to-resolution by 30% through improved observability, structured logging, and automated runbooks.",
      "Ship production features on 2-week agile cycles with comprehensive CI/CD pipelines, code reviews, and OWASP-compliant security practices.",
      "Debug complex distributed system failures across service boundaries, databases, and message queues in production.",
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
      "Developed a document processing system for extracting critical information from identity documents for KYC verification.",
      "Utilized Python, OCR techniques, and the YOLOv8 model for text detection and data extraction with high accuracy.",
      "Enhanced image quality using OpenCV and deployed the service using Docker with an Angular frontend.",
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
  { value: "600+", label: "DSA Problems Solved" },
  { value: "125+", label: "Students Mentored" },
  { value: "3+", label: "Production Features Shipped" },
  { value: "30%", label: "Incident MTTR Reduction" },
  { value: "9.41", label: "CGPA" },
  { value: "4", label: "Research Papers" },
]
