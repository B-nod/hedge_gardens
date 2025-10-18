"use client";

import { motion } from "framer-motion";
import { ChevronUp, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function FooterSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolled down
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#F5F1E8]  padding-responsive px-4 sm:px-6 overflow-hidden">
      {/* Decorative Leaf Illustrations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 opacity-[0.08] pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            //
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M200 350 Q150 280, 180 200 Q210 280, 200 350 M180 200 Q120 240, 80 200 Q120 160, 180 200 M180 200 Q150 120, 180 50 Q210 120, 180 200 M180 200 Q240 160, 280 200 Q240 240, 180 200"
            stroke="#2D5016"
            strokeWidth="3"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            //
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            d="M180 50 Q150 80, 120 60 M180 50 Q210 80, 240 60"
            stroke="#2D5016"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 opacity-[0.08] pointer-events-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M200 350 Q150 280, 180 200 Q210 280, 200 350 M180 200 Q120 240, 80 200 Q120 160, 180 200 M180 200 Q150 120, 180 50 Q210 120, 180 200 M180 200 Q240 160, 280 200 Q240 240, 180 200"
            stroke="#2D5016"
            strokeWidth="3"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            d="M180 50 Q150 80, 120 60 M180 50 Q210 80, 240 60"
            stroke="#2D5016"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-10"
        >
          {/* Tree Icon */}
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-green-800"
            viewBox="0 0 40 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M20 5 Q15 15, 20 25 Q25 15, 20 5 M20 25 Q12 30, 8 25 M20 25 Q28 30, 32 25 M20 25 L20 55 M18 55 L22 55"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.ellipse
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              cx="20"
              cy="15"
              rx="6"
              ry="10"
              fill="currentColor"
              opacity="0.3"
            />
          </svg>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Hedge Gardens
          </h2>
        </motion.div>

        {/* Free Quote Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              //   variant="outline"
              className="border-2 border-green-800 text-green-800 flex items-center justify-center mx-auto hover:bg-green-800 hover:text-white rounded-full px-8 py-2 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 10h18" />
                <circle cx="8" cy="14" r="1" />
                <circle cx="16" cy="14" r="1" />
              </svg>
              Free Quote
            </button>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-2 mb-8 sm:mb-10"
        >
          <p className="text-gray-700 text-base sm:text-lg">
            Call Us: <span className="font-semibold">07346279113</span>
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            12 Leesands Cl, Fulwood, Preston PR2 9AJ
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          {/* Houzz Icon */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-green-800 hover:text-green-700 transition-colors"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
            </svg>
          </motion.a>

          {/* Pinterest Icon */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-green-800 hover:text-green-700 transition-colors"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          </motion.a>

          {/* Facebook Icon */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-green-800 hover:text-green-700 transition-colors"
          >
            <Facebook className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" />
          </motion.a>

          {/* Instagram Icon */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-green-800 hover:text-green-700 transition-colors"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>
        </motion.div>

        {/* Copyright and Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-600 text-xs sm:text-sm space-y-1"
        >
          <p>© 2025 Garden Theme by VamTam. All rights reserved.</p>
          <p>
            Proudly powered by{" "}
            <a
              href="https://www.marichitechai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-green-700 font-medium transition-colors"
            >
              MarichiTech AI
            </a>
            .
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-green-800 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
