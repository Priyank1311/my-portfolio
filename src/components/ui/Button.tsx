import type { ReactNode, RefObject } from 'react'
import { cn } from '@/utils/cn'
import { useMagnetic } from '@/hooks/useMagnetic'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  download?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  download,
}: ButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.28)

  const base = cn(
    'gradient-border relative inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-medium transition-all duration-300 ease-in-out will-change-transform hover:-translate-y-1 hover:shadow-[0_10px_24px_hsl(var(--accent)/0.25)]',
    variant === 'primary'
      ? 'bg-surface/80 text-text-primary hover:glow-accent'
      : 'glass border border-white/10 text-text-primary hover:border-white/20',
    className,
  )

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  )

  if (href) {
    return (
      <a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        className={base}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref as RefObject<HTMLButtonElement>}
      type="button"
      className={base}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
