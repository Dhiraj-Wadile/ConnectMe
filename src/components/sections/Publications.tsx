"use client"

import { ExternalLink, FileText } from "lucide-react"
import { publications } from "@/data/publications"
import { Badge } from "@/components/ui/badge"
import { AnimatedContent, StaggerChildren, StaggerItem } from "@/components/shared/AnimatedSection"

export function Publications() {
  return (
    <section id="publications" className="section-padding scroll-mt-20 bg-muted/5">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Research
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Publications
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 text-balance">
              Research papers at the intersection of AI, distributed systems, and payment infrastructure.
            </p>
          </AnimatedContent>

          <StaggerChildren className="space-y-4" staggerDelay={0.1}>
            {publications.map((pub, i) => (
              <StaggerItem key={i}>
                <div className="group p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <FileText className="h-3.5 w-3.5 text-accent shrink-0" />
                        <Badge variant="default" className="shrink-0">
                          {pub.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{pub.year}</span>
                      </div>
                      <h3 className="text-base font-semibold mb-1 leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {pub.authors} &middot; {pub.conference}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted/10 hover:border-accent/30 transition-all shrink-0"
                        aria-label="View publication"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
