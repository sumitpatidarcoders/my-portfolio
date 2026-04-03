"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Briefcase, GraduationCap, Code2 } from "lucide-react";

const resumeHighlights = [
  {
    icon: Briefcase,
    title: "Experience",
    value: "1+ Years",
    description: "Coding & Development",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "12th Pass",
    description: "MP Board",
  },
  {
    icon: Code2,
    title: "Projects",
    value: "3+",
    description: "Completed Projects",
  },
];

export default function Resume() {
  const handleDownload = () => {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/resume/Sumit_Patidar_Resume.pdf";
    link.download = "Sumit_Patidar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 md:py-32">
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
            Resume
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Download My CV
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a detailed overview of my skills, experience, and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 md:p-12">
                  {/* Resume Preview Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-8"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/25">
                        <FileText className="h-12 w-12 md:h-16 md:w-16 text-white" />
                      </div>
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <Download className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-4"
                  >
                    Sumit Patidar
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center text-muted-foreground mb-8"
                  >
                    Full Stack Developer
                  </motion.p>

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-3 gap-4 mb-8"
                  >
                    {resumeHighlights.map((item, index) => (
                      <div key={item.title} className="text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-2">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <p className="font-bold text-lg">{item.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </motion.div>

                  {/* Download Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center"
                  >
                    <Button
                      size="lg"
                      onClick={handleDownload}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg rounded-full shadow-lg shadow-purple-500/25 group"
                    >
                      <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                      Download CV
                    </Button>
                  </motion.div>

                  {/* File Info */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center text-xs text-muted-foreground mt-4"
                  >
                    PDF Format • Updated 2025
                  </motion.p>
                </div>

                {/* Decorative Background */}
                <div className="absolute inset-0 pointer-events-none opacity-50">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
