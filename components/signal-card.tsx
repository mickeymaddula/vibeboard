import { Activity, ArrowUpRight } from "lucide-react";
import type { ModelSignal } from "@/lib/signals";
import { cn } from "@/lib/utils";

const statusStyles: Record<ModelSignal["status"], string> = {
  Rising: "border-signal/30 bg-signal/10 text-signal",
  Watch: "border-warning/30 bg-warning/10 text-warning",
  Cooling: "border-white/10 bg-white/5 text-muted",
};

export function SignalCard({ signal }: { signal: ModelSignal }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-card/80 p-5 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{signal.provider}</p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">{signal.model}</h3>
        </div>
        <span className={cn("rounded-full border px-3 py-1 text-xs font-medium", statusStyles[signal.status])}>
          {signal.status}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-muted">Vibe Score</p>
          <p className="mt-1 font-mono text-2xl text-white">{signal.vibeScore}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-muted">Latency</p>
          <p className="mt-1 font-medium text-white">{signal.latency}</p>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm text-muted">
        <p className="flex items-center gap-2">
          <Activity className="size-4 text-signal" />
          {signal.preview}
        </p>
        <p className="flex items-center gap-2">
          <ArrowUpRight className="size-4 text-electric" />
          {signal.shift}
        </p>
      </div>
    </article>
  );
}
