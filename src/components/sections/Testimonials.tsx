"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding scroll-mt-20 bg-muted/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Testimonials
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What People Say
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 text-balance">
              Feedback from engineering leaders, peers, and mentors I&apos;ve worked with.
            </p>
          </AnimatedContent>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl border border-border bg-card h-full flex flex-col hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-accent/20 text-accent/30" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                        {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-medium leading-tight">{t.name}</p>
                        <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                          {t.role} &middot; {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
