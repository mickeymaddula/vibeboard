import type { RadarItem } from "@/lib/types";

export function RadarGrid({ items }: { items: RadarItem[] }) {
  return (
    <section id="radar" className="grid gap-4 py-6 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm text-muted">{item.label}</p>
          <p className="mt-3 text-3xl font-semibold">{item.value}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
        </div>
      ))}
    </section>
  );
}
