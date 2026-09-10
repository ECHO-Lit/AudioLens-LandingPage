import { Logomark } from "./logomark";

// Labels and hrefs are the site's own and predate the v2 design; only the
// presentation below was restyled.
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
    <footer className="font-display bg-al-canvas px-6 pt-[90px] text-al-fg-strong sm:pt-[110px] lg:pt-[130px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-11 pt-[52px] shadow-[inset_0_1px_0_var(--al-hairline-strong)] sm:grid-cols-2 lg:grid-cols-[minmax(0,1.7fr)_repeat(3,minmax(0,1fr))]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logomark heights={[7, 16, 11]} containerHeight={16} />
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              AudioLens
            </span>
          </div>
          <p className="mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-al-fg-tertiary">
            Explainability tooling for speech and voice models. Self-hosted, MIT
            licensed, built in the open.
          </p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.label}>
            <div className="font-code mb-4 text-[10.5px] tracking-[0.12em] text-al-fg-quaternary uppercase">
              {col.label}
            </div>
            <div className="flex flex-col gap-[11px] text-[14.5px]">
              {col.links.map((l) => (
                <a
                  key={l.text}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    l.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-al-fg-body transition-colors hover:text-al-fg-strong"
                >
                  {l.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="font-code mx-auto flex max-w-[1240px] flex-wrap justify-between gap-5 pt-[30px] pb-11 text-[11px] text-al-fg-quaternary">
        <span>AudioLens · Built for audio model interpretability</span>
        <span>Waveform to logits</span>
      </div>
    </footer>
  );
}
