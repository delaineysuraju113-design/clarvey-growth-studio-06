import { ArrowUpRight, Sparkles } from "lucide-react";
import clarveLogo from "@/assets/clarve-logo.png";
import buildingImg from "@/assets/IMG_8605.jpg";

const BuildingSection = () => {
  return (
    <section id="building" className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          What I'm Building
        </p>
        <div className="flex items-center gap-0 mb-4">
          <img
            src={clarveLogo}
            alt="Clarvé logo"
            className="w-14 h-14 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground -ml-1">
            larvé
          </h2>
        </div>
        <p className="text-gray-800 max-w-2xl mb-10 leading-relaxed">
          Helping overlooked businesses get clear — and get seen.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              <strong className="text-black font-extrabold">Clarvé</strong> is a research-driven marketing agency built for the founders America overlooks:{" "}
              <strong className="text-black font-extrabold">immigrants, women, and underrepresented communities</strong>{" "}
              ready to grow beyond their block.
            </p>
            <p>
              These businesses aren't failing — they're being held back. With{" "}
              <strong className="text-black font-extrabold">97% of consumers</strong>{" "}
              searching online before stepping through a door, a weak digital presence doesn't just cost clicks. It costs customers.
            </p>
            <p>
              The gap isn't talent. It's <strong className="text-black font-extrabold">visibility</strong>. Clarvé exists to close it.
            </p>
          </div>

          <div className="space-y-4">
            {/* Added Image Here */}
            <img 
              src={buildingImg} 
              alt="Clarvé Vision" 
              className="w-full h-64 object-cover rounded-lg shadow-sm border border-border"
            />

            <div className="p-6 rounded-lg border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Sparkles size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-black">The Vision</h3>
                  <p className="text-xs text-gray-600">Where Clarvé is headed</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Scale research-driven strategies that drive real business growth",
                  "Help underrepresented founders grow beyond local markets",
                  "Build a portfolio focused on measurable results and impact",
                  "Grow Clarvé into a national, equity-driven consulting brand",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-gray-800"
                  >
                    <ArrowUpRight
                      size={14}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-lg border border-primary/20 bg-primary/5">
              <p className="text-xs font-medium tracking-widest uppercase text-primary mb-1">
                Status
              </p>
              <p className="text-sm font-extrabold text-black">
                In Development — Launching Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSection;
