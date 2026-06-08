import { createPlayer, videoFeatures } from "@videojs/react";
import { Video } from "@videojs/react/video";
import VideoJSSkin from "./VideoJSSkin";

const Player = createPlayer({ features: videoFeatures });

export const { usePlayer, useMedia } = Player;

const VideoJS = ({ attributes }) => {
  const {
    items = {},
    playerOptions = {},
    controls = {},
    dimensions = {},
  } = attributes;

  const effectiveDimensions = {
    width: "100%",
    height: "",
    aspectRatio: "16/9",
    ...dimensions,
  };

  // Create a key from text tracks and videoUrl so the player re-mounts when tracks or video change
  const trackKey = JSON.stringify({
    url: items.videoUrl,
    tracks: items.textTracks || [],
    thumbnails: items.thumbnailsUrl,
  });

  return (
    <Player.Provider key={trackKey}>
      <VideoJSSkin
        posterUrl={items.posterUrl}
        controls={controls}
        playerOptions={playerOptions}
        dimensions={effectiveDimensions}>
        <Video
          playsInline={playerOptions.playsInline !== false}
          autoPlay={playerOptions.autoplay || false}
          loop={playerOptions.loop || false}
          muted={playerOptions.autoplay || playerOptions.muted || false}
          preload={playerOptions.preload || "metadata"}
          crossOrigin={playerOptions.crossOrigin ? "anonymous" : undefined}>
          {items?.videoUrl && (
            <source
              src={items.videoUrl}
              type={
                items.videoUrl.includes(".m3u8")
                  ? "application/x-mpegURL"
                  : items.videoUrl.includes(".webm")
                  ? "video/webm"
                  : "video/mp4"
              }
            />
          )}
          {/* Text tracks (captions) */}
          {(items.textTracks || []).map((track, index) => (
            <track
              key={index}
              kind={track.kind}
              label={track.label}
              srcLang={track.language}
              src={track.src}
              default={track.default || false}
            />
          ))}

          {/* Thumbnail track */}
          {items?.thumbnailsUrl && (
            <track
              kind="metadata"
              label="thumbnails"
              src={items?.thumbnailsUrl}
              default={true}
            />
          )}
        </Video>
      </VideoJSSkin>
    </Player.Provider>
  );
};

export default VideoJS;
