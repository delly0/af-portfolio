import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import CloudRain from "../components/CloudRain";

interface ContactProps {
  isDay: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDay }) => {
  return (
    <div
      className={`relative z-10 min-h-screen flex flex-col justify-center items-start px-32 pt-20 space-y-6 transition-colors duration-700 ${
        isDay ? "text-gray-900" : "text-gray-100"
      }`}
    >
      <h2 className="text-4xl font-bold">Let's Get In Touch</h2>
      <p>
        Whether you want to collaborate, have a question, or just want to say
        hi — my inbox is open!
      </p>
      <div className="mt-4 space-y-4">
        <p className="flex items-center space-x-3">
          <FiPhone className="text-blue-600 dark:text-blue-400" size={20} />
          <span>0447 313 225</span>
        </p>
        <p className="flex items-center space-x-3">
          <FiMail className="text-blue-600 dark:text-blue-400" size={20} />
          <a
            href="mailto:adelefinney03@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            adelefinney03@gmail.com
          </a>
        </p>
        <p className="flex items-center space-x-3">
          <FaLinkedin className="text-blue-600 dark:text-blue-400" size={20} />
          <a
            href="https://www.linkedin.com/in/adele-finney-25a460332/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/adele-finney-25a460332/
          </a>
        </p>
        <p className="flex items-center space-x-3">
          <FaGithub className="text-blue-600 dark:text-blue-400" size={20} />
          <a
            href="https://github.com/delly0"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/delly0
          </a>
        </p>
      </div>
      {/* Interactive Cloud variant for Contact page */}
      {/* <div className="mt-16 flex justify-center w-full">
        <CloudRain variant="contact" />
      </div> */}
    </div>
  );
};

export default Contact;
