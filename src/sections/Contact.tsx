import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'
import { EMAIL, HLS_VIDEO_URL, SOCIAL_LINKS } from '@/utils/constants'
import { HlsVideo } from '@/components/ui/HlsVideo'
import { Button } from '@/components/ui/Button'

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <HlsVideo src={HLS_VIDEO_URL} mirrored />
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-display text-4xl italic leading-tight text-text-primary md:text-6xl lg:text-7xl">
          Let&apos;s build scalable systems together.
        </h2>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 text-lg text-muted transition-colors hover:text-text-primary md:text-xl"
        >
          {EMAIL}
        </a>

        <div className="mt-10">
          <Button href={`mailto:${EMAIL}`} variant="primary">
            Get in Touch ↗
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:gradient-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
