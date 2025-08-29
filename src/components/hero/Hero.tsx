import React from "react";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <HeroImage />
        <HeroTitle />
        <HeroDescription />
        <HeroActions />
        <HeroSocials />
      </div>
    </section>
  );
};

export default Hero;
