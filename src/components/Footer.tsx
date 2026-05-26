import { Marquee } from '@/components/Marquee'
import { FOOTER_MARQUEE } from '@/utils/constants'

export function Footer() {
  return (
    <footer className="relative border-t border-stroke bg-bg">
      <Marquee text={FOOTER_MARQUEE} />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Priyank Bhardwaj. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
          </span>
          <span className="text-sm text-muted">
            Available for freelance &amp; full-time opportunities
          </span>
        </div>
      </div>
    </footer>
  )
}
