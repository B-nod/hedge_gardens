"use client";
<<<<<<< HEAD

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  keyPoints: string[];
  icon: string;
};

const services: Service[] = [
  {
    title: "Hedge Trimming & Lawn Care",
    description: "Professional care for hedges and lawns all year round.",
    icon: "🌿",
    keyPoints: [
      "Regular & one-off hedge trimming",
      "Lawn mowing & edging",
      "Scarification & aeration",
      "Weed control & feeding",
      "Leaf clearance in autumn",
    ],
  },
  {
    title: "Landscaping",
    description: "Complete garden transformations and modern outdoor spaces.",
    icon: "🏡",
    keyPoints: [
      "Garden design & planning",
      "Patios, paths & flag laying",
      "Turfing & artificial grass",
      "Gravel, slate & wood chip areas",
      "Raised beds & sleeper walls",
    ],
  },
  {
    title: "Fence Work & Painting",
    description: "Installation, repair and finishing of fencing and decking.",
    icon: "🪵",
    keyPoints: [
      "New fence & gate installation",
      "Fence & deck repairs",
      "Pressure-treated timber",
      "Fence painting & staining",
      "Decking cleaning & sealing",
    ],
  },
  {
    title: "Tree Cutting",
    description: "Safe pruning and removal of small to medium garden trees.",
    icon: "🌳",
    keyPoints: [
      "Crown reduction & thinning",
      "Tree pruning & shaping",
      "Small tree felling",
      "Deadwood removal",
      "Sectional dismantling",
    ],
  },

  {
    title: "Transport & Removal",
    description: "Man-with-a-van style transport and moving help.",
    icon: "🚚",
    keyPoints: [
      "Furniture & appliance moves",
      "House / flat clear-outs",
      "Garden shed / greenhouse moves",
      "Single item collection",
      "Short & long distance",
    ],
  },
  {
    title: "Power Wash & Cleaning",
    description: "Deep cleaning of outdoor surfaces and structures.",
    icon: "💦",
    keyPoints: [
      "Driveways & patios",
      "Decking & fencing",
      "Garden furniture & play areas",
      "Paths & block paving",
      "Moss & algae removal",
    ],
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="py-12 lg:py-20 mt-24  overflow-hidden bg-[#F5F1E8]"
    >
      <div className="max-w-7xl mx-auto ">
        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-8"
          >
            <p className="text-sm font-medium text-gray-600 mb-4 tracking-wider uppercase">
              Our Services
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Expert Garden &{" "}
              <span className="text-emerald-600">Landscaping</span> Solutions
            </h2>
          </motion.div>

          <p className="mt-6 text-lg text-stone-600 leading-relaxed">
            Transform your outdoor space with our comprehensive range of
            professional services tailored to your needs.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                layout
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`
                  relative cursor-pointer rounded-2xl border transition-all duration-300
                  ${
                    isExpanded
                      ? "md:col-span-2 bg-white  shadow-lg"
                      : "bg-white/55 border-stone-200 hover:border-emerald-600 hover:shadow-md"
                  }
                `}
              >
                <div className="p-6">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300
                        ${isExpanded || isHovered ? "bg-emerald-100" : "bg-white/55"}
                      `}
                      >
                        {service.icon}
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3
                          className={`
                          font-semibold text-lg transition-colors
                          ${isExpanded ? "text-emerald-700" : "text-stone-900"}
                        `}
                        >
                          {service.title}
                        </h3>
                        <p className="text-base text-stone-500 mt-0.5">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <div
                      className={`
                      w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                      ${
                        isExpanded
                          ? "bg-emerald-600 text-white rotate-90"
                          : "bg-stone-300 text-stone-800  "
                      }
                    `}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Content - Key Features */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-stone-100">
                          <p className="text-base font-medium text-stone-700 mb-4">
                            Key Features
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.keyPoints.map((point, i) => (
                              <motion.div
                                key={point}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl"
                              >
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                </div>
                                <span className="text-base text-stone-700">
                                  {point}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <a
                            href="#contact"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors text-base"
                          >
                            Request This Service
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300
                  bg-gradient-to-br from-emerald-50/50 to-transparent
                  ${isHovered && !isExpanded ? "opacity-100" : "opacity-0"}
                `}
                />
              </motion.div>
            );
          })}
=======
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Service } from "../types/services";

