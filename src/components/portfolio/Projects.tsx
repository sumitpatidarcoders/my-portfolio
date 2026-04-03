"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "frontend" | "backend" | "fullstack";
  github: string;
  liveDemo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Big Cup Café",
    description:
      "Big Cup Cafe – Every sip brings a special taste and cozy vibes, with the perfect combo of coffee, snacks, and great moments.....",
    image: "/images/cafe.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Stripe"],
    category: "fullstack",
    github: "https://github.com/sumitpatidar/ecommerce-platform",
    liveDemo: "https://www.bigcup.in/",
  },
  {
    id: 2,
    title: "Freepik Restaurant ",
    description:
      "A place where every bite feels like happiness and every moment turns special ,serving delicious food with cozy vibes that make you come back again.... ",
    image: "/images/freepik.png",
    technologies: ["React.js", "Redux", "Node.js", "Socket.io", "MongoDB"],
    category: "fullstack",
    github: "https://github.com/sumitpatidar/task-manager",
    liveDemo: "https://www.freepik.com/free-photos-vectors/restaurant-website#uuid=e1fd2d87-bceb-4ab3-bb4a-453a4b4a477a",
  },
  {
    id: 3,
    title: "Sarthi Private Limited",
    description:
      "Sarthi Private Limited delivers smart digital solutions to grow your business online with modern technology and innovation....",
    image: "/images/sarthi.png",
    technologies: ["React.js"],
    category: "frontend",
    github: "https://github.com/sumitpatidar/weather-app",
    liveDemo: "https://sarathiprivatelimited.netlify.app/",
  },
];

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating my skills in web
            development and problem-solving
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className={`rounded-full px-4 md:px-6 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  : ""
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a> */}
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>

                <CardContent className="p-5 md:p-6">
                  {/* Category Badge */}
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                  >
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs py-1 px-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-0"
                      asChild
                    >
                      {/* <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a> */}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 p-0"
                      asChild
                    >
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-2"
            asChild
          >
            {/* <a
              href="https://github.com/sumitpatidar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a> */}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
