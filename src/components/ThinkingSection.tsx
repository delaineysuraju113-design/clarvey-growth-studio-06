import React from 'react';

const ThinkingSection = () => {
  return (
    <section id="thinking" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">My Philosophy</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">The Clarvé Philosophy: Beyond the Noise</h2>
        
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
        
        <p className="mt-16 text-muted-foreground max-w-2xl leading-relaxed">
          These aren't just principles I believe in — they're how I operate every day.
        </p>
      </div>
    </section>
  );
};

export default ThinkingSection;
