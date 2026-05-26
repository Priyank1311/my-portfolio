import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'
import { cn } from '@/utils/cn'

type MotionWrapperProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MotionWrapper({ children, className, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
