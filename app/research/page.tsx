import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <SiteHeader active="research" />

      <section className="mx-auto max-w-[1280px] px-10">
        <div className="flex flex-col items-center pt-[88px] pb-[26px] text-center">
          <h1 className="m-0 text-[44px] leading-[1.08] font-medium tracking-[-0.03em] text-[#14171c]">
            Research
          </h1>
          <div className="mt-16 flex w-full max-w-[560px] flex-col items-center gap-2 rounded-lg border border-dashed border-[rgba(20,23,28,0.15)] py-24">
            <span className="text-[14px] font-medium text-[#9ca3af]">
              Nothing to show
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
