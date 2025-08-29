import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Información de Contacto
      </h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 group">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Email</p>
            <a
              href="mailto:yorielvidal@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              yorielvidal@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 group">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Teléfono</p>
            <a
              href="tel:+573136412944"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +57 (313) 641-2944
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 group">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Ubicación</p>
            <p className="text-gray-600 dark:text-gray-300">
              Valledupar, Colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
