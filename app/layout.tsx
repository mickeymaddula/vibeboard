import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibeboard | Real-time AI coding intelligence",
  description:
    "Track AI coding model shifts, free previews, research launches, latency moves, and community sentiment in one operational dashboard.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
