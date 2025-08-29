import React from "react";
import "./DarkModeToggle.css";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <input
      type="checkbox"
      className="magic-toggle"
      checked={!isDarkMode}
      onChange={toggleDarkMode}
      aria-label="Toggle dark mode"
    />
  );
};

export default DarkModeToggle;
