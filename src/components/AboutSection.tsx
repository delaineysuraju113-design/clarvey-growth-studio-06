import footballImg from "@/assets/football.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">About Me</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Purpose-Driven Discipline
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          My past has prepared me; my vision is what propels me.
        </p>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Story column */}
          <div className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My name is Delainey Suraju, and I am a senior at the <span className="text-foreground font-medium">University of St. Thomas</span> with a background built on discipline, resilience, and a strong drive to build something meaningful.
            </p>
            <p>
              I grew up in Minnesota after my parents immigrated from <span className="text-foreground font-medium">Ghana</span>, and from a young age I saw the sacrifices they made to create opportunities for our family. That work ethic shaped me early and inspired my desire to one day build something of my own and give back.
            </p>
            <p>
              I carried that mindset into football, earning the opportunity to play at the <span className="text-foreground font-medium">University of St. Thomas</span>. Being a student-athlete taught me consistency, accountability, and how to perform under pressure.
            </p>
            <p>
              Today, I am focused on building my marketing brand, <span className="text-foreground font-medium">Clarvey</span>, where I apply what I've learned to real businesses—starting with hands-on work helping grow a local grocery store.
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
