import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { ErrorBoundary } from "@/components/shared/ErrorBoundary"
import { PersonJsonLd, WebSiteJsonLd } from "@/components/shared/JsonLd"
import { ClientEffects } from "@/components/shared/ClientEffects"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dhirajwadile.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dhiraj Wadile | Software Engineer — Distributed Systems, AI & Backend Engineering",
    template: "%s | Dhiraj Wadile",
  },
  description:
    "Backend engineer building production-grade distributed systems, event-driven architectures, and AI agents. Java, Spring Boot, Kafka, Kubernetes. ACI Worldwide.",
  keywords: [
    "Dhiraj Wadile",
    "Software Engineer",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "AI Engineer",
    "Distributed Systems",
    "Microservices",
    "Kafka",
    "Kubernetes",
    "FinTech",
    "PICT Pune",
    "System Design",
  ],
  authors: [{ name: "Dhiraj Wadile" }],
  creator: "Dhiraj Wadile",
  publisher: "Dhiraj Wadile",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dhiraj Wadile",
    title: "Dhiraj Wadile | Software Engineer — Distributed Systems & AI",
    description:
      "Building production-grade distributed systems, event-driven architectures, and AI agents. Java, Spring Boot, Kafka, Kubernetes.",
    images: [
      {
        url: `${siteUrl}/images/og.png`,
        width: 1200,
        height: 630,
        alt: "Dhiraj Wadile — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Wadile | Software Engineer",
    description:
      "Building production-grade distributed systems, event-driven architectures, and AI agents.",
    images: [`${siteUrl}/images/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/images/profile.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dhiraj Wadile",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PersonJsonLd />
        <WebSiteJsonLd />
        <a href="#main-content" className="skip-link" aria-label="Skip to main content">
          Skip to main content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <ClientEffects />
          <ScrollToTop />
          <Header />
          <ErrorBoundary>
            <main id="main-content" className="flex-1 relative z-[1] outline-none" tabIndex={-1}>
              {children}
            </main>
          </ErrorBoundary>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
