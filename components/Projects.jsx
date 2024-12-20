import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  const projectData = [
    {
      imgSrc: "/2.png",
      imgAlt: "Professional Video Editor",
      imgWidth: 800,
      imgHeight: 800,
      description:
        "I am Rounak, a professional video editor and photographer from India with over 4 years of experience crafting visually compelling content. My expertise spans across Adobe Suite (Premiere Pro, After Effects, Photoshop, and more), DaVinci Resolve, and Magix Vegas Pro, and I am adept in animation, motion graphics, typography, sound design, color grading, and VFX.",
    },
    {
      imgSrc: "/3.png",
      imgAlt: "Creative Designer",
      imgWidth: 800,
      imgHeight: 800,
      description:
        "Specializing in modern graphic design, I bring a unique approach to branding and visual storytelling. With a deep understanding of tools like Figma and Adobe Illustrator, I focus on creating designs that are both aesthetic and functional.",
    },
    {
      imgSrc: "/5.png",
      imgAlt: "Freelance Photographer",
      imgWidth: 800,
      imgHeight: 800,
      description:
        "Capturing the perfect moment is my passion. I specialize in portrait and landscape photography, ensuring every shot tells a story. My work is crafted with precision, utilizing top-tier editing techniques to achieve professional results.",
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-[5vh] pb-10 top-0 z-50    text-white">
      {projectData.map((project, index) => (
        <div
          key={index}
          className={`flex gap-10 items-center p-5 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <FadeIn view={"-300px"}>
            <Image
              src={project.imgSrc}
              width={800}
              height={800}
              alt={project.imgAlt}
              className="object-cover rounded-lg"
            />
          </FadeIn>
          <FadeIn view={"-300px"}>
            <h1 className="mb-10 text-4xl font-bold">
              Rounak Chowdhury's Portfolio
            </h1>
            <p className="text-gray-300 text-base w-[45vw]">
              {project.description}
            </p>
          </FadeIn>
        </div>
      ))}
    </div>
  );
};

export default Projects;
