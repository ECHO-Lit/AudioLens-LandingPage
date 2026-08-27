import { Logomark } from "./logomark";

const FOOTER_COLUMNS = [
  {
    label: "Product",
    links: [
      { text: "Features", href: "/#features" },
      { text: "Dashboard", href: "#" },
      { text: "Changelog", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { text: "Documentation", href: "/docs" },
      { text: "Architecture", href: "#" },
      { text: "Model support", href: "#" },
    ],
  },
  {
    label: "Project",
    links: [
      { text: "GitHub", href: "https://github.com/ECHO-Lit/ECHO-LIT" },
      { text: "Contributing", href: "#" },
      { text: "Security", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(20,23,28,0.11)] bg-[#fbfbfa]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] gap-10 px-10 pt-14 pb-[30px]">
        <div>
          <div className="flex items-center gap-[9px]">
            <Logomark heights={[6, 13, 9]} containerHeight={13} />
            <span className="text-[14px] font-semibold text-[#14171c]">
              AudioLens
            </span>
          </div>
          <p className="mt-3.5 max-w-[34ch] text-[13px] leading-[1.65] text-[#6b7280]">
            Explainability tooling for speech and voice models. Self-hosted,
            MIT licensed, built in the open.
          </p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.label}>
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-[#9ca3af] uppercase">
              {col.label}
            </div>
            <div className="flex flex-col gap-[9px] text-[13px]">
              {col.links.map((l) => (
                <a
                  key={l.text}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[#4b5563] transition-colors hover:text-[#14171c]"
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-5 border-t border-[rgba(20,23,28,0.09)] px-10 pt-[18px] pb-10 font-mono text-[10.5px] text-[#9ca3af]">
        <span>AudioLens · Built for audio model interpretability</span>
        <span>Waveform to logits</span>
      </div>
    </footer>
  );
}
