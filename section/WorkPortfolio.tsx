"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string[];
  image: string;
  size: "small" | "medium" | "large";
}

const projects: Project[] = [
  {
    id: "1",
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
  },
];

const categories = [
  "All",
  "Events",
  "Gardens",
  "Interiors",
  "Maintance",
  "Urban",
];

export default function WorksPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
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
            ))}
          </div>
        </motion.div>

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
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
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
    </motion.div>
  );
}
