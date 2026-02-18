"use client";

import { AnimatePresence, motion } from "framer-motion";
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, X } from "lucide-react";
=======
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
<<<<<<< HEAD
  keyPoints: string[];
  gallery: string[];
=======
  category: string[];
  image: string;
  size: "small" | "medium" | "large";
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
}

const projects: Project[] = [
  {
    id: "1",
<<<<<<< HEAD
    title: "Hedge Trimming & Lawn Care",
    description: "Professional care for hedges and lawns all year round.",
    keyPoints: [
      "Regular & one-off hedge trimming",
      "Lawn mowing & edging",
      "Scarification & aeration",
      "Weed control & feeding",
      "Leaf clearance in autumn",
    ],

    gallery: [
      "/services/1/1.jpeg",
      "/services/1/2.jpeg",
    ],
  },
  {
    id: "2",
    title: "Landscaping",
    description: "Complete garden transformations and modern outdoor spaces.",
    keyPoints: [
      "Garden design & planning",
      "Patios, paths & flag laying",
      "Turfing & artificial grass",
      "Gravel, slate & wood chip areas",
      "Raised beds & sleeper walls",
    ],
    gallery: ["/services/2/land.jpeg"],
  },
  {
    id: "3",
    title: "Fence Work & Painting",
    description: "Installation, repair and finishing of fencing and decking.",
    keyPoints: [
      "New fence & gate installation",
      "Fence & deck repairs",
      "Pressure-treated timber",
      "Fence painting & staining",
      "Decking cleaning & sealing",
    ],
    gallery: ["/services/3/1.jpeg"],
  },
  {
    id: "4",
    title: "Tree Cutting",
    description: "Safe pruning and removal of small to medium garden trees.",
    keyPoints: [
      "Crown reduction & thinning",
      "Tree pruning & shaping",
      "Small tree felling",
      "Deadwood removal",
      "Sectional dismantling",
    ],
    gallery: [
      "/services/4/1.jpeg",
      "/services/4/2.jpeg",
      "/services/4/3.jpeg",
    ],
  },

  {
    id: "5",
    title: "Transport & Removal",
    description: "Man-with-a-van style transport and moving help.",
    keyPoints: [
      "Furniture & appliance moves",
      "House / flat clear-outs",
      "Garden shed / greenhouse moves",
      "Single item collection",
      "Short & long distance",
    ],
    gallery: [
      "/services/5/1.webp",
      "/services/5/2.webp",
    ],
  },
  {
    id: "6",
    title: "Power Wash & Cleaning",
    description: "Deep cleaning of outdoor surfaces and structures.",
    keyPoints: [
      "Driveways & patios",
      "Decking & fencing",
      "Garden furniture & play areas",
      "Paths & block paving",
      "Moss & algae removal",
    ],
    gallery: ["/services/6/1.jpeg"],
=======
    title: "Garden Pathway",
    description:
      "Mirum est notare quam littera gothica, quam nunc. Beautiful landscaped garden with lush greenery.",
    category: ["Gardens", "Urban"],
    image: "https://picsum.photos/seed/1/800/600",
    size: "large",
  },
  {
    id: "2",
    title: "Pond Maintenance",
    description:
      "Professional pond care and maintenance services. Creating serene water features for your landscape.",
    category: ["Maintance", "Gardens"],
    image: "https://picsum.photos/seed/2/800/600",
    size: "large",
  },
  {
    id: "3",
    title: "Holly",
    description: "Mirum est notare quam littera gothica, quam nunc.",
    category: ["Gardens", "Urban"],
    image: "https://picsum.photos/seed/3/800/600",
    size: "medium",
  },
  {
    id: "4",
    title: "Event Venue",
    description:
      "Outdoor event space design with beautiful lighting and ambiance for special occasions.",
    category: ["Events", "Urban"],
    image: "https://picsum.photos/seed/4/800/600",
    size: "large",
  },
  {
    id: "5",
    title: "Floral Paradise",
    description:
      "Interior floral arrangements and garden design bringing nature indoors with elegance.",
    category: ["Interiors", "Gardens"],
    image: "https://picsum.photos/seed/5/800/600",
    size: "large",
  },
  {
    id: "6",
    title: "Desert Garden",
    description:
      "Unique succulent and cactus garden designs perfect for modern landscaping aesthetics.",
    category: ["Gardens", "Urban"],
    image: "https://picsum.photos/seed/6/800/600",
    size: "large",
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
  },
];

