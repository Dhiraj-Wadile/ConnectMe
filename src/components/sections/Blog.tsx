"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { AnimatedContent } from "@/components/shared/AnimatedSection"

const blogPosts = [
  {
    title: "Building AI Agents for Production: Lessons from Enterprise Infrastructure",
    description:
      "What I learned building a multi-agent RCA system for distributed system failures — and why agent boundaries matter more than model choice.",
    date: "Coming Soon",
    slug: "ai-agents-production",
  },
  {
    title: "Event-Driven Architecture for High-Throughput Systems",
    description:
      "How to process millions of transactions daily using Kafka, gRPC, and event sourcing patterns.",
    date: "Coming Soon",
    slug: "event-driven-payments",
  },
  {
    title: "Why Observability Beats Testing for Distributed Systems",
    description:
      "The debugging strategies that reduced our incident MTTR by 30% in production distributed systems.",
    date: "Coming Soon",
    slug: "observability-distributed-systems",
  },
]

export function Blog() {
  return (
    <section id="blog" className="section-padding scroll-mt-20 bg-muted/5">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Blog
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Blog &amp; Writing
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 text-balance">
              Thoughts on backend engineering, AI systems, distributed architecture, and building for production.
            </p>
          </AnimatedContent>

          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <AnimatedContent key={post.slug} delay={0.1 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="group p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </div>
                </motion.div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
