'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  {
    year: '2017',
    title: 'Circuit Design',
    description:
      'Designed a handheld metal detector with a 555 timer IC and passive components, guided by my private tutor.',
    icon: '🔌',
  },
];

const TimelineCard = ({ year, title, description, icon, side, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        margin: "-200px",
        once:true,
      }}
      transition={{ duration: 0.6, delay }}
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
  const targetRef = useRef(null);

  const [isFullHeight, setIsFullHeight] = useState(false); // Track if the bar is full height
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end center'], // Track from the start to the end of the container
  });
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value >= 1 && !isFullHeight) {
        setIsFullHeight(true); // Fix the bar height
      }
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, [scrollYProgress, isFullHeight]);


  // Map the scroll progress to the vertical line's height
  const barHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
    className="flex flex-col items-center justify-center py-10 w-full bg-black min-h-screen"
    ref={targetRef} // Reference the entire scrollable section
  >
    <h1 className="text-4xl font-bold text-white mb-10">My Journey</h1>
    <div className="relative flex flex-col items-center  w-[80vw]">
      {/* Vertical Line */}
      <motion.div
        className="absolute top-0 left-[50%] -translate-x-[50%] w-1  bg-gray-700 origin-top"
        style={{height: isFullHeight ? '100%' : barHeight, }
      } // Animate height dynamically
      ></motion.div>

      {/* Timeline Cards */}
      {timelineData.map((item, index) => (
        <div key={index} className="relative flex items-start w-full">
          {/* Connector Dot */}
          <motion.div
            className={`w-[20px] h-[20px] bg-green-500 rounded-full absolute top-5 left-[49.1%] -translate-x-[50%]`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{
              margin: "-200px",
              once:true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.3, // Delay for each dot
            }}
          ></motion.div>

          {/* Timeline Card */}
          <TimelineCard
            {...item}
            side={index % 2 === 0 ? 'left' : 'right'}
            delay={index * 0.3} // Delay for each card
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProjectCarousel;
