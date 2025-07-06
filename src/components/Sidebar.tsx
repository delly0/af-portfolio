import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCloud, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import AnimatedTypingEffect from "../components/AnimatedTypingEffect";

interface NavLink {
  section: string;
  label: string;
}

interface SidebarProps {
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

const Sidebar: React.FC<SidebarProps> = ({ isDay }) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  // Track which section is active (for highlighting)
  const [activeSection, setActiveSection] = useState("");

  // Track if screen is md or larger (>=768px)
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Update active section based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    // Update screen width state on resize
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hide sidebar if screen too small or on contact page
  if (!isMdUp) return null;
  if (isContactPage) return null;

  const links: NavLink[] = [
    { section: "summary", label: "Summary" },
    { section: "skills", label: "Skills" },
    { section: "experience", label: "Experience" },
  ];

  const projectLinks: NavLink[] = [
    { section: "project1", label: "Sustainability App" },
    { section: "project2", label: "Elevator Simulator" },
    { section: "project3", label: "Portfolio Site" },
    { section: "project4", label: "Movies Frontend" },
    { section: "project5", label: "Movies API" },
    { section: "project6", label: "EV Data Analytics" },
    { section: "project7", label: "UX Redesign" },
    { section: "project8", label: "Slowly MVP" },
    { section: "project9", label: "Garden Line MVP" },
  ];

  const isProjectsPage = location.pathname === "/projects";
  const navLinks = isProjectsPage ? projectLinks : links;
  const title = isProjectsPage ? "Projects" : "Adele Finney";
  const subtitle = isProjectsPage
    ? ""
    : "Developer & Designer crafting modern, effective digital experiences.";

  return (
    <div
      className={`
        fixed left-0 top-0 h-full w-72 flex flex-col justify-between
        pt-20 px-6 text-sm z-40 transition-colors duration-500
        ${isDay ? "text-gray-700" : "text-gray-300"}
      `}
      style={{ background: "transparent" }}
    >
      <div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        {!isProjectsPage && (
          <p className="text-xs mb-8 pr-2 leading-snug">{subtitle}</p>
        )}

        {/* Blue/gray translucent blurred background ONLY behind nav links */}
        <nav
          className={`
            space-y-4 p-4 rounded-md backdrop-blur-md
            ${isDay ? "bg-white/20 backdrop-blur-md text-gray-900" : "bg-black/20 backdrop-blur-md text-gray-100"}
          `}
        >
          {navLinks.map(({ section, label }) => (
            <button
              key={section}
              onClick={() => {
                const target = document.getElementById(section);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              data-section={section}
              className={`sidebar-link w-full text-left flex items-center gap-2 transition-all duration-300 ${
                activeSection === section
                  ? "text-blue-500 font-semibold opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <FaCloud className="text-current" />
              {label}
            </button>
          ))}
        </nav>
      </div>

            {/* Fun Facts */}
            <div className="max-w-4xl mx-auto mt-24 text-center">
              <AnimatedTypingEffect
                texts={funFacts}
                className={`text-sm italic text-center mb-6 transition-colors duration-500 ${
                  isDay ? "text-gray-700" : "text-gray-300"
                }`}
              />
            </div>

      <div
        className={`flex gap-4 mt-10 mb-10 text-xl ${
          isDay ? "text-gray-700" : "text-gray-100"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/adele-finney-25a460332/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/delly0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaFileDownload />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
