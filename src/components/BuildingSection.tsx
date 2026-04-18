import { ArrowUpRight, Sparkles } from "lucide-react";
import clarvéLogo from "@/assets/clarvé-logo.png";

const BuildingSection = () => {
  return (
    <section id="building" className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">What I'm Building</p>
        <div className="flex items-center gap-4 mb-4">
          <img src={clarvéLogo} alt="Clarvé logo" className="w-14 h-14 object-contain" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Clarvé
          </h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Helping overlooked businesses get clear — and get seen.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-medium">Clarvé</span> is a research-driven marketing agency built for the entrepreneurs America overlooks — immigrant founders, women business owners, and underrepresented communities ready to grow beyond their block.
            </p>
            <p>
              These businesses aren't failing. They're being held back. Today, <span className="text-foreground font-medium">97% of consumers</span> search online before ever walking through a door — and businesses without a strong digital presence aren't just missing clicks, they're missing customers entirely.
            </p>
            <p>
              The gap isn't a talent problem. It's a visibility problem. Clarvé exists to close it through research-backed strategy, modern digital presence, and marketing built for founders the mainstream market has long ignored.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Sparkles size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">The Vision</h3>
                  <p className="text-xs text-muted-foreground">Where Clarvé is headed</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Scale research-driven strategies that drive real business growth",
                  "Help underrepresented founders grow beyond local markets",
                  "Build a portfolio focused on measurable results and impact",
                  "Grow Clarvé into a national, equity-driven consulting brand",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <ArrowUpRight size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-lg border border-primary/20 bg-primary/5">
              <p className="text-xs font-medium tracking-widest uppercase text-primary mb-1">Status</p>
              <p className="text-sm font-semibold text-foreground">In Development — Launching Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;
