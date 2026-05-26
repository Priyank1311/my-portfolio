import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LOADING_DURATION, LOADING_WORDS } from '@/utils/constants'
import { wordTransition } from '@/animations/variants'

type LoadingScreenProps = {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [counter, setCounter] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((i) => (i + 1) % LOADING_WORDS.length)
    }, 550)

    const start = performance.now()
    let completeTimer: ReturnType<typeof setTimeout>

    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / LOADING_DURATION) * 100)
      setProgress(pct)
      setCounter(Math.floor(pct))
      if (elapsed < LOADING_DURATION) {
        requestAnimationFrame(tick)
      } else {
        setCounter(100)
        setProgress(100)
        completeTimer = setTimeout(() => onCompleteRef.current(), 400)
      }
    }
    requestAnimationFrame(tick)

    return () => {
      clearInterval(wordInterval)
      clearTimeout(completeTimer)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col bg-bg"
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10">
        PRIYANK // SOFTWARE ENGINEER
      </p>

      <div className="flex flex-1 items-center justify-center">
        <div className="relative h-24 overflow-hidden md:h-32">
          <AnimatePresence mode="wait">
            <motion.span
              key={LOADING_WORDS[wordIndex]}
              className="font-display text-5xl italic text-text-primary/80 md:text-7xl"
              {...wordTransition}
            >
              {LOADING_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <p className="absolute bottom-24 right-6 font-display text-7xl tabular-nums text-text-primary/90 md:bottom-28 md:right-10 md:text-9xl">
        {String(counter).padStart(3, '0')}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-stroke">
        <div
          className="h-full w-full origin-left animate-gradient-shift transition-transform duration-75 ease-linear"
          style={{
            backgroundImage: 'var(--gradient-accent)',
            backgroundSize: '200% 100%',
            boxShadow: '0 0 24px hsl(var(--accent) / 0.6)',
            transform: `scaleX(${progress / 100})`,
          }}
        />
      </div>
    </motion.div>
  )
}
