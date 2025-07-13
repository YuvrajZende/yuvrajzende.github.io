import FloatingNavigation from "@/components/FloatingNavigation";
import ProjectCard from "@/components/ProjectCard";
import { Github, Trophy, Code, Coffee, Award } from "lucide-react";
import { projects } from "@/data/portfolio";

const Projects = () => {
  // Filter projects by category
  const selfProjects = projects.filter(p => p.category === 'self-projects');
  const hackathonProjects = projects.filter(p => p.category === 'hackathon');
  const weekendProjects = projects.filter(p => p.category === 'weekend-vibes');
  const certificates = projects.filter(p => p.category === 'certificates');

  const sections = [
    {
      title: "Self Projects",
      description: "Personal projects I've built to solve real problems and explore new technologies.",
      icon: Code,
      projects: selfProjects,
      color: "text-blue-500"
    },
    {
      title: "Hackathon Projects",
      description: "Projects built during hackathons and coding competitions.",
      icon: Trophy,
      projects: hackathonProjects,
      color: "text-yellow-500"
    },
    {
      title: "Weekend Vibes",
      description: "Fun projects built during weekends for learning and experimentation.",
      icon: Coffee,
      projects: weekendProjects,
      color: "text-green-500"
    },
    {
      title: "Certificates",
      description: "Professional certifications and achievements in the tech industry.",
      icon: Award,
      projects: certificates,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <main className="w-full max-w-6xl mx-auto px-6 pt-16">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl font-bold mb-4">Projects & Achievements</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A collection of projects I've built, hackathons I've participated in, 
            weekend experiments, and professional certifications I've earned.
          </p>
        </div>

        {/* Project Sections */}
        <div className="space-y-20">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-20">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-8">
                <section.icon className={`w-8 h-8 ${section.color}`} />
                <div>
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </div>

              {/* Projects Grid */}
              {section.projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No {section.title.toLowerCase()} yet. Check back soon!
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center pb-16">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/YuvrajZende"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </div>
      </main>
      {/* Bottom padding for comfortable scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default Projects;