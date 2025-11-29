"use client";

import { animate, motion, MotionValue, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Service } from "../types/services";

import { ChevronLeft, ChevronRight } from "lucide-react";


type DragEndInfo = {
  offset: { x: number; y: number };
  velocity: { x: number; y: number };
};

type DragEndHandler = (
  event: MouseEvent | TouchEvent | PointerEvent,
  info: DragEndInfo
) => void;


interface ServiceSliderProps {
  slidesPerView?:
    | number
    | {
        base?: number;
        sm?: number;
        lg?: number;
        xl?: number;
        md?: number;
      };
  spaceBetween?: number;
}

const services: Service[] = [
  {
    title: "HEDGE TRIMMING & LAWN CARE",
    description:
      "Professional hedge trimming and lawn care services to keep your outdoor spaces neat and well-maintained throughout the year.",
    image: "/services/hedge/5.jpeg",
    hoverImage: "/services/hedge/6.jpeg",
    bgColor: "lime",
    maskShape: "flower",
  },
  {
    title: "Landscape Service",
    description:
      "Majority of garden landscaping jobs: Designing, flag laying, turf work, artificial grass, stones & wood chips.",
    image: "/services/landscaping/7.jpeg",
    hoverImage: "/services/landscaping/8.jpeg",
    bgColor: "dark-green",
    maskShape: "rounded",
  },
  {
    title: "Fence Work",
    description: "Fence work, decking & painting.",
    image: "/services/fence/1.jpeg",
    hoverImage: "/services/fence/2.jpeg",
    bgColor: "dark-green",
    maskShape: "rounded",
  },
  {
    title: "Tree Cutting",
    description: "Small to medium garden trees cutting.",
    image: "/services/hedge/5.jpeg",
    hoverImage: "/services/hedge/6.jpeg",
    bgColor: "lime",
    maskShape: "flower",
  },
  {
    title: "Waste Removal",
    description:
      "Waste removal services for home, garden, wood & hardcore (no construction & domestic).",
    image: "/services/waste/11.jpeg",
    hoverImage: "/services/waste/12.jpeg",
    bgColor: "lime",
    maskShape: "rounded",
  },
  {
    title: "Transport & House Moves",
    description:
      "Reliable transportation solutions for all your moving and delivery needs, handled with care and professionalism.",
    image: "/services/van/9.jpeg",
    hoverImage: "/services/van/10.jpeg",
    bgColor: "dark-green",
    maskShape: "rounded",
  },
  {
    title: "Power Wash & Garden Cleaning",
    description:
      "We provide power wash and gardening cleaning services throughout the year.",
    image: "/services/powerwash/13.jpeg",
    hoverImage: "/services/powerwash/14.jpeg",
    bgColor: "dark-green",
    maskShape: "rounded",
  },
];

