export type ModelSignal = {
  provider: string;
  model: string;
  status: "Rising" | "Watch" | "Cooling";
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

export const modelSignals: ModelSignal[] = [
  {
    provider: "OpenAI",
    model: "GPT-4.1 Coding",
    status: "Rising",
    vibeScore: 94,
    latency: "Fast",
    preview: "API + editor integrations",
    shift: "+12% community mentions",
  },
  {
    provider: "Anthropic",
    model: "Claude Sonnet",
    status: "Watch",
    vibeScore: 91,
    latency: "Medium",
    preview: "IDE agents",
    shift: "Tool-use adoption climbing",
  },
  {
    provider: "Google",
    model: "Gemini Code Assist",
    status: "Rising",
    vibeScore: 87,
    latency: "Fast",
    preview: "Free preview window",
    shift: "Strong enterprise pull",
  },
  {
    provider: "Mistral",
    model: "Codestral",
    status: "Cooling",
    vibeScore: 78,
    latency: "Fast",
    preview: "Open-weight workflows",
    shift: "Benchmark gap widening",
  },
];

export const radarItems: RadarItem[] = [
  {
    label: "Free Preview Radar",
    value: "7 active",
    detail: "Surfacing trials and time-boxed access windows before they disappear.",
  },
  {
    label: "Research Preview Tracker",
    value: "12 launches",
    detail: "Cataloging frontier coding agents, IDE experiments, and repo-scale assistants.",
  },
  {
    label: "Meta Shift Engine",
    value: "+18% velocity",
    detail: "Detecting when the coding-model conversation moves across X, HN, Reddit, and changelogs.",
  },
];
