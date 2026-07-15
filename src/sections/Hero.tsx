import { useEffect, useRef } from 'react'
import { HLS_VIDEO_URL, HERO_STATS } from '@/utils/constants'
import { HlsVideo } from '@/components/ui/HlsVideo'
import { Button } from '@/components/ui/Button'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { RoleRotator } from '@/components/RoleRotator'
import { heroEntrance } from '@/animations/gsap'

const heroSignals = [
  'Backend-heavy full-stack delivery',
  'FastAPI, Django, React, PostgreSQL',
  'Fintech, AI, and distributed systems',
]

export function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLDivElement>(null)
  const sentenceRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      heroEntrance({
        eyebrow: eyebrowRef.current,
        name: nameRef.current,
        role: roleRef.current,
        sentence: sentenceRef.current,
        description: descRef.current,
        stats: statsRef.current,
        ctas: ctasRef.current,
        scroll: scrollRef.current,
      })
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-12 pt-28 md:pt-32"
    >
      <div className="absolute inset-0">
        <HlsVideo src={HLS_VIDEO_URL} />
        <div className="absolute inset-0 bg-bg/72 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/35 via-transparent to-bg" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16">
        <p
          ref={eyebrowRef}
          className="max-w-xl text-sm leading-relaxed text-muted opacity-0 md:text-base"
        >
          Full-stack engineer focused on backend systems, product delivery, and the kind of
          implementation detail that makes projects credible.
        </p>

        <h1
          ref={nameRef}
          className="mt-6 max-w-4xl font-display text-6xl italic leading-[0.92] tracking-[-0.03em] text-text-primary opacity-0 text-balance sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Priyank Bhardwaj
        </h1>

        <div ref={roleRef} className="mt-5 opacity-0">
          <RoleRotator />
        </div>

        <p
          ref={sentenceRef}
          className="mt-6 max-w-2xl text-lg text-text-primary/90 opacity-0 md:text-xl"
        >
          Building scalable digital systems from India.
        </p>

        <p
          ref={descRef}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted opacity-0 md:text-lg"
        >
          Full Stack Software Engineer specializing in Python, Django, FastAPI, PostgreSQL,
          React.js, and scalable distributed systems. Focused on fintech platforms, modern APIs,
          and AI-powered applications that ship cleanly and perform under load.
        </p>

        <div
          ref={statsRef}
          className="mt-10 grid gap-3 opacity-0 sm:grid-cols-3"
        >
          {heroSignals.map((signal) => (
            <div
              key={signal}
              className="rounded-[12px] border border-stroke bg-surface/55 px-4 py-3 text-sm leading-relaxed text-text-primary/90"
            >
              {signal}
            </div>
          ))}
        </div>

        <div
          ref={ctasRef}
          className="mt-10 flex flex-wrap gap-4 opacity-0"
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="/Priyank_Bhardwaj.pdf" variant="secondary" download>
            Download Resume
          </Button>
        </div>

        <dl
          className="mt-12 grid grid-cols-2 gap-4 border-t border-stroke/70 pt-8 text-sm text-muted md:grid-cols-4"
          aria-label="Selected impact signals"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <dt className="text-text-primary/85">{stat.label}</dt>
              <dd className="text-xl font-medium tabular-nums text-text-primary md:text-2xl">
                {stat.value}
                {stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div ref={scrollRef} className="relative z-10 mt-16 flex justify-center opacity-0">
        <ScrollIndicator />
      </div>
    </section>
  )
}
