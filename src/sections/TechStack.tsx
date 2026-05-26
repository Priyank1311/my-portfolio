import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { TECH_CATEGORIES } from '@/utils/constants'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { cn } from '@/utils/cn'

type TechItem = {
  name: string
  icon: string
}

export function TechStack() {
  const marqueeItems: TechItem[] = TECH_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({ name: item.name, icon: item.icon })),
  )

  return (
    <SectionContainer
      id="tech-stack"
      title="Tech Stack"
      subtitle="Technologies and tools powering scalable, production-grade engineering."
      className="overflow-hidden bg-bg"
    >
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
      >
        {TECH_CATEGORIES.map((cat, catIndex) => (
          <motion.div
            key={cat.title}
            variants={fadeUp}
            className="gradient-border group rounded-[10px] border border-stroke bg-surface/40 p-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:glow-accent"
            style={{ animationDelay: `${catIndex * 0.15}s` }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {cat.title}
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  className={cn(
                    'flex min-h-20 flex-col items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/5 px-3 py-3 text-center text-sm text-text-primary',
                    'transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#89AACC]/50 hover:bg-white/10 hover:shadow-[0_12px_28px_hsl(var(--accent)/0.14)]',
                  )}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-7 w-7 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <span className="leading-tight">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 overflow-hidden border-y border-stroke py-4 opacity-80">
        <motion.div
          className="flex w-max gap-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item.name}-${index}`}
              className="flex whitespace-nowrap rounded-[10px] border border-stroke bg-surface/40 px-4 py-2 text-sm text-muted transition-all duration-300 ease-in-out hover:border-[#89AACC]/50 hover:text-text-primary"
            >
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="mr-2 h-5 w-5 object-contain"
              />
              {item.name}
            </span>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}
