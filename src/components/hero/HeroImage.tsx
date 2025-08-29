import React from "react";

const HeroImage = () => {
  return (
    <div className="mb-8">
      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
        <img
          src="/prins.png"
          alt="Yoriel Carvajalino"
          className="w-32 h-32 rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroImage;
