"use client"

import { motion } from "framer-motion"
import { Award, Code, Users, GraduationCap, Mic, Trophy } from "lucide-react"
import { achievements } from "@/data/navigation"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"

const iconMap: Record<string, React.ElementType> = {
  award: Award,
  code: Code,
  users: Users,
  "graduation-cap": GraduationCap,
  microphone: Mic,
  trophy: Trophy,
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding scroll-mt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Achievements
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
              Milestones
            </h2>
          </AnimatedContent>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

            <StaggerChildren className="space-y-8">
              {achievements.map((item, i) => {
                const Icon = iconMap[item.icon] || Trophy
                return (
                  <StaggerItem key={i}>
                    <div className="relative pl-14">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute left-0 top-0 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-border bg-card shadow-lg shadow-accent/10"
                      >
                        <Icon className="h-4 w-4 text-accent" />
                      </motion.div>
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-base font-semibold">{item.title}</h3>
                          <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
