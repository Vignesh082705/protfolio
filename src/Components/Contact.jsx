import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const text = ["Got a New Project in ","Mind.?","Let's Bring it To Life..!","Drop Me ","A Message Below."];

const colors = [
  "text-cyan-300",
  "text-gray-400",
  "text-white",
  "text-blue-200",
  "text-teal-300",
  "text-indigo-300",
  "text-gray-300",
];

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .send(
        "service_d90wzqk",
        "template_afuxmh4",
        {
          fullName: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          subject: formData.subject,
          message: formData.message,
        },
        "aA2kpBr64MW2_su36"
      )
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("✅ Message Sent Successfully!");
          setFormData({
            fullName: "",
            email: "",
            mobile: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setIsSending(false);
          setStatusMessage("❌ Message Sending Failed. Try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-8"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/50 to-gray-900 opacity-30 blur-2xl pointer-events-none"></div>
      <h2 className="text-4xl font-bold text-cyan-400 mb-3 text-center">
        Get in Touch!
      </h2>
      <p className="text-gray-400 text-lg text-center mb-8">
        I'd love to hear from you. Let's connect! 🚀
      </p>

      <motion.div
        className="w-full max-w-5xl bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
      className="text-xl text-gray-700 mb-6 md:ml-10 md:pt-15 tracking-wide relative text-center leading-snug"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute w-80 h-80 bg-purple-800 rounded-full opacity-30 blur-3xl px-50"
        animate={{ scale: [1, 1, 1], opacity: [0.2, 0.1, 0.1], x: [-50, 50, -50] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      {text.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split("").map((char, index) => (
            <motion.span
              key={index}
              className={`${index === 0 ? "font-bold" : "font-semibold"} ${index === 0 ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"} ${colors[index % colors.length]} drop-shadow-lg`}
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: index * 0.1, // Creates a flowing wave effect
              }}
            >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      </div>
      ))}
    </motion.div>


        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={sendEmail}>
          {[
            { name: "fullName", placeholder: "Full Name" },
            { name: "email", placeholder: "Email Address", type: "email" },
            { name: "mobile", placeholder: "Mobile Number", type: "tel" },
            { name: "subject", placeholder: "Email Subject" },
          ].map((input, index) => (
            <motion.input
              key={index}
              type={input.type || "text"}
              name={input.name}
              placeholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-700 text-white border border-transparent outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-sm hover:scale-103 hover:border-cyan-400"
              whileHover={{ scale: 1.02 }}
              required
            />
          ))}

          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 p-4 rounded-lg bg-gray-700 text-white border border-transparent outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 shadow-sm hover:scale-100 hover:border-cyan-400 h-36"
            whileHover={{ scale: 1.02 }}
            required
          />

          <div className="md:col-span-2 flex flex-col items-center">
            <motion.button
              type="submit"
              className="px-6 py-3 bg-cyan-400 rounded-lg font-semibold text-gray-900 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-cyan-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>

            {statusMessage && (
              <motion.p
                className={`mt-4 text-lg font-semibold ${statusMessage.includes("✅") ? "text-green-400" : "text-red-400"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {statusMessage}
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
