import { ArrowUpRight, TrendingUp, BarChart3, Target } from "lucide-react";
import adomImg from "@/assets/480687095_122192720432168223_1119427440004990007_n (1).jpg";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="section-padding bg-[#2B4A37]">
      <div className="section-container">
        <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
          Case Study
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Adom African Market
        </h2>

        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-8 text-sm text-gray-100">
          <span>
            <span className="text-white font-extrabold">Location ·</span> Minnesota, USA
          </span>
          <span>
            <span className="text-white font-extrabold">Industry ·</span> African Grocery Retail
          </span>
          <span>
            <span className="text-white font-extrabold">Type ·</span> Family-Owned Business
          </span>
        </div>

        <p className="text-gray-100 max-w-2xl mb-6 leading-relaxed text-base">
          Real business transformation for Clarvé.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text + Image */}
          <div className="flex flex-col gap-8">
            <div className="space-y-2 text-gray-100 leading-relaxed">
              <p>
                <strong className="text-white font-extrabold">Adom African Market</strong> is a family-owned grocery store stocked with West African staples — goat meat, stockfish, specialty flours, spices, and cultural snacks. Built on trust and close relationships, the people who walk through its doors aren't customers — they're family. But even with that loyal community, its digital presence didn't match the strength of the business.
              </p>
              <p>
                <strong className="text-white font-extrabold">Clarvé</strong> is leading a full marketing transformation — brand positioning, a new website, local delivery, social media growth, and customer acquisition — all built to expand reach without losing cultural identity.
              </p>
              <p>
                This is Clarvé's <strong className="text-white font-extrabold">anchor case study</strong> — proof of what happens when overlooked businesses finally get the <strong className="text-white font-extrabold">visibility</strong> they've earned.
              </p>
              <p>
                <span className="inline-flex items-center gap-2.5 text-base font-extrabold text-accent mt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  Live project — ongoing
                </span>
              </p>
            </div>
            
            <img 
              src={adomImg} 
              alt="Adom African Market" 
              className="w-full h-64 md:h-72 object-cover rounded-lg shadow-sm border border-white/20"
            />
          </div>

          {/* Right Column: Execution + Metrics */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-200 mb-1">
              What I'm Executing
            </h3>
            
            {[
              { icon: Target, text: "Brand positioning & messaging strategy" },
              { icon: BarChart3, text: "Social media content & growth" },
              { icon: TrendingUp, text: "Customer acquisition campaigns" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 py-3 border-b border-white/20">
                <item.icon size={18} className="text-accent shrink-0" />
                <span className="text-sm text-white font-semibold">{item.text}</span>
              </div>
            ))}
            
            <div className="flex items-center gap-4 py-3 border-b border-white/20">
              <ArrowUpRight size={18} className="text-accent shrink-0" />
              <span className="text-sm text-white font-semibold">Website design & development</span>
            </div>
            <div className="flex items-center gap-4 py-3">
              <ArrowUpRight size={18} className="text-accent shrink-0" />
              <span className="text-sm text-white font-semibold">Long-term growth strategy & reporting</span>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Phase", value: "Active" },
                { label: "Focus", value: "Growth" },
                { label: "Results", value: "Tracking" },
              ].map((metric) => (
                <div key={metric.label} className="text-center p-4 rounded-lg bg-white/10 border border-white/20">
                  <p className="text-lg font-heading font-extrabold text-white">{metric.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-200 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>

           {/* Survey Link Section */}
            <div className="mt-8 p-5 rounded-lg border border-white/20 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm md:text-base text-white font-semibold m-0">
                Want to be a part of this and help out?
              </p>
              <a 
                href="https://adom-market-survey.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#2B4A37] font-extrabold rounded-md hover:bg-gray-200 transition-colors text-sm shadow-sm"
              >
                Take the Survey
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
