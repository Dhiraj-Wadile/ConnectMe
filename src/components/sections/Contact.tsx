"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Globe, Code2, Calendar, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react"
import { personalInfo } from "@/data/resume"
import { Button } from "@/components/ui/button"
import { AnimatedContent } from "@/components/shared/AnimatedSection"

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setState("sending")
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent("Contact from " + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`
    window.open(mailtoUrl, "_blank")
    setTimeout(() => setState("sent"), 600)
    setTimeout(() => setState("idle"), 4000)
  }

  return (
    <section id="contact" className="section-padding scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Contact
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3 text-balance">
              Have a project in mind, an opportunity to discuss, or just want to connect? I&apos;m always open to conversations about engineering, AI, and building great products.
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Whether you need backend architecture, AI integration, a new platform, or improvements to an existing system — let&apos;s talk about how I can help.
            </p>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <AnimatedContent delay={0.2} className="md:col-span-3">
              {state === "sent" ? (
                <MotionSuccess />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium mb-1.5 text-muted-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium mb-1.5 text-muted-foreground">
                      Subject (optional)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                      placeholder="e.g., Project Inquiry, Collaboration, Opportunity"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium mb-1.5 text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, idea, or what you're looking for..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={state === "sending"}
                    className="gap-2 w-full sm:w-auto group"
                  >
                    {state === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </AnimatedContent>

            <AnimatedContent delay={0.3} className="md:col-span-2">
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-all duration-300">
                  <h3 className="text-sm font-semibold mb-3">Contact Info</h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Mail className="h-4 w-4 text-accent" />
                      </div>
                      <span className="truncate">{personalInfo.email}</span>
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Code2 className="h-4 w-4 text-accent" />
                      </div>
                      GitHub
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Globe className="h-4 w-4 text-accent" />
                      </div>
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                      <Calendar className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-semibold">Quick Chat?</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    Prefer a real-time conversation? Schedule a 15-minute discovery call — no commitment needed.
                  </p>
                  <Button variant="outline" size="sm" className="gap-2 w-full group" asChild>
                    <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                      Book a Discovery Call
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <MessageSquare className="h-3 w-3" />
                  <span>Available for remote opportunities worldwide</span>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  )
}

function MotionSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center p-10 rounded-xl border border-success/30 bg-gradient-to-br from-success/5 to-success/10 text-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/20 mb-4">
        <CheckCircle2 className="h-7 w-7 text-success" />
      </div>
      <h3 className="text-lg font-semibold mb-1">Message Sent!</h3>
      <p className="text-sm text-muted-foreground max-w-xs">
        Thank you for reaching out. I&apos;ll review your message and get back to you as soon as possible.
      </p>
    </motion.div>
  )
}
