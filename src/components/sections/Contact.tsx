"use client"

import { useState } from "react"
import { Mail, Send, Globe, Code2, Calendar, Sparkles } from "lucide-react"
import { personalInfo } from "@/data/resume"
import { Button } from "@/components/ui/button"
import { AnimatedContent } from "@/components/shared/AnimatedSection"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const name = formData.get("name")
    const message = formData.get("message")

    window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${name}&body=${message}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto">
          <AnimatedContent>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/5 text-xs text-muted-foreground mb-6">
              Contact
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 text-balance">
              Have a project in mind, an opportunity to discuss, or just want to connect? I&apos;m always open to conversations about engineering, AI, and building.
            </p>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <AnimatedContent delay={0.2} className="md:col-span-3">
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
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
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
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
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
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2 w-full sm:w-auto group">
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Message Sent!
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </AnimatedContent>

            <AnimatedContent delay={0.3} className="md:col-span-2">
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors">
                  <h3 className="text-sm font-semibold mb-3">Contact Info</h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Mail className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                      {personalInfo.email}
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Code2 className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                      GitHub
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Globe className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
                  <h3 className="text-sm font-semibold mb-2">Book a Call</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Prefer a quick chat? Schedule a 15-minute call.
                  </p>
                  <Button variant="outline" size="sm" className="gap-2 w-full group" asChild>
                    <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                      Schedule Meeting
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Based in Pune, India &middot; Available for remote opportunities worldwide
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  )
}
