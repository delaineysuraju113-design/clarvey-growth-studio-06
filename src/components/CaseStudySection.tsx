import { ArrowUpRight } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Current Project</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Adom African Market
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 leading-relaxed opacity-90">
            <p>
              Adom African Market is a family-owned grocery store offering authentic African and Caribbean products. The store has a strong local following and loyal customer base — but hasn't yet reached its full growth potential online.
            </p>
            <p>
              As the lead marketing strategist, I'm actively building and executing a complete growth plan: from website development and social media strategy to brand positioning and customer acquisition.
            </p>
            <p className="font-medium opacity-100">
              This is a live case study — documenting real strategies, real work, and real results as they happen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-widest uppercase opacity-70 mb-2">What I'm Building</h3>
            {[
              "Website design & development",
              "Social media content strategy",
              "Customer acquisition campaigns",
              "Brand positioning & messaging",
              "Growth tracking & reporting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 py-3 border-b border-primary-foreground/10">
                <ArrowUpRight size={16} className="shrink-0 text-accent" />
                <span className="text-sm">{item}</span>
              </div>
            ))}

            <div className="mt-8 p-5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
              <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Status</p>
              <p className="text-sm font-semibold">Active — Results Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
