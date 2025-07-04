const AboutSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 mb-16">
      <div className="space-y-12">
        <div>
          <h2 className="mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a super introvert nurtured in a small state{" "}
            <a href="https://maps.app.goo.gl/SFCDCshEyR96jmNUA" className="link" target="_blank" rel="noopener noreferrer">
              Odisha, India
            </a>
            , passionate about building impactful products that leverage technology to make a difference. I often share my work to{" "}
            <a href="https://git.new/skidgod" className="link" target="_blank" rel="noopener noreferrer">
              contribute
            </a>{" "}
            to the community. In addition to my development work, I'm always exploring new ideas, particularly in areas like machine learning and robotics.
          </p>
        </div>

        <div>
          <h2 className="mb-4">Career</h2>
          <p className="text-muted-foreground leading-relaxed">
            I started as a self-taught developer at the age of 14, while I was in 8th grade and it's been a rollercoaster ride since then. Am aka{" "}
            <a href="https://dub.sh/skidgod" className="link" target="_blank" rel="noopener noreferrer">
              SkidGod
            </a>{" "}
            on the internet. Won't you ask me what does it mean?{" "}
            <a href="/about" className="link">
              Click here to know
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;