const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">About</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
          Built on Discipline. Driven by Results.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a senior at the University of St.&nbsp;Thomas and a former college football student-athlete. The discipline, work ethic, and resilience I developed on the field now fuel everything I do in business.
            </p>
            <p>
              My entrepreneurial journey started with <span className="text-foreground font-medium">GYMOPTIMA</span>, a social media marketing agency I founded to help local gyms and small businesses grow through strategic marketing and customer acquisition.
            </p>
            <p>
              Since then, I've gained hands-on experience across banking, real estate wholesaling, and marketing — each role sharpening my ability to communicate value, build relationships, and drive growth.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Student-Athlete", desc: "Division-level discipline and teamwork" },
              { label: "Entrepreneur", desc: "Founded GYMOPTIMA marketing agency" },
              { label: "Sales & Client Acquisition", desc: "Banking, real estate, business development" },
              { label: "Marketing Strategist", desc: "Digital presence, branding, customer growth" },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-lg bg-background border border-border">
                <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
