import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HERO_ROLES } from '@/utils/constants'
import { wordTransition } from '@/animations/variants'

export function RoleRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_ROLES.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mt-3 min-h-[3rem] overflow-hidden md:mt-4 md:min-h-[4.5rem] lg:min-h-[5.25rem]">
      <AnimatePresence mode="wait">
        <motion.span
          key={HERO_ROLES[index]}
          className="gradient-text block max-w-full pb-2 font-display text-3xl italic leading-[1.15] md:text-5xl lg:text-6xl"
          {...wordTransition}
        >
          {HERO_ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
