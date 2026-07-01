"use client"

import { Code2, Globe, Mail, ArrowUp } from "lucide-react"
import { personalInfo } from "@/data/resume"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-lg font-semibold tracking-tight">
              DW<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building production systems that scale.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted/10 transition-colors"
              aria-label="GitHub"
            >
              <Code2 className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Dhiraj Wadile. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="mailto:dhirajwadileoffice@gmail.com" className="hover:text-foreground transition-colors">
              dhirajwadileoffice@gmail.com
            </a>
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
