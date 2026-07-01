"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, ExternalLink, ChevronDown, ArrowRight } from "lucide-react"
import { featuredProjects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"
import { TiltCard } from "@/components/shared/TiltCard"
import { cn } from "@/lib/utils"

function ProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[0]
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <StaggerItem>
      <TiltCard>
        <motion.div
          layout
          className={cn(
            "group rounded-xl border border-border bg-card overflow-hidden transition-colors",
            isExpanded && "border-accent/30"
          )}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="default">{project.category}</Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.tagline}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted/10 hover:border-accent/30 transition-all"
                    aria-label="View source"
                  >
                    <Code2 className="h-4 w-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted/10 hover:border-accent/30 transition-all"
                    aria-label="View demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.slice(0, 6).map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 6 && (
                <Badge variant="outline">+{project.techStack.length - 6}</Badge>
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {isExpanded ? "Show less" : "Show more"}
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  isExpanded && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-accent">Problem</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-accent">Solution</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {project.architecture.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-accent">Architecture</h4>
                        <ul className="space-y-1">
                          {project.architecture.map((item, j) => (
                            <li
                              key={j}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <ArrowRight className="h-3.5 w-3.5 text-accent/60 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.challenges.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-accent">Challenges</h4>
                        <ul className="space-y-1">
                          {project.challenges.map((c, j) => (
                            <li
                              key={j}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.results.map((result, j) => (
                        <div
                          key={j}
                          className="p-3 rounded-lg border border-border bg-muted/5 hover:border-accent/20 transition-colors"
                        >
                          <span className="text-xs text-accent font-semibold block mb-1">
                            Result {j + 1}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-accent">Lessons Learned</h4>
                      <ul className="space-y-1">
                        {project.lessons.map((lesson, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <ArrowRight className="h-3.5 w-3.5 text-accent/60 mt-0.5 shrink-0" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </TiltCard>
    </StaggerItem>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding scroll-mt-20 bg-muted/5">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Projects
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 text-balance">
              Production systems I&apos;ve designed and built. Each project represents a real problem solved with clean architecture and measurable impact.
            </p>
          </AnimatedContent>

          <StaggerChildren className="space-y-6" staggerDelay={0.15}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
