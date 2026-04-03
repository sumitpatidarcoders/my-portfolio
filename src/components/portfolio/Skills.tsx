"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Database,
  Server,
  FileCode,
  Palette,
  Layout,
  Globe,
  Cpu,
  HardDrive,
  Cable,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: "C", level: 90, icon: FileCode, color: "bg-blue-500" },
  { name: "C++", level: 92, icon: Cpu, color: "bg-purple-500" },
  { name: "HTML", level: 80, icon: Globe, color: "bg-orange-500" },
  { name: "CSS", level: 70, icon: Palette, color: "bg-blue-400" },
  { name: "React.js", level: 60, icon: Code2, color: "bg-cyan-500" },
  { name: "Bootstrap", level: 60, icon: Layout, color: "bg-purple-600" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 40, icon: Server, color: "bg-green-500" },
];

const databaseSkills: Skill[] = [
  { name: "MySQL", level: 30, icon: Database, color: "bg-blue-600" },
  { name: "XAMPP Server", level: 90, icon: HardDrive, color: "bg-orange-600" },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(skill.level), index * 100);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${skill.color} text-white group-hover:scale-110 transition-transform`}
          >
            <skill.icon className="h-4 w-4" />
          </div>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`absolute inset-y-0 left-0 ${skill.color} rounded-full`}
        />
      </div>
    </motion.div>
  );
}

function CircularProgress({ skill, index }: { skill: Skill; index: number }) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={`${skill.color.replace("bg-", "text-")}`}
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`p-2 rounded-lg ${skill.color} text-white`}>
            <skill.icon className="h-5 w-5" />
          </div>
        </div>
      </div>
      <span className="mt-2 font-medium text-sm">{skill.name}</span>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
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
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="frontend" className="text-sm">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="text-sm">
                Backend
              </TabsTrigger>
              <TabsTrigger value="database" className="text-sm">
                Database
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {backendSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {databaseSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Circular Progress View (Alternative Display) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            All Skills at a Glance
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[...frontendSkills, ...backendSkills, ...databaseSkills].map(
              (skill, index) => (
                <CircularProgress key={skill.name} skill={skill} index={index} />
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
