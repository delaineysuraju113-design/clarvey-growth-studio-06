import { Briefcase, Shield } from "lucide-react";
import studentAdvocateImg from "@/assets/student-advocate.jpg";
import fcaLeaderImg from "@/assets/fca-leader.jpg";
import footballTeamImg from "@/assets/football-team.jpg";
import clarveLogo from "@/assets/clarve-logo.png";
import insightGlobalLogo from "@/assets/insight-global-logo.jpg";
import usBankLogo from "@/assets/us-bank-logo.webp";

const experiences = [
  {
    role: "Founder",
    company: "Clarvé",
    type: "Entrepreneurship",
    desc: (
      <>
        I built <strong className="text-foreground font-semibold">Clarvé</strong>, a
        research-driven marketing brand helping{" "}
        <strong className="text-foreground font-semibold">
          immigrant, women, and underrepresented founders
        </strong>{" "}
        grow beyond their initial communities. I use{" "}
        <strong className="text-foreground font-semibold">AI-driven tools</strong>,{" "}
        <strong className="text-foreground font-semibold">brand strategy</strong>, and{" "}
        <strong className="text-foreground font-semibold">data-backed marketing</strong>{" "}
        to close the visibility gap and drive real business growth. My anchor case
        study is{" "}
        <strong className="text-foreground font-semibold">Adom African Market</strong>,
        where I'm turning a local grocery store into a recognized cultural brand.
      </>
    ),
    active: true,
    logo: clarveLogo,
  },
  {
    role: "Recruiter / Account Manager",
    company: "Insight Global",
    location: "Minneapolis, MN",
    date: "Jul 2026 – Present",
    type: "Recruiting & Sales",
    desc: (
      <>
        I will be leading{" "}
        <strong className="text-foreground font-semibold">
          full-cycle recruiting and account management
        </strong>
        , sourcing top talent while building long-term client partnerships. I will
        be driving placements, growing revenue, and sharpening the{" "}
        <strong className="text-foreground font-semibold">
          sales and relationship skills
        </strong>{" "}
        that carry directly into how I grow Clarvé.
      </>
    ),
    logo: insightGlobalLogo,
  },
  {
    role: "Client Relationship Consultant",
    company: "U.S. Bank",
    location: "Blaine, MN",
    date: "Jan 2025 – Aug 2025",
    type: "Banking & Finance",
    desc: (
      <>
        I managed client relationships, delivered{" "}
        <strong className="text-foreground font-semibold">
          tailored financial solutions
        </strong>
        , and consistently hit performance goals in a fast-paced environment. I
        built trust quickly, handled high-volume client interactions, and learned
        how to translate complex financial products into{" "}
        <strong className="text-foreground font-semibold">
          clear value for real people
        </strong>
        .
      </>
    ),
    logo: usBankLogo,
  },
  {
    role: "Wholesaling Associate",
    company: "Pinnacle Estates LLC",
    date: "Jan 2022 – Mar 2024",
    type: "Sales & Negotiation",
    desc: (
      <>
        I generated leads through{" "}
        <strong className="text-foreground font-semibold">
          high-volume cold calling
        </strong>
        , sourced{" "}
        <strong className="text-foreground font-semibold">
          off-market real estate deals
        </strong>
        , and negotiated contracts directly with sellers. I sharpened my ability
        to open conversations with strangers, handle objections, and{" "}
        <strong className="text-foreground font-semibold">close under pressure</strong>{" "}
        — skills I use every day in sales and client work.
      </>
    ),
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
                <div className="mt-0.5 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Briefcase size={16} className="text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                  {exp.location && exp.date && (
                    <p className="text-xs text-muted-foreground">{exp.location} | {exp.date}</p>
                  )}
                  {!exp.location && exp.date && (
                    <p className="text-xs text-muted-foreground">{exp.date}</p>
                  )}
                  <span className="inline-block mt-1 text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                    {exp.type}
                  </span>
                  {exp.active && (
                    <div className="mt-1.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Currently Active
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right */}
              <div className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
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
          <ul className="space-y-6 ml-12">
            {leadership.map((item, i) => (
              <li key={i} className="flex
