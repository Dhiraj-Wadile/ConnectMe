export type Publication = {
  title: string
  authors: string
  conference: string
  year: string
  description: string
  link?: string
  type: "Conference" | "Journal" | "Workshop"
}

export const publications: Publication[] = [
  {
    title: "Smart Email for the Visually Impaired: A Voice-Enabled Approach to Digital Inclusion",
    authors: "Dhiraj Wadile, et al.",
    conference: "IEEE International Conference",
    year: "2025",
    description:
      "A voice-enabled email system designed for visually impaired users, leveraging speech-to-text and text-to-speech technologies to make digital communication accessible and inclusive.",
    type: "Conference",
  },
  {
    title: "From Manual to Automated: Transforming Resource Allocation in Event Management",
    authors: "Dhiraj Wadile, et al.",
    conference: "International Conference on Distributed Computing Systems",
    year: "2025",
    description:
      "Proposes an intelligent constraint-based allocation system that automates judge and resource distribution for large-scale technical events, reducing manual effort by 80%.",
    type: "Conference",
  },
  {
    title: "V-Mail: Bridging the Gap in Communication for the Visually Impaired",
    authors: "Dhiraj Wadile, et al.",
    conference: "Workshop on Inclusive Technology",
    year: "2024",
    description:
      "A voicemail-to-text and text-to-voicemail system that bridges communication gaps for visually impaired users through multimodal interaction.",
    type: "Workshop",
  },
]
