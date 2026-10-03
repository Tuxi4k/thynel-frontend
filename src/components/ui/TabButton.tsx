import type { ButtonProps } from "./Button"

import { splitProps } from "solid-js"
import { Button } from "./Button"

export type TabButtonProps = Omit<ButtonProps, "variant" | "type"> & {
  active: boolean
}

export function TabButton(props: TabButtonProps) {
  const [local, rest] = splitProps(props, ["size", "active"])

  return (
    <Button
      {...rest}
      type="button"
      variant={local.active ? "primary" : "ghost"}
      size={local.size ?? "sm"}
    />
  )
}
