import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { EXPERIENCES } from '@/utils/constants'
import { SectionContainer } from '@/components/ui/SectionContainer'

export function Experience() {
  return (
    <SectionContainer
      id="experience"
      title="Professional Experience"
      subtitle="Building production-grade systems in fintech and high-growth engineering environments."
      className="border-t border-stroke bg-surface/30"
    >
      <motion.div className="relative" variants={staggerContainer}>
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#89AACC] via-stroke to-transparent md:left-1/2 md:-translate-x-px" />

        <div className="space-y-16">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.company}
              variants={fadeUp}
              className={`relative grid gap-8 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="md:text-right">
                <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-[#89AACC] bg-bg md:left-1/2 md:-translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#89AACC] shadow-[0_0_12px_#89AACC]" />
                </span>
                <p className="text-xs uppercase tracking-[0.25em] text-muted md:pl-0 pl-8">
                  {exp.duration}
                </p>
                <h3 className="mt-2 font-display text-3xl italic text-text-primary md:pl-0 pl-8">
                  {exp.company}
                </h3>
                <p className="mt-1 text-sm text-accent md:pl-0 pl-8">{exp.role}</p>
              </div>

              <div className="glass rounded-2xl border border-stroke p-6 md:ml-0 ml-8">
                <ul className="space-y-3">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#89AACC]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  )
}
