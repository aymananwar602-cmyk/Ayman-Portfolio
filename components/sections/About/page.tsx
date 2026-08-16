"use client";

import { FolderGit2, GraduationCap, Rocket, Code2, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Extracted variants with stagger support for cleaner cascade animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const techFocus = [
  "Architecture",
  "REST APIs",
  "Authentication",
  "Database Design",
  "Performance",
] as const;

const metrics = [
  { icon: FolderGit2, value: "2+", label: "Shipped projects" },
  { icon: GraduationCap, value: "B.Sc.", label: "CS & AI" },
  { icon: Rocket, value: "100%", label: "Responsive builds" },
] as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black px-4 py-24 sm:py-32">
      {/* Ambient background glows - optimized with transform-gpu & reduced composite overhead */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[120px] transform-gpu sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px] transform-gpu sm:h-80 sm:w-80"
      />

      {/* Cross-browser dot grid background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        {/* Category Badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-orange-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            ABOUT ME
          </div>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Headline & Tech Focus */}
          <div className="space-y-6 lg:col-span-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Full Stack Developer,{" "}
              <span className="bg-linear-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                building modern web applications end to end.
              </span>
            </motion.h2>

            {/* Tech focus tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              {techFocus.map((tech) => (
                <span
                  key={tech}
                  className="group relative inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 font-mono text-xs text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                >
                  <Sparkles className="h-3 w-3 text-zinc-500 transition-colors group-hover:text-orange-400" />
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Floating mock code window — Hardware accelerated */}
            <motion.div variants={itemVariants} className="hidden pt-4 lg:block">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-fit transform-gpu rounded-2xl border border-white/10 bg-zinc-950/80 p-4.5 font-mono text-xs shadow-2xl backdrop-blur-xl transition-all hover:border-orange-500/30"
              >
                <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <Code2 className="h-3.5 w-3.5 text-zinc-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-500">
                    <span className="text-orange-400">const</span> developer = {"{"}
                  </p>
                  <p className="pl-4 text-zinc-400">
                    focus: <span className="text-amber-300">&apos;Clean Architecture&apos;</span>,
                  </p>
                  <p className="pl-4 text-zinc-400">
                    stack: <span className="text-orange-300">[&apos;React&apos;, &apos;Next.js&apos;, &apos;Node&apos;]</span>,
                  </p>
                  <p className="pl-4 text-zinc-400">
                    shipping: <span className="text-emerald-400">true</span>,
                  </p>
                  <p className="text-zinc-500">{"}"};</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bio & Metrics Card */}
          <motion.div variants={itemVariants} className="lg:col-span-6">
            <div className="relative rounded-3xl bg-linear-to-br from-orange-500/30 via-white/10 to-transparent p-px shadow-2xl">
              <div className="group relative overflow-hidden rounded-[23px] bg-zinc-900/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:bg-zinc-900/90">
                {/* Glow accent bar */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent" />

                <p className="relative z-10 text-base leading-relaxed text-zinc-300 sm:text-lg">
                  I build modern web applications across the entire development lifecycle — from responsive React interfaces and reusable component architectures to RESTful APIs, authentication, database design, and deployment. I focus on clean architecture, performance, maintainability, and scalable solutions.
                </p>

                {/* Metrics Grid */}
                <div className="relative z-10 mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {metrics.map(({ icon: Icon, value, label }) => (
                    <div
                      key={label}
                      className="group/metric flex items-center gap-3 rounded-2xl border border-white/5 bg-white/3 p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/6 sm:flex-col sm:items-start sm:gap-2.5"
                    >
                      <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-2 text-orange-400 transition-transform duration-300 group-hover/metric:scale-110 group-hover/metric:bg-orange-500/20">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xl font-bold tracking-tight text-white">{value}</p>
                        <p className="text-xs font-medium text-zinc-400">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}