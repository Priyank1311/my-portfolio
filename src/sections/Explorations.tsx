import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'
import { EXPLORATION_ITEMS } from '@/utils/constants'
import { initParallaxGallery } from '@/animations/gsap'

export function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const cleanup = initParallaxGallery(containerRef.current)
    return cleanup
  }, [])

  return (
    <section className="relative border-t border-stroke bg-surface/20">
      <div ref={containerRef} className="px-4 py-16 md:px-6 md:py-20 lg:px-10">
        <motion.header
          className="mx-auto mb-16 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl italic text-text-primary md:text-6xl">
            Systems &amp; Explorations
          </h2>
          <p className="mt-4 text-lg text-muted">
            Building performant systems through experimentation, optimization, and modern
            engineering practices.
          </p>
        </motion.header>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {EXPLORATION_ITEMS.map((item, i) => (
            <div
              key={item.title}
              data-parallax-panel
              className="group relative isolate min-h-[260px] overflow-hidden rounded-[10px] border border-stroke bg-bg shadow-[0_14px_40px_rgb(0_0_0/0.22)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#89AACC]/45 hover:shadow-[0_18px_52px_hsl(var(--accent)/0.16)]"
            >
              <img
                data-parallax-image
                src={item.image}
                alt={`${item.title} visual`}
                loading="lazy"
                className="absolute inset-0 h-[112%] w-full object-cover opacity-70 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/15" />
              <div
                className="absolute inset-0 opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                style={{
                  background: `linear-gradient(${120 + i * 12}deg, hsl(var(--accent) / 0.28), transparent 55%)`,
                }}
              />
              <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between p-5">
                <span className="w-fit rounded-[10px] border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-text-primary backdrop-blur-md">
                  {item.tag}
                </span>
                <div>
                  <div className="mb-4 grid max-w-44 grid-cols-3 gap-1.5">
                    {item.tech.map((tech, j) => (
                      <div
                        key={tech.name}
                        title={tech.name}
                        className="flex aspect-square items-center justify-center rounded-[6px] border border-white/10 bg-black/30 p-2 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#89AACC]/50 hover:bg-white/15 group-hover:bg-white/10"
                        style={{ transitionDelay: `${j * 35}ms` }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          loading="lazy"
                          className="h-5 w-5 object-contain drop-shadow-[0_4px_10px_rgb(0_0_0/0.45)] md:h-6 md:w-6"
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="max-w-[16rem] font-display text-2xl italic leading-tight text-text-primary">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
