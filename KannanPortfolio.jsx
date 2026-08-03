import React, { useState } from "react";
import profileImg from "./WhatsApp Image 2026-08-02 at 4.08.06 PM.jpeg";
import hireFlowBanner from "./Screenshot 2026-08-02 194227.png";
import Dock from "./Dock";
import MagicRings from "./MagicRings";
import {
  Menu, X, Mail, Phone, ArrowRight, Download, Home, User,
  ExternalLink, Code2, Layout, Server, Database, Wrench,
  Trophy, BookOpen, Briefcase, Send, CheckCircle2, MapPin, Sparkles, Loader2, Cpu, Zap, Award, Sun, Moon
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
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
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
    <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" opacity="0.15" />
    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  THEMES                                                            */
/* ------------------------------------------------------------------ */

const darkTheme = {
  isDark: true,
  bg: "bg-[#0D0D0D]",
  bgPattern: "bg-grid-pattern opacity-40",
  text: "text-[#FFFFFF]",
  heading: "text-[#FFFFFF]",
  subtext: "text-[#A1A1AA]",
  card: "bg-[#1A1A1A] backdrop-blur-xl border border-[#D4AF37]/20 shadow-xl hover:border-[#FFD700]/60 hover:shadow-lg hover:shadow-[#D4AF37]/15 transition-all duration-300",
  navbg: "bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-[#D4AF37]/20",
  border: "border-[#D4AF37]/20",
  inputBg: "bg-[#0D0D0D]",
  inputBorder: "border-[#D4AF37]/20 focus:border-[#FFD700] focus:ring-2 focus:ring-[#D4AF37]/25",
  btnPrimary: "bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] text-[#0D0D0D] hover:shadow-xl hover:shadow-[#D4AF37]/35",
  btnSecondary: "bg-[#1A1A1A] text-[#FFFFFF] border border-[#D4AF37]/20 hover:border-[#FFD700] hover:text-[#FFD700] hover:bg-[#27272A]",
  iconBoxBg: "bg-[#D4AF37]/15 text-[#FFD700]",
  chipBg: "bg-[#0D0D0D] border-[#D4AF37]/20 text-[#A1A1AA] hover:bg-[#27272A]",
  accentTag: "bg-[#D4AF37]/10 border-[#D4AF37]/25 text-[#FFD700]",
  tagDot: "bg-[#FFD700]",
  logoGold: "bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] bg-clip-text text-transparent",
  sectionTagText: "bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#F59E0B] bg-clip-text text-transparent font-bold",
  sectionTagLine: "border-[#D4AF37]/20",
  magicRingColor: "#D4AF37",
  magicRingColorTwo: "#FFD700",
  magicRingOpacity: 0.75,
  heroPillBg: "bg-[#0D0D0D]/90 border-[#D4AF37]/30 text-[#FFFFFF]",
  socialBtn: "bg-[#1A1A1A] border-[#D4AF37]/20 text-[#FFFFFF] hover:border-[#FFD700] hover:text-[#FFD700]",
  rainbowGradient: "bg-rainbow-gradient",
  liveDemoLink: "text-[#FFD700] hover:text-[#D4AF37]",
  githubLink: "text-[#A1A1AA] hover:text-[#FFD700]",
  orgText: "text-[#FFD700]",
  timelineGradient: "from-[#D4AF37] via-[#FFD700] to-[#F59E0B]",
  timelineDotRing: "ring-[#D4AF37]/20",
  statusMsgBg: "bg-[#D4AF37]/10 text-[#FFD700] border-[#D4AF37]/20",
  contactInfoHover: "hover:text-[#FFD700]",
  contactIconBox: "bg-[#D4AF37]/15 text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#0D0D0D]",
  footerLink: "text-[#A1A1AA] hover:text-[#FFD700]",
  dockPanelStyle: {
    "--dock-bg": "rgba(26, 26, 26, 0.85)",
    "--dock-border": "1px solid rgba(212, 175, 55, 0.3)",
    "--dock-shadow": "0 8px 28px rgba(0, 0, 0, 0.8), inset 0 1px 1.5px rgba(255, 215, 0, 0.3)",
    "--dock-item-bg": "#0D0D0D",
    "--dock-item-border": "rgba(212, 175, 55, 0.25)",
    "--dock-item-color": "#FFD700",
    "--dock-item-hover-bg": "#1A1A1A",
    "--dock-item-hover-border": "#FFD700",
    "--dock-item-hover-color": "#FFFFFF",
    "--dock-label-bg": "#1A1A1A",
    "--dock-label-color": "#FFD700",
    "--dock-label-border": "rgba(212, 175, 55, 0.3)",
  },
};

const lightTheme = {
  isDark: false,
  bg: "bg-[#FAFAF8]",
  bgPattern: "bg-grid-pattern-light opacity-60",
  text: "text-[#1A1A1A]",
  heading: "text-[#1A1A1A]",
  subtext: "text-[#555555]",
  card: "bg-[#FFFFFF] backdrop-blur-xl border border-[#EAEAEA] shadow-md hover:border-[#C9A227] hover:shadow-xl hover:shadow-[#C9A227]/15 transition-all duration-300",
  navbg: "bg-[#FAFAF8]/90 backdrop-blur-xl border-b border-[#EAEAEA]",
  border: "border-[#EAEAEA]",
  inputBg: "bg-[#FFFFFF]",
  inputBorder: "border-[#EAEAEA] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/25",
  btnPrimary: "bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#8B6B1A] text-white hover:shadow-xl hover:shadow-[#C9A227]/35",
  btnSecondary: "bg-[#FFFFFF] text-[#1A1A1A] border border-[#EAEAEA] hover:border-[#C9A227] hover:text-[#8B6B1A] hover:bg-[#FAFAF8]",
  iconBoxBg: "bg-[#E8D8A8]/35 text-[#8B6B1A]",
  chipBg: "bg-[#FFFFFF] border-[#EAEAEA] text-[#555555] hover:border-[#C9A227] hover:text-[#8B6B1A] hover:bg-[#FAFAF8]",
  accentTag: "bg-[#E8D8A8]/30 border-[#C9A227]/30 text-[#8B6B1A]",
  tagDot: "bg-[#C9A227]",
  logoGold: "bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#8B6B1A] bg-clip-text text-transparent",
  sectionTagText: "text-[#8B6B1A] font-bold",
  sectionTagLine: "border-[#EAEAEA]",
  magicRingColor: "#C9A227",
  magicRingColorTwo: "#E8D8A8",
  magicRingOpacity: 0.45,
  heroPillBg: "bg-[#FFFFFF]/95 border-[#EAEAEA] text-[#1A1A1A]",
  socialBtn: "bg-[#FFFFFF] border-[#EAEAEA] text-[#555555] hover:border-[#C9A227] hover:text-[#8B6B1A] hover:bg-[#FAFAF8]",
  rainbowGradient: "bg-rainbow-gradient-light",
  liveDemoLink: "text-[#8B6B1A] hover:text-[#C9A227]",
  githubLink: "text-[#555555] hover:text-[#8B6B1A]",
  orgText: "text-[#8B6B1A]",
  timelineGradient: "from-[#8B6B1A] via-[#C9A227] to-[#E8D8A8]",
  timelineDotRing: "ring-[#C9A227]/20",
  statusMsgBg: "bg-[#E8D8A8]/40 text-[#8B6B1A] border-[#C9A227]/30",
  contactInfoHover: "hover:text-[#8B6B1A]",
  contactIconBox: "bg-[#E8D8A8]/35 text-[#8B6B1A] group-hover:bg-[#C9A227] group-hover:text-[#FFFFFF]",
  footerLink: "text-[#555555] hover:text-[#8B6B1A]",
  dockPanelStyle: {
    "--dock-bg": "rgba(255, 255, 255, 0.9)",
    "--dock-border": "1px solid #EAEAEA",
    "--dock-shadow": "0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 1.5px rgba(232, 216, 168, 0.5)",
    "--dock-item-bg": "#FAFAF8",
    "--dock-item-border": "#EAEAEA",
    "--dock-item-color": "#8B6B1A",
    "--dock-item-hover-bg": "#FFFFFF",
    "--dock-item-hover-border": "#C9A227",
    "--dock-item-hover-color": "#1A1A1A",
    "--dock-label-bg": "#FFFFFF",
    "--dock-label-color": "#8B6B1A",
    "--dock-label-border": "#EAEAEA",
  },
};

const getAccents = (theme) => {
  if (theme.isDark) {
    return {
      gold: {
        icon: "text-[#FFD700]",
        chip: "bg-[#D4AF37]/10 border-[#D4AF37]/25",
        glow: "hover:shadow-[#D4AF37]/20",
        grad: "from-[#D4AF37]/20 via-[#FFD700]/10 to-transparent",
        dot: "bg-[#FFD700]",
        tagText: "text-[#FFD700]",
      },
      rose: {
        icon: "text-rose-400",
        chip: "bg-rose-500/10 border-rose-500/20",
        glow: "hover:shadow-rose-500/20",
        grad: "from-rose-600/20 via-rose-500/10 to-transparent",
        dot: "bg-rose-400",
        tagText: "text-rose-400",
      },
    };
  }
  return {
    gold: {
      icon: "text-[#8B6B1A]",
      chip: "bg-[#E8D8A8]/35 border-[#C9A227]/30",
      glow: "hover:shadow-[#C9A227]/20",
      grad: "from-[#E8D8A8]/40 via-[#C9A227]/15 to-transparent",
      dot: "bg-[#C9A227]",
      tagText: "text-[#8B6B1A]",
    },
    rose: {
      icon: "text-rose-600",
      chip: "bg-rose-100 border-rose-200",
      glow: "hover:shadow-rose-500/20",
      grad: "from-rose-200/40 via-rose-100/20 to-transparent",
      dot: "bg-rose-500",
      tagText: "text-rose-600",
    },
  };
};

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

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
      className={cx("font-mono text-sm tracking-tight", theme.sectionTagText)}
      aria-hidden="true"
    >
      {"<"}{children}{" />"}
    </span>
    <span className={cx("h-px flex-1 max-w-[48px]", theme.sectionTagLine, "border-t")} />
  </div>
);

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */

