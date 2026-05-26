import { motion } from 'framer-motion'
import { staggerContainer } from '@/animations/variants'
import { PROJECTS } from '@/utils/constants'
import { SectionContainer } from '@/components/ui/SectionContainer'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  return (
    <SectionContainer
      id="projects"
      title="Selected Engineering Work"
      subtitle="A curated collection of scalable systems, APIs, analytics platforms, and AI-powered applications."
      className="bg-bg"
    >
      <motion.div
        className="grid grid-cols-12 gap-4"
        variants={staggerContainer}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionContainer>
  )
}
