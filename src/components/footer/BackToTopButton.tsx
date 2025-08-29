import React from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="mb-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTopButton;
