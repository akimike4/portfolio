import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section id="hero" className="hero-bg relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-signal" />
            Computer Science graduate, UiTM Melaka
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl">Lukman Norhakim</h1>
          <p className="mt-4 text-xl text-white/80">Full-Stack Developer | Data Analyst</p>
          <p className="mt-6 max-w-lg leading-7 text-white/60">
            I turn raw data and business requirements into web apps, automations and Power BI dashboards people actually use.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-signal px-6 py-3 font-semibold text-ink hover:brightness-110">View Projects</a>
            <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">Contact Me</a>
          </div>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
