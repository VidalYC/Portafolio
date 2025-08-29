import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const HeroSocials = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/yoriel-carvajalino"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://github.com/VidalYC"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:scale-110 transform"
      >
        <Github size={24} />
      </a>
      <a
        href="mailto:yorielvidal@gmail.com"
        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 hover:scale-110 transform"
      >
        <Mail size={24} />
      </a>
    </div>
  );
};

export default HeroSocials;