const categories = [
  "All",
<<<<<<< HEAD
  "Hedge Trimming & Lawn Care",
  "Landscaping",
  "Fence Work & Painting",
  "Tree Cutting",
  "Transport & Removal",
  "Power Wash & Cleaning",
=======
  "Events",
  "Gardens",
  "Interiors",
  "Maintance",
  "Urban",
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
];

export default function WorksPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
<<<<<<< HEAD
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
=======
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae

  const filteredProjects =
    activeCategory === "All"
      ? projects
<<<<<<< HEAD
      : projects.filter((p) => p.title === activeCategory);

  const openModal = (project: Project, initialIndex = 0) => {
    setSelectedProject(project);
    setModalImageIndex(initialIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
  };

  const prevImage = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? selectedProject!.gallery.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    setModalImageIndex((prev) =>
      prev === selectedProject!.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Filters */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-sm font-medium text-gray-600 mb-4 tracking-wider uppercase">
            Our Recent Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Expertise in Landscape Design &{" "}
            <span className="text-emerald-600">Garden Care</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all
                  ${
                    activeCategory === cat
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }
                `}
              >
                {cat}
              </button>
=======
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section id="gallery" className=" px-4 sm:px-6 lg:px-8  padding-responsive">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-6"
        >
          <div>
            <p className="text-sm font-medium text-gray-600 mb-4 tracking-wider">
              Our Works
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
              {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto"> */}
              Expertise in Landscape Design & Garden
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-base sm:text-lg font-medium transition-colors relative pb-2 ${
                  activeCategory === category
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
            ))}
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)}
                delay={idx * 0.08}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Main image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] bg-black">
                  <Image
                    src={selectedProject.gallery[modalImageIndex]}
                    alt={`${selectedProject.title} - ${modalImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority
                  />
                </div>

                {/* Thumbnails + Navigation */}
                {selectedProject.gallery.length > 1 && (
                  <div className="p-4 bg-gray-900 flex items-center justify-between">
                    <button
                      onClick={prevImage}
                      className="p-3 text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-2 overflow-x-auto px-4 max-w-[70%] scrollbar-hide">
                      {selectedProject.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalImageIndex(idx)}
                          className={`
                            flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all
                            ${
                              idx === modalImageIndex
                                ? "border-emerald-500 scale-110"
                                : "border-transparent opacity-70 hover:opacity-100"
                            }
                          `}
                        >
                          <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={nextImage}
                      className="p-3 text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}

                {/* Caption */}
                <div className="p-5 bg-white">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
=======
        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
<<<<<<< HEAD
  onClick: () => void;
  delay: number;
}

function ProjectCard({ project, onClick, delay }: ProjectCardProps) {
  const mainImage = project.gallery[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      layout
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5]"
    >
      <Image
        src={mainImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <h3 className="text-white text-xl sm:text-2xl font-bold drop-shadow-md mb-1.5">
          {project.title}
        </h3>
        <p className="text-white/90 text-sm sm:text-base line-clamp-2">
          {project.description}
        </p>

        {project.gallery.length > 1 && (
          <div className="mt-3 text-white/80 text-xs sm:text-sm font-medium">
            +{project.gallery.length - 1} more photos
          </div>
        )}
      </div>

      {/* Hover hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-medium rounded-full text-sm sm:text-base">
          View Gallery →
        </span>
      </div>
=======
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: ProjectCardProps) {
  // Determine grid span based on size
  const sizeClasses = {
    small: "sm:col-span-1 sm:row-span-1",
    medium: "sm:col-span-1 sm:row-span-1",
    large: "sm:col-span-1 lg:col-span-1 sm:row-span-1",
  };

  // Vary heights for masonry effect
  const heightClasses = {
    small: "h-64 sm:h-72",
    medium: "h-80 sm:h-96",
    large: "h-96 sm:h-[28rem] lg:h-[32rem]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
        sizeClasses[project.size]
      } ${heightClasses[project.size]}`}
    >
      {/* Image */}
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay - Always visible but subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Hover Overlay with Project Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            {project.title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Title - Always visible at bottom */}
      <motion.div
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
      >
        <h3 className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
          {project.title}
        </h3>
      </motion.div>

      {/* Decorative Corner Element */}
      <motion.div
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/50 rounded-tr-xl"
      />
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
    </motion.div>
  );
}
