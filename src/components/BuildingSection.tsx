import { ArrowUpRight, Sparkles } from "lucide-react";

const BuildingSection = () => {
  return (
    <section id="building" className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">What I'm Building</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Clarvey
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          My next step in building a marketing brand rooted in one core idea: helping businesses get clear — and get seen.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <span className="text-foreground font-medium">Clarvey</span> is a marketing brand I'm building to help local businesses grow by improving their visibility and messaging. It's not theory — it's built on real strategies, tested on real businesses.
            </p>
            <p>
              Many local and culturally rooted businesses have incredible products and loyal customers, but struggle to grow because they lack a digital presence. This creates a <span className="text-foreground font-medium">visibility gap</span> — they're not failing, they're just not being seen.
            </p>
            <p>
              Clarvey exists to close that gap through better marketing, clearer messaging, and modern digital presence.
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
                  <p className="text-xs text-muted-foreground">Where Clarvey is headed</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Apply proven strategies from real business experience",
                  "Help local businesses grow through marketing",
                  "Build a portfolio of measurable results",
                  "Scale into a full consulting practice",
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
