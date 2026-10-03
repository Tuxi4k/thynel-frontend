import { unoMerge } from "unocss-merge"

export type ClassValue = string | boolean | null | undefined
export const cn: (...classValues: ClassValue[]) => string = unoMerge
