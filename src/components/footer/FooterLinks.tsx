const FooterLinks = () => {
  const links = [
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-400 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
