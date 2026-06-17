import { useEffect, useRef } from 'react'
import { HLS_VIDEO_URL, HERO_STATS } from '@/utils/constants'
import { HlsVideo } from '@/components/ui/HlsVideo'
import { Button } from '@/components/ui/Button'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { RoleRotator } from '@/components/RoleRotator'
import { CounterMetric } from '@/components/CounterMetric'
import { heroEntrance } from '@/animations/gsap'

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
    }, 2900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-12 pt-32"
    >
      <div className="absolute inset-0">
        <HlsVideo src={HLS_VIDEO_URL} />
        <div className="absolute inset-0 bg-bg/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16">
        <p
          ref={eyebrowRef}
          className="text-xs uppercase tracking-[0.3em] text-muted opacity-0"
        >
          FULL STACK ENGINEER • AI • DISTRIBUTED SYSTEMS
        </p>

        <h1
          ref={nameRef}
          className="mt-6 font-display text-7xl italic leading-[0.9] text-text-primary opacity-0 md:text-8xl lg:text-9xl"
        >
          Priyank Bhardwaj
        </h1>

        <div ref={roleRef} className="opacity-0">
          <RoleRotator />
        </div>

        <p
          ref={sentenceRef}
          className="mt-6 text-lg text-text-primary/90 opacity-0 md:text-xl"
        >
          Building scalable digital systems from India.
        </p>

        <p
          ref={descRef}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted opacity-0 md:text-lg"
        >
          Full Stack Software Engineer specializing in Python, Django, FastAPI, PostgreSQL,
          React.js, and scalable distributed systems. Passionate about engineering performant
          fintech platforms, modern APIs, and AI-powered applications.
        </p>

        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-2 gap-8 border-y border-stroke/80 py-8 opacity-0 md:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <CounterMetric
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              decimals={'decimals' in stat ? stat.decimals : 0}
            />
          ))}
        </div>

        <div ref={ctasRef} className="mt-10 flex flex-wrap gap-4 opacity-0">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="/Priyank_Bhardwaj.pdf" variant="secondary" download>
            Download Resume
          </Button>
        </div>
      </div>

      <div ref={scrollRef} className="relative z-10 mt-16 flex justify-center opacity-0">
        <ScrollIndicator />
      </div>
    </section>
  )
}
