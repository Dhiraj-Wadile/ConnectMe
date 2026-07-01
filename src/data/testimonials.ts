export type Testimonial = {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Senior Engineering Manager",
    role: "Engineering Manager",
    company: "ACI Worldwide",
    content:
      "Dhiraj consistently delivers production-grade systems with a level of engineering maturity well beyond his experience. His work on incident RCA automation fundamentally changed how our team approaches production debugging.",
  },
  {
    name: "Tech Lead",
    role: "Lead Software Engineer",
    company: "ACI Worldwide",
    content:
      "One of the strongest backend engineers I've worked with. Dhiraj has a knack for distilling complex distributed system problems into clean, maintainable solutions. His contributions to our payment microservices architecture were invaluable.",
  },
  {
    name: "Research Supervisor",
    role: "Professor",
    company: "Pune Institute of Computer Technology",
    content:
      "Dhiraj's research on AI agents for systems engineering demonstrates rare depth — he doesn't just apply AI, he understands the underlying infrastructure constraints that make AI practical in production.",
  },
]
