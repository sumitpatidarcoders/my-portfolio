"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/sumitpatidarcoders", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sumit-patidar-a37912391/", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/sumit_patidar_062/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/sumit.paitdar", icon: Facebook },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Sumit.dev
              </h3>
              <p className="text-muted-foreground mb-6">
                A passionate Full Stack Developer dedicated to creating modern
                and responsive web applications that deliver exceptional user
                experiences.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500/50 transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Email:</span>
                  <br />
                  <a
                    href="mailto:sumitpatidar@email.com"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    arunpatidarsumitpatidargmail.com </a>
                </p>
                <p>
                  <span className="font-medium text-foreground">Location:</span>
                  <br />
                  Madhya Pradesh, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center md:text-left"
          >
            © {new Date().getFullYear()} Sumit Patidar. All rights reserved. Made
            with{" "}
            <Heart className="inline-block h-4 w-4 text-red-500 fill-red-500  mx-1" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-purple-500/50 hover:bg-purple-500 hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
