import { ArrowRight } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Future Vision</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Where I'm Going
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My long-term goal is to become a high-level <span className="text-foreground font-medium">business consultant and strategist</span> — someone who doesn't just advise, but builds alongside the companies they work with.
            </p>
            <p>
              I want to build and scale businesses, develop deep expertise in marketing and operations, and work with companies to solve their toughest growth challenges. Eventually, I want to operate or advise multiple businesses — creating systems that drive measurable outcomes.
            </p>
            <p>
              Every experience I've had — from the football field to cold calling to running my own agency — has been building toward this. I'm not waiting for the opportunity. I'm creating it.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {["Consulting & Strategy", "Business Leadership", "Building & Scaling", "Marketing Operations"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-medium text-foreground bg-background"
              >
                <ArrowRight size={12} className="text-accent" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
