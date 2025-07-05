import Navigation from "@/components/Navigation";
import FloatingNavigation from "@/components/FloatingNavigation";
import SwapCard from "@/components/SwapCard";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";

const Projects = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      name: "Custom Database Engine",
      description: "A TypeScript-based database engine built from scratch with full CRUD operations, indexing, and query optimization.",
      tech: ["TypeScript", "Node.js", "File System"],
      github: "https://github.com/skidgod/custom-db",
      demo: "https://demo.devwtf.in/db",
      stars: 42
    },
    {
      name: "AI Content Generator",
      description: "ML-powered content generation tool that helps writers create engaging articles and blog posts.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com/skidgod/ai-content",
      demo: "https://ai.devwtf.in",
      stars: 28
    },
    {
      name: "DevTools Chrome Extension",
      description: "Browser extension that enhances developer experience with code snippets, color picker, and utility tools.",
      tech: ["JavaScript", "Chrome APIs", "CSS"],
      github: "https://github.com/skidgod/devtools-ext",
      demo: "https://chrome.google.com/webstore",
      stars: 156
    },
    {
      name: "Real-time Chat App",
      description: "Scalable chat application with WebSocket support, file sharing, and end-to-end encryption.",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com/skidgod/realtime-chat",
      demo: "https://chat.devwtf.in",
      stars: 73
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <Navigation currentTime={currentTime} />
      <main className="w-full max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of projects I've built to solve problems and explore new technologies.
          </p>
        </div>

        <SwapCard projects={projects} />

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more projects?
          </p>
          <a
            href="https://github.com/skidgod"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 link"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </div>
      </main>
    </div>
  );
};

export default Projects;