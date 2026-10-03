import type { JSX } from "solid-js"

import { cn } from "@/lib/cn"

export function EmptyState(props: {
  icon: string
  title: string
  children: JSX.Element
}) {
  return (
    <div class="border border-edge rounded-4 p-8 text-center bg-surface">
      <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-elevated flex items-center justify-center">
        <i class={cn(props.icon, "w-6 h-6 text-accent")} />
      </div>

      <h2 class="text-xl font-semibold mb-2">{props.title}</h2>
      <p class="text-text-dim text-sm max-w-xs mx-auto">{props.children}</p>
    </div>
  )
}
