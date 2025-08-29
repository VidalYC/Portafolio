import { navItems } from "./navItems";

interface MobileNavProps {
  isMenuOpen: boolean;
  scrollToSection: (href: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isMenuOpen, scrollToSection }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
