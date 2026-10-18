"use client";
import { useState } from "react";
import { Icon } from "./Icons";

export default function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      aria-label="Copy email address"
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1800); } catch {}
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
    >
      <Icon name={done ? "check" : "copy"} className="h-3.5 w-3.5" />
      {done ? "Copied" : "Copy"}
    </button>
  );
}
