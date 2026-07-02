import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { MouseGlow } from "@/components/shared/MouseGlow"
import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { ParticleBackground } from "@/components/shared/ParticleBackground"
import { ErrorBoundary } from "@/components/shared/ErrorBoundary"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dhirajwadile.dev"),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhirajwadile.dev",
    siteName: "Dhiraj Wadile",
    title: "Dhiraj Wadile | Software Engineer — Distributed Systems & AI",
    description:
      "Building production-grade distributed systems, event-driven architectures, and AI agents. Java, Spring Boot, Kafka, Kubernetes.",
    images: [
      {
        url: "/images/profile.png",
        width: 512,
        height: 512,
        alt: "Dhiraj Wadile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Wadile | Software Engineer",
    description:
      "Building production-grade distributed systems, event-driven architectures, and AI agents.",
    images: ["/images/profile.png"],
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
    icon: "/favicon.ico",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || ((!theme || theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link" aria-label="Skip to main content">
          Skip to main content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <MouseGlow />
          <ScrollToTop />
          <ParticleBackground />
          <Header />
          <ErrorBoundary>
            <main id="main-content" className="flex-1 relative z-[1] outline-none" tabIndex={-1}>{children}</main>
          </ErrorBoundary>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
