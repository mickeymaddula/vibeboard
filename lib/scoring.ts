import type { BenchmarkSnapshot, PreviewWindow, SourceEvent } from "@/lib/types";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export type VibeScoreInput = {
  events: SourceEvent[];
  benchmark?: BenchmarkSnapshot;
  preview?: PreviewWindow;
};

export function calculateVibeScore({ events, benchmark, preview }: VibeScoreInput) {
  const sentimentScore = events.reduce((total, event) => {
    const sentimentMultiplier = event.sentiment === "positive" ? 1 : event.sentiment === "negative" ? -1 : 0.25;
    return total + event.magnitude * sentimentMultiplier;
  }, 0);

  const benchmarkMomentum = benchmark ? benchmark.score - benchmark.previousScore : 0;
  const previewBoost = preview?.access === "free" ? 8 : preview ? 4 : 0;

  return Math.round(clamp(72 + sentimentScore + benchmarkMomentum + previewBoost, 0, 100));
}
