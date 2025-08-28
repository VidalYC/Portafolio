import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          {/* Logo */}
          <div className="text-2xl font-bold mb-4">
            DataPort<span className="text-blue-400 dark:text-blue-300">folio</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 dark:text-gray-300 max-w-md mx-auto mb-8">
            Transformando datos en decisiones estratégicas a través de soluciones 
            innovadoras de ingeniería de datos y business intelligence.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { name: 'Sobre mí', href: '#about' },
              { name: 'Proyectos', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contacto', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 dark:text-gray-300 text-sm flex items-center">
                Hecho con <Heart className="w-4 h-4 text-red-500 mx-1" /> por Yoriel Navier Carvajalino Vidal
              </p>
              <p className="text-gray-400 dark:text-gray-300 text-sm">
                © 2025 Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;