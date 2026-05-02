import { ArrowRight } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding bg-card">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Future Vision
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Where I'm Going
          </h2>
          
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              My long-term goal is to become a{" "}
              <strong className="text-black font-extrabold">
                high-level business consultant and authentic strategist
              </strong>{" "}
              — a man who keeps growing and uses every skill he picks up to benefit himself, the people around him, and the generations to come. A man building for his future family.
            </p>
            <p>
              At{" "}
              <strong className="text-black font-extrabold">
                Insight Global
              </strong>
              , I plan to excel — learning from the best, sharpening my communication, and building real trust inside every room I step into. Pushing past limits, facing fears head-on, and bringing my full identity into the work.
            </p>
            <p>
              My background made me who I am, and these dreams won't stop until they're reality. Inspired by every win and loss, I'll keep enduring as long as the Lord lets me.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              "Grow at Insight Global by learning from the best and building deep client trust",
              "Push past comfort zones to become a stronger leader and communicator",
              "Develop deep expertise in marketing, operations, and emerging AI tools",
              "Grow Clarvé into a brand that makes a lasting impact in communities",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-bold text-black bg-background shadow-sm"
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
