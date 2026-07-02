"use client"

import dynamic from "next/dynamic"

const MouseGlow = dynamic(
  () => import("./MouseGlow").then((mod) => ({ default: mod.MouseGlow })),
  { ssr: false }
)

const ParticleBackground = dynamic(
  () => import("./ParticleBackground").then((mod) => ({ default: mod.ParticleBackground })),
  { ssr: false }
)

export function ClientEffects() {
  return (
    <>
      <MouseGlow />
      <ParticleBackground />
    </>
  )
}
