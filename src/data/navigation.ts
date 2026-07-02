export type NavItem = {
  label: string
  href: string
}

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work With Me", href: "#freelance" },
  { label: "Contact", href: "#contact" },
]

export const achievements = [
  {
    title: "IEEE Research Publication",
    description:
      "Published research papers on AI Agents, RAG systems, and event-driven architectures at IEEE conferences.",
    year: "2024-2025",
    icon: "award",
  },
  {
    title: "CodeChef 3-Star",
    description:
      "Achieved 3-star rating on CodeChef with consistent performance in competitive programming contests.",
    year: "2023",
    icon: "code",
  },
  {
    title: "Mentored 125+ Students",
    description:
      "Conducted DSA and system design mentoring sessions, helping students land internships at top tech companies.",
    year: "2023-2024",
    icon: "users",
  },
  {
    title: "Top 5% CGPA",
    description:
      "Graduated in top 5% of Computer Engineering class with a 9.41 CGPA at PICT, Pune.",
    year: "2021-2025",
    icon: "graduation-cap",
  },
  {
    title: "Mood Indigo IIT Bombay",
    description:
      "Led technical events and workshops at Asia's largest college cultural festival hosted by IIT Bombay.",
    year: "2023",
    icon: "microphone",
  },
]

export const leadershipRoles = [
  {
    title: "Technical Event Lead",
    organization: "Mood Indigo, IIT Bombay",
    period: "2023",
    description:
      "Organized and managed technical competitions and workshops at Asia's largest college festival, coordinating with 20+ participants and industry speakers.",
  },
  {
    title: "Student Mentor",
    organization: "Pune Institute of Computer Technology",
    period: "2023-2024",
    description:
      "Mentored 125+ junior students in DSA, system design, and career preparation. Conducted weekly workshops and code review sessions.",
  },
  {
    title: "Workshop Speaker",
    organization: "Various Technical Events",
    period: "2023-2024",
    description:
      "Delivered technical workshops on backend engineering, API design, and AI agents at college-level events and meetups.",
  },
]
