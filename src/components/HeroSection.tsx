import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm Saidev{" "}
            <span className="inline-block animate-pulse">👻</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            18-year-old tech enthusiast, indie hacker, content creator and OSS builder.
          </p>
        </div>
        
        <div className="flex-shrink-0 order-first lg:order-last">
          <img
            src={profilePhoto}
            alt="Saidev Dhal"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg ring-4 ring-secondary mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;