import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";

const Navbar: React.FC<NavbarProps> = ({ isDay, toggleDay }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isProjectsPage = location.pathname === "/projects";

  const navLinks = isProjectsPage
    ? [
        { section: "project1", label: "Sustainability App" },
        { section: "project2", label: "Elevator Simulator" },
        { section: "project3", label: "Portfolio Site" },
        { section: "project4", label: "Movies Frontend" },
        { section: "project5", label: "Movies API" },
        { section: "project6", label: "EV Data Analytics" },
        { section: "project7", label: "UX Redesign" },
      ]
    : [
        { section: "summary", label: "Summary" },
        { section: "skills", label: "Skills" },
        { section: "experience", label: "Experience" },
      ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-12 px-4 sm:px-8 flex items-center justify-between text-sm z-40 backdrop-blur-md transition-colors duration-700
          ${isDay ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}`}
      >
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars />
          </button>
          <Link to="/" className="hidden sm:inline hover:underline">
            Home
          </Link>
          <Link to="/projects" className="hidden sm:inline hover:underline">
            Projects
          </Link>
          <Link to="/contact" className="hidden sm:inline hover:underline">
            Contact
          </Link>
        </div>

        <button
          onClick={toggleDay}
          className={`px-3 py-1 text-xs rounded transition-colors duration-300
            ${isDay
              ? "bg-yellow-200 text-black hover:bg-yellow-300"
              : "bg-gray-700 text-white hover:bg-gray-600"}`}
        >
          {isDay ? "Night 🌙" : "Day ☀️"}
        </button>
      </nav>

      <MobileSidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        isDay={isDay}
      />
    </>
  );
};

export default Navbar;