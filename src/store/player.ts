import { createSignal } from "solid-js"

const [isOpen, setIsOpen] = createSignal(false)

export const player = {
  isOpen,
  open: () => setIsOpen(true),
  close: () => setIsOpen(false),
}
