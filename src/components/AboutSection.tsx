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
              <strong className="text-black font-extrabold">Ghanaian immigrants</strong>, I was shaped by my parents' discipline, resilience, and faith to build something for me and my two siblings — that same foundation is what drove me to walk on as an undersized{" "}
              <strong className="text-black font-extrabold">Division I defensive lineman</strong>. Through resilience and perseverance, I ended up beating the odds and finished my career with{" "}
              <strong className="text-black font-extrabold">14 games played, 15 tackles, a forced fumble, and a fumble recovery</strong>.
            </p>
            <p>
              Today, I'm starting my career at{" "}
              <strong className="text-black font-extrabold">Insight Global</strong>{" "}
              while building{" "}
              <strong className="text-black font-extrabold">Clarvé</strong>, a research-driven marketing brand helping immigrant, women, and underrepresented founders grow beyond their initial communities. I'm focused on building something greater than myself — for my family, my community, and the generations to come.
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
