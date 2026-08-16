"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">
          <Link
            href="#home"
            className="text-xl font-bold tracking-tight text-white"
          >
            AYMAN<span className="text-orange-500">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-orange-500 hover:text-white md:block"
          >
            Let&apos;s Talk
          </Link>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/85 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile Navigation"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-center rounded-xl px-4 py-3 text-sm transition-all ${
                        isActive
                          ? "bg-white/10 text-white font-semibold"
                          : "text-zinc-400 font-medium hover:bg-white/5 hover:text-white"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
