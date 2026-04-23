
import { useState, useEffect, useCallback } from "react";
import { Briefcase, Shield, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import studentAdvocateImg from "@/assets/student-advocate.jpg";
import policyPhoto1 from "@/assets/IMG_1422.jpeg";
   import policyPhoto2 from "@/assets/FullSizeRender.jpeg";
import fcaLeaderImg from "@/assets/fca-leader.jpg";
import fcaTableImg from "@/assets/DSC03740_Original.jpeg";
import fcaGroupImg from "@/assets/IMG_1380_Original.jpeg";
import fcaSpeakingImg from "@/assets/IMG_5375.jpeg";
import footballImg1 from "@/assets/football-team.jpg";
import footballImg2 from "@/assets/IMG_7555.jpeg";
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
        I built <strong className="text-black font-extrabold">Clarvé</strong>, a
        research-driven marketing brand helping{" "}
        <strong className="text-black font-extrabold">
          immigrant, women, and underrepresented founders
        </strong>{" "}
        grow beyond their initial communities. I use{" "}
        <strong className="text-black font-extrabold">AI-driven tools</strong>,{" "}
        <strong className="text-black font-extrabold">brand strategy</strong>, and{" "}
        <strong className="text-black font-extrabold">data-backed marketing</strong>{" "}
        to close the visibility gap and drive real business growth. My anchor case
        study is{" "}
        <strong className="text-black font-extrabold">Adom African Market</strong>,
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
        <strong className="text-black font-extrabold">
          full-cycle recruiting and account management
        </strong>
        , sourcing top talent while building long-term client partnerships. I will
        be driving placements, growing revenue, and sharpening the{" "}
        <strong className="text-black font-extrabold">
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
        <strong className="text-black font-extrabold">
          tailored financial solutions
        </strong>
        , and consistently hit performance goals in a fast-paced environment. I
        built trust quickly, handled high-volume client interactions, and learned
        how to translate complex financial products into{" "}
        <strong className="text-black font-extrabold">
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
        <strong className="text-black font-extrabold">
          high-volume cold calling
        </strong>
        , sourced{" "}
        <strong className="text-black font-extrabold">
          off-market real estate deals
        </strong>
        , and negotiated contracts directly with sellers. I sharpened my ability to
        open conversations with strangers, handle objections, and{" "}
        <strong className="text-black font-extrabold">close under pressure</strong>{" "}
        — skills I use every day in sales and client work.
      </>
    ),
  },
];

const leadership = [
  <>
    <strong className="text-black font-extrabold">Student-Athlete, University of St. Thomas Football</strong> — Division I
  </>,
  <>
    <strong className="text-black font-extrabold">SAAC Representative</strong> (Student-Athlete Advisory Committee)
  </>,
  <>
    <strong className="text-black font-extrabold">FCA Leader</strong> (Fellowship of Christian Athletes)
  </>,
  <>
    <strong className="text-black font-extrabold">Student Advocate – Higher Education Policy</strong> | Partnered with a Minnesota State Representative to address proposed State Grant reforms and their implications for student affordability.
  </>,
];

/**
 * LEADERSHIP CATEGORIES
 * To add more images to a category, just push more { src, caption } objects
 * into the `images` array. The first image is used as the card cover.
 */
type LightboxImage = { src: string; caption: string };
type LeadershipCategory = {
  id: "policy" | "fca" | "football";
  title: string;
  alt: string;
  coverCaption: string;
  images: LightboxImage[];
};

