import { useEffect } from 'react'
import { ScrollTrigger } from '@/animations/gsap'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { TechStack } from '@/sections/TechStack'
import { Explorations } from '@/sections/Explorations'
import { Metrics } from '@/sections/Metrics'
import { Contact } from '@/sections/Contact'

export default function HomePage() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 500)
    return () => {
      window.removeEventListener('load', refresh)
      clearTimeout(t)
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <Explorations />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
