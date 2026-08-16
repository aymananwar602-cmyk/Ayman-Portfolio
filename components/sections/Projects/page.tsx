import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition hover:border-orange-500/30"
            >
              <p className="mb-2 text-xs font-medium tracking-widest text-orange-500">
                {p.tag.toUpperCase()}
              </p>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {p.title}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                {p.desc}
              </p>

              <ul className="mb-6 flex-1 space-y-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-2 text-xs leading-relaxed text-zinc-500"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 border-t border-white/10 pt-5">
                <Button
                  href={p.live}
                  variant="primary"
                  icon={ExternalLink}
                  external
                >
                  Live demo
                </Button>

                <Button
                  href={p.code}
                  variant="secondary"
                  icon={FaGithub}
                  external
                >
                  Source
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}