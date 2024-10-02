import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

export const stringToUrl = (string = "") => string.toLocaleLowerCase().replace(/[^a-zA-Z0-9\s]/g, '')