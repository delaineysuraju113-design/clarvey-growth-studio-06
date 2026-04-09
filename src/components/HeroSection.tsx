import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-padding py-20">
      <img
        src={headshot}
        alt="Delainey Suraju"
        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-md object-cover object-top shadow-lg animate-fade-up"
      />

      <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] text-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Delainey Suraju
      </h1>

      <p className="mt-3 text-sm sm:text-base tracking-[0.25em] uppercase text-muted-foreground font-medium animate-fade-up" style={{ animationDelay: "0.3s" }}>
        Student-Athlete · Entrepreneur · Strategist
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
        >
          Explore My Work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-border/80 backdrop-blur-md bg-card/30 text-sm font-semibold tracking-wide text-foreground hover:bg-card/50 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
