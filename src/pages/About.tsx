import React from "react";
import FloatingNavigation from "@/components/FloatingNavigation";
import GlassIcons from "@/components/GlassIcons";
import { personalInfo, skills } from "@/data/portfolio";
import { 
  Code, Cpu, Database, Globe, Brain, BarChart3, Eye, Network, FileText,
  TrendingUp
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <main className="w-full max-w-4xl mx-auto px-6 pt-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <h2 className="text-2xl font-bold mb-4">Hey, I am Aion</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm an aspiring AI/ML engineer passionate about building intelligent systems, creative products, and solving real-world problems.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-secondary"
            />
          </div>
        </div>

        <div className="space-y-14">
          <section>
          <h2 className="mb-6">Myself</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m an introverted tech enthusiast from{" "}
                <a href="https://maps.app.goo.gl/68PWvUv3BFejxJHB9" className="link" target="_blank" rel="noopener noreferrer">
                  Belgavi, India
                </a>, deeply passionate about crafting digital solutions that make a real-world impact.
              </p>
              <p>
                Whether it's designing smart systems or building clean interfaces, I love turning abstract ideas into tangible products.
              </p>
              <p>
                I regularly share my projects on{" "}
                <a href="https://github.com/YuvrajZende" className="link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>{" "}
                to contribute to the open-source community. Lately, I’ve been diving deeper into machine learning, robotics, and future-forward tech.
              </p>
            </div>
            <br />
            <h2 className="mb-6">What does "Aion" mean?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                "Aion" isn’t just a name — it’s an identity. It reflects my mindset: driven by growth, resilience, and vision.
              </p>
              <p>
                Derived from ancient Greek, *Aion* means “eternity” or “infinite time.” It stands for timeless curiosity, the pursuit of mastery, and building for the future — not just for today.
              </p>
              <p>
                For me, Aion is a reminder to stay grounded yet think beyond limits. It’s who I am, and who I’m becoming.
              </p>
            </div>
          </section>


          <section>
            <h2 className="mb-6">Skills & Interests</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Technical Skills</h3>
                <GlassIcons 
                  items={skills.map(skill => {
                    const iconMap: Record<string, React.ReactNode> = {
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
                  className="mb-6"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-4">Interests</h3>
                <GlassIcons 
                  items={[
                    { icon: <Brain />, color: 'indigo', label: 'Machine Learning' },
                    { icon: <Globe />, color: 'blue', label: 'Web Development' },
                    { icon: <Code />, color: 'green', label: 'Vibe Coding' },
                    { icon: <Cpu />, color: 'purple', label: 'DSA' },
                    { icon: <TrendingUp />, color: 'orange', label: 'Quantitative Finance' },
                  ]}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Bottom padding for comfortable scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default About;