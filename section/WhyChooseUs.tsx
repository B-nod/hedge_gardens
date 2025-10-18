"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section id="whychooseus" className="w-full">
      {/* Top Section - Why Choose Us */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <motion.div
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative px-6 sm:px-8  shadow-sm border-black md:px-12 lg:px-12 py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden"
        >
          {/* Decorative Plant Illustration */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-16 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 opacity-5">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Leaf illustration */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M100 180 Q80 140, 100 100 Q120 140, 100 180 M100 100 Q60 120, 40 100 M100 100 Q140 120, 160 100 M100 100 Q80 60, 100 20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                d="M100 20 Q80 40, 60 30 M100 20 Q120 40, 140 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-xl ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-start mb-4 sm:mb-8"
            >
              <p className="text-sm font-medium text-gray-600 mb-4 tracking-wider">
                why choose us?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto ">
                Why choose us?
              </h2>
            </motion.div>
            {/* <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
            >
              Why choose us?
            </motion.h2> */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              The Gardeny is a full-service grounds care company. Our
              established systems allow us to deliver industry-leading lawn care
              and landscape solutions to commercial and residential clients.
              Built on a family tradition of caring, we are driven by a passion
              to exceed customer expectations and consistently deliver client
              satisfaction.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Column - Team Photo */}
        <motion.div
        // className="relative h-[400px] sm:h-[500px] lg:h-full min-h-[500px]"
        >
          <Image
            src="/whychooseus.webp"
            alt="Gardening team in garden"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
          {/* Gradient Overlay for better text contrast on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
        </motion.div>
      </div>

      {/* Bottom Section - Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Craftsmanship Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          //
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-green-900 text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 lg:py-16"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            Craftsmanship
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 lg:mb-12">
            We at The Gardeny are proud to offer carefully designed landscapes
            crafted to suit our commercial clients&apos; preferences while
            prioritizing sustainability. We at The Gardeny are proud to offer
            carefully
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-green-700 hover:bg-green-600 text-white rounded-full px-8 py-3 text-base sm:text-lg font-medium shadow-lg transition-all duration-300">
              Connect with us
            </button>
          </motion.div>
        </motion.div>

        {/* Since 1987 Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#F5F1E8] px-6 sm:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 lg:py-16"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            We are since 1987!
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            The Gardeny have always focused on one thing: customer satisfaction.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We deliver that satisfaction through our comprehensive range of
            expert lawn care and landscaping services, including both
            residential and commercial lawn care.
          </p>
        </motion.div>

        {/* Philosophy Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#F5F1E8] px-6 sm:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 lg:py-16 border-l border-gray-300/30"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Philosophy
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 italic">
            Everything that slows us down and forces patience, everything that
            sets us back into the slow circles of nature, is a help. Gardening
            is an instrument of grace.
          </p>
          <div className="space-y-2">
            <p className="text-gray-900 font-semibold text-base sm:text-lg">
              – Jame Stevens
            </p>
            <motion.div
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              //
              transition={{ duration: 1.5, delay: 0.5 }}
              className="relative h-16 sm:h-20"
            >
              <svg
                viewBox="0 0 200 80"
                className="w-40 sm:w-48 h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M10 60 Q30 20, 60 40 T120 35 Q140 30, 160 45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-gray-900"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
