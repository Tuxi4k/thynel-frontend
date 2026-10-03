import { A, useLocation } from "@solidjs/router"
import { For } from "solid-js"
import { cn } from "@/lib/cn"

const ITEMS = [
  {
    href: "/",
    label: "Library",
    iconLinear: "i-solar:playlist-2-linear",
    iconBold: "i-solar:playlist-2-bold",
  },
] as const

export function BottomNav() {
  const location = useLocation()

  return (
    <nav class="border-t border-edge bg-surface">
      <ul class="flex">
        <For each={ITEMS}>
          {(item) => {
            const active = () =>
              location.pathname === item.href ||
              location.pathname.startsWith(item.href + "/")

            return (
              <li class="flex-1">
                <A
                  href={item.href}
                  class={cn(
                    "flex flex-col items-center gap-1 py-2.5 transition-colors",
                    active() ? "text-accent" : "text-text-dim",
                  )}
                >
                  <i
                    class={cn("w-6 h-6", active() ? item.iconBold : item.iconLinear)}
                  />
                  <span class="text-xs font-medium tracking-wide">{item.label}</span>
                </A>
              </li>
            )
          }}
        </For>
      </ul>
    </nav>
  )
}
