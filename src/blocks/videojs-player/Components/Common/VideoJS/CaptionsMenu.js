import { selectTextTrack } from "@videojs/core/dom";
import { Popover, Tooltip } from "@videojs/react";
import { usePlayer, useMedia } from "./VideoJS";
import { CaptionsLabel } from "./Labels";
import { CaptionsOffIcon, CaptionsOnIcon } from "./Icons";

const CaptionsMenu = () => {
  const textTrackState = usePlayer(selectTextTrack);
  const media = useMedia();

  // Filter to only subtitle/caption tracks
  const captionTracks = (textTrackState?.textTrackList || [])
    .map((track, index) => ({ ...track, index }))
    .filter((t) => t.kind === "subtitles" || t.kind === "captions");

  const handleTrackSelect = (captionIndex) => {
    if (!media) return;

    // Disable all subtitle/caption tracks first
    let ci = 0;
    for (let i = 0; i < media.textTracks.length; i++) {
      const track = media.textTracks[i];
      if (track.kind === "subtitles" || track.kind === "captions") {
        track.mode = ci === captionIndex ? "showing" : "disabled";
        ci++;
      }
    }
  };

  // Find the active caption index among caption tracks
  const activeCaptionIndex = captionTracks.findIndex(
    (t) => t.mode === "showing"
  );

  if (!captionTracks.length) return null;

  // If there's only one caption track, render a simple toggle
  if (captionTracks.length === 1) {
    return (
      <Tooltip.Root side="top">
        <Tooltip.Trigger
          render={
            <button
              type="button"
              className="media-button media-button--icon media-button--captions"
              data-active={activeCaptionIndex === 0 ? "" : undefined}
              onClick={() =>
                handleTrackSelect(activeCaptionIndex === 0 ? -1 : 0)
              }>
              <CaptionsOffIcon />
              <CaptionsOnIcon />
            </button>
          }
        />
        <Tooltip.Popup className="media-surface media-tooltip">
          <CaptionsLabel />
        </Tooltip.Popup>
      </Tooltip.Root>
    );
  }

  // Multiple caption tracks — render a popover menu
  return (
    <Popover.Root side="top">
      <Popover.Trigger
        render={
          <button
            type="button"
            className="media-button media-button--icon media-button--captions"
            data-captions-showing={
              textTrackState?.subtitlesShowing ? "" : undefined
            }>
            <CaptionsOffIcon />
            <CaptionsOnIcon />
          </button>
        }
      />
      <Popover.Popup className="media-surface media-popover media-popover--captions">
        <div className="media-captions-menu">
          <button
            type="button"
            className={`media-captions-menu__item ${activeCaptionIndex === -1 ? "media-captions-menu__item--active" : ""}`}
            onClick={() => handleTrackSelect(-1)}>
            <span className="media-captions-menu__check">
              {activeCaptionIndex === -1 ? "✓" : ""}
            </span>
            <span className="media-captions-menu__label">Off</span>
          </button>
          {captionTracks.map((track, i) => (
            <button
              type="button"
              key={i}
              className={`media-captions-menu__item ${activeCaptionIndex === i ? "media-captions-menu__item--active" : ""}`}
              onClick={() => handleTrackSelect(i)}>
              <span className="media-captions-menu__check">
                {activeCaptionIndex === i ? "✓" : ""}
              </span>
              <span className="media-captions-menu__label">
                {track.label || track.language || `Track ${i + 1}`}
              </span>
            </button>
          ))}
        </div>
      </Popover.Popup>
    </Popover.Root>
  );
};

export default CaptionsMenu;
