import { motion } from "framer-motion"; 
import profileImg from "../assets/profile.png"; 
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; 

const socialLinks = [
  { icon: FaWhatsapp, link: "https://wa.me/916374193085" },
  { icon: FaInstagram, link: "https://www.instagram.com/v.i.g.n.e.s.h_x?igsh=MTBkZHM1dDE0Mmtocw==" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/vignesh-v-3481b328a" },
  { icon: FaGithub, link: "https://github.com/Vignesh082705" },
  { icon: FaEnvelope, link: "mailto:vigneshvicky3663@gmail.com" }
];

const socialContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Icons appear one by one
    },
  },
};

const socialItem = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 3 } }
};

const gradientBorder = {
  initial: { background: "linear-gradient(45deg, #06b6d4, #3b82f6)" },
  animate: {
    background: [
      "linear-gradient(45deg, #06b6d4, #3b82f6)",
      "linear-gradient(45deg, #f43f5e, #f97316)",
      "linear-gradient(45deg, #a855f7, #6366f1)",
      "linear-gradient(45deg, #22c55e, #84cc16)"
    ],
    transition: { duration: 5, repeat: Infinity, repeatType: "mirror" }
  }
};

function Intro() {
  return (
    <section id="home" className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen bg-gray-900 text-white px-6 lg:px-15 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/50 to-gray-900 opacity-30 blur-2xl pointer-events-none"></div>

      <motion.div className="flex flex-col items-center lg:items-start lg:flex-row lg:w-1/2 space-y-6 lg:space-y-0">
      {/* Social Icons with staggered motion */}
      <motion.div 
          className="flex lg:flex-col flex-row gap-8 lg:gap-8 lg:mt-22 mt-10"
          variants={socialContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialItem}
                whileHover={{ scale: 1.1 }}
                className="relative w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 p-2 text-white shadow-cyan-300"
              >
                <motion.div
                  variants={gradientBorder}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 rounded-full border-2 p-[2px]"
                ></motion.div>
                <Icon className="text-2xl relative z-10" />
              </motion.a>
            );
          })}
        </motion.div>
    {/* Text Content */}
    <motion.div 
      className="text-left mt-10 pl-6 lg:pl-15" 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold">Hello, It's Me</h2>
      <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mt-2">Vignesh</h1>
      <h3 className="text-2xl sm:text-3xl mt-2">
        And I'm a <span className="text-cyan-400">Web Application Developer</span>
      </h3>
      <p className="max-w-lg mt-4 text-gray-400 sm:text-lg">
        A passionate developer who loves building interactive, scalable, and efficient web applications.  
        With expertise in <code className="text-cyan-300 bg-gray-800 px-1 rounded">&lt;React.js&gt;</code> and  
        <code className="text-cyan-300 bg-gray-800 px-1 rounded"> Tailwind CSS </code>, I specialize in crafting seamless user experiences and functional web solutions.  
        Constantly learning and evolving, I thrive on bringing creative ideas to life through code.
      </p>
      
      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <a href="https://drive.google.com/file/d/132ukExiwsPSo4L1U0TjRQ2bwg7HmSyrg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            Download CV
          </button>
        </a>
        <a href="#contact">
          <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
            Contact Me
          </button>
        </a>
      </div>
    </motion.div>
  </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div 
        className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 z-40"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-4 border-cyan-400 shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default Intro;
