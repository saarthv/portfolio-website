import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

function ContactIcon({
  type,
}: {
  type: "email" | "phone" | "linkedin" | "github" | "substack";
}) {
  const common = "h-4 w-4 text-zinc-400";

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden>
        <path d="M8 3h8" />
        <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
        <circle cx="12" cy="18" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7" />
        <path d="M8 7.5h.01" />
        <path d="M12 17v-4.2a2 2 0 0 1 4 0V17" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden>
        <path d="M9 19c-4.5 1.5-4.5-2.5-6.5-3" />
        <path d="M15 21v-3.9a3.3 3.3 0 0 0-.9-2.6c3 0 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13.5 13.5 0 0 0-7 0C5.4 0 4.2.4 4.2.4a4.9 4.9 0 0 0-.1 3.6A5.3 5.3 0 0 0 2.7 7.7c0 5.3 3.2 6.8 6.2 6.8a3.3 3.3 0 0 0-.9 2.6V21" />
      </svg>
    );
  }

  if (type === "substack") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden>
        <path d="M4 6h16" />
        <path d="M4 10h16" />
        <path d="M6 14h12v6H6z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden>
      <path d="M4 4h16v16H4z" />
      <path d="M8 8h8v8H8z" />
    </svg>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  emphasized = false,
  external = false,
}: {
  icon: "email" | "phone" | "linkedin" | "github" | "substack";
  label: string;
  value: string;
  href: string;
  emphasized?: boolean;
  external?: boolean;
}) {
  const cardClass = emphasized
    ? "rounded-2xl border border-violet-300/25 bg-[#140b28] shadow-[0_0_0_1px_rgba(157,78,221,0.1)]"
    : "rounded-2xl border border-white/10 bg-[#130b24]";

  const content = (
    <div
      className={`group block h-full p-5 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300/30 hover:shadow-[0_10px_35px_rgba(61,9,108,0.25)] ${cardClass}`}
    >
      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
        <ContactIcon type={icon} />
        <span>{label}</span>
      </p>
      <p className="mt-2 text-lg text-zinc-100 group-hover:text-violet-100">{value}</p>
    </div>
  );

  if (external) {
    return (
      <Link href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Contact"
        title="Reach out"
        description="For collaboration, research, and product opportunities."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <ContactCard
          icon="email"
          label="Email"
          value={siteConfig.email}
          href={`mailto:${siteConfig.email}`}
          emphasized
        />
        <ContactCard icon="phone" label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} />
        <ContactCard
          icon="linkedin"
          label="LinkedIn"
          value="saarth-vardhan"
          href={siteConfig.linkedin}
          emphasized
          external
        />
        <ContactCard
          icon="github"
          label="GitHub"
          value="github.com/saarthv"
          href={siteConfig.github}
          external
        />
        <ContactCard
          icon="substack"
          label="Substack"
          value="substack.com/@saarthv"
          href={siteConfig.substack}
          external
        />
      </div>
    </section>
  );
}
