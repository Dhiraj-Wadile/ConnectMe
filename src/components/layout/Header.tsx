"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, FileDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"
import { personalInfo } from "@/data/resume"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navigation.map((n) => n.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          DW<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm rounded-full transition-all duration-200",
                activeSection === item.href.slice(1)
                  ? "text-foreground bg-muted/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/5"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex gap-2"
            asChild
          >
            <a href={personalInfo.resumeUrl}>
              <FileDown className="h-3.5 w-3.5" />
              Resume
            </a>
          </Button>
          <button
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted/10 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-3 py-2.5 text-sm rounded-lg hover:bg-muted/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="my-2 border-t border-border" />
              <a
                href={personalInfo.resumeUrl}
                className="px-3 py-2.5 text-sm rounded-lg hover:bg-muted/10 transition-colors flex items-center gap-2"
              >
                <FileDown className="h-3.5 w-3.5" />
                View Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
