import footballImg from "@/assets/football.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          My Story
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
          {/* Story column */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
  <p>
    I'm Delainey Suraju, a senior student-athlete at the{" "}
    <strong className="text-black font-extrabold">University of St. Thomas</strong>, finishing a degree in Business Management with a Minor in Psychology. As the son of{" "}
    <strong className="text-black font-extrabold">Ghanaian immigrants</strong>, I was shaped by my parents' discipline, resilience, and faith to build something for me and my two siblings — that same foundation is what drove me to walk on as an{" "}
    <strong className="text-black font-extrabold">undersized Division I defensive lineman</strong>. Through resilience and perseverance, I ended up{" "}
    <strong className="text-black font-extrabold">beating the odds</strong> and finished my career with 14 games played, 15 tackles, a forced fumble, and a fumble recovery.
  </p>

  <p>
    Today, I'm starting my career at{" "}
    <strong className="text-black font-extrabold">Insight Global</strong>{" "}
    while building{" "}
    <strong className="text-black font-extrabold">Clarvé</strong>, a{" "}
    <strong className="text-black font-extrabold">research-driven marketing brand</strong> helping immigrant, women, and underrepresented founders grow beyond their initial communities. I'm focused on{" "}
    <strong className="text-black font-extrabold">building something greater than myself</strong> — for my family, my community, and the generations to come.
  </p>
</div>

          {/* Photo column */}
          <div>
            <img
              src={footballImg}
              alt="Delainey Suraju #44 on the field at University of St. Thomas"
              className="w-full rounded-lg object-contain shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
