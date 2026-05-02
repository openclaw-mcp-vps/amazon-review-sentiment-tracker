import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amazon Review Sentiment Tracker",
  description: "Track Amazon product review sentiment over time. Monitor trends, get alerts on negative spikes, and identify complaint themes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a78a4f0-28bb-4d70-b3bd-9b5cf8532959"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
