import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/portfolio';
import StatusBadge from './StatusBadge';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getGlowColor = (category: string) => {
    switch (category) {
      case 'self-projects': return 'hover:shadow-blue-500/30';
      case 'hackathon': return 'hover:shadow-yellow-500/30';
      case 'weekend-vibes': return 'hover:shadow-green-500/30';
      case 'certificates': return 'hover:shadow-purple-500/30';
      default: return 'hover:shadow-primary/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group relative bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-2xl ${getGlowColor(project.category)}`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <div className="text-4xl font-bold text-primary/40">
            {project.title.charAt(0)}
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-2 left-2">
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-2 left-12 flex items-center gap-1 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded-full">
          <Calendar className="w-3 h-3" />
          {project.year}
        </div>
        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground group-hover:shadow-sm group-hover:shadow-primary/20 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground group-hover:shadow-sm group-hover:shadow-primary/20 transition-all duration-200">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 group-hover:shadow-sm group-hover:shadow-primary/20 transition-all duration-200">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1 group-hover:shadow-sm group-hover:shadow-primary/20 transition-all duration-200">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                Preview
              </a>
            </Button>
          )}
          {/* View Certificate for hackathon projects */}
          {project.category === 'hackathon' && project.certificateUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1 group-hover:shadow-sm group-hover:shadow-primary/20 transition-all duration-200">
              <a
                href={project.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 