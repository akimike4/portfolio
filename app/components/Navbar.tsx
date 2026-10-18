"use client";
import { useState, useEffect } from "react";
import { Icon } from "./Icons";

const links = [
  ["hero", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
  ["experience", "Experience"], ["involvement", "Involvement"], ["education", "Education"],
  ["certifications", "Certifications"], ["contact", "Contact"],
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // On first load, read saved preference
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDarkMode(true);
    setMounted(true);
  }, []);

  // Whenever darkMode changes, apply it + save it
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

  // Highlight the link of the section being viewed
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-ink/85 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#hero" className="font-display text-xl font-bold">
          Akim<span className="text-signal">.</span>
        </a>
        <ul className="hidden items-center gap-5 text-sm xl:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "text-signal" : "text-white/70 hover:text-white"}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-white/25 p-2 hover:bg-white/10">
            <Icon name={darkMode ? "sun" : "moon"} className="h-4 w-4" />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="rounded-full border border-white/25 p-2 hover:bg-white/10 xl:hidden">
            <Icon name={open ? "x" : "menu"} className="h-4 w-4" />
          </button>
        </div>
      </div>
      {open && (
        <ul className="grid gap-1 border-t border-white/10 px-6 py-3 xl:hidden">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block py-1.5 ${active === id ? "text-signal" : "text-white/80"}`}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
