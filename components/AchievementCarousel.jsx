"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGlobe,
  faMicrochip,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FadeIn } from "./FadeIn";

const timelineData = [
  {
    year: "2015",
    title: "Started Programming",
    description:
      "Started Learning to code with C (Let Us C) and HTML/CSS (W3Schools).",
    icon: faCode,
  },
  {
    year: "2016",
    title: "WordPress Development",
    description:
      "Built a website for the student-run sustainability startup Pratyutpanna at our school and blogs to keep in touch with friends.",
    icon: faGlobe,
  },
  {
    year: "2017",
    title: "Circuit Design",
    description:
      "Designed a handheld metal detector with a 555 timer IC and passive components, guided by my private tutor.",
    icon: faMicrochip,
  },
  {
    year: "2017",
    title: "Advanced Projects",
    description:
      "Explored more advanced projects with a focus on hardware and software integration.",
    icon: faLaptopCode,
  },
];

const TimelineCard = ({
  year,
  title,
  description,
  icon,
  side,
  scrollYProgress,
}) => {
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    side === "left" ? [-20, 0] : [20, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
        x: translateX,
      }}
      className={`relative text-white p-5 rounded-lg shadow-lg w-[300px] md:w-[500px] mb-10 ${
        side === "left" ? "ml-[40px] md:ml-auto" : "ml-[40px] md:mr-auto"
      }`}
    >
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={icon} className="text-4xl text-white mr-4" />
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-300 ">{description}</p>
    </motion.div>
  );
};

const AchievementCarousel = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="flex flex-col items-center justify-center py-10 w-full min-h-screen"
      ref={targetRef}
    >
      <FadeIn view={"-200px"}>
        <h1 className="text-4xl font-bold text-white mb-10">My Journey</h1>
      </FadeIn>
      <div className="relative flex flex-col items-center w-[80vw]">
        <motion.div
          className="absolute top-0 left-5 md:left-[50%] -translate-x-[50%] w-1 bg-[#9b9b9b] bg-opacity-40 origin-top"
          style={{ height: barHeight }}
        ></motion.div>

        {timelineData.map((item, index) => {
          const cardRef = useRef(null);

          const { scrollYProgress: cardScrollYProgress } = useScroll({
            target: cardRef,
            offset: ["start center", "end center"],
          });

          return (
            <div
              key={index}
              className="relative flex items-start w-full"
              ref={cardRef}
            >
              {/* Icon Marker */}
              <motion.div
                className="absolute top-5 left-0 md:left-[48.4%] -translate-x-[50%] bg-white p-2 rounded-full shadow-md flex justify-center items-center"
                style={{
                  scale: cardScrollYProgress, // Dynamically scale the icon
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-xl text-[#0c0c0c]"
                />
              </motion.div>

              <TimelineCard
                {...item}
                side={index % 2 === 0 ? "left" : "right"}
                scrollYProgress={cardScrollYProgress}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementCarousel;
