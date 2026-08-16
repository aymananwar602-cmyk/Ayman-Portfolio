"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/aymananwar602-cmyk",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayman-anwar-653618310/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:hello@aymananwar.dev",
    icon: Mail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden px-4 pb-12 pt-16">
      {/* Dynamic Orange Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[120px]"
      />

      {/* Top Gradient Highlight Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/30 to-transparent"
      />

      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-zinc-950/60 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-orange-500/30 hover:shadow-orange-500/5">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Identity & Status */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              Available for new opportunities
            </div>

            <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400 sm:justify-start">
              <span className="font-semibold text-zinc-100">
                Ayman Anwar
              </span>

              <span className="text-zinc-700">•</span>

              <span className="text-zinc-300">Full Stack Developer</span>

              <span className="text-zinc-700">•</span>

              <span className="text-zinc-500">
                &copy; {year}
              </span>
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            {/* Social icons container */}
            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="group relative rounded-lg p-2 text-zinc-400 transition-all duration-200 hover:bg-orange-500/10 hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  <Icon
                    size={16}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />

                  {/* Tooltip */}
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-orange-500/20 bg-zinc-900 px-2 py-1 text-[10px] font-medium text-orange-300 opacity-0 shadow-lg transition-all duration-150 group-hover:opacity-100">
                    {name}
                  </span>
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <ArrowUp
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}