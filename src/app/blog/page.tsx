import type { Metadata } from "next"
import { Blog } from "@/components/sections/Blog"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on backend engineering, AI systems, distributed architecture, and building for production.",
}

export default function BlogPage() {
  return (
    <div className="pt-24">
      <Blog />
    </div>
  )
}
