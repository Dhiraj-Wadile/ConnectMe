# Dhiraj Wadile — Engineering Portfolio

> Software Engineer @ ACI Worldwide | Building Scalable Payment Systems & AI-Powered Solutions

**dhiraj-engineering** — a production-grade personal brand website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Geist (by Vercel)
- **Deployment:** Vercel-optimized

## Structure

```
src/
├── app/              # App Router pages, layout, SEO
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Experience, Projects, etc.
│   ├── shared/       # ThemeProvider, AnimatedSection, AnimatedCounter
│   └── ui/           # Button, Badge, Separator
├── data/             # Resume, projects, skills, publications
├── hooks/            # Custom React hooks
└── lib/              # Utility functions
```

## Sections

- Hero — Professional headline with animated background, CTA buttons
- Statistics — Animated counters (600+ DSA, 125+ mentored, 30% MTTR reduction)
- About — Engineering philosophy, professional bio
- Experience — Interactive timeline (ACI Worldwide)
- Projects — Deep-dive case studies (EmpowerTrace, Judge Allocation, Voice Mail)
- Skills — Categorized engineering toolkit
- Achievements — Timeline of key milestones
- Publications — IEEE research papers
- Leadership — Community involvement, mentoring, speaking
- Testimonials — Professional recommendations
- Blog — MDX-ready writing section
- Freelance — Service offerings with contact CTA
- Contact — Form, social links, Calendly integration

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deployment

Deploy to Vercel with zero configuration:

```bash
npx vercel
```

Configure `NEXT_PUBLIC_SITE_URL` environment variable for your domain.

## Domain

Primary: dhirajwadile.dev
Alternatives: wadile.dev, engineeringbydw.dev

## License

MIT
