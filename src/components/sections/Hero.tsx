"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileDown, Mail, Code2, Globe, Sparkles } from "lucide-react"
import { personalInfo } from "@/data/resume"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      <motion.span
        className="text-accent"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
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

function ScrollMouse() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-3">
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center pt-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-accent"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
          Scroll
        </span>
      </a>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent" />
        <FloatingOrb className="w-80 h-80 bg-accent/4 blur-3xl top-1/4 left-[5%]" delay={0} />
        <FloatingOrb className="w-60 h-60 bg-purple-500/5 blur-3xl top-1/3 right-[10%]" delay={2} />
        <FloatingOrb className="w-40 h-40 bg-pink-500/5 blur-3xl bottom-1/3 left-[15%]" delay={4} />
      </div>

      <div className="container pt-32 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs text-accent font-medium mb-6">
              <Sparkles className="h-3 w-3" />
              {personalInfo.subtitle}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              {personalInfo.name}
              <br />
              <span className="gradient-text text-balance">
                <TypeWriter text={personalInfo.title} delay={0.5} />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" className="gap-2 group" asChild>
              <Link href={personalInfo.resumeUrl}>
                <FileDown className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                View Resume
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 group" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                Contact Me
              </a>
            </Button>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-foreground font-semibold">ACI Worldwide</span>
              <span>Current Company</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-foreground font-semibold">3+</span>
              <span>Production Features</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-foreground font-semibold">30%</span>
              <span>MTTR Reduction</span>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollMouse />
    </section>
  )
}
