import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm Saidev{" "}
            <span className="inline-block animate-pulse">👻</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            18-year-old tech enthusiast, indie hacker, content creator and OSS builder.
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
    </section>
  );
};

export default HeroSection;