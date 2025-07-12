import FloatingNavigation from "@/components/FloatingNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArticlesSection from "@/components/ArticlesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNavigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
      </main>
    </div>
  );
};

export default Index;