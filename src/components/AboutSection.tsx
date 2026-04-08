const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">About Me</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Discipline Meets Ambition
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          My path hasn't been conventional — it's been intentional.
        </p>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Story column */}
          <div className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a senior at the <span className="text-foreground font-medium">University of St. Thomas</span> and a former college football student-athlete. The discipline, resilience, and competitive mindset I built on the field now drive everything I do in business.
            </p>
            <p>
              I started my entrepreneurial journey by founding <span className="text-foreground font-medium">GYMOPTIMA</span>, a social media marketing agency that worked with local gyms and small businesses. That experience taught me how to sell, how to serve clients, and how to build something from nothing.
            </p>
            <p>
              I've since gained experience in banking at <span className="text-foreground font-medium">U.S. Bank</span>, real estate wholesaling through cold calling and deal negotiation, and marketing strategy for a real operating business. Each role has sharpened a different skill — but the through-line has always been the same: <span className="text-foreground font-medium">helping businesses grow and solving real problems</span>.
            </p>
            <p>
              I don't just study business — I build, test, and learn from it every day.
            </p>
          </div>

          {/* Attributes column */}
          <div className="lg:col-span-2 space-y-3">
            {[
              { label: "Mindset", value: "Discipline from athletics, sharpened by competition" },
              { label: "Drive", value: "Entrepreneurial — I build before I'm told to" },
              { label: "Skillset", value: "Marketing, sales, client acquisition, strategy" },
              { label: "Approach", value: "Learn by doing, measure results, iterate fast" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-lg bg-background border border-border"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
