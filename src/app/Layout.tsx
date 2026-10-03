import type { RouteSectionProps } from "@solidjs/router"

import { BottomNav } from "@/components/layout/BottomNav"
import { FullPlayer } from "@/components/layout/FullPlayer"
import { MiniPlayer } from "@/components/layout/MiniPlayer"

export function Layout(props: RouteSectionProps) {
  return (
    <div class="h-dvh flex flex-col select-none">
      <main class="flex-1 overflow-y-auto pb-4">{props.children}</main>
      <div class="shrink-0">
        <MiniPlayer />
        <BottomNav />
      </div>
      <FullPlayer />
    </div>
  )
}
