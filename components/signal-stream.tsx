import { BellRing } from "lucide-react";
import type { ModelSignal } from "@/lib/types";

export function SignalStream({ signals }: { signals: ModelSignal[] }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-glow backdrop-blur">
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-sm text-muted">Meta Shift Engine</p>
            <h2 className="text-2xl font-semibold">Signal stream</h2>
          </div>
          <BellRing className="size-5 text-signal" />
        </div>
        <div className="mt-5 space-y-4">
          {signals.map((signal) => (
            <div key={signal.model} className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">
              <div>
                <p className="font-medium">{signal.provider}</p>
                <p className="text-sm text-muted">{signal.shift}</p>
              </div>
              <span className="font-mono text-lg text-signal">{signal.vibeScore}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