const leadershipCategories: LeadershipCategory[] = [
  {
    id: "policy",
    title: "Higher Education Policy",
    alt: "Delainey Suraju with Minnesota State Representative advocating for higher education policy",
    coverCaption: "Partnering with a Minnesota State Representative on student affordability policy.",
    images: [
      {
        src: studentAdvocateImg,
        caption: "Partnering with a Minnesota State Representative on student affordability policy.",
      },
      {
        src: policyPhoto1,
        caption: "Meeting with a St. Thomas representative to discuss student affordability and State Grant reform.",
      },
      {
        src: policyPhoto2,
        caption: "At the Minnesota State Capitol with fellow student advocates pushing for higher education policy change.",
      },
    ],
  },
  {
    id: "fca",
    title: "FCA Leader",
    alt: "Delainey Suraju with Fellowship of Christian Athletes team",
    coverCaption: "Fellowship of Christian Athletes — building community through faith and sport.",
    images: [
      {
        src: fcaLeaderImg,
        caption: "Fellowship of Christian Athletes — building community through faith and sport.",
      },
      {
        src: fcaTableImg,
        caption: "Brothers in faith and sport — FCA community night with the UTC crew.",
      },
      {
        src: fcaGroupImg,
        caption: "Summer internship with Ultimate Training Camp (UTC) — helping college athletes grow in their walk with Christ.",
      },
      {
        src: fcaSpeakingImg,
        caption: "Sharing testimony at a joint FCA and Athletes in Action gathering in the Twin Cities.",
      },
    ],
  },
  {
    id: "football",
    title: "D1 Student-Athlete Experience",
    alt: "Delainey Suraju #44 running onto the field",
    coverCaption: "Game day with the St. Thomas Tommies — #44.",
    images: [
      {
        src: footballImg1,
        caption: "Game day with the St. Thomas Tommies — #44.",
      },
      {
        src: footballImg2,
        caption: "St. Thomas Football: Pre-game at NDSU.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  LIGHTBOX COMPONENT                                                */
/* ------------------------------------------------------------------ */

type LightboxProps = {
  category: LeadershipCategory | null;
  startIndex: number;
  onClose: () => void;
};

const Lightbox = ({ category, startIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(startIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => setIndex(startIndex), [startIndex, category]);

  const total = category?.images.length ?? 0;

  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const goNext = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [total]
  );

  // Keyboard navigation + lock body scroll while open
  useEffect(() => {
    if (!category) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [category, onClose, goNext, goPrev]);

  // Touch swipe (mobile)
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goNext();
      else goPrev();
    }
    setTouchStartX(null);
  };

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          key="lightbox-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${category.title} gallery`}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close gallery"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 px-3 py-1 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium">
            {index + 1} of {total}
          </div>

          {/* Previous arrow */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next arrow */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Image + caption (stopping propagation so clicks on it don't close) */}
          <motion.div
            key={`lightbox-image-${index}`}
            className="relative max-w-[92vw] max-h-[85vh] flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={category.images[index].src}
              alt={category.images[index].caption}
              className="max-h-[75vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-center text-white/90 text-sm md:text-base max-w-2xl px-4 italic">
              {category.images[index].caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                       */
/* ------------------------------------------------------------------ */
const AutoSliderCard = ({ cat, openLightbox }: { cat: any; openLightbox: any }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (cat.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cat.images.length);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, [cat.images.length]);

  return (
    <button
      onClick={() => openLightbox(cat, index)}
      className="group relative overflow-hidden rounded-[12px] shadow-lg aspect-[3/4] text-left"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={`${cat.id}-${index}`}
          src={cat.images[index].src}
          alt={cat.alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      
      <div className="absolute inset-x-0 bottom-0 p-5 z-10">
        <h4 className="text-white text-base font-heading font-semibold mb-1">{cat.title}</h4>
        <p className="text-white/90 text-xs leading-relaxed opacity-90">{cat.coverCaption}</p>
        <div className="flex gap-1 mt-3">
          {cat.images.map((_: any, i: number) => (
            <div 
              key={i} 
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-4 bg-accent" : "w-1 bg-white/30"}`} 
            />
          ))}
        </div>
      </div>
    </button>
  );
};
const ExperienceSection = () => {
  const [activeCategory, setActiveCategory] = useState<LeadershipCategory | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const openLightbox = (category: LeadershipCategory, i = 0) => {
    setActiveCategory(category);
    setStartIndex(i);
  };

  const closeLightbox = () => setActiveCategory(null);

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Experience</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Where I've Earned My Skills
        </h2>
      <p className="text-gray-800 max-w-2xl mb-12 leading-relaxed text-base">
  Every role I've taken has been intentional — each one building on the last.
</p>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`group relative flex flex-col md:flex-row md:items-start gap-5 md:gap-14 py-10 ${
                i !== experiences.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="md:w-72 shrink-0 flex items-start gap-3">
                <div className="mt-0.5 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 overflow-hidden">
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                  ) : (
                    <Briefcase size={16} className="text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm">{exp.company}</p>
                  {exp.active && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-accent/10 text-accent border border-accent/20">
                      Currently Active
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-secondary text-[10px] font-bold tracking-wider uppercase text-secondary-foreground">
                    {exp.type}
                  </span>
                  {exp.location && (
                    <span className="text-xs text-muted-foreground self-center">{exp.location}</span>
                  )}
                  {exp.date && (
                    <span className="text-xs text-muted-foreground self-center ml-auto">{exp.date}</span>
                  )}
                </div>
<div className="text-gray-800 text-sm leading-relaxed">{exp.desc}</div>
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
<li key={i} className="flex items-start gap-3 text-sm text-gray-800 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        {/* Interactive Image Cards -> Auto Slider */}
        <div className="mt-12 ml-0 md:ml-12">
         <h4 className="text-sm font-bold tracking-widest uppercase text-black mb-6 text-center">
  Beyond the Resume
</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipCategories.map((cat) => (
              <AutoSliderCard key={cat.id} cat={cat} openLightbox={openLightbox} />
            ))}
          </div>
        </div>
      </div> {/* <-- This puts the first missing div back */}

      </div> {/* <-- This puts the second missing div back */}

      {/* Lightbox overlay */}
      <Lightbox category={activeCategory} startIndex={startIndex} onClose={closeLightbox} />
    </section>
  );
};

export default ExperienceSection;
