import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

interface ContactProps {
  isDay: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDay }) => {
  const panelClass = isDay
    ? "bg-white/20 backdrop-blur-md text-gray-900"
    : "bg-black/20 backdrop-blur-md text-gray-100";

  const linkClass = "text-blue-600 dark:text-blue-400 hover:underline";

  return (
    <div
      className={`relative z-10 flex justify-center pt-20 pb-20 px-4 md:px-32 transition-colors duration-700`}
    >
      <div
        className={`${panelClass} max-w-3xl w-full p-8 rounded-lg space-y-6`}
      >
        <h2 className="text-4xl font-bold">Let's Get In Touch</h2>
        <p>
          Whether you want to collaborate, have a question, or just want to say
          hi — my inbox is open!
        </p>
        <div className="mt-4 space-y-4">
          <p className="flex items-center space-x-3">
            <FiPhone className={linkClass} size={20} />
            <span>0447 313 225</span>
          </p>
          <p className="flex items-center space-x-3">
            <FiMail className={linkClass} size={20} />
            <a href="mailto:adelefinney03@gmail.com" className={linkClass}>
              adelefinney03@gmail.com
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaLinkedin className={linkClass} size={20} />
            <a
              href="https://www.linkedin.com/in/adele-finney-25a460332/"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/adele-finney-25a460332/
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaGithub className={linkClass} size={20} />
            <a
              href="https://github.com/delly0"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/delly0
            </a>
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
