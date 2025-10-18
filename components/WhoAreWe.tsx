"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  "Family-Owned & Operated",
  "Licensed & Insured",
  "Custom, Nature-Inspired Designs",
  "Trusted Local Business with Personal Service",
];

export default function WhoWeAreSection() {
  return (
    <section
      id="about"
      className="  px-4 sm:px-6 lg:px-8 overflow-hidden mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <p className="text-sm font-medium text-gray-600 mb-4 tracking-wider">
                WHO WE ARE
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
                Boutique Landscape Design & Garden
              </h2>
            </div>

            {/* Award Badge - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:flex items-center gap-4"
            >
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 via-lime-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      {/* <Sparkles className="w-5 h-5 text-white" /> */}
                    </div>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500 animate-spin-slow" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  BEST RATED LANDSCAPING
                </p>
                <p className="font-bold text-gray-900 text-sm">COMPANY 2025</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Column - Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 flex gap-2 z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-gray-800 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="w-2 h-2 bg-gray-800 rounded-full"
                />
              </div>

              {/* Plant decoration */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -left-32 bottom-1/2 w-58 h-58 z-0 -rotate-45"
              >
                <Image
                  src="/about/about.webp"
                  alt="Tropical plant"
                  fill
                  className="object-contain opacity-90"
                />
              </motion.div>

              {/* Main card */}
              <div className="relative bg-gradient-to-b from-transparent via-lime-100/30 to-lime-800 rounded-[3rem] overflow-hidden ">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/about/banner-home-1.webp"
                    alt="Landscape design team"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Button */}
                {/* <div className="p-6"> */}
                {/* <button className="w-full bg-white text-gray-900 hover:bg-gray-50 rounded-2xl py-6 text-base font-semibold shadow-md">
                    More About Us
                  </button> */}
                {/* </div> */}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description and Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-4 space-y-8"
          >
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Locally owned landscape design company since 2012. Licensed and
              based in New York, with 12+ years of experience creating natural,
              timeless outdoor spaces. Personal approach, honest work, and a
              passion for greenery at the heart of every project.
            </p>

            {/* Features List */}
            <div className="">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 py-3  group border-b-2 border-gray-200"
                >
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Sparkles className="w-4 h-4 text-gray-900" />
                  </div>
                  <p className="text-gray-900 font-medium text-base ">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Award Badge - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden flex items-center gap-4 justify-center col-span-1"
          >
            <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 via-lime-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-lime-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500 animate-spin-slow" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">
                BEST RATED LANDSCAPING
              </p>
              <p className="font-bold text-gray-900 text-sm">COMPANY 2025</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
