"use client"

import { Github, Linkedin, Mail, Twitter, ExternalLink, BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CursorGlow } from "@/components/cursor-glow";
import { AnimatedText } from "@/components/animated-text";
import { GridBackground } from "@/components/grid-background";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and inventory management.",
      link: "#",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app powered by AI with smart responses and context awareness.",
      link: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals with drag-and-drop interface.",
      link: "#",
    },
    {
      title: "Task Management Tool",
      description: "Collaborative task manager with real-time updates and team features.",
      link: "#",
    },
  ];

  const skills = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Python", "PostgreSQL", "MongoDB", "Docker",
    "AWS", "Git", "Tailwind CSS", "GraphQL",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <GridBackground />
      <CursorGlow />

      <div className="min-h-screen relative">
        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800"
        >
          <div className="max-w-screen-sm mx-auto px-4 py-4 flex items-center justify-between">
            <a href="#" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Xevrion
            </a>
            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Blog
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </motion.header>

        <main className="max-w-screen-sm mx-auto px-4 pt-20">
          {/* Hero Section */}
          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-violet-500/50">
                X
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
            >
              Hey, I'm Xevrion
            </motion.h1>

            <AnimatedText
              text="Full Stack Developer & Creative Technologist. I build beautiful digital experiences and love exploring new technologies."
              className="text-lg text-zinc-600 dark:text-zinc-400 mb-6"
              delay={0.4}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/xevrion" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Mail, href: "mailto:hello@xevrion.dev" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </section>

          {/* Projects Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8"
            >
              Projects
            </motion.h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="block group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        {project.description}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8"
            >
              Skills
            </motion.h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-700 dark:hover:text-violet-400 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-12 border-t border-zinc-200 dark:border-zinc-800"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              © 2025 Xevrion. Built with Next.js.
            </p>
          </motion.footer>
        </main>
      </div>
    </>
  );
}
