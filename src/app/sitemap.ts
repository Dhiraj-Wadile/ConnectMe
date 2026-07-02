import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dhirajwadile.dev"

const sectionRoutes = [
  { url: `${siteUrl}`, priority: 1 },
  { url: `${siteUrl}/blog`, priority: 0.8 },
]

const anchorSections = [
  "about",
  "experience",
  "projects",
  "skills",
  "achievements",
  "publications",
  "leadership",
  "testimonials",
  "freelance",
  "contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...sectionRoutes.map((route) => ({
      url: route.url,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...anchorSections.map((section) => ({
      url: `${siteUrl}/#${section}` as const,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
