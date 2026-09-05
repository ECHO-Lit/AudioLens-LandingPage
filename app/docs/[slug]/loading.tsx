import { Skeleton, SkeletonText } from "../components/skeleton";

/**
 * Shown while a docs page streams in. The chrome (header, sidebar, TOC) lives
 * in the layout and stays put, so this only stands in for the page body --
 * breadcrumb row, hero, then a heading-and-prose rhythm at the real sizes.
 */
export default function DocsLoading() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading page">
      <span className="sr-only">Loading page</span>

      <div className="mb-4 flex items-center justify-between gap-2">
        <Skeleton className="h-[13px] w-[180px]" />
        <Skeleton className="h-[31px] w-[124px] rounded-[6px]" />
      </div>

      <Skeleton className="h-[168px] w-full rounded-2xl" />

      <SkeletonText lines={3} className="mt-6" />

      <div className="mt-5 flex gap-2">
        <Skeleton className="h-[19px] w-[46px]" />
        <Skeleton className="h-[19px] w-[38px]" />
        <Skeleton className="h-[19px] w-[122px]" />
      </div>

      {[0, 1].map((i) => (
        <div key={i}>
          <Skeleton className="mt-11 h-[22px] w-[220px]" />
          <SkeletonText lines={2} className="mt-5" />
          <Skeleton className="mt-[18px] h-[132px] w-full rounded-[9px]" />
        </div>
      ))}
    </div>
  );
}
