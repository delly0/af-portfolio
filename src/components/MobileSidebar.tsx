import React from "react";
import { FaCloud, FaTimes } from "react-icons/fa";

interface NavLink {
  section: string;
  label: string;
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  isDay: boolean;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  navLinks,
  isDay,
}) => {
  const handleClick = (section: string) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 z-50 shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Menu</h2>
        <button onClick={onClose}>
          <FaTimes className="text-gray-800 dark:text-gray-100" />
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        {navLinks.map(({ section, label }) => (
          <button
            key={section}
            onClick={() => handleClick(section)}
            className={`flex items-center gap-2 text-sm w-full text-left ${
              isDay ? "text-gray-800" : "text-gray-200"
            }`}
          >
            <FaCloud className="text-current" />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileSidebar;
