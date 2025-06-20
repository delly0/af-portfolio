import React, { useEffect, useState } from "react";
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import AnimatedTypingEffect from "../components/AnimatedTypingEffect";
// import CloudRain from "../components/CloudRain";

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

const Home: React.FC<HomeProps> = ({ isDay }) => {
  const [activeSection, setActiveSection] = useState("");

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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Define conditional text color classes
  const textColor = isDay ? "text-gray-900" : "text-gray-100";
  const secondaryText = isDay ? "text-gray-600" : "text-gray-300";

  return (
    <div
      className={`min-h-screen px-0 md:pl-40 pt-24 pb-32 space-y-48 scroll-smooth transition-colors duration-700 ${textColor}`}
    >
      {/* Summary Section */}
      <section id="summary" className="space-y-8 scroll-mt-20">
        <h2 className={`text-3xl font-bold flex items-center gap-2 ${textColor}`}>
          <FaUserGraduate className="text-current" /> Summary
        </h2>
        <p className={`max-w-2xl text-lg leading-relaxed ${secondaryText}`}>
          Hi, I'm Adele — a fresh IT graduate from QUT with a strong interest in
          front-end development, creative coding, and user-centered design. I am
          passionate about building beautiful, usable interfaces and meaningful
          user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-8 scroll-mt-20">
        <h2 className={`text-3xl font-bold flex items-center gap-2 ${textColor}`}>
          <FaLaptopCode className="text-current" /> Technical Skills
        </h2>
        <ul
          className={`flex flex-wrap gap-y-3 md:gap-y-4 md:gap-x-12 text-md list-disc list-inside max-w-4xl ${secondaryText}`}
        >
          <li>Experience in Front-End development such as HTML, CSS, JavaScript, React, and Bootstrap</li>
          <li>Experience in prototyping tools such as Figma</li>
          <li>Experience in Back-End development such as Python, C, C#, PHP, Java and Flask</li>
          <li>Experience in both front-end and back-end technologies, enabling end-to-end and full-stack application development</li>
          <li>Familiar with version control systems like Git, including branching, merging, and pull requests</li>
          <li>Knowledge of networking and information security</li>
          <li>Familiar with Agile methodologies and Scrum practices for project management and collaboration</li>
          <li>Experience in database design and management including both SQL and NoSQL technologies</li>
          <li>Understanding of UX principles</li>
          <li>Experience in UI design and prototyping</li>
          <li>Technical documentation and testing</li>
          <li>Use of GitHub Actions for CI/CD</li>
          <li>Basic familiarity with Docker and containerization (from personal projects)</li>
          <li>Continuous learning mindset demonstrated by ongoing personal projects and contributions on GitHub</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="space-y-8 scroll-mt-20">
        <h2 className={`text-3xl font-bold flex items-center gap-2 ${textColor}`}>
          <FaCode className="text-current" /> Experience
        </h2>
        <p className={`max-w-2xl text-lg leading-relaxed ${secondaryText}`}>
          I have worked on many diverse university and personal projects,
          including a sustainability app, an elevator simulator in C, and this
          very portfolio, amongst others. I also currently work as a Medical
          Receptionist, where I have gained valuable skills in communication,
          organisation, and teamwork.
        </p>
      </section>

      {/* Animated typing effect */}
      <div className={`mt-24 text-center ${textColor}`}>
        <AnimatedTypingEffect
          texts={funFacts}
          className="text-2xl font-semibold"
        />
      </div>

      {/* Optional rain animation */}
      {/* <div className="mt-16 flex justify-center">
        <CloudRain variant="home" />
      </div> */}
    </div>
  );
};

export default Home;