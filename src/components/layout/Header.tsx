"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, FileDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"
import { personalInfo } from "@/data/resume"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Button } from "@/components/ui/button"

const menuItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.2, ease: "easeOut" as const },
  }),
  exit: { opacity: 0, x: -16, transition: { duration: 0.1 } },
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const navRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 })

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const ids = navigation.map((n) => n.href.slice(1))
      let found = ""
      for (const id of ids.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          found = id
          break
        }
      }
      setActiveSection(found)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current || !activeSection) return
    const activeLink = navRef.current.querySelector(
      `[data-section="${activeSection}"]`
    ) as HTMLElement | null
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink
      setIndicatorStyle({ width: offsetWidth - 16, left: offsetLeft + 8 })
    }
  }, [activeSection])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          DMW<span className="text-accent">.</span>
        </Link>

        <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-section={item.href.slice(1)}
              className={cn(
                "relative z-10 px-3 py-2 text-sm rounded-full transition-colors duration-200",
                activeSection === item.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <motion.div
            className="absolute inset-y-2 rounded-full bg-muted/10 pointer-events-none"
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-2" asChild>
            <Link href={personalInfo.resumeUrl}>
              <FileDown className="h-3.5 w-3.5" />
              Resume
            </Link>
          </Button>
          <button
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted/10 transition-colors relative"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
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
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={cn(
                      "block px-3 py-2.5 text-sm rounded-lg transition-colors",
                      activeSection === item.href.slice(1)
                        ? "text-foreground bg-muted/10 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/5"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navigation.length}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-2 border-t border-border pt-2"
              >
                <Link
                  href={personalInfo.resumeUrl}
                  onClick={closeMobile}
                  className="flex px-3 py-2.5 text-sm rounded-lg hover:bg-muted/10 transition-colors items-center gap-2"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  View Resume
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
