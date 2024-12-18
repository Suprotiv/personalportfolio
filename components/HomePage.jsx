'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import MainPage from '@/components/Main';
import Projects from '@/components/Projects';
import ScrollScaleImage from './ScrollScaleImage';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []); // Initialize smooth scrolling

  // Scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']); // Slow background
  const mainPageY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const projectY = useTransform(scrollYProgress, [0.3, 0.6], ['10%', '0%']); // MainPage scrolls faster at the start

  return (
    <main>
      {/* Background Parallax Effect */}
      <motion.div
        className="background"
        style={{
          y: backgroundY,
          backgroundImage: 'url(/bg1.avif)',
          backgroundSize: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
      />

      {/* MainPage Section */}
      <motion.div
        className="mainPage"
        style={{
          y: mainPageY,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MainPage />
      </motion.div>

      {/* Projects Section with Fade-In + Pop Animation */}
      <motion.div
        className="projects"
        initial={{ opacity: 0, y: 50 }} // Start faded out and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to position
       // Trigger animation when in viewport
        style={{
          y: projectY,
          minHeight: '100vh', // Ensure full viewport height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
         // Add padding to avoid content clipping
        }}
      >
        <Projects />
      </motion.div>

      {/* ScrollScaleImage Section */}
      <ScrollScaleImage />
    </main>
  );
}
