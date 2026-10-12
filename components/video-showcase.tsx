"use client";

import { useState } from "react";
import { ACCENT } from "@/lib/theme";

export type Video = {
  youtubeId: string;
  title: string;
  caption: string;
};

const RING = "shadow-[0_0_0_1px_var(--al-hairline)]";

const thumb = (id: string, size: "maxresdefault" | "hqdefault") =>
  `https://img.youtube.com/vi/${id}/${size}.jpg`;

const pad = (n: number) => String(n).padStart(2, "0");

// Not every upload has a maxres thumbnail; hqdefault always exists.
function fallbackToHq(id: string) {
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    const hq = thumb(id, "hqdefault");
    if (e.currentTarget.src !== hq) e.currentTarget.src = hq;
  };
}

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-none stroke-current stroke-2">
      <path
        d={dir === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Playlist rail plus a featured stage. Picking a rail item (or stepping with
// the arrows below lg, where the rail is hidden) promotes it to the stage.
// The YouTube iframe mounts only after the play click.
export function VideoShowcase({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = videos[active];

  const select = (i: number) => {
    if (i === active) {
      setPlaying(true);
      return;
    }
    setActive(i);
    setPlaying(false);
  };

  const step = (delta: number) => {
    setActive((a) => (a + delta + videos.length) % videos.length);
    setPlaying(false);
  };

  return (
    <div className="mt-[56px] grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-10">
      {/* Playlist rail (desktop only) */}
      <div className="max-lg:hidden">
        <div className="font-code flex items-baseline justify-between pb-4 text-[11.5px] tracking-[0.14em] text-al-fg-tertiary uppercase">
          <span>Playlist</span>
          <span>{pad(videos.length)}</span>
        </div>
        <ul className="m-0 list-none p-0 shadow-[inset_0_-1px_0_var(--al-hairline-strong)]">
          {videos.map((v, i) => {
            const isActive = i === active;
            return (
              <li key={v.youtubeId} className="shadow-[inset_0_1px_0_var(--al-hairline-strong)]">
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={isActive ? `Play: ${v.title}` : `Show: ${v.title}`}
                  className="group grid w-full cursor-pointer grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`relative block aspect-video overflow-hidden rounded-[12px] bg-al-panel transition-shadow ${
                      isActive
                        ? "shadow-[0_0_0_2px_var(--al-accent-text)]"
                        : `${RING} group-hover:shadow-[0_0_0_1px_var(--al-hairline-strong)]`
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumb(v.youtubeId, "hqdefault")}
                      alt=""
                      aria-hidden
                      className={`absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-500 group-hover:scale-[1.05] ${
                        isActive ? "" : "opacity-75 group-hover:opacity-100"
                      }`}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="font-code flex items-center gap-2 text-[11.5px] text-al-fg-quaternary">
                      <span
                        className={isActive ? "" : "transition-colors group-hover:text-[var(--al-accent-text)]"}
                        style={isActive ? { color: "var(--al-accent-text)" } : undefined}
                      >
                        {pad(i + 1)}
                      </span>
                      {isActive && (
                        <span className="inline-flex items-center gap-1.5" style={{ color: "var(--al-accent-text)" }}>
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--al-accent-text)" }} />
                          On stage
                        </span>
                      )}
                    </span>
                    <span
                      className={`mt-1.5 block text-[17px] leading-[1.25] font-semibold tracking-[-0.02em] transition-colors xl:text-[19px] ${
                        isActive ? "" : "group-hover:text-[var(--al-accent-text)]"
                      }`}
                    >
                      {v.title}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 mb-0 text-[14px] leading-[1.6] text-al-fg-tertiary text-pretty">
          Pick a video to bring it to the stage. Playback loads from YouTube
          only after you press play.
        </p>
      </div>

      {/* Stage */}
      <div>
        <div
          key={current.youtubeId}
          className="al-stage-in relative aspect-video overflow-hidden rounded-[28px] bg-al-panel shadow-[0_0_0_1px_var(--al-hairline),0_60px_110px_-60px_var(--al-shadow-deep)] max-sm:rounded-[20px]"
        >
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play: ${current.title}`}
              className="group absolute inset-0 h-full w-full cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb(current.youtubeId, "maxresdefault")}
                onError={fallbackToHq(current.youtubeId)}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
              <span className="absolute top-1/2 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white/95 py-3 pr-6 pl-3 text-[15px] font-medium text-[#0b1020] shadow-[0_20px_40px_-18px_rgba(0,0,0,0.55)] backdrop-blur transition-transform duration-200 group-hover:scale-105 max-sm:py-2.5 max-sm:pr-5 max-sm:pl-2.5 max-sm:text-[13px]">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white max-sm:h-8 max-sm:w-8"
                  style={{ background: ACCENT }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden className="ml-0.5 h-4 w-4 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Play video
              </span>
            </button>
          )}
        </div>

        <div className="mt-6 flex items-start justify-between gap-6 max-sm:mt-4 max-sm:flex-col-reverse max-sm:gap-5">
          <div className="min-w-0">
            <div className="font-code text-[11.5px] tracking-[0.14em] text-al-fg-tertiary uppercase">
              Now showing
            </div>
            <div className="mt-2.5 text-[22px] leading-[1.15] font-semibold tracking-[-0.025em] sm:text-[30px]">
              {current.title}
            </div>
            <p className="mt-2 mb-0 max-w-[56ch] text-[15.5px] leading-[1.6] text-al-fg-body text-pretty">
              {current.caption}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="font-code text-[12px] text-al-fg-quaternary max-lg:hidden">
              <span style={{ color: "var(--al-accent-text)" }}>{pad(active + 1)}</span> /{" "}
              {pad(videos.length)}
            </div>
            {/* Arrows stand in for the rail below lg. */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous video"
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-card text-al-fg-strong transition-colors hover:bg-al-surface-3 ${RING}`}
              >
                <Arrow dir="prev" />
              </button>
              <span className="font-code min-w-[46px] text-center text-[12px] text-al-fg-quaternary" aria-live="polite">
                <span style={{ color: "var(--al-accent-text)" }}>{pad(active + 1)}</span> / {pad(videos.length)}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next video"
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-card text-al-fg-strong transition-colors hover:bg-al-surface-3 ${RING}`}
              >
                <Arrow dir="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
