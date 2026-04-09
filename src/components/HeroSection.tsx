import { ArrowDown } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={headshot}
          alt="Delainey Suraju"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content at bottom */}
      <div className="relative z-10 section-padding pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] text-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Delainey Suraju
        </h1>

        <p className="mt-3 text-sm sm:text-base tracking-[0.25em] uppercase text-muted-foreground font-medium animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Student-Athlete · Entrepreneur · Strategist
        </p>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          A student-athlete turned entrepreneur focused on business, marketing, and real-world growth.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-border/80 backdrop-blur-md bg-card/30 text-sm font-semibold tracking-wide text-foreground hover:bg-card/50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
