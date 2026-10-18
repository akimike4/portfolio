"use client";
import { Icon } from "./Icons";
import CopyButton from "./CopyButton";

export function Sec({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <h2 className="mb-8 flex items-center gap-3 font-display text-4xl font-bold text-fg">
        <span className="h-8 w-1.5 rounded bg-signal" />
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ---------- SKILLS ---------- */
const skillGroups = [
  { t: "Programming Languages", i: "code", c: "#2563eb", items: ["Python", "Java", "PHP", "JavaScript"] },
  { t: "Web Development", i: "globe", c: "#0d9488", items: ["HTML", "CSS", "REST API Basics", "React", "Next.js", "Tailwind CSS"] },
  { t: "Data & Business Intelligence", i: "chart", c: "#d4a90a", items: ["SQL", "Microsoft Excel", "Power BI Dashboard Development", "Data Modelling", "Power Automate"] },
  { t: "Tools & Platforms", i: "terminal", c: "#7c3aed", items: ["GitHub", "Visual Studio Code", "Android Studio", "Canva", "Google Workspace", "Microsoft Office"] },
  { t: "Soft Skills", i: "bulb", c: "#e11d48", items: ["Problem-solving", "Analytical thinking", "Teamwork", "Adaptability", "Communication", "Time management"] },
  { t: "Languages", i: "lang", c: "#059669", items: ["English (Fluent)", "Malay (Native)"] },
];

export function Skills() {
  return (
    <Sec id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.t} className="card p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: g.c }}>
                <Icon name={g.i} />
              </span>
              <h3 className="font-display text-lg font-semibold text-fg">{g.t}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm text-fg"
                  style={{ borderColor: `${g.c}66`, background: `${g.c}14` }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* ---------- INVOLVEMENT ---------- */
// Add your tournaments here later, e.g.
// { year: "2025", name: "Tournament name", event: "Speed relay", result: "Gold" }
const tournaments: { year: string; name: string; event: string; result: string }[] = [];

export function Involvement() {
  return (
    <Sec id="involvement" title="Involvement">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card border-t-4 p-8" style={{ borderTopColor: "#2563eb" }}>
          <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#2563eb] text-white"><Icon name="camera" className="h-6 w-6" /></span>
          <h3 className="font-display text-xl font-semibold text-fg">Multimedia and External Relations Committee</h3>
          <p className="mb-4 text-sm text-muted">SULAM Program, university involvement</p>
          <ul className="list-disc space-y-2 pl-5 text-muted marker:text-brand">
            <li>Took photos and videos during SULAM activities.</li>
            <li>Sorted and organised the captured images.</li>
            <li>Found sponsors for SULAM activities.</li>
            <li>Prepared the paperwork for sponsorship requests.</li>
            <li>Designed banners and posters for SULAM.</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Photography", "Videography", "Sponsorship", "Paperwork", "Banner & poster design"].map((t) => (
              <span key={t} className="rounded-full bg-[#2563eb]/10 px-3 py-1 text-xs text-fg">{t}</span>
            ))}
          </div>
        </div>

        <div className="card border-t-4 p-8" style={{ borderTopColor: "#f2c811" }}>
          <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-signal text-ink"><Icon name="rope" className="h-6 w-6" /></span>
          <h3 className="font-display text-xl font-semibold text-fg">Jump Rope Athlete</h3>
          <p className="mb-4 text-sm text-muted">Competitive tournaments</p>
          {tournaments.length === 0 ? (
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-line p-5 text-muted">
              <Icon name="trophy" className="h-6 w-6 shrink-0" />
              <p className="text-sm">Tournament results will be added here soon.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {tournaments.map((t) => (
                <li key={t.name + t.year} className="flex items-start gap-3 rounded-xl bg-page p-3">
                  <Icon name="trophy" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-fg">{t.name} <span className="font-normal text-muted">({t.year})</span></p>
                    <p className="text-sm text-muted">{t.event}{t.result && `: ${t.result}`}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Sec>
  );
}

/* ---------- CERTIFICATIONS ---------- */
const certs = [
  { t: "Python Programming Fundamentals", by: "DSA", tag: "Programming", i: "code", c: "#2563eb" },
  { t: "Google UX Design", by: "Coursera", tag: "Design", i: "palette", c: "#e11d48" },
  { t: "APAC Cybersecurity Fundamentals", by: "The Asia Foundation", tag: "Security", i: "shield", c: "#7c3aed" },
  { t: "Foundation: Data, Data, Everywhere", by: "Coursera", tag: "Data", i: "chart", c: "#0d9488" },
  { t: "Power Automate Cloud", by: "MISDEC", tag: "Automation", i: "zap", c: "#d4a90a" },
  { t: "Power BI (Beginners + Intermediate)", by: "MISDEC", tag: "Business Intelligence", i: "chart", c: "#ea580c" },
];

export function Certifications() {
  return (
    <Sec id="certifications" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <div key={c.t} className="card relative overflow-hidden p-5 pt-6">
            <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: c.c }} />
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-full text-white" style={{ background: c.c }}>
              <Icon name={c.i} />
            </span>
            <h3 className="font-display font-semibold leading-snug text-fg">{c.t}</h3>
            <p className="mt-1 text-sm text-muted">{c.by}</p>
            <span className="mt-4 inline-block rounded-full px-3 py-1 text-xs text-fg" style={{ background: `${c.c}22` }}>{c.tag}</span>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* ---------- CONTACT ---------- */
const contacts = [
  { l: "Email", v: "lukmannorhakim47@gmail.com", h: "mailto:lukmannorhakim47@gmail.com", i: "mail", copy: true },
  { l: "Phone", v: "017-6108567", h: "tel:+60176108567", i: "phone" },
  { l: "Location", v: "Batu Berendam, Melaka", i: "pin" },
  { l: "LinkedIn", v: "lukman-norhakim", h: "https://www.linkedin.com/in/lukman-norhakim-458659280", i: "linkedin" },
  { l: "GitHub", v: "akimike4", h: "https://github.com/akimike4", i: "github" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-20">
      <div className="hero-bg mx-auto max-w-5xl rounded-3xl p-8 text-white sm:p-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="font-display text-4xl font-bold">Let&rsquo;s work together</h2>
            <p className="mt-4 leading-7 text-white/65">
              Have a data, dashboard or web project in mind? Send me a message and I will get back to you.
            </p>
            <a href="mailto:lukmannorhakim47@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-semibold text-ink hover:brightness-110">
              <Icon name="mail" className="h-5 w-5" /> Send an email
            </a>
          </div>
          <ul className="space-y-3 md:col-span-3">
            {contacts.map((c) => {
              const inner = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-signal"><Icon name={c.i} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-white/50">{c.l}</span>
                    <span className="block truncate">{c.v}</span>
                  </span>
                </>
              );
              const cls = "flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3";
              return (
                <li key={c.l} className="flex items-center gap-2">
                  {c.h ? (
                    <a href={c.h} {...(c.h.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`${cls} flex-1 hover:bg-white/10`}>{inner}</a>
                  ) : (
                    <div className={`${cls} flex-1`}>{inner}</div>
                  )}
                  {c.copy && (
                    <button
                      type="button"
                      aria-label="Copy email address"
                      onClick={() => void navigator.clipboard.writeText(c.v)}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white hover:bg-white/10"
                    >
                      Copy
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
export function Footer() {
  return (
    <footer className="bg-ink px-6 py-8 text-sm text-white/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>&copy; 2026 Lukman Norhakim Zainal. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-bold text-black">N</span>
          Developed using Next.js
        </p>
      </div>
    </footer>
  );
}
