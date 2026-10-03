import { Button } from "@/components/ui/Button"
import { plural } from "@/lib/format"

export function PlaylistRow(props: {
  name: string
  trackCount: number
  updatedAt: string
}) {
  return (
    <li class="flex items-center gap-3 px-4 py-3 bg-surface border rounded-lg border-edge">
      <div class="w-10 h-10 rounded-2.5 bg-elevated flex items-center justify-center shrink-0">
        <span class="text-accent font-semibold text-sm">
          {props.name.charAt(0).toUpperCase()}
        </span>
      </div>

      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium">{props.name}</p>
        <p class="truncate text-xs text-text-dim mt-0.5">
          {props.trackCount} {plural(props.trackCount, "track", "tracks")} ·{" "}
          {props.updatedAt}
        </p>
      </div>

      <Button size="icon">
        <i class="i-solar:menu-dots-bold w-4 h-4" />
      </Button>
    </li>
  )
}
