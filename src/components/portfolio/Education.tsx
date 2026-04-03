"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  board: string;
  year: string;
  status: string;
  icon: React.ElementType;
  color: string;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "Higher Secondary Certificate (12th)",
    institution: "Higher Secondary School",
    board: "MP Board",
    year: "2022",
    status: "Completed",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    id: 2,
    degree: "High School Certificate (10th)",
    institution: "High School",
    board: "MP Board",
    year: "2020",
    status: "Completed",
    icon: BookOpen,
    color: "bg-pink-500",
  },
];

const trainingData  = [
  {
    id: 1,
    title: "BSC.CS ",
    institution: " Offline Learning university",
    duration: "3 Years course duration",
    description:
      "BSc Computer Science at is a comprehensive program that builds strong foundations in programming, data structures, and modern technologies to prepare students for IT careers. It focuses on practical learning, industry-relevant skills, and real-world projects to shape future-ready professionals.",
      
  },
  {
    id: 2,
    title: "Web Development",
    institution: "Local Training Institute",
    duration: " 1 Years course duration",
    description:
      "Web Development at a Local Training Institute offers practical, hands-on learning in HTML, CSS, JavaScript, and modern frameworks to build real-world websites. It focuses on industry-ready skills, live projects, and step-by-step guidance to help students become professional web developers.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32">
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
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Academic Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and continuous learning path in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Academic Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              Academic Qualification
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500" />

              {/* Education Cards */}
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12 md:pl-16"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-2 md:left-4 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full ${edu.color} border-4 border-background`}
                    />

                    <Card className="border-border hover:border-purple-500/50 transition-colors group">
                      <CardContent className="p-5 md:p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className={`p-2 rounded-lg ${edu.color} text-white`}
                          >
                            <edu.icon className="h-5 w-5" />
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          >
                            {edu.status}
                          </Badge>
                        </div>

                        <h4 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {edu.degree}
                        </h4>

                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            {edu.institution}
                          </p>
                          <p className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            {edu.board}
                          </p>
                          <p className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Year: {edu.year}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Training & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              Training & Certifications
            </h3>

            <div className="space-y-6">
              {trainingData.map((training, index) => (
                <motion.div
                  key={training.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border hover:border-purple-500/50 transition-colors group">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shrink-0">
                          <Award className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {training.title}
                          </h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                            {training.institution}
                          </p>
                          <Badge variant="outline" className="mb-3">
                            <Calendar className="h-3 w-3 mr-1" />
                            {training.duration}
                          </Badge>
                          <p className="text-sm text-muted-foreground">
                            {training.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <CardContent className="p-5 md:p-6 text-center">
                  <h4 className="font-bold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    I believe in continuous improvement and regularly take online
                    courses to stay updated with the latest technologies and best
                    practices in web development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
