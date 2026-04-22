const principles = [
  {
    number: "01",
    title: "Learn by Doing",
    desc: "I don't wait for permission to start. I build, test, and learn from real experience — not just theory. Everything I know has been earned through execution.",
  },
  {
    number: "02",
    title: "Focus on Real Results",
    desc: "Strategy means nothing without outcomes. I measure what matters, track progress, and make decisions based on data and reality — not assumptions.",
  },
  {
    number: "03",
    title: "Think Long-Term",
    desc: "Quick wins matter, but I'm always playing the longer game. Every project, every role, every skill is a building block toward something bigger.",
  },
  {
    number: "04",
    title: "Solve Real Problems",
    desc: "I'm drawn to businesses with real potential that just need the right strategy. The visibility gap is a real problem — and solving it creates real value.",
  },
];

const ThinkingSection = () => {
  return (
    <section id="thinking" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">My Thinking</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          <section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <p className="text-sm font-bold tracking-widest text-primary mb-4">MY PHILOSOPHY</p>
    <h2 className="text-5xl font-bold mb-16">The Clarvé Philosophy: Beyond the Noise</h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
        <span className="text-4xl font-bold text-primary/20 mb-6 block">01</span>
        <h3 className="text-2xl font-bold mb-4">Dual Heritage</h3>
        <p className="text-gray-600 leading-relaxed">Rooted in 'claro' (clarity) and 'convey' (delivery). Built for those navigating worlds and systems not originally designed for them.</p>
      </div>

      <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
        <span className="text-4xl font-bold text-primary/20 mb-6 block">02</span>
        <h3 className="text-2xl font-bold mb-4">The Amplified Story</h3>
        <p className="text-gray-600 leading-relaxed">Closing the gap for women and immigrant founders who have faced skepticism or been overlooked. We ensure your story is finally heard.</p>
      </div>

      <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
        <span className="text-4xl font-bold text-primary/20 mb-6 block">03</span>
        <h3 className="text-2xl font-bold mb-4">Eliminating the Friction</h3>
        <p className="text-gray-600 leading-relaxed">Removing the 'noise' of technical marketing and AI. We handle the gears so you can focus on leading your vision.</p>
      </div>

      <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
        <span className="text-4xl font-bold text-primary/20 mb-6 block">04</span>
        <h3 className="text-2xl font-bold mb-4">Strategic Silence</h3>
        <p className="text-gray-600 leading-relaxed">Replacing chaos with a clear path. When the marketplace static fades, your brand is the only thing left to see.</p>
      </div>
    </div>
  </div>
</section>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14 leading-relaxed">
          These aren't just principles I believe in — they're how I operate every day.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {principles.map((p) => (
            <div key={p.number} className="group">
              <span className="text-xs font-mono font-semibold text-accent tracking-wider">{p.number}</span>
              <h3 className="text-xl font-heading font-semibold text-foreground mt-2 mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThinkingSection;
