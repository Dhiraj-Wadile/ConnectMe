"use client"

import { motion } from "framer-motion"
import {
  Server,
  Brain,
  Database,
  Cloud,
  Building2,
  MessageCircle,
  Monitor,
  Code,
} from "lucide-react"
import { skillCategories } from "@/data/skills"
import { Badge } from "@/components/ui/badge"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  brain: Brain,
  database: Database,
  cloud: Cloud,
  building: Building2,
  "message-circle": MessageCircle,
  monitor: Monitor,
  code: Code,
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Skills
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
              Engineering Toolkit
            </h2>
          </AnimatedContent>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.05}>
            {skillCategories.map((category) => {
              const Icon = iconMap[category.icon] || Code
              return (
                <StaggerItem key={category.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl border border-border bg-card hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <h3 className="text-sm font-semibold">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
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
