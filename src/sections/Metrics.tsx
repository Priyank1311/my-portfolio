import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { METRICS } from '@/utils/constants'
import { CounterMetric } from '@/components/CounterMetric'

export function Metrics() {
  return (
    <section className="border-y border-stroke bg-bg px-4 py-24 md:px-8 md:py-32 lg:px-16">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2
          variants={fadeUp}
          className="mb-16 text-center font-display text-4xl italic text-text-primary md:text-5xl"
        >
          Metrics &amp; Achievements
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 gap-12 md:grid-cols-4"
        >
          {METRICS.map((m) => (
            <motion.div key={m.label} variants={fadeUp}>
              <CounterMetric
                value={m.value}
                suffix={m.suffix}
                label={m.label}
                decimals={'decimals' in m ? m.decimals : 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
