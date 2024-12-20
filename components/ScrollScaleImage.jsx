"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./FadeIn";

export default function ScrollScaleImage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 0.7, 1], [1, 4, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const opacityNew = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);
  const transformY = useTransform(scrollYProgress, [0, 0.5, 1], [500, 500, 0]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/SFC.jpg",
      scale: scale4,
    },
    {
      src: "/2.png",
      scale: scale5,
    },
    {
      src: "/8.png",
      scale: scale6,
    },
    {
      src: "/7.png",
      scale: scale5,
    },
    {
      src: "/5.png",
      scale: scale6,
    },
    {
      src: "/9.png",
      scale: scale8,
    },
    {
      src: "/3.png",
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="Container">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => (
          <motion.div key={index} style={{ scale, opacity }} className="el">
            <div className="imageContainer">
              <Image src={src} fill alt="image" className="rounded-md" />
            </div>
          </motion.div>
        ))}

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            className="text-center"
            style={{ opacity: opacityNew, y: transformY }}
          >
            <FadeIn view={"-300px"}>
              <h1 className="text-gray-300 mt-[20vh] text-sm md:text-md lg:text-lg">
                For website and video editing
              </h1>
            </FadeIn>
            <FadeIn view={"-300px"}>
              <h1 className="text-white text-4xl lg:text-5xl my-2 font-bold">
                Projects I have worked on
              </h1>
            </FadeIn>
            <div className={`flex gap-10 items-center p-5 ${"flex-row"}`}>
              <FadeIn view={"-300px"}>
                <Image
                  src={"/7.png"}
                  width={800}
                  height={800}
                  alt={"image"}
                  className="object-cover rounded-md mt-[10vh]"
                />
              </FadeIn>
              <FadeIn view={"-300px"}>
                <h1 className="mb-10 text-left font-bold text-4xl">
                  Rounak Chowdhury's Portfolio
                </h1>
                <p className="text-gray-300 text-left text-base w-[45vw]">
                  I am Rounak, a professional video editor and photographer from
                  India with over 4 years of experience crafting visually
                  compelling content. My expertise spans across Adobe Suite
                  (Premiere Pro, After Effects, Photoshop, and more), DaVinci
                  Resolve, and Magix Vegas Pro, and I am adept in animation,
                  motion graphics, typography, sound design, color grading, and
                  VFX.
                </p>
              </FadeIn>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
