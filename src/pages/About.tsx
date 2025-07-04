import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentTime={currentTime} />
      <main className="w-full max-w-4xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Deep dive into my journey as a developer and creator.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <img
              src={profilePhoto}
              alt="Saidev Dhal"
              className="w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-secondary"
            />
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a super introvert nurtured in a small state{" "}
                <a href="https://maps.app.goo.gl/SFCDCshEyR96jmNUA" className="link" target="_blank" rel="noopener noreferrer">
                  Odisha, India
                </a>
                , passionate about building impactful products that leverage technology to make a difference.
              </p>
              <p>
                I started my coding journey at the age of 14 while I was in 8th grade. It's been a rollercoaster ride since then, 
                filled with countless hours of learning, building, and sharing knowledge with the community.
              </p>
              <p>
                I often share my work to{" "}
                <a href="https://git.new/skidgod" className="link" target="_blank" rel="noopener noreferrer">
                  contribute
                </a>{" "}
                to the open-source community. In addition to my development work, I'm always exploring new ideas, 
                particularly in areas like machine learning and robotics.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6">What does "SkidGod" mean?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                People often ask me about my online alias{" "}
                <a href="https://dub.sh/skidgod" className="link" target="_blank" rel="noopener noreferrer">
                  SkidGod
                </a>
                . The name has an interesting backstory that reflects my journey in the tech world.
              </p>
              <p>
                When I started learning programming, I was fascinated by how quickly I could "skid" through different 
                technologies and concepts. The "God" part represents my aspiration to master these skills at a divine level. 
                It's both humble and ambitious - acknowledging that I'm always learning while striving for excellence.
              </p>
              <p>
                Today, SkidGod represents my commitment to continuous learning, building cool projects, and helping others 
                in their coding journey. It's not just a username - it's a mindset.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6">Skills & Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">Development</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Full-stack web development</li>
                  <li>• TypeScript & JavaScript</li>
                  <li>• React & Next.js</li>
                  <li>• Node.js & Express</li>
                  <li>• Database design</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Interests</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Machine Learning</li>
                  <li>• Robotics</li>
                  <li>• Open Source</li>
                  <li>• Content Creation</li>
                  <li>• Indie Hacking</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;