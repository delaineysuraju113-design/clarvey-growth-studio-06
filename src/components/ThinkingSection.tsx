import React from 'react';

const principles = [
  {
    number: '01',
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
    number: '02',
    title: 'The Amplified Story',
    body: (
      <>
        Closing the gap for{' '}
        <strong className="font-semibold text-gray-800">
          women and immigrant founders
        </strong>{' '}
        who have faced skepticism or been overlooked. We ensure your story is
        finally heard.
      </>
    ),
  },
  {
    number: '03',
    title: 'Eliminating the Friction',
    body: (
      <>
        Removing the noise of technical marketing and AI. We handle the gears so
        you can focus on leading your vision.
      </>
    ),
  },
  {
    number: '04',
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
    <section
      id="thinking"
      className="py-24"
      style={{ backgroundColor: '#F1ECE0' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Eyebrow */}
        <p
          className="text-xs font-medium tracking-[0.2em] mb-6 uppercase"
          style={{ color: '#B8893B' }}
        >
          The Philosophy
        </p>

        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          How I Approach Problems
        </h2>

        {/* Subhead */}
        <p className="text-lg text-gray-500 mb-20 max-w-2xl">
          These aren't just principles I believe in — they're how I operate
          every day.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 mb-16">
          {principles.map((p) => (
            <div key={p.number}>
              <span
                className="block text-sm font-medium mb-6"
                style={{ color: '#B8893B' }}
              >
                {p.number}
