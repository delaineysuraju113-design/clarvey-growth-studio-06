import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-xs font-medium tracking-widest uppercase text-muted-foreground animate-fade-in">
            Marketing &amp; Strategy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground animate-fade-up">
            Helping Local Businesses Get Clear&nbsp;— and Get&nbsp;Seen.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Clarvey helps businesses grow by improving their visibility and attracting more customers through modern marketing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#case-study"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border text-sm font-semibold tracking-wide text-foreground hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
