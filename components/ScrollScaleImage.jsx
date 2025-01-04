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
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scale11 = useTransform(scrollYProgress, [0, 1], [1, 11]);
  const scale12 = useTransform(scrollYProgress, [0, 1], [1, 12]);

  const pictures = [
    {
      src: "/center.png",
      scale: scale4,
    },
    {
      src: "/3.png",
      scale: scale5,
    },
    {
      src: "/9real.png",
      scale: scale6,
    },
    {
      src: "/11.png",
      scale: scale5,
    },
    {
      src: "/7.png",
      scale: scale6,
    },
    {
      src: "/9.png",
      scale: scale8,
    },
    {
      src: "/2.png",
      scale: scale9,
    },

    {
      src: "/8.png",
      scale: scale8,
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
        <div className="absolute inset-0 flex  justify-center z-10 p-8">
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
              <h1 className="text-white text-4xl lg:text-5xl mt-2 mb-10 font-bold">
                Projects I have worked on
              </h1>
            </FadeIn>
            <FadeIn view={"-300px"}>
              <div
                className={`flex flex-col  gap-10 items-center bg-[#0c0c0c] rounded-3xl p-10 md:flex-row`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/7.png"}
                    width={800}
                    height={800}
                    alt={"/7.png"}
                    className="object-cover rounded-lg w-full h-auto"
                  />
                </div>
                {/* Text Section */}
                <div className="w-full md:w-1/2">
                  <h1 className="mb-6 text-xl md:text-4xl text-left font-bold text-white">
                    Rounak Chowdhury's Portfolio
                  </h1>
                  <p className="text-gray-300 text-sm text-left md:text-base">
                    I am Rounak, a professional video editor and photographer
                    from India with over 4 years of experience crafting visually
                    and I am adept in animation, motion graphics, typography,
                    sound design, color grading, and VFX.
                  </p>
                </div>
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
