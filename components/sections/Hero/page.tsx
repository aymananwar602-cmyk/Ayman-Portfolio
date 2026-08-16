"use client";

import { ArrowUpRight, Code2, Database, Server } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 pb-20 pt-28"
    >
      {/* Ambient background glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-125 w-187.5 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.025]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">

          {/* LEFT */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs font-semibold tracking-[0.25em] text-orange-400">
                FULL STACK MERN DEVELOPER
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="max-w-5xl text-6xl font-extrabold leading-[0.95] tracking-tighter text-white sm:text-7xl md:text-8xl"
            >
              Building
              <br />
              <span className="text-orange-400">scalable</span>{" "}
              <span className="text-zinc-600">web</span>
              <br />
              applications.
            </motion.h1>

            {/* Tech stack */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-9 flex w-fit flex-wrap items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2.5 backdrop-blur-xl"
            >
              <Code2 className="h-4 w-4 text-orange-400" />

              <span className="font-mono text-xs text-zinc-400">
                MongoDB
              </span>

              <span className="text-zinc-700">•</span>

              <span className="font-mono text-xs text-zinc-400">
                Express.js
              </span>

              <span className="text-zinc-700">•</span>

              <span className="font-mono text-xs text-zinc-400">
                React
              </span>

              <span className="text-zinc-700">•</span>

              <span className="font-mono text-xs text-zinc-400">
                Node.js
              </span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-7 shadow-2xl backdrop-blur-2xl">
              {/* Top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent" />

              {/* Status */}
              <div className="mb-7 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-orange-500" />
                </span>

                <span className="text-xs font-medium text-zinc-400">
                  Available for opportunities
                </span>
              </div>

              {/* Summary */}
              <p className="text-[15px] leading-7 text-zinc-300">
                I build complete web applications across the entire
                development lifecycle — from responsive React interfaces and
                reusable component architectures to RESTful APIs,
                authentication, database design, and deployment.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-zinc-400">
                Focused on clean architecture, maintainable code,
                performance, and scalable solutions using modern JavaScript
                and TypeScript technologies.
              </p>

              {/* Capabilities */}
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
                <div className="rounded-xl border border-white/5 bg-white/3 p-3">
                  <Code2 className="mb-2 h-4 w-4 text-orange-400" />
                  <p className="text-[11px] font-medium text-zinc-300">
                    Frontend
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-600">
                    React / Next.js
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/3 p-3">
                  <Server className="mb-2 h-4 w-4 text-orange-400" />
                  <p className="text-[11px] font-medium text-zinc-300">
                    Backend
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-600">
                    Node / Express
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/3 p-3">
                  <Database className="mb-2 h-4 w-4 text-orange-400" />
                  <p className="text-[11px] font-medium text-zinc-300">
                    Database
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-600">
                    MongoDB / SQL
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="#projects"
                  variant="primary"
                  icon={ArrowUpRight}
                  className="w-full justify-center"
                >
                  View Projects
                </Button>

                <Button
                  href="#contact"
                  variant="secondary"
                  className="w-full justify-center"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 hidden items-center gap-3 text-xs text-zinc-600 lg:flex"
        >
          <span className="h-px w-12 bg-zinc-800" />
          <span className="font-mono tracking-widest">
            SCROLL TO EXPLORE
          </span>
        </motion.div>
      </div>
    </section>
  );
}