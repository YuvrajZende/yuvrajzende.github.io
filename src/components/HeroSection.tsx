import ProfileCard from "@/components/ProfileCard";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () => {
  const handleContactClick = () => {
    // Navigate to contact page or open email
    window.location.href = '/connect';
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm {personalInfo.name}{" "}
            <span className="inline-block animate-pulse">👋</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            {personalInfo.subtitle}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            {personalInfo.bio.substring(0, 200)}...
          </p>
        </div>
        
        <div className="flex-shrink-0 order-first lg:order-last flex justify-center lg:justify-end">
          <ProfileCard
            name={personalInfo.name}
            title={personalInfo.title}
            handle="aion"
            status="Online"
            contactText="Contact Me"
            avatarUrl={personalInfo.avatar}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={handleContactClick}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;