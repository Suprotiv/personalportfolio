'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  {
    year: '2015',
    title: 'Started Programming',
    description:
      'Started Learning to code with C (Let Us C) and HTML/CSS (W3Schools).',
    icon: '💻',
  },
  {
    year: '2016',
    title: 'WordPress Development',
    description:
      'Built a website for the student-run sustainability startup Pratyutpanna at our school and blogs to keep in touch with friends.',
    icon: '🌐',
  },
  {
    year: '2017',
    title: 'Circuit Design',
    description:
      'Designed a handheld metal detector with a 555 timer IC and passive components, guided by my private tutor.',
    icon: '🔌',
  },
  {
    year: '2017',
    title: 'Circuit Design',
    description:
      'Designed a handheld metal detector with a 555 timer IC and passive components, guided by my private tutor.',
    icon: '🔌',
  },
  {
    year: '2017',
    title: 'Circuit Design',
    description:
      'Designed a handheld metal detector with a 555 timer IC and passive components, guided by my private tutor.',
    icon: '🔌',
  },
  // Add more timeline items as needed
];

const TimelineCard = ({ year, title, description, icon, side, scrollYProgress }) => {
  // Animate opacity and translation for each card based on its individual scroll progress
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 1], side === 'left' ? [-20, 0] : [20, 0]);

  return (
    <motion.div
      style={{
        opacity,
        x: translateX, // Dynamically animate based on scroll
      }}
      className={`relative bg-gray-800 text-white p-5 rounded-lg shadow-lg w-full md:w-[500px] mb-10 ${
        side === 'left' ? 'md:ml-auto' : 'md:mr-auto'
      }`}
    >
      <div className="flex items-center mb-2">
        <div className="text-4xl mr-4">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-300">{description}</p>
      <span
        className={`absolute top-5 bg-gray-700 text-white font-bold py-1 px-3 rounded-full ${
          side === 'left' ? '-left-[60px]' : '-right-[60px]'
        }`}
      >
        {year}
      </span>
    </motion.div>
  );
};

const ProjectCarousel = () => {
  const targetRef = useRef(null); // Reference for the main container

  // Scroll progress for the vertical bar
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end center'],
  });

  // Transformations for the vertical bar height
  const barHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className="flex flex-col items-center justify-center py-10 w-full bg-black min-h-screen"
      ref={targetRef} // Reference the entire scrollable section
    >
      <h1 className="text-4xl font-bold text-white mb-10">My Journey</h1>
      <div className="relative flex flex-col items-center w-[80vw]">
        {/* Vertical Line */}
        <motion.div
          className="absolute top-0 left-[50%] -translate-x-[50%] w-1 bg-gray-700 origin-top"
          style={{ height: barHeight }} // Animate height dynamically
        ></motion.div>

        {/* Timeline Cards */}
        {timelineData.map((item, index) => {
          const cardRef = useRef(null);

          // Scroll progress for individual card
          const { scrollYProgress: cardScrollYProgress } = useScroll({
            target: cardRef,
            offset: ['start center', 'end center'],
          });

          // Green dot scaling transformation
          const buttonScale = useTransform(cardScrollYProgress, [0, 1], [0, 1]);

          return (
            <div
              key={index}
              className="relative flex items-start w-full"
              ref={cardRef} // Reference each timeline card
            >
              {/* Connector Dot */}
              <motion.div
                className="w-[20px] h-[20px] bg-green-500 rounded-full absolute top-5 left-[49.1%] -translate-x-[50%]"
                style={{
                  scale: buttonScale, // Scale dynamically
                }}
              ></motion.div>

              {/* Timeline Card */}
              <TimelineCard
                {...item}
                side={index % 2 === 0 ? 'left' : 'right'}
                scrollYProgress={cardScrollYProgress} // Pass individual scroll progress to the card
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCarousel;
