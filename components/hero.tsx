import { RadioTower } from "lucide-react";
import { SignalStream } from "@/components/signal-stream";
import type { ModelSignal } from "@/lib/types";

export function Hero({ signals }: { signals: ModelSignal[] }) {
  return (
    <section className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/10 px-4 py-2 text-sm text-signal">
          <RadioTower className="size-4" />
          Live intelligence scaffold
        </div>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          The Bloomberg Terminal for AI coding models.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Vibeboard watches model launches, free preview windows, benchmark deltas, latency shifts,
          and community sentiment so teams can pick the right coding assistant at the right moment.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#leaderboard"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-signal"
          >
            Explore leaderboard
          </a>
          <a
            href="mailto:founders@vibeboard.ai"
            className="rounded-full border border-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-electric/60 hover:bg-electric/10"
          >
            Request early access
          </a>
        </div>
      </div>

      <SignalStream signals={signals.slice(0, 3)} />
    </section>
  );
}
