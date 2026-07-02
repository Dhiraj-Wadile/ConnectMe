import { Hero, About, Experience, Projects, Skills, Achievements } from "@/components/sections"
import { Publications, Leadership, Statistics, Testimonials } from "@/components/sections"
import { Freelance, Blog, Contact } from "@/components/sections"

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
