"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Server,
  Cloud,
  Brain,
  BarChart,
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
    title: "Backend Engineering",
    description: "Production-grade backend systems with clean architecture.",
    icon: Server,
    items: [
      "Java / Spring Boot applications",
      "REST & gRPC API design",
      "Microservices architecture",
      "Event-driven systems",
    ],
  },
  {
    title: "AI Integrations",
    description: "Intelligent systems powered by LLMs and RAG.",
    icon: Brain,
    items: [
      "AI agent development",
      "RAG pipeline engineering",
      "LLM API integration",
      "Incident analysis automation",
    ],
  },
  {
    title: "System Design",
    description: "Scalable, resilient distributed system architecture.",
    icon: BarChart,
    items: [
      "Distributed system design",
      "Performance optimization",
      "System migrations",
      "Technical architecture reviews",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure that actually works in production.",
    icon: Cloud,
    items: [
      "Docker & Kubernetes setup",
      "CI/CD pipeline design",
      "Observability & monitoring",
      "Cloud infrastructure (AWS)",
    ],
  },
]

export function Freelance() {
  return (
    <section id="freelance" className="section-padding scroll-mt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-xs text-accent font-medium mb-6">
              Available for Freelance
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s Build Something
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 text-balance">
              I help startups and teams build production-grade backend systems, integrate AI capabilities, and design scalable architectures. Currently accepting freelance and consulting engagements.
            </p>
          </AnimatedContent>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            staggerDelay={0.1}
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <StaggerItem key={service.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl border border-border bg-card h-full hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{service.title}</h3>
                        <p className="text-xs text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle className="h-3 w-3 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>

          <AnimatedContent delay={0.3}>
            <motion.div
              whileHover={{ y: -2 }}
              className="p-8 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 to-purple-500/5 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">
                Available for Projects
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Currently accepting backend engineering, AI integration, and system design engagements. Let&apos;s discuss your project.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" className="gap-2 group" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    Start a Conversation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
