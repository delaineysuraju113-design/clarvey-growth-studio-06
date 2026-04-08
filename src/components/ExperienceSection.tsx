const experiences = [
  {
    role: "Founder",
    company: "GYMOPTIMA",
    desc: "Founded a social media marketing agency serving local gyms and small businesses. Led client acquisition, content strategy, and campaign execution.",
  },
  {
    role: "Client Relationship Consultant",
    company: "U.S. Bank",
    desc: "Managed client relationships, identified financial solutions, and consistently met performance targets in a fast-paced banking environment.",
  },
  {
    role: "Real Estate Wholesaling",
    company: "Independent",
    desc: "Conducted high-volume cold calling, negotiated deals, and managed client communications in competitive real estate markets.",
  },
  {
    role: "Marketing Strategist",
    company: "Adom African Market",
    desc: "Leading website development, social media growth, customer acquisition, and brand positioning for a family-owned grocery business.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Experience</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Where I've Built My Skills
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8 ${
                i !== experiences.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary font-medium">{exp.company}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
