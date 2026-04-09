import { ArrowDown } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* Left: Photo */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={headshot}
          alt="Delainey Suraju"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
      </div>

      {/* Mobile: Background image */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={headshot}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />
      </div>

      {/* Right: Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start section-padding">
        <div className="max-w-xl mx-auto lg:mx-0 lg:pl-16 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-muted-foreground animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span className="w-2 h-2 rounded-full bg-accent" />
            Student-Athlete · Entrepreneur · Strategist
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] text-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Delainey
            <br />
            Suraju
          </h1>

          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-md animate-fade-up" style={{ animationDelay: "0.3s" }}>
            A student-athlete turned entrepreneur focused on business, marketing, and real-world growth.
          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
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
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={18} className="text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
