import { Bot } from "lucide-react";
import { SignalCard } from "@/components/signal-card";
import type { ModelSignal } from "@/lib/types";

export function ModelLeaderboard({ signals }: { signals: ModelSignal[] }) {
  return (
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
        {signals.map((signal) => (
          <SignalCard key={`${signal.provider}-${signal.model}`} signal={signal} />
        ))}
      </div>
    </section>
  );
}
