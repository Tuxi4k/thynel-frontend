import { Button } from "@/components/ui/Button"
import { player } from "@/store/player"

export function MiniPlayer() {
  return (
    <div class="border-t border-edge bg-elevated">
      <div class="flex items-center gap-3 px-3 py-2">
        <button
          type="button"
          class="flex items-center gap-3 flex-1 min-w-0 text-left"
          onClick={() => player.open()}
        >
          <div class="w-10 h-10 rounded-2.5 bg-surface flex items-center justify-center shrink-0">
            <i class="i-solar:music-note-2-linear w-5 h-5 text-accent" />
          </div>

          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-text">Track Name</p>
            <p class="truncate text-xs text-text-dim">Unknown artist</p>
          </div>
        </button>

        <Button>
          <i class="i-solar:play-linear w-5 h-5" />
        </Button>

        <Button>
          <i class="i-solar:skip-next-linear w-5 h-5" />
        </Button>
      </div>

      <div class="h-0.5 bg-edge">
        <div class="h-full w-1/3 bg-accent" />
      </div>
    </div>
  )
}
