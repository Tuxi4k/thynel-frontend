import type { JSX } from "solid-js"

import { For, Show } from "solid-js"

export type ListProps<T> = {
  items: T[]
  empty: JSX.Element
  children: (item: T) => JSX.Element
}

export function List<T>(props: ListProps<T>) {
  return (
    <Show when={props.items.length > 0} fallback={props.empty}>
      <ul class="flex flex-col gap-2.5">
        <For each={props.items}>{props.children}</For>
      </ul>
    </Show>
  )
}
