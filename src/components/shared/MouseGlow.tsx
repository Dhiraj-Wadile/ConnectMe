"use client"

import { useEffect, useRef } from "react"

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let mouseX = -200
    let mouseY = -200
    let currentX = -200
    let currentY = -200
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08
      glow.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`
      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", onMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-30 hidden lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
        borderRadius: "50%",
        willChange: "transform",
      }}
      aria-hidden
    />
  )
}
