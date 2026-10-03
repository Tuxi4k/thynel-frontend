import { unoMerge } from "unocss-merge"

export const cn: (
  ...classValues: Array<string | boolean | null | undefined>
) => string = unoMerge