/* -------------------------------------------------------------------------- */
/*  Main Slider Component                                                     */
/* -------------------------------------------------------------------------- */
function ServiceSlider({
  slidesPerView = { base: 1, sm: 2, lg: 3, xl: 4 },
  spaceBetween = 24,
}: ServiceSliderProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x: MotionValue<number> = useMotionValue(0);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);

  /* --------------------------------------------------- responsive slides */
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (typeof slidesPerView === "number") {
        setSlidesToShow(slidesPerView);
        return;
      }

      const w = window.innerWidth;
      if (w >= 1280 && slidesPerView.xl) setSlidesToShow(slidesPerView.xl);
      else if (w >= 1024 && slidesPerView.lg) setSlidesToShow(slidesPerView.lg);
      else if (w >= 640 && slidesPerView.sm) setSlidesToShow(slidesPerView.sm);
      else if (slidesPerView.base) setSlidesToShow(slidesPerView.base);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [slidesPerView]);

  /* --------------------------------------------------- dimensions */
  useEffect(() => {
    if (!sliderRef.current) return;

    const updateDimensions = () => {
      const container = sliderRef.current?.parentElement;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const gap = spaceBetween * (Math.floor(slidesToShow) - 1);
      const newCardWidth = (containerWidth - gap) / Math.floor(slidesToShow);

      setSliderWidth(containerWidth);
      setCardWidth(newCardWidth);
    };

    updateDimensions();

    let timeout: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateDimensions, 100);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeout);
    };
  }, [slidesToShow, spaceBetween]);

  const maxIndex = services.length;

  const goToSlide = (index: number) => {
    if (isDragging) return;

    let newIndex = index;
    if (index < 0) newIndex = maxIndex - 1;
    else if (index >= maxIndex) newIndex = 0;

    setCurrentIndex(newIndex);

    if (sliderRef.current) {
      const targetX = -newIndex * (cardWidth + spaceBetween);
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
        restDelta: 0.1,
      });
    }
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  const handleDragEnd: DragEndHandler = (_event, info) => {
    setIsDragging(false);
    const threshold = cardWidth * 0.3;
    const offsetX = info.offset.x;

    if (offsetX < -threshold) nextSlide();
    else if (offsetX > threshold) prevSlide();
    else goToSlide(currentIndex);
  };

  /* --------------------------------------------------- auto-play */
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayInterval.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    };
  }, [isAutoPlaying, currentIndex]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
  };
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <motion.div ref={constraintsRef} className="relative w-full">
        <motion.div
          ref={sliderRef}
          className="flex w-full"
          drag="x"
          dragConstraints={constraintsRef}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{
            x,
            display: "flex",
            gap: `${spaceBetween}px`,
            width: "fit-content",
          }}
        >
          {/* Duplicate the array three times for seamless infinite scroll */}
          {[...services, ...services, ...services].map((service, idx) => (
            <motion.div
              key={`${service.title}-${idx}`} // unique key per duplicated item
              className="flex-1"
              style={{
                minWidth: `${cardWidth}px`,
                flexShrink: 0,
                flexGrow: 0,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.01 }}
            >
              <ServiceCard
                service={service}
                index={idx}
                isHovered={hoveredCard === idx}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {services.map((_, i) => {
          const active = i === currentIndex % services.length;
          return (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                active ? "bg-green-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Services Section (wrapper)                                                */
/* -------------------------------------------------------------------------- */
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="padding-responsive px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium text-gray-600 mb-3 sm:mb-4 tracking-wider">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
            Landscaping Solutions for Homes and Businesses
          </h2>
        </motion.div>

        <div className="relative">
          <ServiceSlider
            slidesPerView={{ base: 1, sm: 2, md: 2.5, lg: 3, xl: 4 }}
            spaceBetween={24}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Service Card (individual slide)                                           */
/* -------------------------------------------------------------------------- */
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
              ? "bg-gradient-to-br from-green-700 via-green-700 to-green-800"
              : service.bgColor === "lime"
              ? "bg-gradient-to-br from-lime-600 via-lime-400 to-lime-500"
              : "bg-gradient-to-br from-green-900 via-green-800 to-green-900"
          }
        `}
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Decorative dots */}
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
              animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
              transition={{
                duration: 0.6,
                delay: dot * 0.1,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Text content */}
        <div className="flex flex-col flex-1 px-5 sm:px-6 lg:px-7 xl:px-8 pt-14 sm:pt-16 lg:pt-20 pb-5 sm:pb-6 z-10">
          <motion.div
            className="mb-auto"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={`
                text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-5
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
                text-base leading-relaxed transition-all duration-300
                ${
                  isHovered
                    ? "text-white/95 opacity-100"
                    : service.bgColor === "lime"
                    ? "text-gray-800/90"
                    : "text-white/90"
                }
              `}
              animate={{ opacity: isHovered ? 1 : 0.9 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Image with mask */}
        <div className="relative w-full mt-6 sm:mt-8 aspect-square">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full h-full"
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
              animate={{ scale: isHovered ? 1.08 : 1 }}
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

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Glow on hover */}
          <motion.div
            className="absolute inset-0 -z-10 blur-2xl"
            style={{
              background: isHovered
                ? "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)"
                : "transparent",
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Shine sweep */}
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
