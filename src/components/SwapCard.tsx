import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronRight, ChevronLeft, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  name: string
  description: string
  tech: string[]
  github: string
  demo: string
  stars: number
  image?: string
}

interface SwapCardProps {
  projects: Project[]
}

const SwapCard = ({ projects }: SwapCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="absolute inset-0 p-6 flex flex-col justify-between"
          >
            {/* Project Image Placeholder */}
            <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/40">
                {currentProject.name.charAt(0)}
              </div>
            </div>

            {/* Project Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {currentProject.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4" />
                  {currentProject.stars}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Preview
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevProject}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextProject}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 shadow-md"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Project Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-primary' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="text-center mt-2 text-sm text-muted-foreground">
        {currentIndex + 1} of {projects.length}
      </div>
    </div>
  )
}

export default SwapCard