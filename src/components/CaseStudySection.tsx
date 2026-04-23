import { ArrowUpRight, TrendingUp, BarChart3, Target } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="section-padding bg-[#0A2215]">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Case Study
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Adom African Market
        </h2>
        
        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-8 text-sm text-gray-300">
          <span><span className="text-white font-extrabold">Location ·</span> Minnesota, USA</span>
          <span><span className="text-white font-extrabold">Industry ·</span> African Grocery Retail</span>
          <span><span className="text-white font-extrabold">Type ·</span> Family-Owned Business</span>
        </div>
        
        <p className="text-gray-300 max-w-2xl mb-12 leading-relaxed text-base">
          A real-world business transformation — not a class project. This is where strategy meets execution.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white font-extrabold">Adom African Market</strong> is a family-owned grocery store
              offering an authentic range of West African products — from goat meat and stockfish to specialty flours, traditional
              spices, clothing, and cultural goods. Over the years, the store built a loyal customer base through trust and
              relationships, but its digital presence wasn't reflecting the strength of the business.
            </p>
            <p>
              This project is a <strong className="text-white font-extrabold">full marketing transformation</strong>: building a website with SEO-optimized inventory and local delivery,
              establishing a social media presence, developing brand positioning, and implementing customer acquisition
              strategies — all designed to reach a wider audience while staying true to the store's cultural identity.
            </p>
            <p>
              Adom African Market serves as <strong className="text-white font-extrabold">Clarvé's anchor case study</strong> — a
              live demonstration of what's possible when underrepresented businesses get the visibility they've always
              deserved. Real strategies. Real outcomes. Documented as they happen.
            </p>
            <span className="inline-flex items-center gap-2.5 text-base font-extrabold text-accent mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              Live project — ongoing
            </span>
          </div>
          
          <div className="space-y-5">
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">What I'm Executing</h3>
            {[
              { icon: Target, text: "Brand positioning & messaging strategy" },
              { icon: BarChart3, text: "Social media content & growth" },
              { icon: TrendingUp, text: "Customer acquisition campaigns" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 py-3 border-b border-white/10"
              >
                <item.icon size={18} className="text-accent shrink-0" />
                <span className="text-sm text-gray-300 font-semibold">{item.text}</span>
              </div>
            ))}
            <div className="flex items-center gap-4 py-3 border-b border-white/10">
              <ArrowUpRight size={18} className="text-accent shrink-0" />
              <span className="text-sm text-gray-300 font-semibold">Website design & development</span>
            </div>
            <div className="flex items-center gap-4 py-3">
              <ArrowUpRight size={18} className="text-accent shrink-0" />
              <span className="text-sm text-gray-300 font-semibold">Long-term growth strategy & reporting</span>
            </div>
            
            {/* Metrics placeholder */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Phase", value: "Active" },
                { label: "Focus", value: "Growth" },
                { label: "Results", value: "Tracking" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <p className="text-lg font-heading font-extrabold text-white">{metric.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{metric.label}</p>
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
