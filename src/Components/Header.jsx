import { useEffect, useState } from "react";

const sections = ["home", "about", "services", "projects", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 md:px-0 px-6">
        <h1 className="text-4xl font-bold text-cyan-400 cursor-pointer">
          Vignesh
        </h1>
        <nav className="hidden lg:flex space-x-8 ml-auto">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative px-4 py-2 transition duration-300 rounded-md ${
                activeSection === item ? "bg-cyan-400 text-gray-900" : "hover:bg-cyan-400 hover:text-gray-900"
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden focus:outline-none z-50">
          <div className="flex flex-col gap-1">
            <span className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block h-0.5 w-7 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-7 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>
      </div>

      <div className={`lg:hidden absolute top-16 left-0 w-full bg-gray-800 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col text-center items-center py-4 space-y-4">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition duration-300 py-2 px-4 rounded-md ${
                activeSection === item ? "bg-cyan-400 text-gray-900" : "hover:bg-cyan-400 hover:text-gray-900"
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
