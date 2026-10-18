import Image from "next/image";

const bars = [38, 52, 44, 68, 60, 82, 74, 92];
const kpis = [["4,000+", "Participant records"], ["2", "Internships"], ["6", "Certifications"]];

export default function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-4 rounded-4xl bg-brand/30 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-2xl border border-white/15 bg-white/6 p-4 shadow-2xl backdrop-blur">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-white/50">training-performance-dashboard</span>
        </div>

        <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/[0.07] p-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border-2 border-signal">
            <Image src="/profile.jpg" alt="Lukman Norhakim Zainal" fill sizes="56px" className="object-cover" priority />
          </div>
          <div>
            <p className="font-display font-semibold text-white">Lukman Norhakim Zainal</p>
            <p className="text-xs text-white/60">Full-Stack Developer | Data Analyst</p>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          {kpis.map(([v, l]) => (
            <div key={l} className="rounded-xl bg-white/[0.07] p-3">
              <p className="font-display text-xl font-bold text-signal">{v}</p>
              <p className="text-[11px] leading-tight text-white/60">{l}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 rounded-xl bg-white/[0.07] p-3">
          <div className="flex h-28 items-end gap-2" aria-hidden="true">
            {bars.map((h, i) => (
              <span key={i} className="bar flex-1 rounded-t"
                style={{ height: `${h}%`, background: i === 7 ? "#f2c811" : "#4f86ff", animationDelay: `${i * 70}ms` }} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
          {["Google Sheets", "SharePoint", "Power BI model", "Dashboard"].map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              {i > 0 && <span className="text-signal" aria-hidden="true">&gt;</span>}
              <span className="rounded-full border border-white/20 px-2.5 py-1">{s}</span>
            </span>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-white/40">Illustration based on my Power BI project</p>
    </div>
  );
}
