import { cn } from '@/utils/cn'

type MarqueeProps = {
  text: string
  className?: string
}

export function Marquee({ text, className }: MarqueeProps) {
  const items = Array(4).fill(text)

  return (
    <div className={cn('overflow-hidden border-y border-stroke py-4', className)}>
      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-12">
        {items.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.35em] text-muted/80"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  )
}
