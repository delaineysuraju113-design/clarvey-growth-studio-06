import React from 'react';

const principles = [
  {
    number: '1',
    title: 'Dual Heritage',
    body: (
      <>
        Rooted in <em className="italic">claro</em> (clarity) and{' '}
        <em className="italic">convey</em> (delivery). Built for those navigating
        worlds and systems not originally designed for them.
      </>
    ),
  },
  {
    number: '2',
    title: 'The Amplified Story',
    body: (
      <>
        Closing the gap for{' '}
        <strong className="text-black font-extrabold">
          women and immigrant founders
        </strong>{' '}
        who have faced skepticism or been overlooked. We ensure your story is
        finally heard.
      </>
    ),
  },
  {
    number: '3',
    title: 'Eliminating the Friction',
    body: (
      <>
        Removing the noise of technical marketing and AI. We handle the gears so
        you can focus on leading your vision.
      </>
    ),
  },
  {
    number: '4',
    title: 'Strategic Silence',
    body: (
      <>
        Replacing chaos with a clear path. When the marketplace static fades,
        your brand is the only thing left to see.
      </>
    ),
  },
];

const ThinkingSection = () => {
  return (
    <section id="thinking" className="section-padding bg-background">
      <div className="section-container">
        {/* Eyebrow */}
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
          The Philosophy
        </p>

        {/* Heading */}
        <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          How I Approach Problems
        </h2>

        {/* Subhead */}
        <p className="text-lg text-gray-800 mb-20 max-w-2xl">
          These aren't just principles I believe in — they're how I operate every day.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
          {principles.map((p) => (
            <div
              key={p.number}
              className="group p-6 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:bg-card cursor-default"
            >
              <span className="block text-2xl md:text-3xl font-semibold text-accent mb-4 transition-transform duration-300 group-hover:-translate-y-0.5">
                {p.number}
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
                {p.title}
              </h3>
              <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout card */}
        <div className="bg-card rounded-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 md:p-10 border-l-4 border-accent transition-all duration-300 hover:shadow-lg">
          <div className="flex-1">
            <p className="font-heading italic text-xl md:text-2xl text-black font-semibold mb-3 leading-snug">
              The Visibility Gap is real — and it's costing underrepresented founders every day they go unseen.
            </p>
            <p className="text-gray-800 text-base">
              Clarvé exists to close it. One story at a time.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThinkingSection;