const services: Service[] = [
  {
    title: "Gardening",
    description:
      "Crafting stunning garden spaces that bring your outdoor vision to life with beauty and precision.",
    image: "https://picsum.photos/seed/gardening/800/600",
    hoverImage: "https://picsum.photos/seed/gardening-hover/800/600",
    bgColor: "lime",
    maskShape: "rounded",
  },
  {
    title: "Landscaping",
    description:
      "Transformative landscape design and construction that elevate outdoor living.",
    image: "https://picsum.photos/seed/landscaping/800/600",
    hoverImage: "https://picsum.photos/seed/landscaping-hover/800/600",
    bgColor: "lime",
    maskShape: "rounded",
  },
  {
    title: "Turfing",
    description:
      "Premium turf installation and expert maintenance for lush, healthy lawns year-round.",
    image: "https://picsum.photos/seed/turfing/800/600",
    hoverImage: "https://picsum.photos/seed/turfing-hover/800/600",
    bgColor: "lime",
    maskShape: "rounded",
  },
  {
    title: "Tree Care",
    description:
      "Designing stunning garden spaces that elegantly bring your outdoor vision to life.",
    image: "https://picsum.photos/seed/tree/800/600",
    hoverImage: "https://picsum.photos/seed/tree-hover/800/600",
    bgColor: "lime",
    maskShape: "flower",
  },
];
export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className=" padding-responsive px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // 
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium text-gray-600 mb-3 sm:mb-4 tracking-wider">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
            Landscaping Solutions for Homes and Businesses
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-4 xl:gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isHovered={hoveredCard === index}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            />
          ))}
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======

interface ServiceCardProps {
  service: Service;
  index: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function ServiceCard({
  service,
  index,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="relative w-full h-full group"
    >
      <motion.div
        className={`
          relative overflow-hidden h-full
          rounded-t-[2rem] sm:rounded-t-[2.5rem] lg:rounded-t-[3rem]
          rounded-b-xl sm:rounded-b-2xl
          flex flex-col
          min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px]
          transition-all duration-500 ease-out
          ${
            isHovered
              ? "bg-gradient-to-br from-green-700 via-green-700 to-green-800 shadow-2xl shadow-green-900/30"
              : service.bgColor === "lime"
              ? "bg-gradient-to-br from-lime-600 via-lime-400 to-lime-500"
              : "bg-gradient-to-br from-green-900 via-green-800 to-green-900"
          }
        `}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-5 sm:top-6 lg:top-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-colors duration-300 ${
                isHovered
                  ? "bg-white/80"
                  : service.bgColor === "lime"
                  ? "bg-gray-800/60"
                  : "bg-white/60"
              }`}
              animate={{
                scale: isHovered ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                delay: dot * 0.1,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 px-5 sm:px-6 lg:px-7 xl:px-8 pt-14 sm:pt-16 lg:pt-20 pb-5 sm:pb-6 z-10">
          <motion.div
            className="mb-auto"
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`
              text-xl sm:text-2xl lg:text-3xl xl:text-4xl 
              font-bold mb-3 sm:mb-4 lg:mb-5
              transition-colors duration-300
              ${
                isHovered
                  ? "text-white"
                  : service.bgColor === "lime"
                  ? "text-gray-900"
                  : "text-white"
              }
            `}
            >
              {service.title}
            </h3>
            <motion.p
              className={`
              text-xs sm:text-sm lg:text-base 
              leading-relaxed
              transition-all duration-300
              ${
                isHovered
                  ? "text-white/95 opacity-100"
                  : service.bgColor === "lime"
                  ? "text-gray-800/90"
                  : "text-white/90"
              }
            `}
              animate={{
                opacity: isHovered ? 1 : 0.9,
              }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
        {/* Image Container with Mask */}
        <div className="relative w-full mt-6 sm:mt-8 aspect-square">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-full "
              style={{
                WebkitMaskImage:
                  'url("https://evergreen.vamtam.com/wp-content/uploads/2025/07/services-image-mask-1.svg")',
                maskImage:
                  'url("https://evergreen.vamtam.com/wp-content/uploads/2025/07/services-image-mask-1.svg")',
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
              animate={{
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <Image
                src={isHovered ? service.hoverImage : service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 2}
              />

              {/* Gradient Overlay on Image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                animate={{
                  opacity: isHovered ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Subtle glow effect on hover */}
          <motion.div
            className="absolute inset-0 -z-10 blur-2xl"
            style={{
              background: isHovered
                ? "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)"
                : "transparent",
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-t-[3rem] rounded-b-2xl"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
