"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MainPage from "@/components/Main";
import ScrollScaleImage from "./ScrollScaleImage";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Achievements from "@/components/Achievements";
import Projects from "./Projects";
import Image from "next/image";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

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
  const backgroundY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]); // Slow background
  const mainPageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const projectY = useTransform(scrollYProgress, [0, 0.6], ["10%", "-10%"]); // MainPage scrolls faster at the start

  return (
    <main>
      {/* Background Parallax Effect */}
      <motion.div
        className="background"
        style={{
          y: backgroundY,
          backgroundImage: `linear-gradient(to top, #000000, transparent), url(/images.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      />

      {/* MainPage Section */}
      <motion.div
        className="mainPage"
        style={{
          y: mainPageY,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainPage />
      </motion.div>

      {/* Projects Section with Fade-In + Pop Animation */}
      <motion.div
        className="projects" // Fade in and move to position
        // Trigger animation when in viewport
        style={{
          y: projectY,
          minHeight: "100vh", // Ensure full viewport height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // Add padding to avoid content clipping
        }}
      >
        <Achievements />
      </motion.div>

      {/* ScrollScaleImage Section */}
      <ScrollScaleImage />
      <div>
        <div className="relative z-20 bg-black pb-[20vh]">
          <Projects />
        </div>
        <div className="relative z-10 bg-black ">
          <AboutSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
