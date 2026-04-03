"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Laptop, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Laptop,
    title: "Responsive Design",
    description: "Mobile-first approach for all projects",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized applications for speed",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Focus on exceptional user experience",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get to Know Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to creating impactful digital
            experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sumitpatidar2.jpg"
                  alt="Sumit Patidar - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-500 dark:border-purple-400 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl -z-20" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-background shadow-xl rounded-xl p-4 border border-border z-20"
            >
              <div className="text-center">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  1+
                </span>
                <p className="text-sm text-muted-foreground">Years Coding</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              A Dedicated{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h3>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hello! I&apos;m Sumit Patidar, a passionate Full Stack Developer
                based in India. I specialize in building responsive and scalable
                web applications using modern technologies like React.js and
                Node.js.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a deep passion for
                creating elegant solutions to complex problems. I believe in
                writing clean, maintainable code and creating user experiences
                that make a real difference.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community. I&apos;m always eager to
                learn and take on new challenges that push my skills to the next
                level.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-background border border-border hover:border-purple-500/50 transition-colors group"
                >
                  <item.icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
