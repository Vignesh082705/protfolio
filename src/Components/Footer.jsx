import { FaArrowUp } from "react-icons/fa";

function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-5 relative">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        {/* Footer Text - Left Side */}
        <p className="text-lg font-medium mt-3 self-start">&copy; 2025 Portfolio. All Rights Reserved.</p>
        {/* Scroll to Top Button - Right Side */}
        <button
          onClick={scrollToTop}
          className="bg-cyan-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300"
        >
          <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
      <div className="flex flex-col mt-5 items-center">
        <div className="w-16 h-1 bg-cyan-400 rounded-full"></div>
      </div>
    </footer>
  );
}

export default Footer;
