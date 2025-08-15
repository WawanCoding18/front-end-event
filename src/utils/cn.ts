import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}
