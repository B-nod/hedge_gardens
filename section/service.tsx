"use client";
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
        </div>
      </div>
    </section>
  );
}

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
