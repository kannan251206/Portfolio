import React, { useState } from "react";
import profileImg from "./WhatsApp Image 2026-08-02 at 4.08.06 PM.jpeg";
import hireFlowBanner from "./Screenshot 2026-08-02 194227.png";
import Dock from "./Dock";
import MagicRings from "./MagicRings";
import {
  Menu, X, Mail, Phone, ArrowRight, Download, Home, User,
  ExternalLink, Code2, Layout, Server, Database, Wrench,
  Trophy, BookOpen, Briefcase, Send, CheckCircle2, MapPin, Sparkles, Loader2, Cpu, Zap, Award
} from "lucide-react";

const Github = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MicrosoftLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 23 23" fill="none">
    <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
    <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
    <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
  </svg>
);

const OracleLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M16.4 5H7.6C4 5 1 8 1 12C1 16 4 19 7.6 19H16.4C20 19 23 16 23 12C23 8 20 5 16.4 5ZM16 15H8C6.3 15 5 13.7 5 12C5 10.3 6.3 9 8 9H16C17.7 9 19 10.3 19 12C19 13.7 17.7 15 16 15Z"
      fill="#F80000"
    />
  </svg>
);

const IBMLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="#D4AF37">
    <rect x="2" y="4" width="8" height="2" />
    <rect x="2" y="7" width="8" height="2" />
    <rect x="2" y="10" width="8" height="2" />
    <rect x="2" y="13" width="8" height="2" />
    <rect x="2" y="16" width="8" height="2" />
    <rect x="2" y="19" width="8" height="2" />
    <rect x="2" y="22" width="8" height="2" />
    <rect x="2" y="25" width="8" height="2" />

    <rect x="12" y="4" width="8" height="2" />
    <rect x="12" y="7" width="3" height="2" /><rect x="17" y="7" width="3" height="2" />
    <rect x="12" y="10" width="3" height="2" /><rect x="17" y="10" width="3" height="2" />
    <rect x="12" y="13" width="8" height="2" />
    <rect x="12" y="16" width="3" height="2" /><rect x="17" y="16" width="3" height="2" />
    <rect x="12" y="19" width="3" height="2" /><rect x="17" y="19" width="3" height="2" />
    <rect x="12" y="22" width="3" height="2" /><rect x="17" y="22" width="3" height="2" />
    <rect x="12" y="25" width="8" height="2" />

    <rect x="22" y="4" width="8" height="2" />
    <rect x="22" y="7" width="8" height="2" />
    <rect x="22" y="10" width="8" height="2" />
    <rect x="22" y="13" width="8" height="2" />
    <rect x="22" y="16" width="8" height="2" />
    <rect x="22" y="19" width="8" height="2" />
    <rect x="22" y="22" width="8" height="2" />
    <rect x="22" y="25" width="8" height="2" />
  </svg>
);

const InfosysLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="6" fill="#D4AF37" opacity="0.15" />
    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

const ACCENTS = {
  gold: { icon: "text-[#FFD700]", chip: "bg-[#D4AF37]/10 border-[#D4AF37]/25", glow: "hover:shadow-[#D4AF37]/20", grad: "from-[#D4AF37]/20 via-[#FFD700]/10 to-transparent", dot: "bg-[#FFD700]", tagText: "text-[#FFD700]" },
  rose: { icon: "text-rose-400", chip: "bg-rose-500/10 border-rose-500/20", glow: "hover:shadow-rose-500/20", grad: "from-rose-600/20 via-rose-500/10 to-transparent", dot: "bg-rose-400", tagText: "text-rose-400" },
};

