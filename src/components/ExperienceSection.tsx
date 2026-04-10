import { Briefcase, Shield } from "lucide-react";

const experiences = [
  {
    role: "Founder",
    company: "Clarvey",
    type: "Entrepreneurship",
    desc: "Founded a social media marketing agency serving local gyms and small businesses. Led everything — client acquisition, content strategy, campaign execution, and results tracking. Learned how to build from the ground up.",
    active: true,
  },
  {
    role: "Recruiter / Account Manager",
    company: "Insight Global",
    location: "Minneapolis, MN",
    date: "Jul 2026 – Present",
    type: "Recruiting & Sales",
    desc: "Lead full-cycle recruitment and account management by aligning elite talent with client business goals. Manage the end-to-end hiring process—from sourcing and coaching candidates to cultivating strategic partnerships—while consistently exceeding revenue and placement metrics.",
  },
  {
    role: "Client Relationship Consultant",
    company: "U.S. Bank",
    type: "Banking & Finance",
    desc: "Managed client relationships in a fast-paced banking environment. Identified financial solutions, handled customer needs, and consistently met performance goals — building trust and communication skills along the way.",
  },
  {
    role: "Wholesaling Associate",
    company: "Real Estate",
    type: "Sales & Negotiation",
    desc: "Conducted high-volume cold calling, sourced off-market deals, and negotiated contracts. Developed resilience, persuasion skills, and the ability to create opportunity from nothing.",
  },
];

const leadership = [
  <>
    <strong>Student-Athlete, University of St. Thomas Football</strong> — Division I
  </>,
  <>
    <strong>SAAC Representative</strong> (Student-Athlete Advisory Committee)
  </>,
  <>
    <strong>FCA Leader</strong> (Fellowship of Christian Athletes)
  </>,
  <>
    <strong>Student Advocate – Higher Education Policy</strong> | Partnered with a Minnesota State Representative to address proposed State Grant reforms and their implications for student affordability.
  </>,
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Experience</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Where I've Earned My Skills
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Every role I've taken has been intentional — each one building on the last.
        </p>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`group relative flex flex-col md:flex-row md:items-start gap-5 md:gap-14 py-10 ${
                i !== experiences.length - 1 ? "border-b border-border" : "border-b border-border"
              }`}
            >
              {/* Left */}
              <div className="md:w-72 shrink-0 flex items-start gap-3">
                <div className="mt-0.5 w-9 h-9 rounded-md bg-card border border-border flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                  {exp.location && (
                    <p className="text-xs text-muted-foreground">{exp.location} | {exp.date}</p>
                  )}
                  <span className="inline-block mt-1 text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                {exp.active && (
                  <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Currently Active
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-md bg-card border border-border flex items-center justify-center shrink-0">
              <Shield size={16} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground">Leadership</h3>
          </div>
          <ul className="space-y-4 ml-12">
            {leadership.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
