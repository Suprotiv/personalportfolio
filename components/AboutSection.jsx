import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AboutSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9, 0.95],
    [2.2, 2.1, 1.04, 1]
  );
  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9, 0.95],
    [1.1, 1.1, 0.54, 0.5]
  );
  const opacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const position = useTransform(scrollYProgress, [0.2, 0.6], ["90px", "0px"]);
  const postersOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const ButtonOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const imageSets = [
    ["main.png", "asBG.jpg", "projects.png"],
    ["projects.png", "main.png", "aboutpage.png"],
    ["aboutpage.png", "projects.png", "main.png"],
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [images, setImages] = useState(imageSets[currentSetIndex]);

  const changeImagesNext = () => {
    const nextSetIndex = (currentSetIndex + 1) % imageSets.length;
    setCurrentSetIndex(nextSetIndex);
    setImages(imageSets[nextSetIndex]);
  };

  const changeImagesPrev = () => {
    const prevSetIndex =
      (currentSetIndex - 1 + imageSets.length) % imageSets.length;
    setCurrentSetIndex(prevSetIndex);
    setImages(imageSets[prevSetIndex]);
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value < 0.95) {
        setCurrentSetIndex(0);
        setImages(imageSets[0]);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, imageSets]);

  return (
    <div ref={container} className="h-[400vh] relative top-0 overflow-x-clip">
      <div className="mt-[-100vh] h-screen sticky top-0 bg-black">
        <div className="sticky top-0 flex h-screen items-center">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
                opacity: postersOpacity,
              }}
            ></motion.div>
          </div>

          <div className="absolute top-0 z-10">
            {currentSetIndex === 0 && (
              <motion.div
                style={{ opacity, y: position, scale: scale1 }}
                className="flex justify-between gap-6 p-10 h-screen"
              >
                <div className="w-[35vw] h-full flex justify-center items-center">
                  <Image
                    src="/hello.jpg"
                    alt="Background Image"
                    width={400}
                    height={400}
                    className="object-cover items-center"
                  />
                </div>
                <div className="w-[50vw] flex flex-col justify-center items-center">
                  <h1 className="mb-8 text-black text-center font-bold text-4xl">
                    About Me
                  </h1>
                  <p className="text-lg text-gray-800">
                    I am Rounak, a professional video editor and photographer
                    from India with over 4 years of experience crafting visually
                    compelling content. My expertise spans across Adobe Suite
                    (Premiere Pro, After Effects, Photoshop, and more), DaVinci
                    Resolve, and Magix Vegas Pro, and I am adept in animation,
                    motion graphics, typography, sound design, color grading,
                    and VFX. Specializing in social media content for platforms
                    like Instagram, YouTube, and TikTok, I bring a strategic
                    approach to create content that resonates. I’ve had the
                    privilege of working with a diverse range of clients,
                    including global athletes, influencers, luxury car brands,
                    premium clothing brands, and Michelin-star restaurants.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            style={{ opacity: ButtonOpacity }}
            className="absolute top-1/2 left-10 transform -translate-y-1/2 z-30"
          >
            <button
              onClick={changeImagesNext}
              className="px-4 py-2  text-white rounded-lg shadow-md focus:outline-none"
            >
              <div className="p-2 rounded-full hover:scale-125  transition-transform duration-300">
                <FaChevronLeft
                  size={50}
                  className="text-gray-400 hover:text-gray-300  transition-all duration-500"
                />
              </div>
            </button>
          </motion.div>
          <motion.div
            style={{ opacity: ButtonOpacity }}
            className="absolute top-1/2   right-32 transform -translate-y-1/2 z-30"
          >
            <button
              onClick={changeImagesPrev}
              className=" text-white rounded-lg shadow-md  focus:outline-none"
            >
              <div className="p-2 rounded-full hover:scale-125  transition-transform duration-300">
                <FaChevronRight
                  size={50}
                  className="text-gray-400 hover:text-gray-300  transition-all duration-500"
                />
              </div>
            </button>
          </motion.div>
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[50vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={images[0]}
                alt="Left Image"
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="relative aspect-[9/16] w-[300px] z-20 shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[50vw]"
            >
              <img
                className="h-full w-full object-cover hover:scale-105  transition-transform duration-300"
                src={images[1]}
                alt="Center Image"
              />
            </motion.div>

            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[50vw]"
            >
              <img
                className="h-full w-full object-cover"
                src={images[2]}
                alt="Right Image"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Carousel Navigation */}
    </div>
  );
};

export default AboutSection;
