export type SignalStatus = "Rising" | "Watch" | "Cooling";

export type Provider = {
  id: string;
  name: string;
  category: "frontier-lab" | "cloud" | "open-model" | "ide";
  homepage: string;
};

export type CodingModel = {
  id: string;
  providerId: Provider["id"];
  name: string;
  family: string;
  releaseChannel: "stable" | "preview" | "research";
  contextWindow: string;
};

export type SourceKind = "changelog" | "rss" | "hacker-news" | "reddit" | "x" | "github" | "benchmark";

export type SourceDefinition = {
  id: string;
  kind: SourceKind;
  label: string;
  cadence: "realtime" | "hourly" | "daily";
  trustWeight: number;
  url: string;
};

export type SourceEvent = {
  id: string;
  sourceId: SourceDefinition["id"];
  modelId: CodingModel["id"];
  title: string;
  observedAt: string;
  url: string;
  sentiment: "positive" | "neutral" | "negative";
  magnitude: number;
};

export type PreviewWindow = {
  id: string;
  modelId: CodingModel["id"];
  label: string;
  access: "free" | "invite" | "paid-preview";
  startsAt: string;
  endsAt: string | null;
};

export type BenchmarkSnapshot = {
  id: string;
  modelId: CodingModel["id"];
  benchmark: string;
  score: number;
  previousScore: number;
  measuredAt: string;
};

export type ModelSignal = {
  provider: string;
  model: string;
  status: SignalStatus;
  vibeScore: number;
  latency: string;
  preview: string;
  shift: string;
};

export type RadarItem = {
  label: string;
  value: string;
  detail: string;
};
