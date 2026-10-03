import { createSignal } from "solid-js"
import { Button } from "@/components/ui/Button"
import { player } from "@/store/player"

const CLOSE_THRESHOLD = 175

export function FullPlayer() {
  const [dragY, setDragY] = createSignal(0)
  const [dragging, setDragging] = createSignal(false)
  let startY = 0

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    if (!touch) return
    startY = touch.clientY
    setDragging(true)
    setDragY(0)
  }

  const onTouchMove = (e: TouchEvent) => {
    if (!dragging()) return
    const touch = e.touches[0]
    if (!touch) return
    const delta = touch.clientY - startY
    if (delta > 0) setDragY(delta)
  }

  const onTouchEnd = () => {
    const shouldClose = dragY() > CLOSE_THRESHOLD
    setDragging(false)
    setDragY(0)
    if (shouldClose) player.close()
  }

  const transform = () => {
    if (!player.isOpen()) return "translateY(100%)"
    if (dragY() > 0) return `translateY(${dragY()}px)`
    return "translateY(0)"
  }

  return (
    <div
      class="fixed inset-0 z-50 bg-bg flex flex-col touch-none"
      classList={{
        "pointer-events-none": !player.isOpen(),
        "transition-transform duration-300 ease-out": !dragging(),
      }}
      style={{ transform: transform() }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <header class="flex justify-center pt-4 pb-2">
        <Button onClick={() => player.close()}>
          <i class="i-solar:alt-arrow-down-linear w-6 h-6" />
        </Button>
      </header>

      <div class="flex-1 flex flex-col items-center justify-center px-8 gap-8">
        <div class="w-full max-w-xs aspect-square rounded-4 bg-surface flex items-center justify-center">
          <i class="i-solar:music-note-2-linear w-20 h-20 text-elevated" />
        </div>

        <div class="w-full max-w-xs text-center">
          <h1 class="text-xl font-semibold truncate">Track Name</h1>
          <p class="text-sm text-text-dim truncate mt-1">Unknown artist</p>
        </div>
      </div>

      <div class="px-8 pb-8">
        <div class="h-1 bg-edge rounded-full overflow-hidden">
          <div class="h-full w-1/3 bg-accent" />
        </div>

        <div class="flex justify-between text-xs text-text-dim tabular-nums mt-2">
          <span>1:23</span>
          <span>4:11</span>
        </div>

        <div class="flex items-center justify-center gap-6 mt-6">
          <button
            type="button"
            class="w-12 h-12 flex items-center justify-center text-text hover:text-accent transition-colors"
          >
            <i class="i-solar:skip-previous-linear w-7 h-7" />
          </button>

          <button
            type="button"
            class="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-on-accent"
          >
            <i class="i-solar:play-linear w-8 h-8" />
          </button>

          <button
            type="button"
            class="w-12 h-12 flex items-center justify-center text-text hover:text-accent transition-colors"
          >
            <i class="i-solar:skip-next-linear w-7 h-7" />
          </button>
        </div>

        <div class="flex items-center justify-center gap-6 mt-6">
          <Button>
            <i class="i-solar:shuffle-linear w-5 h-5" />
          </Button>

          <Button>
            <i class="i-solar:repeat-linear w-5 h-5" />
          </Button>

          <Button>
            <i class="i-solar:heart-linear w-5 h-5" />
          </Button>

          <Button>
            <i class="i-solar:menu-dots-linear w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
