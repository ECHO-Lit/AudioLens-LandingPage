import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AudioLens — Learning Interpretability Tool for Voice Models",
  description:
    "An interpretability workbench for voice models. Trace a prediction from waveform to token with saliency, attention, embeddings and perturbation analysis.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", plexSans.variable, plexMono.variable, plexSerif.variable)}
    >
      <body className="min-h-full bg-[#fbfbfa] text-[#14171c] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
