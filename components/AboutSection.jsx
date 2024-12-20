import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { FadeIn } from "./FadeIn";

const AboutSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 0.9, 0.5]);
  const scale1 = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const position = useTransform(scrollYProgress, [0.2, 0.6], ["90px", "0px"]);

  return (
    <div ref={container} className="h-[400vh] relative top-0">
      {/* Sticky Background Image */}
      <div className="mt-[-100vh] h-screen sticky top-0 ">
        <motion.div style={{ scale }} className="h-full w-full">
          <Image
            src="/asBG.jpg"
            alt="Background Image"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
        <div className="h-full w-full">
          <Image
            src="/asBG.jpg"
            alt="Background Image"
            fill
            className="object-cover rounded-2xl scale-50"
          />
        </div>
        <div className="absolute top-0 z-10 ">
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
              <h1 className="mb-8 text-black text-center font-bold text-4xl ">
                About Me
              </h1>
              <p className="text-lg text-gray-800">
                I am Rounak, a professional video editor and photographer from
                India with over 4 years of experience crafting visually
                compelling content. My expertise spans across Adobe Suite
                (Premiere Pro, After Effects, Photoshop, and more), DaVinci
                Resolve, and Magix Vegas Pro, and I am adept in animation,
                motion graphics, typography, sound design, color grading, and
                VFX. Specializing in social media content for platforms like
                Instagram, YouTube, and TikTok, I bring a strategic approach to
                create content that resonates. I’ve had the privilege of working
                with a diverse range of clients, including global athletes,
                influencers, luxury car brands, premium clothing brands, and
                Michelin-star restaurants.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Text Content */}
    </div>
  );
};

export default AboutSection;
