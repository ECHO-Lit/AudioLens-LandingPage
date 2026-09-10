import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { ACCENT } from "@/lib/theme";

type StepProps = { title: string; children?: ReactNode; n?: number; last?: boolean };

/**
 * Numbered walkthrough. Steps counts its children and injects the number and
 * the last-child flag, so authors never hand-number anything:
 *
 *   <Steps>
 *     <Step title="Upload audio">Drop your files in...</Step>
 *     <Step title="Select a model">Choose a checkpoint...</Step>
 *   </Steps>
 */
export function Steps({ children }: { children: ReactNode }) {
  const steps = Children.toArray(children).filter(isValidElement) as ReactElement<StepProps>[];

  return (
    <ol className="mt-5 flex list-none flex-col p-0">
      {steps.map((step, i) =>
        cloneElement(step, { key: i, n: i + 1, last: i === steps.length - 1 }),
      )}
    </ol>
  );
}

export function Step({ title, children, n, last }: StepProps) {
  return (
    <li className="grid grid-cols-[26px_1fr] gap-4 pb-[22px]">
      <div className="flex flex-col items-center gap-1.5">
        <div
          className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-al-accent-line font-mono text-[11px]"
          style={{ color: ACCENT, background: "var(--al-accent-tint)" }}
          aria-hidden="true"
        >
          {n}
        </div>
        {!last && <div className="w-px flex-1 bg-al-hairline-strong" aria-hidden="true" />}
      </div>
      <div className="min-w-0 pt-0.5">
        <div className="text-[14.5px] font-semibold">{title}</div>
        {/* Sized on the paragraph: MDX wraps step copy in <p>, which carries
            the global 14.5px mapping and would beat inheritance from here. */}
        <div className="text-al-fg-body text-pretty [&_p]:mt-1.5 [&_p]:text-[13.5px] [&_p]:leading-[1.62]">
          {children}
        </div>
      </div>
    </li>
  );
}
