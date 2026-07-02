import { personalInfo } from "@/data/resume"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dhirajwadile.dev"

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    givenName: "Dhiraj",
    familyName: "Wadile",
    jobTitle: personalInfo.title,
    description: personalInfo.headline,
    url: siteUrl,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    sameAs: [personalInfo.github, personalInfo.linkedin],
    knowsAbout: [
      "Distributed Systems",
      "Microservices",
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Kubernetes",
      "AI Agents",
      "Backend Engineering",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pune Institute of Computer Technology",
    },
    worksFor: {
      "@type": "Organization",
      name: "ACI Worldwide",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dhiraj Wadile",
    url: siteUrl,
    description: personalInfo.headline,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
