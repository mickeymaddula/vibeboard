import type {
  BenchmarkSnapshot,
  CodingModel,
  ModelSignal,
  PreviewWindow,
  Provider,
  RadarItem,
  SourceEvent,
} from "@/lib/types";
import { calculateVibeScore } from "@/lib/scoring";

export const providers: Provider[] = [
  {
    id: "openai",
    name: "OpenAI",
    category: "frontier-lab",
    homepage: "https://openai.com/",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    category: "frontier-lab",
    homepage: "https://www.anthropic.com/",
  },
  {
    id: "google",
    name: "Google",
    category: "cloud",
    homepage: "https://ai.google/",
  },
  {
    id: "mistral",
    name: "Mistral",
    category: "open-model",
    homepage: "https://mistral.ai/",
  },
];

export const codingModels: CodingModel[] = [
  {
    id: "gpt-4-1-coding",
    providerId: "openai",
    name: "GPT-4.1 Coding",
    family: "GPT-4.1",
    releaseChannel: "stable",
    contextWindow: "Long-context",
  },
  {
    id: "claude-sonnet",
    providerId: "anthropic",
    name: "Claude Sonnet",
    family: "Claude",
    releaseChannel: "preview",
    contextWindow: "Long-context",
  },
  {
    id: "gemini-code-assist",
    providerId: "google",
    name: "Gemini Code Assist",
    family: "Gemini",
    releaseChannel: "preview",
    contextWindow: "Enterprise",
  },
  {
    id: "codestral",
    providerId: "mistral",
    name: "Codestral",
    family: "Codestral",
    releaseChannel: "stable",
    contextWindow: "Open-weight workflows",
  },
];

export const previewWindows: PreviewWindow[] = [
  {
    id: "gemini-code-assist-free-preview",
    modelId: "gemini-code-assist",
    label: "Free preview window",
    access: "free",
    startsAt: "2026-05-01T00:00:00.000Z",
    endsAt: null,
  },
  {
    id: "claude-sonnet-ide-agents",
    modelId: "claude-sonnet",
    label: "IDE agents",
    access: "invite",
    startsAt: "2026-04-20T00:00:00.000Z",
    endsAt: null,
  },
];

export const benchmarkSnapshots: BenchmarkSnapshot[] = [
  {
    id: "gpt-4-1-swe-bench",
    modelId: "gpt-4-1-coding",
    benchmark: "SWE-bench Verified",
    score: 94,
    previousScore: 86,
    measuredAt: "2026-05-13T12:00:00.000Z",
  },
  {
    id: "claude-sonnet-swe-bench",
    modelId: "claude-sonnet",
    benchmark: "SWE-bench Verified",
    score: 91,
    previousScore: 89,
    measuredAt: "2026-05-13T12:00:00.000Z",
  },
  {
    id: "gemini-code-assist-swe-bench",
    modelId: "gemini-code-assist",
    benchmark: "SWE-bench Verified",
    score: 87,
    previousScore: 83,
    measuredAt: "2026-05-13T12:00:00.000Z",
  },
  {
    id: "codestral-swe-bench",
    modelId: "codestral",
    benchmark: "SWE-bench Verified",
    score: 78,
    previousScore: 80,
    measuredAt: "2026-05-13T12:00:00.000Z",
  },
];

export const sourceEvents: SourceEvent[] = [
  {
    id: "openai-community-mentions",
    sourceId: "hn-model-discussion",
    modelId: "gpt-4-1-coding",
    title: "Developers report stronger repo-scale code edits",
    observedAt: "2026-05-14T01:00:00.000Z",
    url: "https://news.ycombinator.com/",
    sentiment: "positive",
    magnitude: 9,
  },
  {
    id: "claude-tool-use-adoption",
    sourceId: "anthropic-news",
    modelId: "claude-sonnet",
    title: "Tool-use adoption climbing across IDE agents",
    observedAt: "2026-05-14T01:15:00.000Z",
    url: "https://www.anthropic.com/news",
    sentiment: "positive",
    magnitude: 7,
  },
  {
    id: "gemini-enterprise-pull",
    sourceId: "reddit-localllama",
    modelId: "gemini-code-assist",
    title: "Teams compare free preview and enterprise workflow fit",
    observedAt: "2026-05-14T01:30:00.000Z",
    url: "https://www.reddit.com/r/LocalLLaMA/",
    sentiment: "positive",
    magnitude: 6,
  },
  {
    id: "codestral-benchmark-gap",
    sourceId: "swe-bench",
    modelId: "codestral",
    title: "Benchmark gap widens against frontier coding assistants",
    observedAt: "2026-05-14T01:45:00.000Z",
    url: "https://www.swebench.com/",
    sentiment: "negative",
    magnitude: 5,
  },
];

const statusByScore = (score: number): ModelSignal["status"] => {
  if (score >= 86) {
    return "Rising";
  }

  if (score >= 80) {
    return "Watch";
  }

  return "Cooling";
};

export const modelSignals: ModelSignal[] = codingModels.map((model) => {
  const provider = providers.find((item) => item.id === model.providerId);
  const preview = previewWindows.find((item) => item.modelId === model.id);
  const benchmark = benchmarkSnapshots.find((item) => item.modelId === model.id);
  const events = sourceEvents.filter((item) => item.modelId === model.id);
  const primaryEvent = events[0];
  const vibeScore = calculateVibeScore({ events, benchmark, preview });

  return {
    provider: provider?.name ?? "Unknown provider",
    model: model.name,
    status: statusByScore(vibeScore),
    vibeScore,
    latency: model.id === "claude-sonnet" ? "Medium" : "Fast",
    preview: preview?.label ?? model.contextWindow,
    shift: primaryEvent?.title ?? "No shift detected",
  };
});

export const radarItems: RadarItem[] = [
  {
    label: "Free Preview Radar",
    value: `${previewWindows.filter((item) => item.access === "free").length} active`,
    detail: "Surfacing trials and time-boxed access windows before they disappear.",
  },
  {
    label: "Research Preview Tracker",
    value: `${codingModels.filter((item) => item.releaseChannel !== "stable").length} launches`,
    detail: "Cataloging frontier coding agents, IDE experiments, and repo-scale assistants.",
  },
  {
    label: "Meta Shift Engine",
    value: "+18% velocity",
    detail: "Detecting when the coding-model conversation moves across X, HN, Reddit, and changelogs.",
  },
];
