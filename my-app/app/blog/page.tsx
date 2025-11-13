"use client"

import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CursorGlow } from "@/components/cursor-glow"
import { GridBackground } from "@/components/grid-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

export default function BlogPage() {
  const posts = [
    {
      title: "Building Modern Web Applications with Next.js 15",
      excerpt: "Exploring the latest features and best practices for building scalable web applications with the newest version of Next.js.",
      date: "2025-01-10",
      readTime: "5 min read",
      slug: "nextjs-15-guide",
    },
    {
      title: "The Future of TypeScript: What's Coming in 2025",
      excerpt: "A deep dive into the upcoming TypeScript features and how they'll change the way we write type-safe code.",
      date: "2025-01-05",
      readTime: "7 min read",
      slug: "typescript-2025",
    },
    {
      title: "Mastering Tailwind CSS: Advanced Techniques",
      excerpt: "Learn advanced Tailwind CSS patterns and techniques to create stunning, performant user interfaces.",
      date: "2024-12-28",
      readTime: "6 min read",
      slug: "tailwind-advanced",
    },
    {
      title: "React Server Components: A Complete Guide",
      excerpt: "Understanding React Server Components and how they revolutionize data fetching and rendering in modern React applications.",
      date: "2024-12-20",
      readTime: "10 min read",
      slug: "react-server-components",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

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
            <Link href="/" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Xevrion
            </Link>
            <ThemeToggle />
          </div>
        </motion.header>

        <main className="max-w-screen-sm mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
          >
            Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 mb-12"
          >
            Thoughts on technology, development, and design.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {posts.map((post, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </main>
      </div>
    </>
  )
}
