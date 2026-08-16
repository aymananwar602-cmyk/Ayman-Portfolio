import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { socialLinks, contactInfo } from "@/data/social";

export default function Contact() {
  const { email, phone, location, icons } = contactInfo;
  const EmailIcon = icons.email;
  const PhoneIcon = icons.phone;
  const LocationIcon = icons.location;

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something together."
          align="center"
          className="mb-6"
        />
        <p className="mx-auto mb-10 max-w-md text-sm text-zinc-400">
          Open to full stack developer roles and freelance projects. Reach
          out any time.
        </p>

        <div className="mx-auto flex max-w-xl flex-col gap-1 rounded-2xl border border-white/10 bg-white/3 p-3 text-left backdrop-blur-xl sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 sm:p-4">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            <EmailIcon size={15} className="text-orange-500" /> {email}
          </a>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            <PhoneIcon size={15} className="text-orange-500" /> {phone}
          </a>
          <span className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-300">
            <LocationIcon size={15} className="text-orange-500" /> {location}
          </span>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-orange-500/40 hover:text-orange-500"
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
