import { ArrowUpRight, TrendingUp, BarChart3, Target } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Case Study</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Adom African Market
        </h2>
        <p className="opacity-80 max-w-2xl mb-12 leading-relaxed">
          A real-world business transformation — not a class project. This is where strategy meets execution.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 leading-relaxed opacity-90">
            <p>
              Adom African Market is a local family-owned grocery store offering authentic African and Caribbean products. The store has a loyal customer base built over years of trust — but its digital presence doesn't match its potential.
            </p>
            <p>
              I'm leading the marketing transformation: building a website, growing social media, implementing customer acquisition strategies, and developing brand positioning that communicates the store's unique value to a wider audience.
            </p>
            <p className="font-medium opacity-100">
              This is a live project — documenting real work, real strategies, and real outcomes as they happen.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase opacity-60 mb-1">What I'm Executing</h3>

            {[
              { icon: Target, text: "Brand positioning & messaging strategy" },
              { icon: BarChart3, text: "Social media content & growth" },
              { icon: TrendingUp, text: "Customer acquisition campaigns" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 py-3 border-b border-primary-foreground/10">
                <item.icon size={18} className="text-accent shrink-0" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}

            <div className="flex items-center gap-4 py-3 border-b border-primary-foreground/10">
              <ArrowUpRight size={18} className="text-accent shrink-0" />
              <span className="text-sm">Website design & development</span>
            </div>
            <div className="flex items-center gap-4 py-3">
              <ArrowUpRight size={18} className="text-accent shrink-0" />
              <span className="text-sm">Long-term growth strategy & reporting</span>
            </div>

            {/* Metrics placeholder */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Phase", value: "Active" },
                { label: "Focus", value: "Growth" },
                { label: "Results", value: "Tracking" },
              ].map((metric) => (
                <div key={metric.label} className="text-center p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-lg font-heading font-bold">{metric.value}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
