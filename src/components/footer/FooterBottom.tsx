import { Heart } from "lucide-react";

const FooterBottom = () => (
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
);

export default FooterBottom;
