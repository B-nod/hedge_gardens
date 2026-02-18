"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  gallery: string[];
}

const projects: Project[] = [
  {
    id: "1",
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
  },
];

const categories = [
  "All",
  "Hedge Trimming & Lawn Care",
  "Landscaping",
  "Fence Work & Painting",
  "Tree Cutting",
  "Transport & Removal",
  "Power Wash & Cleaning",
];

export default function WorksPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
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
            ))}
          </div>
        </motion.div>

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
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
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
    </motion.div>
  );
}
