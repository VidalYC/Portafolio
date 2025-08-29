import React from "react";

interface ProjectImageProps {
  image: string;
  title: string;
  category: string;
  Icon: React.ElementType;
  hasLiveDemo?: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ 
  image, 
  title, 
  category, 
  Icon, 
  hasLiveDemo = false 
}) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </span>
        {hasLiveDemo && (
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
            Live
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectImage;