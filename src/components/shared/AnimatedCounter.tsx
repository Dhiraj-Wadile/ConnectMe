"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: string
  label: string
  suffix?: string
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState("0")

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""))
  const hasPlus = value.includes("+")
  const suffix = hasPlus ? "+" : ""

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(`${numericValue}${suffix}`)
        clearInterval(timer)
        return
      }
      setDisplayValue(`${Math.floor(current)}${suffix}`)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, numericValue, suffix])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-1"
    >
      <span className="text-3xl font-bold tracking-tight sm:text-4xl">
        {displayValue}
      </span>
      <span className="text-sm text-muted-foreground text-center leading-tight">
        {label}
      </span>
    </motion.div>
  )
}
