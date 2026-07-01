"use client"

import { AnimatedCounter } from "@/components/shared/AnimatedCounter"
import { statistics } from "@/data/resume"

export function Statistics() {
  return (
    <section id="statistics" className="section-padding scroll-mt-20 border-y border-border bg-muted/5">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {statistics.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
