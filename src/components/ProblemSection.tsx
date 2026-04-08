const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container max-w-4xl text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          The Visibility Gap
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Many local and culturally rooted businesses have incredible products and deeply loyal customers — but they struggle to grow because they lack a digital presence.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              stat: "97%",
              title: "Search Online First",
              desc: "Consumers search online before visiting a local business.",
            },
            {
              stat: "70%",
              title: "No Website",
              desc: "Of small businesses still don't have a website that works for them.",
            },
            {
              stat: "0",
              title: "Visibility = Zero Growth",
              desc: "If customers can't find you online, you're invisible to the majority of potential buyers.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-border bg-card">
              <div className="text-3xl font-heading font-bold text-primary mb-2">{item.stat}</div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base font-medium text-foreground">
          Clarvey exists to close this gap — helping businesses become{" "}
          <span className="text-primary font-semibold">clear, visible, and accessible</span>.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
