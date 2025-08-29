import { navItems } from "./navItems";

interface DesktopNavProps {
  scrollToSection: (href: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ scrollToSection }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default DesktopNav;
