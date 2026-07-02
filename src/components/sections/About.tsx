"use client"

import { personalInfo } from "@/data/resume"
import { AnimatedContent } from "@/components/shared/AnimatedSection"
import { Quote } from "lucide-react"

export function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              About
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
              About Me
            </h2>
          </AnimatedContent>

          <div className="space-y-5">
            {personalInfo.bio.map((paragraph, i) => (
              <AnimatedContent key={i} delay={0.1 + i * 0.1}>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
                  {paragraph}
                </p>
              </AnimatedContent>
            ))}
          </div>

          <AnimatedContent delay={0.5}>
            <div className="mt-14">
              <div className="flex items-center gap-2 mb-5">
                <Quote className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Engineering Philosophy
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.engineeringPhilosophy.map((principle, i) => (
                  <div
                    key={i}
                    className="group relative p-5 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="text-[10px] text-accent font-mono mb-2 block tracking-wider">
                      {"0" + (i + 1)}
                    </span>
                    <p className="text-sm leading-relaxed text-card-foreground">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
