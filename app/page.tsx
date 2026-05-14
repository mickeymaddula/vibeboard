import { Hero } from "@/components/hero";
import { ModelLeaderboard } from "@/components/model-leaderboard";
import { RadarGrid } from "@/components/radar-grid";
import { SiteHeader } from "@/components/site-header";
import { modelSignals, radarItems } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-8">
      <SiteHeader />
      <Hero signals={modelSignals} />
      <RadarGrid items={radarItems} />
      <ModelLeaderboard signals={modelSignals} />
    </main>
  );
}
