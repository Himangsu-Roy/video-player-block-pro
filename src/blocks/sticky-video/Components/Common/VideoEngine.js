import { forwardRef } from "react";
import {
  getYoutubeId,
  getVimeoId,
  isYoutube,
  isVimeo,
} from "../../utils/functions";

/**
 * Renders the actual playable media for a given source.
 *
 * - YouTube / Vimeo: an iframe embed (PiP and the playing-state probe are not
 *   available through cross-origin iframes, so the sticky behavior for these
 *   falls back to the simple scroll trigger).
 * - mp4 / hls: a native <video> element. HLS plays natively in Safari; other
 *   browsers play progressive MP4. The ref is forwarded so the wrapper can
 *   read play state and request Picture-in-Picture.
 */
const VideoEngine = forwardRef(({ attributes, inEditor = false }, ref) => {
  const {
    videoSource = {},
    posterUrl,
    autoplay,
    muted,
    loopVideo,
    playsInline,
    showControls,
    preload = "metadata",
    ariaLabel,
  } = attributes;

  const url = videoSource?.url || "";
  const type =
    videoSource?.type ||
    (isYoutube(url) ? "youtube" : isVimeo(url) ? "vimeo" : "mp4");

  if (!url) {
    return (
      <div className="vpb-sv-empty">
        {ariaLabel || "Add a video URL to get started."}
      </div>
    );
  }

  if (type === "youtube" || isYoutube(url)) {
    const ytId = videoSource?.id || getYoutubeId(url);
    if (!ytId) return <div className="vpb-sv-empty">Invalid YouTube URL.</div>;
    const params = new URLSearchParams({
      autoplay: autoplay && !inEditor ? "1" : "0",
      mute: muted ? "1" : "0",
      loop: loopVideo ? "1" : "0",
      playlist: ytId,
      controls: showControls ? "1" : "0",
      rel: "0",
      playsinline: playsInline ? "1" : "0",
    });
    return (
      <iframe
        className="vpb-sv-frame"
        src={`https://www.youtube.com/embed/${ytId}?${params.toString()}`}
        title={ariaLabel || "Sticky video"}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    );
  }

  if (type === "vimeo" || isVimeo(url)) {
    const vmId = videoSource?.id || getVimeoId(url);
    if (!vmId) return <div className="vpb-sv-empty">Invalid Vimeo URL.</div>;
    const params = new URLSearchParams({
      autoplay: autoplay && !inEditor ? "1" : "0",
      muted: muted ? "1" : "0",
      loop: loopVideo ? "1" : "0",
      title: "0",
      byline: "0",
      portrait: "0",
    });
    return (
      <iframe
        className="vpb-sv-frame"
        src={`https://player.vimeo.com/video/${vmId}?${params.toString()}`}
        title={ariaLabel || "Sticky video"}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    );
  }

  // Native video (mp4 / webm / hls). In the editor we never autoplay.
  return (
    <video
      ref={ref}
      className="vpb-sv-video"
      src={url}
      poster={posterUrl || videoSource?.poster || undefined}
      controls={!!showControls}
      autoPlay={!inEditor && !!autoplay}
      muted={!!muted}
      loop={!!loopVideo}
      playsInline={!!playsInline}
      preload={preload}
      aria-label={ariaLabel || "Sticky video player"}
    />
  );
});

VideoEngine.displayName = "VideoEngine";

export default VideoEngine;
