import footballImg from "@/assets/football.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Purpose-Driven Discipline
        </h2>
        <p className="text-gray-800 max-w-2xl mb-12 leading-relaxed text-base">
          My past has prepared me; my vision is what propels me.
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story column */}
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              My name is Delainey Suraju, and I am a senior at the{" "}
              <strong className="text-black font-extrabold">
                University of St. Thomas
              </strong>{" "}
              with a background built on discipline, resilience, and a strong drive
              to build something meaningful.
            </p>
            <p>
              I grew up in Minnesota after my parents immigrated from{" "}
              <strong className="text-black font-extrabold">Ghana</strong>, and
              from a young age I saw the sacrifices they made to create
              opportunities for our family. That work ethic shaped me early and
              inspired my desire to one day build something of my own and give back.
            </p>
            <p>
              I carried that mindset into football, earning the opportunity to play
              at the{" "}
              <strong className="text-black font-extrabold">
                University of St. Thomas
              </strong>
              . Being a student-athlete taught me consistency, accountability, and
              how to perform under pressure.
            </p>
            <p>
              Today, I am focused on building my marketing brand,{" "}
              <strong className="text-black font-extrabold">Clarvé</strong>, where
              I apply what I've learned to real businesses—starting with hands-on
              work helping grow a local grocery store.
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
export default AboutSection;
