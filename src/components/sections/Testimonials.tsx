"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"
import { TiltCard } from "@/components/shared/TiltCard"

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-muted/5">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Testimonials
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
              What People Say
            </h2>
          </AnimatedContent>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <TiltCard>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-xl border border-border bg-card h-full flex flex-col hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <Quote className="h-6 w-6 text-accent/40 mb-4" />
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} at {t.company}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
