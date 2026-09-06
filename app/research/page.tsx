import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const ACCENT = "#1b48e0";

export default function ResearchPage() {
  return (
    <div className="font-display min-h-screen overflow-x-clip bg-white text-[#0a0c11]">
      <SiteHeader active="research" />

      <section className="relative px-6 pt-[72px] text-center sm:pt-[88px] lg:pt-[104px]">
        {/* Same ambient wash as the landing hero, at a lower amplitude. */}
        <div
          aria-hidden
          className="al-drift pointer-events-none absolute top-[-140px] left-1/2 z-0 h-[760px] w-[1500px] max-w-none opacity-70 blur-[30px]"
          style={{
            transform: "translateX(-50%)",
            animation: "al-drift 26s ease-in-out infinite",
            background:
              "radial-gradient(38% 34% at 50% 34%, rgba(27,72,224,0.16) 0%, rgba(27,72,224,0) 72%), radial-gradient(30% 30% at 32% 44%, rgba(102,163,255,0.18) 0%, rgba(102,163,255,0) 70%)",
          }}
        />

        <div className="relative z-[1] mx-auto max-w-[1120px]">
          <div
            className="font-code text-[11.5px] tracking-[0.14em] uppercase"
            style={{ color: ACCENT }}
          >
            Research
          </div>

          <h1 className="mt-5 mb-0 text-[38px] leading-[0.98] font-semibold tracking-[-0.045em] text-balance sm:text-[52px] lg:text-[72px]">
            Papers, benchmarks
            <br />
            and write-ups.
          </h1>

          <p className="mx-auto mt-[26px] max-w-[56ch] text-[17px] leading-[1.6] text-[#535a67] text-pretty sm:text-[18px]">
            Papers, benchmarks and write-ups behind AudioLens, published as they
            land.
          </p>

          <div className="mx-auto mt-16 flex w-full max-w-[720px] flex-col items-center gap-2.5 rounded-[22px] bg-[#f7f7f6] px-6 py-24 shadow-[0_0_0_1px_rgba(10,12,17,0.06)]">
            <span className="font-code text-[11.5px] tracking-[0.14em] text-[#9ca3af] uppercase">
              Nothing to show
            </span>
            <span className="max-w-[40ch] text-[15px] leading-[1.6] text-[#6b7280] text-pretty">
              Work in progress. The first write-ups will appear here as they are
              published.
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
