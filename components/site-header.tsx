import { Sparkles } from "lucide-react";

const navItems = [
  { href: "#radar", label: "Radar" },
  { href: "#leaderboard", label: "Leaderboard" },
];

export function SiteHeader() {
  return (
    <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-electric text-white shadow-glow">
          <Sparkles className="size-5" />
        </div>
        <span className="text-lg font-semibold tracking-tight">Vibeboard</span>
      </div>
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition hover:border-signal/50 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
