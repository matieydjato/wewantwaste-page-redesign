export const getStepClasses = (
  isCompleted: boolean,
  isActive: boolean
): string =>
  [
    "w-8 h-8 flex items-center justify-center rounded-full",
    isCompleted && "bg-black text-white",
    !isCompleted && isActive && "bg-white border-2 border-black text-black",
    !isCompleted && !isActive && "bg-gray-200 text-gray-500",
  ]
    .filter(Boolean)
    .join(" ");

export const getIconClasses = (
  isCompleted: boolean,
  isActive: boolean
): string =>
  [
    "w-5 h-5",
    isCompleted && "filter brightness-0 invert",
    !isCompleted && isActive && "filter brightness-0 text-black",
    !isCompleted && !isActive && "filter brightness-0 text-gray-500",
  ]
    .filter(Boolean)
    .join(" ");
