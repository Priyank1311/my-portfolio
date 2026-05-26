import { useEffect, useRef } from 'react'
import { animateCounter } from '@/animations/gsap'

type CounterMetricProps = {
  value: number
  suffix?: string
  label: string
  decimals?: number
}

export function CounterMetric({ value, suffix = '', label, decimals = 0 }: CounterMetricProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = animateCounter(ref.current, value, { decimals, suffix })
    return () => {
      ctx.kill()
    }
  }, [value, suffix, decimals])

  return (
    <div className="text-center md:text-left">
      <span
        ref={ref}
        className="block font-display text-3xl tabular-nums text-text-primary md:text-4xl"
      >
        0{suffix}
      </span>
      <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
    </div>
  )
}
