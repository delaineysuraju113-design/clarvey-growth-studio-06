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
              My name is Delainey Suraju, and I'm a senior student-athlete at the{" "}
              <strong className="text-black font-extrabold">University of St. Thomas</strong>, finishing a degree in Business Management & minor in Psychology. As one would assume, I didn't grow up privileged, I wasn't gifted with natural athleticism, and I didn't have opportunities handed to me. What put me in the position I'm in now was exactly that — <strong className="text-black font-extrabold">the things not given to me.</strong>
            </p>
            <p>
              I grew up in a small town in Minnesota with parents who immigrated from{" "}
              <strong className="text-black font-extrabold">Ghana</strong>. Watching them <strong className="text-black font-extrabold">sacrifice</strong> for me and my two siblings, shaped everything. Their discipline, resilience, and faith <strong className="text-black font-extrabold">became my own.</strong>
            </p>
            <p>
              That foundation <strong className="text-black font-extrabold">pushed</strong> me to chase dreams others called unrealistic — like walking on at a Division I program as an undersized (6-foot) D-lineman. I finished my career playing in <strong className="text-black font-extrabold">14 games with 15 tackles, 1 forced fumble, and 1 fumble recovery.</strong>
            </p>
            <p>
              Today, I'm focused on building something greater than myself. I'm starting at{" "}
              <strong className="text-black font-extrabold">Insight Global</strong>, a well-known recruiting company, and growing my marketing brand,{" "}
              <strong className="text-black font-extrabold">Clarvé</strong>, where I help <strong className="text-black font-extrabold">underrepresented</strong> entrepreneurs grow their businesses.
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
