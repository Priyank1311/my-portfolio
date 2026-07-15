import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/utils/constants'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/utils/cn'

const SECTION_IDS = ['home', 'projects', 'experience', 'tech-stack', 'contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          'glass flex items-center gap-1 rounded-full border border-white/10 px-2 py-2 transition-shadow duration-500',
          scrolled && 'shadow-[0_8px_40px_rgba(0,0,0,0.45)]',
        )}
      >
        {NAV_LINKS.map((link) => {
          const id = link.href.replace('#', '')
          const isActive = active === id
          return (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'relative rounded-full px-4 py-2 text-xs font-medium tracking-wide text-muted transition-colors duration-300 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
                isActive && 'text-text-primary',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-white/10 bg-white/5"
                  style={{
                    boxShadow: '0 0 20px hsl(var(--accent) / 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          )
        })}
        <a
          href="#contact"
          className="gradient-border ml-1 rounded-full bg-surface/90 px-5 py-2.5 text-xs font-semibold text-text-primary transition-transform duration-300 ease-out hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Let&apos;s build
        </a>
      </div>
    </motion.nav>
  )
}
