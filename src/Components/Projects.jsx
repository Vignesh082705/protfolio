import { motion } from "framer-motion";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import photo1 from "../assets/Food_redistribution.jpg";
import photo2 from "../assets/OnlineShopping.jpg";
import photo3 from "../assets/MemoryGame.jpg";

function Projects() {
  const projects = [
    {
      title: "Food Redistribution",
      description:
        "A platform that connects food donors with recipients, reducing food waste effectively. This project ensures food security by minimizing waste and distributing surplus food to those in need, leveraging technology for efficient logistics and tracking.",
      image: photo1,
      link: "https://food-redistribution-da7w.vercel.app/",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      title: "Online Shopping Web Application",
      description:
        "A complete e-commerce platform built using HTML, CSS, JavaScript, and JSON. Features include product listing, client-side cart management, category filtering, user login system, and persistent cart/session storage using localStorage. Designed with responsive UI and smooth user interactions.",
      image: photo2,
      link: "https://github.com/Vignesh082705/Onlline-Shopping",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      title: "Memory Game",
      description:
        "An interactive memory card game developed using HTML, CSS, and JavaScript. Includes engaging flip animations, scoring system, difficulty modes, and optimized DOM handling for smooth gameplay on both desktop and mobile devices.",
      image: photo3,
      link: "https://github.com/Vignesh082705/Memory-Game",
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },    
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 lg:px-24 relative overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-80" />
      <div className="absolute -top-20 left-10 w-96 h-96 bg-purple-500 opacity-30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500 opacity-30 blur-[100px] rounded-full animate-pulse" />

      <h2 className="text-4xl font-bold text-center text-cyan-300 drop-shadow-2xl relative z-10 tracking-wide">
        My Projects
      </h2>
      <p className="text-center text-gray-300 mt-4 text-lg relative z-10">
        Explore my latest work and contributions
      </p>

      <div className="relative flex flex-col items-center mt-14 z-10 w-full">
        
        <motion.div
          key={current}
          className={`w-full max-w-xl p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden border border-gray-700 ${projects[current].gradient} transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-white/10 to-transparent blur-2xl rounded-3xl pointer-events-none" />
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-full h-60 object-fit rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-2xl font-semibold mt-6 text-white drop-shadow-md tracking-wide">
            {projects[current].title}
          </h3>
          <p className="text-gray-200 mt-3 text-lg leading-relaxed drop-shadow-md">
            {projects[current].description}
          </p>
          <button
            onClick={() => window.open(projects[current].link, "_blank")}
            className="inline-block mt-6 px-7 z-10 py-3 bg-cyan-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-cyan-300 transition-all shadow-md hover:shadow-xl"
          >
            View Project
          </button>
        </motion.div>
        {current >0&&(
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 sm:-left-12 md:-left-10 transform -translate-y-1/2 
                    w-12 h-12 bg-white/10 pl-1 backdrop-blur-lg rounded-full shadow-lg border border-cyan-300 
                    text-cyan-300 text-4xl sm:text-4xl transition-all duration-300 hover:scale-110 
                    hover:bg-cyan-300 hover:text-gray-900 hover:shadow-cyan-500/50 z-20"
        >
          <MdNavigateBefore />
        </button>
        )}

        {current <projects.length-1&&(
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 sm:-right-12 md:-right-10 transform -translate-y-1/2 
                    w-12 h-12 bg-white/10 pl-1.5 backdrop-blur-lg rounded-full shadow-lg border border-cyan-300 
                    text-cyan-300 text-4xl sm:text-4xl transition-all duration-300 hover:scale-110 
                    hover:bg-cyan-300 hover:text-gray-900 hover:shadow-cyan-500/50 z-20"
        >
          <MdNavigateNext />
        </button>
        )}
      </div>
    </motion.section>
  );
}

export default Projects;
