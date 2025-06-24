import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa"; 

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "I specialize in developing fast, scalable, and secure web applications using modern frameworks like React.js and Tailwind CSS. My focus is on clean, maintainable code with optimized performance.",
      icon: <FaCode className="text-[3.5rem] text-cyan-300" />,
      gradient: "from-cyan-500/30 to-blue-500/30", 
    },
    {
      title: "UI/UX Design",
      description: "I craft visually appealing and user-friendly interfaces that enhance user experience. My designs prioritize usability, accessibility, and responsiveness, ensuring a seamless experience across all devices.",
      icon: <FaPaintBrush className="text-[3.5rem] text-pink-300" />,
      gradient: "from-pink-500/30 to-purple-500/30",
    },
    {
      title: "Responsive Design",
      description: "I ensure websites adapt beautifully to all screen sizes, from desktops to mobile devices. My approach includes fluid layouts, media queries, and modern CSS techniques to create a flawless viewing experience.",
      icon: <FaMobileAlt className="text-[3.5rem] text-green-300" />,
      gradient: "from-green-500/30 to-lime-500/30",
    }      
  ];

  return (
    <motion.section  
      id="services" 
      className="relative min-h-screen bg-gray-900 text-white px-6 py-33 lg:px-10 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}  
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Unique Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 via-gray-900 to-black opacity-90 z-0" />
      
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-2xl rounded-t-full animate-[bounce_6s_infinite]" />
      <div className="absolute bottom-4 left-0 w-full h-28 bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-2xl rounded-t-full animate-[bounce_8s_infinite_reverse]" />
      
      {/* Floating Particles (Fixed) */}
      {Array.from({ length: 300 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-50 animate-ping`}
          style={{
            backgroundColor: ["#06b6d4", "#ec4899", "#a855f7"][i % 3], // Cyan, Pink, Purple
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-cyan-400 relative z-10">
        My Services
      </h2>
      <p className="text-center text-gray-400 mt-2 text-lg relative z-10">
        What I offer
      </p>

      {/* Services Grid */}
      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className={`group p-8 bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 transition-all duration-300 
            hover:scale-105 hover:shadow-xl hover:border-cyan-400 hover:rotate-[2deg] 
            bg-gradient-to-br ${service.gradient}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="flex justify-center mb-4 group-hover:rotate-[10deg] transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-3xl font-semibold text-center text-white drop-shadow-lg">
              {service.title}
            </h3>
            <p className="text-gray-300 mt-3 text-left text-lg lg:text-center leading-relaxed tracking-wide drop-shadow-md">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