function Navbar({ theme, onNavClick, isDark, onToggleTheme }) {
  return (
    <header className={cx("sticky top-0 z-50 transition-all duration-300", theme.navbg)}>
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavClick("home")}
          className={cx("font-semibold text-lg tracking-tight flex items-center gap-1.5", theme.text)}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span>Kannan</span>
          <span className={theme.logoGold}>
            AM
          </span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={cx(
              "p-2.5 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2 text-xs font-semibold shadow-sm cursor-pointer",
              theme.socialBtn
            )}
          >
            {isDark ? (
              <>
                <Sun size={17} className="text-[#FFD700]" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={17} className="text-[#8B6B1A]" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero({ theme }) {
  return (
    <section id="home" className="relative overflow-hidden w-full py-12 md:py-20 min-h-[85vh] flex items-center justify-center">
      {/* Magic Rings WebGL Canvas Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-75 flex items-center justify-center w-full h-full">
        <MagicRings
          color={theme.magicRingColor}
          colorTwo={theme.magicRingColorTwo}
          ringCount={9}
          speed={0.8}
          attenuation={7}
          lineThickness={2.5}
          baseRadius={0.65}
          radiusStep={0.18}
          scaleRate={0.2}
          opacity={theme.magicRingOpacity}
          blur={0}
          noiseAmount={0.08}
          rotation={0}
          ringGap={1.6}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse
          mouseInfluence={0.25}
          hoverScale={1.25}
          parallax={0.06}
          clickBurst={false}
        />
      </div>

      {/* Ambient Orbs */}
      <Blob className={cx("w-96 h-96 -top-12 -left-16", theme.isDark ? "bg-[#D4AF37]/20" : "bg-[#C9A227]/15")} style={{ animationDelay: "0s" }} />
      <Blob className={cx("w-80 h-80 top-20 right-0", theme.isDark ? "bg-[#FFD700]/20" : "bg-[#E8D8A8]/30")} style={{ animationDelay: "1.5s" }} />
      <Blob className={cx("w-72 h-72 bottom-0 left-1/3", theme.isDark ? "bg-[#F59E0B]/15" : "bg-[#8B6B1A]/10")} style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className={cx("inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-5 shadow-sm", theme.accentTag)}>
            <span className="relative flex h-2 w-2">
              <span className={cx("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", theme.tagDot)} />
              <span className={cx("relative inline-flex rounded-full h-2 w-2", theme.tagDot)} />
            </span>
            {"// third-year CSE student"}
          </div>

          <h1
            className={cx("text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight mb-5 whitespace-nowrap", theme.heading)}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hi, I'm{" "}
            <span className={cx("animate-shimmer", theme.logoGold)}>
              Kannan AM
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 mb-6 text-sm font-medium">
            <span className={cx("px-3 py-1 rounded-lg border", theme.accentTag)}>
              Full Stack Developer
            </span>
            <span className={cx("px-3 py-1 rounded-lg border", theme.accentTag)}>
              AI Tools Proficient
            </span>
            <span className={cx("px-3 py-1 rounded-lg border", theme.accentTag)}>
              Software Developer
            </span>
          </div>

          <p className={cx("text-base leading-relaxed mb-8 max-w-lg", theme.subtext)}>
            Passionate about building user-friendly web applications and solving real-world problems using modern technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className={cx(
                "group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer",
                theme.btnPrimary
              )}
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
                "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm",
                theme.btnSecondary
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
                "p-3 rounded-2xl border transition-all duration-300 shadow-sm",
                theme.socialBtn
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
                "p-3 rounded-2xl border transition-all duration-300 shadow-sm",
                theme.socialBtn
              )}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:kannankannan85010@gmail.com"
              aria-label="Email"
              title="kannankannan85010@gmail.com"
              className={cx(
                "p-3 rounded-2xl border transition-all duration-300 shadow-sm",
                theme.socialBtn
              )}
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:9600604259"
              aria-label="Phone"
              title="+91 9600604259"
              className={cx(
                "p-3 rounded-2xl border transition-all duration-300 shadow-sm",
                theme.socialBtn
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
      {/* Gold Spectrum Animated Border */}
      <div className={cx("p-1 rounded-[2.5rem] shadow-2xl transition-all duration-500", theme.rainbowGradient)}>
        <div className={cx("relative rounded-[2.3rem] overflow-hidden transition-all duration-300", theme.card)}>
          <img
            src={profileImg}
            alt="Kannan AM working on laptop"
            className="w-full h-auto object-cover aspect-square transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Top-Right Floating Status Pill */}
          <div className={cx("absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold shadow-lg backdrop-blur-xl border", theme.heroPillBg)}>
            <span className="relative flex h-2 w-2">
              <span className={cx("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", theme.tagDot)} />
              <span className={cx("relative inline-flex rounded-full h-2 w-2", theme.tagDot)} />
            </span>
            Available
          </div>

          {/* Bottom-Left Floating Role Pill */}
          <div className={cx("absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1.5 rounded-xl backdrop-blur-xl border shadow-xl", theme.heroPillBg)}>
            <div className={cx("p-1.5 rounded-lg", theme.iconBoxBg)}>
              <Code2 size={13} />
            </div>
            <div>
              <p className="text-[10px] font-bold leading-tight">Full Stack Dev</p>
              <p className={cx("text-[8px] font-mono", theme.subtext)}>3rd Year CSE</p>
            </div>
          </div>

          {/* Bottom-Right Floating Tech Pill */}
          <div className={cx("absolute bottom-3 right-3 px-2.5 py-1.5 rounded-xl backdrop-blur-xl border shadow-xl hidden sm:flex items-center gap-1.5", theme.heroPillBg)}>
            <Sparkles size={13} className={theme.orgText} />
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
  const accents = getAccents(theme);
  const points = [
    { text: "Third-year CSE student focused on modern software & web systems.", icon: Cpu, accent: "gold" },
    { text: "Specialized in Full Stack Development, AI Tools Integration, and Cloud Systems.", icon: Layout, accent: "gold" },
    { text: "Strong algorithmic problem-solving mindset with continuous LeetCode practice.", icon: Code2, accent: "gold" },
    { text: "Passionate about learning next-gen tech and shipping production-grade applications.", icon: Zap, accent: "gold" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>About</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        About Me
      </h2>

      <div className={cx("rounded-3xl p-8 md:p-10 transition-all duration-300", theme.card)}>
        <div className="grid sm:grid-cols-2 gap-6">
          {points.map(({ text, icon: Icon, accent }, i) => {
            const acc = accents[accent] || accents.gold;
            return (
              <div
                key={i}
                className={cx("flex gap-4 items-start p-4 rounded-2xl border transition-all", theme.chipBg)}
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
  const accents = getAccents(theme);
  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Skills</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Technical Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map(({ category, icon: Icon, items, accent }) => {
          const acc = accents[accent] || accents.gold;
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
                <h3 className={cx("font-semibold text-base", theme.heading)}>{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className={cx(
                      "text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors",
                      theme.chipBg
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
  const accents = getAccents(theme);
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Projects</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PROJECTS.map((p) => {
          const acc = accents[p.accent] || accents.gold;
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
                    <div className={cx("absolute inset-0", theme.bgPattern)} />
                    <span className={cx("font-mono text-4xl font-extrabold transition-transform duration-500 group-hover:scale-110", acc.icon)}>
                      {p.tag}
                    </span>
                  </>
                )}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className={cx("font-semibold text-lg mb-2", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
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
                      className={cx("inline-flex items-center gap-1.5 text-sm font-semibold transition-colors", theme.liveDemoLink)}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx("inline-flex items-center gap-1.5 text-sm font-semibold transition-colors", theme.githubLink)}
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
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Work Experience
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {EXPERIENCE.map((e) => (
          <div key={e.title} className={cx("rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5", theme.card)}>
            <div className={cx("p-3 rounded-2xl w-fit mb-5 shadow-sm", theme.iconBoxBg)}>
              <Briefcase size={20} />
            </div>
            <h3 className={cx("font-bold text-base mb-1", theme.heading)}>{e.title}</h3>
            <p className={cx("text-xs font-semibold mb-4", theme.orgText)}>{e.org}</p>
            <ul className="space-y-2.5">
              {e.points.map((pt, i) => (
                <li key={i} className={cx("text-sm leading-relaxed flex gap-2.5", theme.subtext)}>
                  <span className={cx("font-bold mt-0.5", theme.orgText)}>·</span>
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
  const accents = getAccents(theme);
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
      <SectionTag theme={theme}>Certifications</SectionTag>
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
        Certifications & Achievements
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((c) => {
          const acc = accents[c.accent] || accents.gold;
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
              <h3 className={cx("font-bold text-sm mb-1.5 flex items-center justify-center gap-1.5 transition-colors", theme.heading, theme.contactInfoHover)}>
                <span>{c.name}</span>
                <ExternalLink size={13} className={cx("opacity-0 group-hover:opacity-100 transition-opacity shrink-0", theme.orgText)} />
              </h3>
              <p className={cx("text-xs font-medium", theme.subtext)}>{c.issuer}</p>
            </a>
          );
        })}
      </div>

      <div className="mt-10">
        <h3 className={cx("text-xl font-bold mb-5 tracking-tight", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
          Key Achievements
        </h3>
        <div className="relative pl-8">
          <div className={cx("absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b", theme.timelineGradient)} />
          <div className="space-y-8">
            {ACHIEVEMENTS.map(({ title, desc, icon: Icon, accent }) => {
              const acc = accents[accent] || accents.gold;
              return (
                <div key={title} className="relative">
                  <div className={cx("absolute -left-8 top-1 w-4 h-4 rounded-full ring-4", theme.tagDot, theme.timelineDotRing)} />
                  <div className="flex items-start gap-3.5">
                    <Icon size={18} className={cx("mt-0.5 shrink-0", acc.icon)} />
                    <div>
                      <h4 className={cx("font-bold text-sm", theme.heading)}>{title}</h4>
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
      <h2 className={cx("text-3xl font-bold mb-5 tracking-tight", theme.heading)} style={{ fontFamily: "'Poppins', sans-serif" }}>
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
                  "w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all",
                  theme.inputBg,
                  theme.inputBorder,
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
                  "w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all",
                  theme.inputBg,
                  theme.inputBorder,
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
                  "w-full px-4 py-3 rounded-xl text-sm outline-none border resize-none transition-all",
                  theme.inputBg,
                  theme.inputBorder,
                  theme.text
                )}
              />
            </div>

            {statusMessage && (
              <div
                className={cx(
                  "p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5",
                  sent ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : theme.statusMsgBg
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
                "w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg cursor-pointer",
                sent
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : theme.btnPrimary,
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
                className={cx("flex items-center gap-3.5 text-sm font-medium transition-colors group", theme.heading, theme.contactInfoHover)}
              >
                <div className={cx("p-3 rounded-2xl shrink-0 transition-all shadow-sm", theme.contactIconBox)}>
                  <Github size={18} />
                </div>
                <div>
                  <p className={cx("text-[11px] font-semibold uppercase tracking-wider", theme.subtext)}>GitHub</p>
                  <p className="font-bold text-sm">github.com/kannan251206</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/kannaaan"
                target="_blank"
                rel="noopener noreferrer"
                className={cx("flex items-center gap-3.5 text-sm font-medium transition-colors group", theme.heading, theme.contactInfoHover)}
              >
                <div className={cx("p-3 rounded-2xl shrink-0 transition-all shadow-sm", theme.contactIconBox)}>
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className={cx("text-[11px] font-semibold uppercase tracking-wider", theme.subtext)}>LinkedIn</p>
                  <p className="font-bold text-sm">linkedin.com/in/kannaaan</p>
                </div>
              </a>
              <a
                href="mailto:kannankannan85010@gmail.com"
                className={cx("flex items-center gap-3.5 text-sm font-medium transition-colors group", theme.heading, theme.contactInfoHover)}
              >
                <div className={cx("p-3 rounded-2xl shrink-0 transition-all shadow-sm", theme.contactIconBox)}>
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className={cx("text-[11px] font-semibold uppercase tracking-wider", theme.subtext)}>Email</p>
                  <p className="font-bold text-sm truncate">kannankannan85010@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:9600604259"
                className={cx("flex items-center gap-3.5 text-sm font-medium transition-colors group", theme.heading, theme.contactInfoHover)}
              >
                <div className={cx("p-3 rounded-2xl shrink-0 transition-all shadow-sm", theme.contactIconBox)}>
                  <Phone size={18} />
                </div>
                <div>
                  <p className={cx("text-[11px] font-semibold uppercase tracking-wider", theme.subtext)}>Phone</p>
                  <p className="font-bold text-sm">+91 9600604259</p>
                </div>
              </a>
              <div className={cx("flex items-center gap-3.5 text-sm font-medium pt-1", theme.heading)}>
                <div className={cx("p-3 rounded-2xl shrink-0 shadow-sm", theme.iconBoxBg)}>
                  <MapPin size={18} />
                </div>
                <div>
                  <p className={cx("text-[11px] font-semibold uppercase tracking-wider", theme.subtext)}>Location</p>
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
            className={cx("text-xs font-semibold transition-colors", theme.footerLink)}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kannaaan"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("text-xs font-semibold transition-colors", theme.footerLink)}
          >
            LinkedIn
          </a>
          <a
            href="mailto:kannankannan85010@gmail.com"
            className={cx("text-xs font-semibold transition-colors", theme.footerLink)}
          >
            Email
          </a>
          <a
            href="tel:9600604259"
            className={cx("text-xs font-semibold transition-colors", theme.footerLink)}
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
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDark((prev) => !prev);

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
    {
      icon: isDark ? <Sun size={16} /> : <Moon size={16} />,
      label: isDark ? "Light Mode" : "Dark Mode",
      onClick: toggleTheme,
    },
  ];

  return (
    <div className={cx("min-h-screen transition-colors duration-500 relative", theme.bg)} style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      <div className={cx("fixed inset-0 pointer-events-none z-0 transition-opacity duration-500", theme.bgPattern)} />

      <div className="relative z-10">
        <Navbar theme={theme} onNavClick={handleNavClick} isDark={isDark} onToggleTheme={toggleTheme} />
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
          panelStyle={theme.dockPanelStyle}
        />
      </div>
    </div>
  );
}
