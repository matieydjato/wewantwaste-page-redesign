export function getImageUrl(size: number): string {
  if (size === 4) return "/images/skips/4-yarder-skip.jpg";
  if (size >= 5 && size <= 12) return "/images/skips/5-12-yarder-skip.jpg";
  if (size === 14) return "/images/skips/14-yarder-skip.jpg";
  if (size === 16) return "/images/skips/16-yarder-skip.jpg";
  if (size === 20) return "/images/skips/20-yarder-skip.jpg";
  if (size === 40) return "/images/skips/40-yarder-skip.jpg";

  return "/images/skips/5-12-yarder-skip.jpg";
}

export function getContainerClasses(isSelected: boolean): string {
  const base = [
    "group relative flex flex-col bg-white shadow-xl rounded-2xl overflow-hidden",
    "border transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 cursor-pointer",
  ];
  const border = isSelected ? "border-black border-2" : "border-gray-200";
  return [...base, border].join(" ");
}

export function getButtonClasses(isSelected: boolean): string {
  const base = [
    "ml-2 px-4 py-2 rounded-lg text-sm font-semibold shadow",
    "transition-colors duration-150 focus:outline-none",
  ];
  const stateStyles = isSelected
    ? "bg-white text-black border border-black hover:bg-gray-100 focus:ring-black"
    : "bg-black text-white hover:bg-gray-800 focus:ring-black";
  return [...base, stateStyles].join(" ");
}
