import { codingPlatforms } from "@/data/portfolio";
import { ExternalLink, Code, Trophy, Zap, BookOpen } from "lucide-react";

const AboutSection = () => {
  const getPlatformIcon = (platformName: string) => {
    switch (platformName.toLowerCase()) {
      case 'leetcode': return <Code className="w-4 h-4" />;
      case 'codechef': return <Trophy className="w-4 h-4" />;
      case 'codeforces': return <Zap className="w-4 h-4" />;
      case 'geeksforgeeks': return <BookOpen className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platformName: string) => {
    switch (platformName.toLowerCase()) {
      case 'leetcode': return 'hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-200 dark:hover:border-orange-800';
      case 'codechef': return 'hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-800';
      case 'codeforces': return 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800';
      case 'geeksforgeeks': return 'hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-800';
      default: return 'hover:bg-gray-50 dark:hover:bg-gray-900/20 hover:border-gray-200 dark:hover:border-gray-800';
    }
  };

  const getRatingColor = (platformName: string) => {
    switch (platformName.toLowerCase()) {
      case 'leetcode': return 'text-orange-600 dark:text-orange-400';
      case 'codechef': return 'text-green-600 dark:text-green-400';
      case 'codeforces': return 'text-blue-600 dark:text-blue-400';
      case 'geeksforgeeks': return 'text-green-600 dark:text-green-400';
      default: return 'text-primary';
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 mb-16">
      <div className="space-y-12">
        <div>
          <h2 className="mb-4 text-2xl font-bold">🚀 About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hey! I'm a curious mind from the vibrant city of{" "}
            <a href="https://maps.app.goo.gl/68PWvUv3BFejxJHB9" className="link" target="_blank" rel="noopener noreferrer">
              Belgavi, India
            </a>
            , where quiet ambition meets bold innovation. A true introvert turned builder, I thrive on crafting meaningful digital experiences that blend creativity with tech.
            <br /><br />
            Whether it's coding up ideas, experimenting with{" "}
            <span className="font-semibold">machine learning</span> models, or tinkering with{" "}
            <span className="font-semibold">robotics</span>—I'm all in. I regularly drop my latest creations and experiments on{" "}
            <a href="https://github.com/YuvrajZende" className="link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{" "}
            for the world to explore.
            <br /><br />
            Always building. Always learning. Let's make something epic.
          </p>
        </div>

        {/* Coding Platforms */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">💻 Coding Profiles</h3>
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="space-y-2">
              {codingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block transition-all duration-300 transform hover:scale-[1.02] ${getPlatformColor(platform.name)}`}
                >
                  <div className="flex items-center justify-between py-3 px-4 rounded-lg border border-transparent transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {getPlatformIcon(platform.name)}
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {platform.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                        @{platform.username}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {platform.stats.rating && (
                        <span className={`text-lg font-bold ${getRatingColor(platform.name)} group-hover:scale-110 transition-transform`}>
                          {platform.stats.rating}
                        </span>
                      )}
                      {platform.stats.rank && (
                        <span className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                          {platform.stats.rank}
                        </span>
                      )}
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;