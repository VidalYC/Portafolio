import BackToTopButton from "./BackToTopButton";
import FooterLogo from "./FooterLogo";
import FooterDescription from "./FooterDescription";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BackToTopButton />
          <FooterLogo />
          <FooterDescription />
          <FooterLinks />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
