"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Code2, Globe } from "lucide-react"
import { personalInfo } from "@/data/resume"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

const roles = [
  "Backend Engineer",
  "Distributed Systems",
  "AI Engineering",
  "Microservices",
  "System Design",
]

function RoleRotator() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const isDeleting = useRef(false)

  useEffect(() => {
    const current = roles[index]
    if (!isDeleting.current) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      }
      if (displayed.length === current.length && displayed.length > 0) {
        const timeout = setTimeout(() => {
          isDeleting.current = true
          setDisplayed(displayed.slice(0, -1))
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else if (displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1))
      }, 25)
      return () => clearTimeout(timeout)
    } else {
      isDeleting.current = false
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [displayed, index])

  return (
    <span className="inline-flex items-center">
      {displayed}
      <motion.span
        className="text-accent ml-0.5 font-light"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </span>
  )
}

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{
        y: [0, -40, 0, 30, 0],
        x: [0, 20, -15, 10, 0],
        scale: [1, 1.08, 0.95, 1.03, 1],
      }}
      transition={{
        duration: 10 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent" />
        <FloatingOrb className="w-96 h-96 bg-accent/4 blur-3xl top-1/4 -left-[10%]" delay={0} />
        <FloatingOrb className="w-72 h-72 bg-purple-500/5 blur-3xl top-1/3 -right-[5%]" delay={2} />
        <FloatingOrb className="w-48 h-48 bg-pink-500/4 blur-3xl bottom-1/4 left-[20%]" delay={4} />
      </div>

      <div className="container pt-28 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-8">
              {personalInfo.subtitle.split(" · ").map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs text-accent font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
              {personalInfo.name}
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] gradient-text text-balance">
              <RoleRotator />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button variant="outline" size="lg" className="gap-2 group" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                Contact Me
              </a>
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Code2 className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Globe className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 flex items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-foreground font-semibold">ACI Worldwide</span>
              <span className="text-xs">Current Company</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-foreground font-semibold">3+</span>
              <span className="text-xs">Production Features</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-foreground font-semibold">30%</span>
              <span className="text-xs">MTTR Reduction</span>
            </div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="hidden sm:flex flex-col items-center gap-1">
              <span className="text-foreground font-semibold">Millions</span>
              <span className="text-xs">Daily Transactions</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-4 w-px bg-muted-foreground/40"
          />
        </a>
      </motion.div>
    </section>
  )
}
