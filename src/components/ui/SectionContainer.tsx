import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { cn } from '@/utils/cn'

type SectionContainerProps = {
  id?: string
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export function SectionContainer({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn('relative px-4 py-24 md:px-8 md:py-32 lg:px-16', className)}>
      <motion.div
        className="mx-auto max-w-7xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {(title || subtitle) && (
          <motion.header variants={fadeUp} className="mb-16 max-w-3xl">
            {title && (
              <h2 className="font-display text-4xl italic leading-tight text-text-primary md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
            )}
          </motion.header>
        )}
        {children}
      </motion.div>
    </section>
  )
}
