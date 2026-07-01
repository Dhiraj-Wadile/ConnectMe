"use client"

import { personalInfo } from "@/data/resume"
import { AnimatedSection, AnimatedContent } from "@/components/shared/AnimatedSection"

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              About
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
              Engineering Philosophy
            </h2>
          </AnimatedContent>

          <div className="space-y-6">
            {personalInfo.bio.map((paragraph, i) => (
              <AnimatedContent key={i} delay={0.1 + i * 0.1}>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
                  {paragraph}
                </p>
              </AnimatedContent>
            ))}
          </div>

          <AnimatedContent delay={0.5}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.engineeringPhilosophy.map((principle, i) => (
                <div
                  key={i}
                  className="group relative p-5 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <span className="text-xs text-accent font-mono mb-2 block">
                    {"0" + (i + 1)}
                  </span>
                  <p className="text-sm leading-relaxed text-card-foreground">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </div>
    </AnimatedSection>
  )
}
