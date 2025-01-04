import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  const projectData = [
    {
      imgSrc: "/3.png",
      imgAlt: "Professional Video Editor",
      imgWidth: 800,
      imgHeight: 800,
      imageTitle: "Professional Video Editor",
      description:
        "I am Rounak, a professional video editor and photographer from India with over 4 years of experience crafting visually compelling content. My expertise spans across Adobe Suite (Premiere Pro, After Effects, Photoshop, and more), DaVinci Resolve, and Magix Vegas Pro, and I am adept in animation, motion graphics, typography, sound design, color grading, and VFX.",
    },
    {
      imgSrc: "/5.png",
      imgAlt: "Creative Designer",
      imgWidth: 800,
      imgHeight: 800,
      imageTitle: "Creative Designer",
      description:
        "Specializing in modern graphic design, I bring a unique approach to branding and visual storytelling. With a deep understanding of tools like Figma and Adobe Illustrator, I focus on creating designs that are both aesthetic and functional.",
    },
    {
      imgSrc: "/2.png",
      imgAlt: "Freelance Photographer",
      imgWidth: 800,
      imgHeight: 800,
      imageTitle: "Freelance Photographer",
      description:
        "Capturing the perfect moment is my passion. I specialize in portrait and landscape photography, ensuring every shot tells a story. My work is crafted with precision, utilizing top-tier editing techniques to achieve professional results.",
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-[6vh] md:space-y-[8vh] p-8 top-0 z-50">
      {projectData.map((project, index) => (
        <FadeIn view={"-290px"} key={index}>
          <div
            className={`flex flex-col md:flex-row gap-10 items-center bg-[#0c0c0c] rounded-3xl p-10 ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src={project.imgSrc}
                width={800}
                height={800}
                alt={project.imgAlt}
                className="object-cover rounded-lg w-full h-auto"
              />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h1 className="mb-6 text-xl md:text-4xl font-bold text-white">
                {project.imageTitle}
              </h1>
              <p className="text-gray-300 text-sm md:text-base">
                {project.description}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Projects;
