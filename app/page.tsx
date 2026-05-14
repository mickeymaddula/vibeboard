import { BellRing, Bot, RadioTower, Sparkles } from "lucide-react";
import { SignalCard } from "@/components/signal-card";
import { modelSignals, radarItems } from "@/lib/signals";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-8">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-electric text-white shadow-glow">
            <Sparkles className="size-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Vibeboard</span>
        </div>
        <a
          href="#radar"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition hover:border-signal/50 hover:text-white"
        >
          View radar
        </a>
      </nav>

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
              {modelSignals.slice(0, 3).map((signal) => (
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
      </section>

      <section id="radar" className="grid gap-4 py-6 md:grid-cols-3">
        {radarItems.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-muted">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
          </div>
        ))}
      </section>

      <section id="leaderboard" className="py-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-signal">
              <Bot className="size-4" /> model board
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Live Model Leaderboard</h2>
          </div>
          <p className="hidden max-w-md text-sm leading-6 text-muted md:block">
            Placeholder scoring uses curated launch, latency, preview, and community-sentiment signals until
            ingestion pipelines are connected.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {modelSignals.map((signal) => (
            <SignalCard key={`${signal.provider}-${signal.model}`} signal={signal} />
          ))}
        </div>
      </section>
    </main>
  );
}
