import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Achievements } from "@/components/sections/Achievements"
import { Publications } from "@/components/sections/Publications"
import { Leadership } from "@/components/sections/Leadership"
import { Statistics } from "@/components/sections/Statistics"
import { Testimonials } from "@/components/sections/Testimonials"
import { Freelance } from "@/components/sections/Freelance"
import { Blog } from "@/components/sections/Blog"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Publications />
      <Leadership />
      <Testimonials />
      <Blog />
      <Freelance />
      <Contact />
    </>
  )
}
