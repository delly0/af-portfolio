import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isDay: boolean;
  toggleDay: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDay, toggleDay }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-12 px-8 flex items-center justify-end gap-8 text-sm z-40 backdrop-blur-md transition-colors duration-700
        ${isDay ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}`}
    >
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/projects" className="hover:underline">
        Projects
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
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
  );
};

export default Navbar;
