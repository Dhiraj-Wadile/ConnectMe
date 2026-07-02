"use client"

import { motion } from "framer-motion"
import { experience } from "@/data/resume"
import { Badge } from "@/components/ui/badge"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"
import { Building2, ArrowRight } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="section-padding scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-accent/0 via-accent/5 to-accent/0" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Experience
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 text-balance">
              Building and scaling distributed systems that handle millions of financial transactions daily.
            </p>
          </AnimatedContent>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

            <StaggerChildren className="space-y-12">
              {experience.map((exp, i) => (
                <StaggerItem key={i}>
                  <div className="relative pl-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute left-3 top-1.5"
                    >
                      <div className="relative h-3 w-3">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-accent"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 rounded-full bg-accent/30 blur-sm" />
                      </div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-accent font-medium flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5" />
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2 group"
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-accent/60 mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
