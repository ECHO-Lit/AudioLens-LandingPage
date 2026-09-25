import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * The shadcn Skeleton, tinted with the docs' own token instead of the default
 * `bg-muted` so it reads the same in light and dark. Static markup -- no client
 * JS, so it can render inside a Server Component loading.tsx.
 */
export function Skeleton({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <ShadcnSkeleton
      aria-hidden="true"
      className={cn("rounded-[5px] bg-al-skeleton", className)}
      style={style}
    />
  );
}

/** A run of text lines, last one short so it reads as a paragraph. */
export function SkeletonText({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          className="h-[11px]"
          style={{ width: i === lines - 1 ? "62%" : "100%" }}
        />
      ))}
    </div>
  );
}