const SKILLS = [
  { category: "Programming", icon: Code2, accent: "gold", items: ["Java", "Python", "JavaScript", "C"] },
  { category: "Frontend", icon: Layout, accent: "gold", items: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { category: "Backend", icon: Server, accent: "gold", items: ["Node.js", "Express.js"] },
  { category: "Database", icon: Database, accent: "gold", items: ["MongoDB", "MySQL"] },
  { category: "Tools", icon: Wrench, accent: "gold", items: ["Git", "GitHub", "Figma", "VS Code", "Postman"] },
];

const PROJECTS = [
  {
    name: "HireFlow",
    tag: "HF",
    image: hireFlowBanner,
    accent: "gold",
    description:
      "AI-powered recruitment platform with resume analysis, ATS scoring, and interview preparation.",
    tech: ["React", "Node.js", "MongoDB", "AI APIs"],
    live: "https://hireflow-c1jp.vercel.app/",
    github: "https://github.com/kannan251206",
  },
  {
    name: "Digital Twin",
    tag: "DT",
    accent: "gold",
    description:
      "Modern business monitoring dashboard with predictive analytics and visualization.",
    tech: ["React", "Python", "FastAPI"],
    live: null,
    github: "https://github.com/kannan251206",
  },
  {
    name: "Bureaucracy Navigator",
    tag: "BN",
    accent: "gold",
    description:
      "Simplifies government procedures by generating required documents, step-by-step guidance, office locations, and cost estimation.",
    tech: ["Next.js", "React", "Maps API"],
    live: "#",
    github: "https://github.com/kannan251206",
  },
];

const EXPERIENCE = [
  {
    title: "UI/UX Design Intern",
    org: "Xplore IT Tech",
    points: [
      "Designed responsive interfaces in Figma.",
      "Improved user experience through iterative testing.",
      "Built interactive prototypes for client review.",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Digital Swat Academy",
    points: [
      "Developed responsive websites end-to-end.",
      "Worked across frontend and backend layers.",
      "Collaborated on real-world production projects.",
    ],
  },
  {
    title: "Python (Backend) Developer",
    org: "YBI Foundation",
    points: [
      "Built web applications using Python.",
      "Created backend systems for data processing.",
      "Delivered business insights from trend analysis.",
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft Azure", accent: "gold", logo: MicrosoftLogo, link: "https://drive.google.com/drive/folders/1SKO8kLw7E3ObslBgXdHMAgZ1bVL_VXwO" },
  { name: "Oracle Certified Professional", issuer: "Oracle", accent: "rose", logo: OracleLogo, link: "https://drive.google.com/drive/folders/1SKO8kLw7E3ObslBgXdHMAgZ1bVL_VXwO" },
  { name: "IBM Professional Certification", issuer: "IBM", accent: "gold", logo: IBMLogo, link: "https://drive.google.com/drive/folders/1SKO8kLw7E3ObslBgXdHMAgZ1bVL_VXwO" },
  { name: "Infosys Springboard Certification", issuer: "Infosys Springboard", accent: "gold", logo: InfosysLogo, link: "https://drive.google.com/drive/folders/1SKO8kLw7E3ObslBgXdHMAgZ1bVL_VXwO" },
];

const ACHIEVEMENTS = [
  { title: "Hackathon Participant", desc: "Competed in multiple hackathons building projects under time constraints.", icon: Trophy, accent: "rose" },
  { title: "LeetCode Problem Solving", desc: "Consistent practice solving data structure and algorithm problems.", icon: Code2, accent: "gold" },
  { title: "Technical Workshops", desc: "Attended workshops on emerging tools and frameworks.", icon: BookOpen, accent: "gold" },
  { title: "College Events", desc: "Active participant and contributor in technical college events.", icon: Sparkles, accent: "gold" },
];

/* ------------------------------------------------------------------ */
/*  SMALL HELPERS                                                      */
/* ------------------------------------------------------------------ */

const cx = (...c) => c.filter(Boolean).join(" ");

const Blob = ({ className, style }) => (
  <div
    aria-hidden="true"
    className={cx("absolute rounded-full blur-3xl pointer-events-none animate-pulse-glow", className)}
    style={style}
  />
);

const SectionTag = ({ children, theme }) => (
  <div className="flex items-center gap-2 mb-3">
    <span
      className="font-mono text-sm tracking-tight bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] bg-clip-text text-transparent font-bold"
      aria-hidden="true"
    >
      {"<"}{children}{" />"}
    </span>
    <span className={cx("h-px flex-1 max-w-[48px]", theme.border, "border-t")} />
  </div>
);

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */

function Navbar({ theme, onNavClick }) {
  return (
    <header className={cx("sticky top-0 z-50 transition-all duration-300", theme.navbg)}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavClick("home")}
          className={cx("font-semibold text-lg tracking-tight flex items-center gap-1.5", theme.text)}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span>Kannan</span>
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] bg-clip-text text-transparent font-bold">
            AM
          </span>
        </button>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero({ theme }) {
  return (
    <section id="home" className="relative overflow-hidden max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-8 md:pt-12 md:pb-10">
      {/* Magic Rings WebGL Canvas Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <MagicRings
          color="#D4AF37"
          colorTwo="#FFD700"
          ringCount={7}
          speed={0.9}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.3}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={0.55}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.6}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      {/* Ambient Gold Orbs */}
      <Blob className="w-80 h-80 bg-[#D4AF37]/15 -top-12 -left-16" style={{ animationDelay: "0s" }} />
      <Blob className="w-72 h-72 bg-[#FFD700]/15 top-20 right-0" style={{ animationDelay: "1.5s" }} />
      <Blob className="w-64 h-64 bg-[#F59E0B]/12 bottom-0 left-1/3" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-[#D4AF37]/10 border-[#D4AF37]/25 text-[#FFD700] text-xs font-mono mb-5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]" />
            </span>
            {"// third-year CSE student"}
          </div>

          <h1
            className={cx("text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5", theme.text)}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] bg-clip-text text-transparent animate-shimmer">
              Kannan AM
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 mb-6 text-sm font-medium">
            <span className="px-3 py-1 rounded-lg border bg-[#D4AF37]/10 text-[#FFD700] border-[#D4AF37]/25">
              Full Stack Developer
            </span>
            <span className="px-3 py-1 rounded-lg border bg-[#D4AF37]/10 text-[#FFD700] border-[#D4AF37]/25">
              AI Tools Proficient
            </span>
            <span className="px-3 py-1 rounded-lg border bg-[#D4AF37]/10 text-[#FFD700] border-[#D4AF37]/25">
              Software Developer
            </span>
          </div>

          <p className={cx("text-base leading-relaxed mb-8 max-w-lg", theme.subtext)}>
            Passionate about building user-friendly web applications and solving real-world problems using modern technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] text-[#0D0D0D] px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/35 hover:-translate-y-1"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <a
              href="https://www.image2url.com/r2/default/documents/1785674797026-ca648acb-fbf6-493e-93d3-dacd47dd3ef8.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kannan_AM_Resume.pdf"
              className={cx(
                "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-md hover:-translate-y-1 bg-[#1A1A1A] hover:bg-[#27272A]",
                theme.border,
                theme.text
              )}
            >
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className="flex items-center gap-3.5 mt-8">
            <a
              href="https://github.com/kannan251206"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={cx(
                "p-3 rounded-2xl border transition-all duration-300 hover:border-[#FFD700] hover:text-[#FFD700] hover:-translate-y-1 hover:shadow-lg shadow-sm bg-[#1A1A1A]",
                theme.border,
                theme.text
              )}
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/kannaaan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className={cx(
                "p-3 rounded-2xl border transition-all duration-300 hover:border-[#FFD700] hover:text-[#FFD700] hover:-translate-y-1 hover:shadow-lg shadow-sm bg-[#1A1A1A]",
                theme.border,
                theme.text
              )}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:kannankannan85010@gmail.com"
              aria-label="Email"
              title="kannankannan85010@gmail.com"
              className={cx(
                "p-3 rounded-2xl border transition-all duration-300 hover:border-[#FFD700] hover:text-[#FFD700] hover:-translate-y-1 hover:shadow-lg shadow-sm bg-[#1A1A1A]",
                theme.border,
                theme.text
              )}
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:9600604259"
              aria-label="Phone"
              title="+91 9600604259"
              className={cx(
                "p-3 rounded-2xl border transition-all duration-300 hover:border-[#FFD700] hover:text-[#FFD700] hover:-translate-y-1 hover:shadow-lg shadow-sm bg-[#1A1A1A]",
                theme.border,
                theme.text
              )}
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroImageCard theme={theme} />
        </div>
      </div>
    </section>
  );
}

function HeroImageCard({ theme }) {
  return (
    <div className="relative group max-w-[290px] sm:max-w-[350px] w-full mx-auto md:mr-0">
      {/* Gold Metallic Spectrum Animated Border */}
      <div className="p-1 rounded-[2.5rem] bg-rainbow-gradient shadow-2xl shadow-[#D4AF37]/25 transition-all duration-500 group-hover:shadow-[#FFD700]/40">
        <div className={cx("relative rounded-[2.3rem] overflow-hidden transition-all duration-300", theme.card)}>
          <img
            src={profileImg}
            alt="Kannan AM working on laptop"
            className="w-full h-auto object-cover aspect-square transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Top-Right Floating Status Pill */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold shadow-lg backdrop-blur-xl border bg-[#0D0D0D]/90 border-[#D4AF37]/30 text-[#FFFFFF]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]" />
            </span>
            Available
          </div>

          {/* Bottom-Left Floating Role Pill */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1.5 rounded-xl backdrop-blur-xl border shadow-xl bg-[#0D0D0D]/90 border-[#D4AF37]/30 text-[#FFFFFF]">
            <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#FFD700]">
              <Code2 size={13} />
            </div>
            <div>
              <p className="text-[10px] font-bold leading-tight">Full Stack Dev</p>
              <p className="text-[8px] font-mono text-[#A1A1AA]">3rd Year CSE</p>
            </div>
          </div>

          {/* Bottom-Right Floating Tech Pill */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-xl backdrop-blur-xl border shadow-xl hidden sm:flex items-center gap-1.5 bg-[#0D0D0D]/90 border-[#D4AF37]/30 text-[#FFD700]">
            <Sparkles size={13} />
            <span className="text-[10px] font-bold">React & Web</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                               */
/* ------------------------------------------------------------------ */

function About({ theme }) {
  const points = [
    { text: "Third-year CSE student focused on modern software & web systems.", icon: Cpu, accent: "gold" },
    { text: "Specialized in Full Stack Development, AI Tools Integration, and Cloud Systems.", icon: Layout, accent: "gold" },
    { text: "Strong algorithmic problem-solving mindset with continuous LeetCode practice.", icon: Code2, accent: "gold" },
    { text: "Passionate about learning next-gen tech and shipping production-grade applications.", icon: Zap, accent: "gold" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>About</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        About Me
      </h2>

      <div className={cx("rounded-3xl p-8 md:p-10 transition-all duration-300", theme.card)}>
        <div className="grid sm:grid-cols-2 gap-6">
          {points.map(({ text, icon: Icon, accent }, i) => {
            const acc = ACCENTS[accent] || ACCENTS.gold;
            return (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-2xl border transition-all bg-[#0D0D0D]/60 border-[#D4AF37]/20 hover:border-[#FFD700]/50"
              >
                <div className={cx("p-2.5 rounded-xl shrink-0 mt-0.5", acc.chip)}>
                  <Icon size={20} className={acc.icon} />
                </div>
                <p className={cx("text-sm leading-relaxed font-medium", theme.subtext)}>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SKILLS                                                              */
/* ------------------------------------------------------------------ */

function Skills({ theme }) {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Skills</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Technical Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map(({ category, icon: Icon, items, accent }) => {
          const acc = ACCENTS[accent] || ACCENTS.gold;
          return (
            <div
              key={category}
              className={cx(
                "rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
                theme.card
              )}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={cx("p-2.5 rounded-xl", acc.chip)}>
                  <Icon size={20} className={acc.icon} />
                </div>
                <h3 className={cx("font-semibold text-base", theme.text)}>{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className={cx(
                      "text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors bg-[#0D0D0D] hover:bg-[#27272A]",
                      theme.border,
                      theme.subtext
                    )}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                            */
/* ------------------------------------------------------------------ */

function Projects({ theme }) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Projects</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PROJECTS.map((p) => {
          const acc = ACCENTS[p.accent] || ACCENTS.gold;
          return (
            <div
              key={p.name}
              className={cx(
                "rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group",
                theme.card
              )}
            >
              <div className={cx("h-44 w-full relative overflow-hidden bg-gradient-to-br flex items-center justify-center border-b", theme.border, acc.grad)}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} cover`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                    <span className={cx("font-mono text-4xl font-extrabold transition-transform duration-500 group-hover:scale-110", acc.icon)}>
                      {p.tag}
                    </span>
                  </>
                )}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className={cx("font-semibold text-lg mb-2", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {p.name}
                </h3>
                <p className={cx("text-sm leading-relaxed mb-5 flex-1", theme.subtext)}>{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className={cx("text-[11px] font-semibold px-2.5 py-1 rounded-full border", acc.chip, acc.tagText)}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className={cx("flex items-center gap-4 pt-2 border-t", theme.border)}>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FFD700] hover:text-[#D4AF37] transition-colors"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx("inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[#FFD700] transition-colors", theme.subtext)}
                  >
                    GitHub <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                          */
/* ------------------------------------------------------------------ */

function Experience({ theme }) {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Experience</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Work Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {EXPERIENCE.map((e) => (
          <div key={e.title} className={cx("rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5", theme.card)}>
            <div className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#FFD700] w-fit mb-5">
              <Briefcase size={20} />
            </div>
            <h3 className={cx("font-bold text-base mb-1", theme.text)}>{e.title}</h3>
            <p className="text-xs font-semibold text-[#FFD700] mb-4">{e.org}</p>
            <ul className="space-y-2.5">
              {e.points.map((pt, i) => (
                <li key={i} className={cx("text-sm leading-relaxed flex gap-2.5", theme.subtext)}>
                  <span className="text-[#FFD700] font-bold mt-0.5">·</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CERTIFICATIONS                                                      */
/* ------------------------------------------------------------------ */

function Certifications({ theme }) {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Certifications</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Certifications & Achievements
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((c) => {
          const acc = ACCENTS[c.accent] || ACCENTS.gold;
          const LogoComponent = c.logo;
          return (
            <a
              key={c.name}
              href={c.link || "https://drive.google.com/drive/folders/1SKO8kLw7E3ObslBgXdHMAgZ1bVL_VXwO"}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${c.name} Certificate`}
              className={cx(
                "rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group block relative border cursor-pointer",
                theme.card
              )}
            >
              <div className={cx("p-3.5 rounded-2xl w-fit mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm min-w-[54px] min-h-[54px]", acc.chip)}>
                <LogoComponent size={28} />
              </div>
              <h3 className={cx("font-bold text-sm mb-1.5 flex items-center justify-center gap-1.5 group-hover:text-[#FFD700] transition-colors", theme.text)}>
                <span>{c.name}</span>
                <ExternalLink size={13} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-[#FFD700]" />
              </h3>
              <p className={cx("text-xs font-medium", theme.subtext)}>{c.issuer}</p>
            </a>
          );
        })}
      </div>

      <div className="mt-10">
        <h3 className={cx("text-xl font-bold mb-5 tracking-tight", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
          Key Achievements
        </h3>
        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#FFD700] to-[#F59E0B]" />
          <div className="space-y-8">
            {ACHIEVEMENTS.map(({ title, desc, icon: Icon, accent }) => {
              const acc = ACCENTS[accent] || ACCENTS.gold;
              return (
                <div key={title} className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#FFD700] ring-4 ring-[#D4AF37]/20" />
                  <div className="flex items-start gap-3.5">
                    <Icon size={18} className={cx("mt-0.5 shrink-0", acc.icon)} />
                    <div>
                      <h4 className={cx("font-bold text-sm", theme.text)}>{title}</h4>
                      <p className={cx("text-sm mt-0.5", theme.subtext)}>{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                             */
/* ------------------------------------------------------------------ */

function Contact({ theme }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/kannankannan85010@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSent(true);
        setStatusMessage("Message sent! Delivered to kannankannan85010@gmail.com.");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSent(false);
          setStatusMessage("");
        }, 5000);
      } else {
        throw new Error("Server response not ok");
      }
    } catch (err) {
      const mailtoUrl = `mailto:kannankannan85010@gmail.com?subject=${encodeURIComponent(
        `Portfolio Message from ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSent(true);
      setStatusMessage("Opening mail app to send your message...");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => {
        setSent(false);
        setStatusMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Contact</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.text)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-5 gap-8">
        <div className={cx("md:col-span-3 rounded-3xl p-7 md:p-9", theme.card)}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={cx("block text-xs font-semibold mb-2 uppercase tracking-wider", theme.subtext)}>Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className={cx(
                  "w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all focus:border-[#FFD700] focus:ring-2 focus:ring-[#D4AF37]/25 bg-[#0D0D0D]",
                  theme.border,
                  theme.text
                )}
              />
            </div>
            <div>
              <label className={cx("block text-xs font-semibold mb-2 uppercase tracking-wider", theme.subtext)}>Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={cx(
                  "w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all focus:border-[#FFD700] focus:ring-2 focus:ring-[#D4AF37]/25 bg-[#0D0D0D]",
                  theme.border,
                  theme.text
                )}
              />
            </div>
            <div>
              <label className={cx("block text-xs font-semibold mb-2 uppercase tracking-wider", theme.subtext)}>Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the opportunity or project..."
                className={cx(
                  "w-full px-4 py-3 rounded-xl text-sm outline-none border resize-none transition-all focus:border-[#FFD700] focus:ring-2 focus:ring-[#D4AF37]/25 bg-[#0D0D0D]",
                  theme.border,
                  theme.text
                )}
              />
            </div>

            {statusMessage && (
              <div
                className={cx(
                  "p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5",
                  sent ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-[#D4AF37]/10 text-[#FFD700] border border-[#D4AF37]/20"
                )}
              >
                <CheckCircle2 size={16} />
                <span>{statusMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={cx(
                "w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 text-[#0D0D0D] shadow-lg shadow-[#D4AF37]/25",
                sent
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] hover:opacity-95 hover:shadow-[#D4AF37]/45 hover:-translate-y-0.5",
                loading && "opacity-75 cursor-not-allowed"
              )}
            >
              {loading ? (
                <>
                  <span>Sending...</span>
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : sent ? (
                <>
                  <span>Message Sent</span>
                  <CheckCircle2 size={16} />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <div className={cx("rounded-3xl p-7 flex-1", theme.card)}>
            <p className={cx("text-sm mb-6 leading-relaxed font-medium", theme.subtext)}>
              Open to internships, full-time roles, and collaborative projects. Reach out through any of the channels below.
            </p>
            <div className="space-y-4">
              <a
                href="https://github.com/kannan251206"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("flex items-center gap-3.5 text-sm font-medium hover:text-[#FFD700] transition-colors group", theme.text)}
              >
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 shrink-0 group-hover:bg-[#FFD700] group-hover:text-[#0D0D0D] transition-all shadow-sm">
                  <Github size={18} className="text-[#FFD700] group-hover:text-[#0D0D0D] transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">GitHub</p>
                  <p className="font-bold text-sm">github.com/kannan251206</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/kannaaan"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("flex items-center gap-3.5 text-sm font-medium hover:text-[#FFD700] transition-colors group", theme.text)}
              >
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 shrink-0 group-hover:bg-[#FFD700] group-hover:text-[#0D0D0D] transition-all shadow-sm">
                  <Linkedin size={18} className="text-[#FFD700] group-hover:text-[#0D0D0D] transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">LinkedIn</p>
                  <p className="font-bold text-sm">linkedin.com/in/kannaaan</p>
                </div>
              </a>
              <a
                href="mailto:kannankannan85010@gmail.com"
                className={cx("flex items-center gap-3.5 text-sm font-medium hover:text-[#FFD700] transition-colors group", theme.text)}
              >
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 shrink-0 group-hover:bg-[#FFD700] group-hover:text-[#0D0D0D] transition-all shadow-sm">
                  <Mail size={18} className="text-[#FFD700] group-hover:text-[#0D0D0D] transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">Email</p>
                  <p className="font-bold text-sm truncate">kannankannan85010@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:9600604259"
                className={cx("flex items-center gap-3.5 text-sm font-medium hover:text-[#FFD700] transition-colors group", theme.text)}
              >
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 shrink-0 group-hover:bg-[#FFD700] group-hover:text-[#0D0D0D] transition-all shadow-sm">
                  <Phone size={18} className="text-[#FFD700] group-hover:text-[#0D0D0D] transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">Phone</p>
                  <p className="font-bold text-sm">+91 9600604259</p>
                </div>
              </a>
              <div className={cx("flex items-center gap-3.5 text-sm font-medium pt-1", theme.text)}>
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 shrink-0 shadow-sm">
                  <MapPin size={18} className="text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider">Location</p>
                  <p className={cx("font-bold text-sm", theme.subtext)}>Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                              */
/* ------------------------------------------------------------------ */

function Footer({ theme }) {
  return (
    <footer className={cx("border-t py-8 pb-28", theme.border)}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={cx("text-xs font-medium", theme.subtext)}>© 2026 Kannan AM. Built with React & Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/kannan251206"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("text-xs font-semibold transition-colors hover:text-[#FFD700]", theme.subtext)}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kannaaan"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("text-xs font-semibold transition-colors hover:text-[#FFD700]", theme.subtext)}
          >
            LinkedIn
          </a>
          <a
            href="mailto:kannankannan85010@gmail.com"
            className={cx("text-xs font-semibold transition-colors hover:text-[#FFD700]", theme.subtext)}
          >
            Email
          </a>
          <a
            href="tel:9600604259"
            className={cx("text-xs font-semibold transition-colors hover:text-[#FFD700]", theme.subtext)}
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  APP                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const theme = {
    bg: "bg-[#0D0D0D]",
    text: "text-[#FFFFFF]",
    subtext: "text-[#A1A1AA]",
    card: "bg-[#1A1A1A] backdrop-blur-xl border border-[#D4AF37]/20 shadow-xl hover:border-[#FFD700]/60 hover:shadow-lg hover:shadow-[#D4AF37]/15 transition-all duration-300",
    navbg: "bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-[#D4AF37]/20",
    border: "border-[#D4AF37]/20",
  };

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const dockItems = [
    { icon: <Home size={16} />, label: "Home", onClick: () => handleNavClick("home") },
    { icon: <User size={16} />, label: "About", onClick: () => handleNavClick("about") },
    { icon: <Code2 size={16} />, label: "Skills", onClick: () => handleNavClick("skills") },
    { icon: <Layout size={16} />, label: "Projects", onClick: () => handleNavClick("projects") },
    { icon: <Briefcase size={16} />, label: "Experience", onClick: () => handleNavClick("experience") },
    { icon: <Award size={16} />, label: "Certifications", onClick: () => handleNavClick("certifications") },
    { icon: <Mail size={16} />, label: "Contact", onClick: () => handleNavClick("contact") },
  ];

  return (
    <div className={cx("min-h-screen transition-colors duration-500 relative", theme.bg)} style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar theme={theme} onNavClick={handleNavClick} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Experience theme={theme} />
        <Certifications theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />

        <Dock
          items={dockItems}
          panelHeight={52}
          baseItemSize={38}
          magnification={54}
        />
      </div>
    </div>
  );
}
