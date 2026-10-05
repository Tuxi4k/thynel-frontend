import type { JSX } from "solid-js"

import { Button } from "./Button"

export type RowProps = {
  cover: JSX.Element
  title: string
  subtitle: string
  trailing?: JSX.Element
  onMenu?: () => void
}

export function Row(props: RowProps) {
  return (
    <li class="flex items-center gap-3 px-4 py-3 rounded-2.5 bg-surface">
      <div class="w-10 h-10 rounded-2.5 bg-elevated flex items-center justify-center shrink-0">
        {props.cover}
      </div>

      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium">{props.title}</p>
        <p class="truncate text-xs text-text-dim mt-0.5">{props.subtitle}</p>
      </div>

      {props.trailing}

      <Button aria-label="Menu" onClick={props.onMenu}>
        <i class="i-solar:menu-dots-bold w-4 h-4" />
      </Button>
    </li>
  )
}
