import type { JSX } from "solid-js"

import { splitProps } from "solid-js"
import { cn } from "@/lib/cn"

const VARIANTS = {
  primary: "bg-accent text-on-accent hover:opacity-90",
  ghost: "bg-elevated text-text-dim hover:text-text",
  bare: "text-text-dim hover:text-text hover:bg-elevated",
} as const

const SIZES = {
  icon: "size-10",
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
} as const

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANTS
  size?: keyof typeof SIZES
}

export function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["variant", "size", "class"])

  return (
    <button
      {...rest}
      class={cn(
        "flex items-center justify-center rounded-full",
        "transition-colors disabled:opacity-50 shrink-0",
        VARIANTS[local.variant ?? "bare"],
        SIZES[local.size ?? "icon"],
        local.class,
      )}
    />
  )
}
