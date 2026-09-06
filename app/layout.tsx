import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  IBM_Plex_Serif,
  Manrope,
  Google_Sans_Code,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// IBM Plex stays the docs typeface -- app/globals.css maps it to
// --font-sans/mono/serif, which every page under /docs inherits.
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

// Marketing typefaces, used by the landing/research pages and the site
// chrome only, via the `font-display` / `font-code` utilities. Kept separate
// from the Plex tokens above so restyling the landing page cannot retypeset
// the docs.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Google Sans Code is newer than Next 16.3.3's precalculated capsize metrics
// table, so Next cannot build a metric-matched fallback face for it and logs
// an error about it on every compile. Opt out of that synthetic face and name
// a real mono stack instead -- same result, no noise.
const googleSansCode = Google_Sans_Code({
  variable: "--font-gs-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  adjustFontFallback: false,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Consolas",
    "Liberation Mono",
    "monospace",
  ],
});

export const metadata: Metadata = {
  title: "AudioLens — Learning Interpretability Tool for Voice Models",
  description:
    "An interpretability workbench for speech models. Follow a single prediction from raw waveform to emitted token, across saliency, attention, embeddings and perturbation, on one shared timeline.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        plexSans.variable,
        plexMono.variable,
        plexSerif.variable,
        manrope.variable,
        googleSansCode.variable,
      )}
    >
      <body className="min-h-full bg-[#fbfbfa] text-[#14171c] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
