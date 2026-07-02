"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Server,
  Cloud,
  Brain,
  BarChart,
  Globe,
  Monitor,
  Settings,
  Sparkles,
  LucideIcon,
} from "lucide-react"
import { personalInfo } from "@/data/resume"
import { Button } from "@/components/ui/button"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"

const services: {
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}[] = [
  {
    title: "Full Stack Development",
    description: "End-to-end web applications from concept to deployment.",
    icon: Globe,
    items: [
      "Modern business websites & portfolios",
      "SaaS platforms & dashboards",
      "Admin panels & enterprise applications",
      "Responsive, accessible UIs with modern frameworks",
    ],
  },
  {
    title: "Backend Engineering",
    description: "Production-grade distributed systems and APIs.",
    icon: Server,
    items: [
      "Java / Spring Boot microservices",
      "REST & gRPC API design",
      "Event-driven architectures (Kafka, RabbitMQ)",
      "Database design & optimization",
    ],
  },
  {
    title: "AI Integrations",
    description: "Intelligent automation powered by LLMs and RAG.",
    icon: Brain,
    items: [
      "AI agent development & orchestration",
      "RAG pipeline engineering",
      "LLM API integration (Claude, OpenAI)",
      "Intelligent workflow automation",
    ],
  },
  {
    title: "Technical Consulting",
    description: "Architecture review, scaling, and system design.",
    icon: BarChart,
    items: [
      "System design & architecture review",
      "Performance optimization & scaling",
      "Backend infrastructure consulting",
      "Code review & engineering best practices",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure that scales reliably in production.",
    icon: Cloud,
    items: [
      "Docker & Kubernetes deployment",
      "CI/CD pipeline automation",
      "Observability & monitoring (Grafana, Prometheus)",
      "Cloud infrastructure on AWS",
    ],
  },
  {
    title: "Website Modernization",
    description: "Transform existing sites into modern experiences.",
    icon: Monitor,
    items: [
      "UI/UX redesign & improvement",
      "Performance optimization & Core Web Vitals",
      "SEO & accessibility compliance",
      "Responsive & mobile optimization",
    ],
  },
  {
    title: "Business Automation",
    description: "Internal tools that eliminate manual workflows.",
    icon: Settings,
    items: [
      "Custom CRM & ERP solutions",
      "Workflow automation systems",
      "Admin portals & internal dashboards",
      "Data processing & reporting pipelines",
    ],
  },
  {
    title: "Authentication & Payments",
    description: "Secure, compliant integration for any platform.",
    icon: Sparkles,
    items: [
      "OAuth 2.0 / JWT authentication",
      "Payment gateway integration",
      "Role-based access control (RBAC)",
      "Security audit & OWASP compliance",
    ],
  },
]

export function Freelance() {
  return (
    <section id="freelance" className="section-padding scroll-mt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-xs text-accent font-medium mb-6">
              Work With Me
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 text-balance">
              Whether you&apos;re a startup, business owner, or growing company, I can help turn your ideas into scalable digital products.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-12 text-balance">
              I specialize in designing and developing high-performance web applications, backend systems, AI-powered solutions, and modern user experiences that solve real business problems. From concept to deployment, I provide complete end-to-end development services with a strong focus on quality, scalability, and maintainability.
            </p>
          </AnimatedContent>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            staggerDelay={0.05}
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem key={service.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl border border-border bg-card h-full hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold leading-tight">{service.title}</h3>
                        <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 flex-1">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>

          <AnimatedContent delay={0.4}>
            <motion.div
              whileHover={{ y: -2 }}
              className="relative p-8 sm:p-10 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 via-accent/3 to-purple-500/5 text-center overflow-hidden"
            >
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                Every great product starts with a conversation. Tell me about your project, and I&apos;ll help you figure out the best approach — no strings attached.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" className="gap-2 group shadow-lg shadow-accent/20" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    Start Your Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 group" asChild>
                  <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                    Book a Free Consultation
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                No commitment required. I&apos;ll provide honest advice about what your project needs.
              </p>
            </motion.div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
