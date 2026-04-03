"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Resume from "@/components/portfolio/Resume";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col"
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Education Section */}
          <Education />

          {/* Resume Section */}
          <Resume />

          {/* Contact Section */}
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
