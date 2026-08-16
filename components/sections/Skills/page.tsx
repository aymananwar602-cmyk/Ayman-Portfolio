import SectionTitle from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical stack"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl transition hover:border-orange-500/30 hover:bg-white/5"
              >
                <Icon
                  size={20}
                  className="mb-4 text-orange-500"
                  aria-hidden="true"
                />

                <h3 className="mb-4 text-base font-semibold text-white">
                  {group.label}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}