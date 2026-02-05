import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "@/config/demo";
import { generateCompanyProfilePDF } from "@/lib/pdf";

const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bottom-24 right-6 bg-[#25D366] hover:bg-[#128C7E] animate-pulse-glow"
        style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="floating-btn bottom-6 right-6 bg-primary hover:bg-navy-light"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Download Brochure - Side Button */}
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        onClick={generateCompanyProfilePDF}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-accent text-white py-4 px-2 rounded-r-lg shadow-lg hover:px-4 transition-all duration-300 hidden lg:flex flex-col items-center gap-2 group"
      >
        <Download className="w-5 h-5" />
        <span className="text-xs font-medium writing-mode-vertical transform rotate-180" style={{ writingMode: "vertical-rl" }}>
          Download Brochure
        </span>
      </motion.button>
    </>
  );
};

export default FloatingElements;
