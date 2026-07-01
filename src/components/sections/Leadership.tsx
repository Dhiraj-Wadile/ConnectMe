"use client"

import { motion } from "framer-motion"
import { Mic, Users, Presentation } from "lucide-react"
import { leadershipRoles } from "@/data/navigation"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"

const iconMap: Record<string, React.ElementType> = {
  microphone: Mic,
  users: Users,
  presentation: Presentation,
}

export function Leadership() {
  return (
    <section id="leadership" className="section-padding scroll-mt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Leadership
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
              Community & Leadership
            </h2>
          </AnimatedContent>

          <StaggerChildren className="space-y-6" staggerDelay={0.1}>
            {leadershipRoles.map((role, i) => {
              const Icon = iconMap[role.title.includes("Event") ? "microphone" : role.title.includes("Mentor") ? "users" : "presentation"]
              return (
                <StaggerItem key={i}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                          <h3 className="text-base font-semibold">{role.title}</h3>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {role.period}
                          </span>
                        </div>
                        <p className="text-xs text-accent font-medium mb-2">
                          {role.organization}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
