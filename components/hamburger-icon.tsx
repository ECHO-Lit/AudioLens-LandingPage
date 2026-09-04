export function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-[18px] w-[18px] flex-none flex-col items-center justify-center">
      <span
        className="absolute h-[2px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out"
        style={{
          transform: open ? "translateY(0) rotate(45deg)" : "translateY(-5.5px) rotate(0deg)",
        }}
      />
      <span
        className="absolute h-[2px] w-[18px] rounded-full bg-current transition-opacity duration-200 ease-out"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        className="absolute h-[2px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out"
        style={{
          transform: open ? "translateY(0) rotate(-45deg)" : "translateY(5.5px) rotate(0deg)",
        }}
      />
    </span>
  );
}
