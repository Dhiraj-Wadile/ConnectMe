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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dhirajwadile.dev"),
  title: {
    default: "Dhiraj Wadile | Software Engineer — Building Scalable Payment Systems & AI Solutions",
    template: "%s | Dhiraj Wadile",
  },
  description:
    "Software Engineer @ ACI Worldwide. Building production-grade payment systems, AI agents, and distributed architectures. Java, Spring Boot, AI, event-driven systems.",
  keywords: [
    "Dhiraj Wadile",
    "Software Engineer",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "AI Engineer",
    "Payment Systems",
    "Distributed Systems",
    "Microservices",
    "ACI Worldwide",
    "PICT Pune",
  ],
  authors: [{ name: "Dhiraj Wadile" }],
  creator: "Dhiraj Wadile",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhirajwadile.dev",
    siteName: "Dhiraj Wadile",
    title: "Dhiraj Wadile | Software Engineer",
    description:
      "Building production-grade payment systems, AI agents, and distributed architectures. Software Engineer @ ACI Worldwide.",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Dhiraj Wadile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Wadile | Software Engineer",
    description:
      "Building production-grade payment systems, AI agents, and distributed architectures.",
    images: ["/images/og.png"],
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
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <ScrollProgress />
          <MouseGlow />
          <ScrollToTop />
          <ParticleBackground />
          <Header />
          <main className="flex-1 relative z-[1]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
