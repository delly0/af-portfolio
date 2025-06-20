import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaReact, FaNode, FaPython, FaGitAlt, FaDatabase, FaFigma,
  FaChartBar, FaUserGraduate, FaCode, FaLaptopCode, FaDocker, FaCloud, FaShieldAlt, FaJava, FaProjectDiagram, FaDraftingCompass } from "react-icons/fa";
import AnimatedTypingEffect from "../components/AnimatedTypingEffect";

interface HomeProps {
  isDay: boolean;
}

const funFacts = [
  "I enjoy water and snow skiing ⛷️",
  "Sailed the Whitsundays in a bare boat ⛵️",
  "Building apps with ❤️",
  "Reading enthusiast 📖",
  "Music junkie 🎧",
  "Always up for debugging - with my cat as moral support 🐈‍⬛",
];

const skillsWithIcons = [
  { name: "HTML/CSS", icon: <FaHtml5 />, percent: 90 },
  { name: "JavaScript/React", icon: <FaReact />, percent: 85 },
  { name: "Node.js/Express", icon: <FaNode />, percent: 80 },
  { name: "Python", icon: <FaPython />, percent: 70 },
  { name: "Git/GitHub", icon: <FaGitAlt />, percent: 85 },
  { name: "SQL/NoSQL", icon: <FaDatabase />, percent: 75 },
  { name: "Figma/UI Design", icon: <FaFigma />, percent: 95 },
  { name: "Data Analysis & BI (Pandas, Power BI)", icon: <FaChartBar />, percent: 70 },
  { name: "Docker", icon: <FaDocker />, percent: 60 },
  { name: "Cloud Platforms (AWS, Azure)", icon: <FaCloud />, percent: 50 },
  { name: "Security Fundamentals", icon: <FaShieldAlt />, percent: 55 },
  { name: "Java & C#", icon: <FaJava />, percent: 65 },
  { name: "Agile & Scrum Workflow", icon: <FaProjectDiagram />, percent: 75 },
  { name: "UX Design & Research", icon: <FaDraftingCompass />, percent: 85 },
];

const Home: React.FC<HomeProps> = ({ isDay }) => {
  const [activeSection, setActiveSection] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["summary", "skills", "experience"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }

      if (skillRef.current) {
        const rect = skillRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85 && !hasAnimated) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  useEffect(() => {
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach((link) => {
      const section = link.getAttribute("data-section");
      if (section === activeSection) {
        link.classList.add("text-blue-500", "font-semibold", "opacity-100");
        link.classList.remove("opacity-50");
      } else {
        link.classList.remove("text-blue-500", "font-semibold", "opacity-100");
        link.classList.add("opacity-50");
      }
    });
  }, [activeSection]);

  const textColor = isDay ? "text-gray-900" : "text-gray-100";
  const secondaryText = isDay ? "text-gray-600" : "text-gray-300";
  const bgPanelClass = isDay
    ? "bg-white/20 backdrop-blur-md text-gray-900"
    : "bg-black/20 backdrop-blur-md text-gray-100";
  const barBg = isDay ? "bg-gray-200" : "bg-gray-700";
  const barFill = isDay ? "bg-blue-500" : "bg-blue-400";

  return (
    <div className="min-h-screen px-0 md:pl-72 pt-24 pb-32 space-y-12 scroll-smooth transition-colors duration-700">
      {/* Summary */}
      <section
        id="summary"
        className={`${bgPanelClass} max-w-4xl mx-auto p-8 rounded-lg scroll-mt-20 mb-16 space-y-8`}
      >
        <h2 className={`text-3xl font-bold flex items-center gap-2`}>
          <FaUserGraduate className="text-current" /> Summary
        </h2>
        <p className={`text-lg leading-relaxed ${secondaryText}`}>
          Hi, I'm Adele — a fresh IT graduate from QUT with a strong interest in
          front-end development, creative coding, and user-centered design. I am
          passionate about building beautiful, usable interfaces and meaningful
          user experiences.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        ref={skillRef}
        className={`${bgPanelClass} max-w-4xl mx-auto p-8 rounded-lg scroll-mt-20 mb-16 space-y-8`}
      >
        <h2 className={`text-3xl font-bold flex items-center gap-2`}>
          <FaLaptopCode className="text-current" /> Technical Skills
        </h2>

        <p className={`mb-6 ${secondaryText}`}>
          My technical toolkit covers front-end and back-end development, UI design, and version control, with a strong focus on creating seamless user experiences and clean, maintainable code. I’m continuously enhancing my skills through personal projects and collaboration.
        </p>

        {/* Skillbars */}
        <div className="space-y-8">
          {/* Proficient Skills */}
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Proficient In</h3>
            {skillsWithIcons
              .filter(skill => skill.percent >= 80)
              .map((skill, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{skill.icon}</span>
                      <span className={`text-md font-medium ${textColor}`}>
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.percent}%</span>
                  </div>
                  <div className={`w-full ${barBg} rounded-full h-3`}>
                    <div
                      className={`${barFill} h-3 rounded-full transition-all duration-1000`}
                      style={{
                        width: hasAnimated ? `${skill.percent}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Comfortable With */}
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Comfortable With</h3>
            {skillsWithIcons
              .filter(skill => skill.percent < 80 && skill.percent >= 60)
              .map((skill, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{skill.icon}</span>
                      <span className={`text-md font-medium ${textColor}`}>
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.percent}%</span>
                  </div>
                  <div className={`w-full ${barBg} rounded-full h-3`}>
                    <div
                      className={`${barFill} h-3 rounded-full transition-all duration-1000`}
                      style={{
                        width: hasAnimated ? `${skill.percent}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* Learning */}
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Currently Learning & Exploring</h3>
            <p className={secondaryText}>
              Continuously expanding my skillset by diving deeper into containerization with Docker and Kubernetes, implementing robust CI/CD pipelines using GitHub Actions, and mastering advanced backend frameworks like Node.js and serverless architectures.  
              Additionally, I’m enhancing my proficiency in TypeScript, cloud computing platforms, and modern frontend state management tools to deliver scalable, maintainable, and efficient applications.
            </p>
          </div>
        </div>
      </section>


      {/* Experience */}
      <section
        id="experience"
        className={`${bgPanelClass} max-w-4xl mx-auto p-8 rounded-lg scroll-mt-20 mb-16 space-y-8`}
      >
        <h2 className={`text-3xl font-bold flex items-center gap-2`}>
          <FaCode className="text-current" /> Experience
        </h2>
        <p className={`text-lg leading-relaxed ${secondaryText}`}>
          I have worked on many diverse university and personal projects,
          including a sustainability app, an elevator simulator in C, and this
          very portfolio, amongst others. I also currently work as a Medical
          Receptionist, where I have gained valuable skills in communication,
          organisation, and teamwork.
        </p>
      </section>

      {/* Fun Facts */}
      <div className="max-w-4xl mx-auto mt-24 text-center">
        <AnimatedTypingEffect
          texts={funFacts}
          className="text-2xl font-semibold"
        />
      </div>
    </div>
  );
};

export default Home;