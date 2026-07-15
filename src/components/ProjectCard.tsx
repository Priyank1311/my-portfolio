import { useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/animations/variants'
import { cn } from '@/utils/cn'

type Project = (typeof import('@/utils/constants').PROJECTS)[number]

type ProjectCardProps = {
  project: Project
}

function ProjectVisual({
  variant,
  image,
  title,
}: {
  variant: Project['variant']
  image: string
  title: string
}) {
  return (
    <div className="absolute inset-0">
      {/* Layout/visual polish: real project-themed image backdrop instead of placeholder-only blocks */}
      <img
        src={image}
        alt={`${title} preview`}
        className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
        loading="lazy"
      />

      {variant === 'terminal' && (
        <div className="absolute inset-0 p-4 font-mono text-[10px] text-emerald-300/90 md:text-xs">
          <div className="rounded-[10px] border border-white/10 bg-black/60 p-3 backdrop-blur-sm">
            <p className="text-muted">&gt; proxy.run(collection_id)</p>
            <p className="mt-1 animate-pulse">POST /api/v1/execute ? 200 OK</p>
            <p className="text-accent">async pipeline: 847 req/s</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-5px)`
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (card) card.style.transform = ''
  }

  return (
    <motion.article variants={fadeUp} className={cn('group relative h-full min-h-[280px]', project.span)}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        // Layout fix: force consistent card geometry and 10px radius to prevent visual overlap
        className="gradient-border relative flex h-full flex-col overflow-hidden rounded-[10px] border border-stroke bg-surface/60 transition-all duration-300 ease-in-out will-change-transform hover:shadow-[0_8px_20px_hsl(var(--accent)/0.18)]"
      >
        <div className="relative h-44 overflow-hidden md:h-52">
          <ProjectVisual variant={project.variant} image={project.image} title={project.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        </div>

        <div className="relative z-10 p-4 md:p-5">
          <div className="mb-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-[10px] border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-muted transition-all duration-300 ease-in-out group-hover:border-[#89AACC]/40 group-hover:text-text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className="font-display text-xl italic text-text-primary md:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {project.metric}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
