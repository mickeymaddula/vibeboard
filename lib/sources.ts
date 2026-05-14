import type { SourceDefinition } from "@/lib/types";

export const sourceDefinitions: SourceDefinition[] = [
  {
    id: "openai-changelog",
    kind: "changelog",
    label: "OpenAI Changelog",
    cadence: "hourly",
    trustWeight: 0.95,
    url: "https://platform.openai.com/docs/changelog",
  },
  {
    id: "anthropic-news",
    kind: "rss",
    label: "Anthropic News",
    cadence: "hourly",
    trustWeight: 0.9,
    url: "https://www.anthropic.com/news",
  },
  {
    id: "hn-model-discussion",
    kind: "hacker-news",
    label: "Hacker News model discussion",
    cadence: "realtime",
    trustWeight: 0.72,
    url: "https://news.ycombinator.com/",
  },
  {
    id: "reddit-localllama",
    kind: "reddit",
    label: "r/LocalLLaMA",
    cadence: "realtime",
    trustWeight: 0.68,
    url: "https://www.reddit.com/r/LocalLLaMA/",
  },
  {
    id: "swe-bench",
    kind: "benchmark",
    label: "SWE-bench leaderboard",
    cadence: "daily",
    trustWeight: 0.88,
    url: "https://www.swebench.com/",
  },
];
