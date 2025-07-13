import FloatingNavigation from "@/components/FloatingNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArticlesSection from "@/components/ArticlesSection";
import GlassIcons from "@/components/GlassIcons";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import { skills } from "@/data/portfolio";
import { Code, Cpu, Database, Globe, Brain, BarChart3, Eye, Network, FileText, Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        {/* Download Resume Button */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-8">
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-xl hover:scale-105 group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>
        </section>
        <AboutSection />
        {/* Skills Section */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <GlassIcons
            items={skills.map(skill => {
              const iconMap = {
                Code: <Code />,
                Cpu: <Cpu />,
                Database: <Database />,
                Globe: <Globe />,
                Brain: <Brain />,
                BarChart3: <BarChart3 />,
                Eye: <Eye />,
                Network: <Network />,
                FileText: <FileText />
              };
              return {
                icon: iconMap[skill.icon] || <Code />,
                color: skill.color,
                label: skill.name
              };
            })}
          />
        </section>
        <EducationSection />
        <CertificatesSection />
        <ArticlesSection />
      </main>
      {/* Bottom padding for comfortable scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;