import React from "react";
import AboutText from "./AboutText";
import ProfileImage from "./ProfileImage";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda: Texto */}
          <AboutText />

          {/* Columna Derecha: Imagen */}
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default About;
