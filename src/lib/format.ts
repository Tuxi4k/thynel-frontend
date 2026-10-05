function pad(n: number): string {
  return n.toString().padStart(2, "0")
}

export function formatDuration(sec: number): string {
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const ss = pad(Math.floor(sec % 60))

  return h > 0 ? `${h}:${pad(m)}:${ss}` : `${m}:${ss}`
}

export function plural(n: number, singular: string, plural: string): string {
  return n === 1 ? singular : plural
}
