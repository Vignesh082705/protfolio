import { useState,useEffect } from "react"; 
import { motion } from "framer-motion"; 
import profileImg from "../assets/profile.png";

  const randomCodeChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
  };
  
  const MatrixBackground = () => {
    const [matrix, setMatrix] = useState(Array(100).fill(""));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setMatrix((prev) => prev.map(() => randomCodeChar()));
      }, 100);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="absolute inset-0 overflow-hidden bg-gray-900 opacity-60">
        {matrix.map((char, index) => (
          <span
            key={index}
            className="absolute text-cyan-300 opacity-50 text-xs md:text-sm lg:text-lg"
            style={{
              left: `${(index % 10) * 11}%`,
              top: `${Math.floor(index / 12) * 6}%`,
              animation: `fall ${Math.random() * 5 + 2}s linear infinite`,
            }}
          >
            {char}
          </span>
        ))}
        <style>{`
          @keyframes fall {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}</style>
      </div>
    );
  };

function About() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <section id="about" className="min-h-screen relative flex flex-col lg:flex-row items-center justify-between bg-gray-900 text-white px-6 lg:px-10 py-35 overflow-hidden gap-x-20">
      <MatrixBackground />
      {/* Left Section - Profile Image */}
      <motion.div 
        className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 mb-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-lg border-4 border-cyan-400 shadow-lg z-40"
        />
      </motion.div>

      {/* Right Section - About Details */}
      <motion.div 
        className="lg:w-1/2 text-left pl-7 z-40"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">About Me</h2>
        <h3 className="text-2xl sm:text-3xl mt-2 font-semibold">I'm Vignesh</h3>
        <p className="max-w-lg mt-4  text-gray-400 sm:text-lg">
          A results-driven <span className="text-cyan-400 font-semibold">Web Developer </span> with a passion for creating dynamic and user-friendly applications. My expertise lies in  
          <code className="text-cyan-300 bg-gray-800 px-1 rounded">&lt;React.js&gt;</code> and  
          <code className="text-cyan-300 bg-gray-800 px-1 rounded">&lt;Tailwind CSS&gt;</code>, allowing me to build  
          sleek, responsive, and high-performance websites. I enjoy solving complex problems through  
          clean and efficient code, always striving to enhance user experiences.
        </p>
        {/* Read More Button */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 mt-6"
        >
          Read More
        </button>
      </motion.div>

      {/* Pop-up Modal */}
      {isOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
    <motion.div 
      className="relative bg-gray-800 text-white p-6 rounded-lg max-w-lg shadow-lg max-h-[600px] overflow-y-auto custom-scrollbar"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Sticky Header with Title & Close Button */}
      <div className="sticky -top-7 left-0 right-0 bg-gray-800 px-4 py-2 mb-5 flex justify-between items-center z-10 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-cyan-400">More About Me</h2>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white transition-all duration-300 text-5xl"
        >
          &times;
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-2">
        <p className="indent-10 text-justify tracking-wide max-w-lg mt-4 text-gray-400 sm:text-lg">
          A passionate <span className="text-cyan-400 font-semibold">Web Application Developer&nbsp;</span>  
          with expertise in building interactive, responsive, and high-performance applications.  
          I specialize in <code className="text-cyan-300 bg-gray-800 px-1 rounded">React.js</code> and  
          <code className="text-cyan-300 bg-gray-800 px-1 rounded"> Tailwind CSS</code> to craft sleek, user-friendly UI's.
        </p>

        <p className="indent-10 text-justify tracking-wide max-w-lg mt-2 text-gray-400 sm:text-lg">
          Proficient in <code className="text-cyan-300 bg-gray-800 px-1 rounded">HTML, CSS, JavaScript</code> and programming languages like 
          <code className="text-cyan-300 bg-gray-800 px-1 rounded">C, C++, Python, and Java,</code>  
          I enjoy solving complex problems and optimizing user experiences. My expertise extends to UI/UX design.  
        </p>

        <p className="indent-10 text-justify tracking-wide max-w-lg mt-2 text-gray-400 sm:text-lg">
          I have actively participated in UI/UX design contests and contributed to projects like <code className="text-cyan-300 bg-gray-800 px-1 font-semibold rounded">PREPWIZDOM</code>,  
          a platform designed to enhance programming skills through structured learning and online assessments.  
          Constantly learning and evolving, I strive to push the boundaries of web development.
        </p>
      </div>
    </motion.div>
  </div>
)}
    </section>
  );
}

export default About; 
