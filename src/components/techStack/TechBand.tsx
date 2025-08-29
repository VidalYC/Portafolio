import React from "react";

interface Tech {
  name: string;
  color: string;
  icon: any;
}

export const TechBand = ({
  techs,
  direction = "left",
  speed = "slow",
}: {
  techs: Tech[];
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
}) => {
  const speedClass =
    speed === "fast"
      ? "animate-scroll-fast"
      : speed === "medium"
      ? "animate-scroll-medium"
      : "animate-scroll-slow";

  const directionClass = direction === "right" ? "animate-scroll-reverse" : "";

  return (
    <div className="relative overflow-hidden py-3">
      {/* Bordes gradientes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-gray-900 z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-gray-900 z-10"></div>

      <div className={`flex space-x-8 whitespace-nowrap ${speedClass} ${directionClass}`}>
        {[...techs, ...techs, ...techs].map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-3 px-6 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl"
            >
              <IconComponent className={`w-5 h-5 ${tech.color}`} />
              <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
