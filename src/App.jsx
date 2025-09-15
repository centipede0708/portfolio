import React, { useRef, useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

/* --------- Links --------- */
const LINKS = {
  github: "https://github.com/centipede0708",
  linkedin: "https://www.linkedin.com/in/tanmay-sharma034687/",
  leetcode: "https://leetcode.com/u/Tanmay_Sharma_00/",
  email: "mailto:8tanmaysharma@gmail.com",
  resume: "/TANMAY SHARMA_2K22_EC_238.pdf", // put PDF in /public
};
/* -------------------------- */

const projects = [
  {
    title: "Fluid / Particle Simulation",
    desc: "2D simulator (Java) — 1000+ particles, optimized spatial partitioning, 60+ FPS.",
    tech: "Java • OOP • Performance",
    link: "https://github.com/centipede0708/Particle-based-Fluid-2D-Simulation-in-JAVA",
  },
  {
    title: "Expense Tracker",
    desc: "Splitwise-style app (React Native) — group splits, real-time balances, resilient storage.",
    tech: "React Native • Expo • JS",
    link: "https://github.com/centipede0708/expense-tracker_for_kapidron",
  },
  {
    title: "Speech → Sign Language",
    desc: "Accessibility web app converting speech to 50+ sign animations (React + Python + Blender).",
    tech: "React • OpenCV • Blender",
    link: "https://github.com/centipede0708/Speech-to-sign-language",
  },
  {
    title: "Virtual Try-On (AI)",
    desc: "End-to-end React + Flask app integrating U²-Net, SCHP, VTON-HD and ONNX runtime optimizations.",
    tech: "React • Flask • ONNX",
    link: "https://github.com/centipede0708?tab=repositories",
  },
];

/* ---------- Small reusable Motion wrapper ---------- */
const MotionSection = ({ id, className, children, delay = 0 }) => (
  <Motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </Motion.section>
);

/* ---------------- Header ---------------- */
function Header() {
  return (
    <Motion.header
      className="py-12 border-b border-gray-800"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Tanmay Sharma
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Full Stack Developer • AI/ML Enthusiast • B.Tech (ECE) @ DTU
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Motion.a
            href={LINKS.resume}
            download
            className="px-4 py-2 bg-blue-600 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.03 }}
          >
            Download CV
          </Motion.a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Motion.header>
  );
}

/* ---------------- Hero with Typewriter ---------------- */
function Hero() {
  return (
    <MotionSection className="py-20" id="hero" delay={0.05}>
      <div className="container px-6 text-center">
        <Motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="text-blue-400">Hi, </span>
          <span aria-hidden="true">
            <Typewriter
              words={[
                "I am Tanmay Sharma",
                "I am a Developer",
                "I am an AI/ML Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1400}
            />
          </span>
        </Motion.h2>

        <Motion.p
          className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Strong fundamentals in data structures & algorithms, experience
          building full-stack apps with React & Flask, and integrating AI/ML
          models for real-world features.
        </Motion.p>

        <Motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-medium">
            View Projects
          </a>
          <a href={LINKS.email} className="px-6 py-3 rounded-full border border-gray-700 text-gray-200">
            Contact
          </a>
        </Motion.div>
      </div>
    </MotionSection>
  );
}

/* ---------------- Project Card ---------------- */
function ProjectCard({ p }) {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] bg-[#0f1724] p-6 rounded-2xl shadow-md mr-6">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{p.desc}</p>
      <div className="mt-4 text-xs text-blue-400">{p.tech}</div>
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-sm text-blue-400 hover:underline"
      >
        View Repo →
      </a>
    </div>
  );
}

/* ---------------- Projects Carousel ---------------- */
function Projects() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <Motion.section
      id="projects"
      className="py-16 bg-[#06121a]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-6">
        <h3 className="text-2xl font-semibold mb-10 text-center">
          Selected Projects
        </h3>

        {/* Outer wrapper */}
        <Motion.div ref={carouselRef} className="overflow-hidden cursor-grab">
          <Motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
          >
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </Motion.div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}


/* ---------------- Experience ---------------- */
function Experience() {
  return (
    <MotionSection className="py-16" id="experience" delay={0.12}>
      <div className="container px-6">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>
        <div className="bg-[#0d1620] p-6 rounded-2xl">
          <h4 className="font-semibold">SDE Intern — Enzat Soft Solutions Pvt. Ltd.</h4>
          <p className="text-sm text-gray-400">June 2025 – July 2025</p>
          <ul className="list-disc mt-4 ml-5 text-gray-300 space-y-2">
            <li>Built a full-stack Virtual Try-On app with React + Flask; integrated AI pipelines and reduced rendering time by 40%.</li>
            <li>Integrated U²-Net, SCHP, VTON-HD, and ControlNet for clean face & cloth segmentation.</li>
            <li>Designed backend inference pipelines to serve real-time previews via ONNX Runtime.</li>
          </ul>
        </div>
      </div>
    </MotionSection>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  const groups = [
    { title: "Languages", items: ["Java", "Python", "C/C++", "JavaScript", "Kotlin"] },
    { title: "Frontend", items: ["React", "Vite", "Tailwind", "HTML", "CSS"] },
    { title: "ML & Tools", items: ["OpenCV", "ONNX Runtime", "scikit-learn", "OpenAI API"] },
    { title: "Databases/Backend", items: ["Flask", "Node.js", "MongoDB", "MySQL"] },
  ];
  return (
    <MotionSection className="py-16 bg-[#06121a]" id="skills" delay={0.14}>
      <div className="container px-6">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, idx) => (
            <Motion.div
              key={g.title}
              className="bg-[#0f1724] p-5 rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-medium mb-3">{g.title}</h4>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="text-xs px-3 py-1 bg-[#071026] rounded-full border border-gray-700">
                    {it}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <Motion.footer className="py-12 border-t border-gray-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Tanmay Sharma</div>
        <div className="flex gap-4 text-sm">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-gray-300">GitHub</a>
          <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="text-gray-300">LeetCode</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-gray-300">LinkedIn</a>
          <a href={LINKS.resume} className="text-gray-300">Resume (PDF)</a>
        </div>
      </div>
    </Motion.footer>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
