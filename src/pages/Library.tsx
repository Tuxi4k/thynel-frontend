import { Show, createSignal } from "solid-js"
import { EmptyState } from "@/components/EmptyState"
import { Button } from "@/components/ui/Button"
import { List } from "@/components/ui/List"
import { Row } from "@/components/ui/Row"
import { TabButton } from "@/components/ui/TabButton"
import { formatDuration, plural } from "@/lib/format"
import { MOCK_MIXES, MOCK_PLAYLISTS, MOCK_TRACKS } from "@/mock/library"

export function Library() {
  const [tab, setTab] = createSignal<"tracks" | "playlists" | "mixes">("tracks")

  return (
    <>
      <header class="flex justify-between items-center px-5 pt-6 pb-4">
        <div>
          <p class="text-text-dim text-xs uppercase tracking-[0.2em] mb-1">Thynel</p>
          <h1 class="text-3xl leading-9.5 font-semibold tracking-tight">Library</h1>
        </div>

        <div class="flex items-center gap-1">
          <Button aria-label="Search">
            <i class="i-solar:magnifer-linear w-5 h-5" />
          </Button>

          <Button aria-label="Add tracks" class="text-accent">
            <i class="i-solar:add-linear w-5 h-5" />
          </Button>
        </div>
      </header>

      <div class="flex gap-1 px-5 mb-4">
        <TabButton active={tab() === "tracks"} onClick={() => setTab("tracks")}>
          Tracks
        </TabButton>
        <TabButton
          active={tab() === "playlists"}
          onClick={() => setTab("playlists")}
        >
          Playlists
        </TabButton>
        <TabButton active={tab() === "mixes"} onClick={() => setTab("mixes")}>
          Mixes
        </TabButton>
      </div>

      <div class="px-5">
        <Show when={tab() === "tracks"}>
          <List
            items={MOCK_TRACKS}
            empty={
              <EmptyState icon="i-solar:music-library-bold" title="Nothing here yet">
                Add your <span class="text-accent font-medium">first track</span> to
                start building your collection
              </EmptyState>
            }
          >
            {(track) => (
              <Row
                cover={<i class="i-solar:play-linear w-4 h-4 text-accent" />}
                title={track.title}
                subtitle={track.artist ?? "Unknown artist"}
                trailing={
                  <span class="text-xs text-text-dim tabular-nums shrink-0">
                    {formatDuration(track.duration)}
                  </span>
                }
              />
            )}
          </List>
        </Show>

        <Show when={tab() === "playlists"}>
          <List
            items={MOCK_PLAYLISTS}
            empty={
              <EmptyState icon="i-solar:playlist-bold" title="No playlists yet">
                Tap <span class="text-accent font-medium">plus</span> to create your
                first playlist
              </EmptyState>
            }
          >
            {(playlist) => (
              <Row
                cover={
                  <span class="text-accent font-semibold text-sm">
                    {playlist.name.charAt(0).toUpperCase()}
                  </span>
                }
                title={playlist.name}
                subtitle={`${playlist.trackCount} ${plural(playlist.trackCount, "track", "tracks")} · ${playlist.updatedAt}`}
              />
            )}
          </List>
        </Show>

        <Show when={tab() === "mixes"}>
          <List
            items={MOCK_MIXES}
            empty={
              <EmptyState icon="i-solar:shuffle-bold" title="No mixes yet">
                Blend several playlists — tap{" "}
                <span class="text-accent font-medium">plus</span> to start
              </EmptyState>
            }
          >
            {(mix) => (
              <Row
                cover={<i class="i-solar:shuffle-bold w-4 h-4 text-accent" />}
                title={mix.name}
                subtitle={`${mix.trackCount} ${plural(mix.trackCount, "track", "tracks")} · from ${mix.sourceCount} ${plural(mix.sourceCount, "playlist", "playlists")}`}
              />
            )}
          </List>
        </Show>
      </div>
    </>
  )
}
