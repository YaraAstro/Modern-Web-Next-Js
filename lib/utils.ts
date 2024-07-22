import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*
 Initializg Aceternity UI Components
    - Spotlight (https://ui.aceternity.com/components/spotlight)
*/