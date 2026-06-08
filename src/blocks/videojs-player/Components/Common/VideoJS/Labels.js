import { usePlayer } from "@videojs/react";

export function PlayLabel() {
  const paused = usePlayer((s) => Boolean(s.paused));
  const ended = usePlayer((s) => Boolean(s.ended));
  if (ended) return <>Replay</>;
  return paused ? <>Play</> : <>Pause</>;
}

export function CaptionsLabel() {
  const active = usePlayer((s) => Boolean(s.subtitlesShowing));
  return active ? <>Disable captions</> : <>Enable captions</>;
}

export function PiPLabel() {
  const pip = usePlayer((s) => Boolean(s.pip));
  return pip ? <>Exit picture-in-picture</> : <>Enter picture-in-picture</>;
}

export function FullscreenLabel() {
  const fullscreen = usePlayer((s) => Boolean(s.fullscreen));
  return fullscreen ? <>Exit fullscreen</> : <>Enter fullscreen</>;
}
