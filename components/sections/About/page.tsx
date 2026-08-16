"use client";

import { FolderGit2, GraduationCap,Rocket } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const techFocus = ["Architecture", "REST APIs", "Authentication", "Database Design", "Performance"];

const metrics = [
  { icon: FolderGit2, value: "2+", label: "Shipped projects" },
  { icon: GraduationCap, value: "B.Sc.", label: "CS & AI" },
  { icon: Rocket, value: "100%", label: "Responsive builds" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black px-4 py-28">
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-400/5 blur-[110px]"
      />

      {/* Faint dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Category Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-orange-400"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
          </span>
          ABOUT ME
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Headline */}
          <div className="space-y-6 lg:col-span-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
              variants={fadeUp}
              className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Full Stack Developer,{" "}
              <span className="bg-linear-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                building modern web applications end to end.
              </span>
            </motion.h2>

            {/* Tech focus as pill chips */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {techFocus.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-zinc-400 transition hover:border-orange-500/30 hover:text-orange-300"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Floating mock code window — decorative, desktop only */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
              variants={fadeUp}
              className="hidden pt-4 lg:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-fit rounded-2xl border border-white/10 bg-zinc-900/60 p-4 font-mono text-[12px] shadow-2xl backdrop-blur-xl"
              >
                <div className="mb-3 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <p className="text-zinc-500">
                  <span className="text-orange-400">const</span> dev = {"{"}
                </p>
                <p className="pl-4 text-zinc-400">
                  stack: <span className="text-amber-300">[&apos;React&apos;, &apos;Node.js&apos;]</span>,
                </p>
                <p className="pl-4 text-zinc-400">
                  shipping: <span className="text-orange-400">true</span>,
                </p>
                <p className="text-zinc-500">{"}"}</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bio Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={4}
            variants={fadeUp}
            className="lg:col-span-6"
          >
            {/* Gradient border wrapper */}
            <div className="rounded-3xl bg-linear-to-br from-orange-500/40 via-white/10 to-transparent p-px shadow-2xl">
              <div className="group relative rounded-3xl bg-zinc-900/60 p-8 backdrop-blur-2xl transition-all duration-300 hover:bg-zinc-900/75">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/30 to-transparent" />

                <p className="relative z-10 text-base leading-relaxed text-zinc-300">
                  I build modern web applications across the entire development
                  lifecycle — from responsive React interfaces and reusable
                  component architectures to RESTful APIs, authentication,
                  database design, and deployment. I focus on clean architecture,
                  performance, maintainability, and scalable solutions.
                </p>

                {/* Metrics */}
                <div className="relative z-10 mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                  {metrics.map(({ icon: Icon, value, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-start gap-2.5 rounded-2xl border border-white/5 bg-white/5 p-3.5 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-orange-500/20 hover:bg-white/[0.07]"
                    >
                      <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-2 text-orange-400 transition-transform duration-200 group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-white">{value}</p>
                        <p className="text-[11px] font-medium leading-tight text-zinc-400">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}