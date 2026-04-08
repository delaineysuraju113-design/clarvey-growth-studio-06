import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="section-container w-full relative">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-card/50 text-xs font-medium tracking-widest uppercase text-muted-foreground animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Student-Athlete · Entrepreneur · Strategist
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] text-foreground animate-fade-up">
            Building, Learning,
            <br />
            and Growing Through
            <br />
            <span className="text-primary">Real Business.</span>
          </h1>

          <p
            className="mt-7 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            A student-athlete turned entrepreneur focused on business, marketing, and real-world growth.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-border text-sm font-semibold tracking-wide text-foreground hover:bg-card transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={18} className="text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
