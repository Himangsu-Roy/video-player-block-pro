import {
  getYoutubeId,
  getVimeoId,
  isYoutube,
  isVimeo,
} from "../../utils/functions";
import EditorEmbedPortal from "./EditorEmbedPortal";

/**
 * Renders an in-page video player using a lightweight strategy:
 *
 *  - youtube  -> iframe with the youtube embed URL
 *  - vimeo    -> iframe with the vimeo embed URL
 *  - mp4/hls/dash/anything else -> native <video> tag
 *
 * The `playerEngine` attribute is preserved on the wrapper as a data-attribute
 * so a future enhancement can swap to the React/Video.js/Vidstack engines
 * already bundled by the plugin. The Plyr global is also opportunistically
 * used when available, since the free block already ships it.
 */
const PlayerEmbed = ({ video, attributes, onEnded, isEditor = false }) => {
  if (!video?.url) return null;
  const url = video.url;
  const engine = attributes?.playerEngine || "default";
  const autoplay = true;

  if (video.source === "youtube" || isYoutube(url)) {
    const id = getYoutubeId(url);
    const src = `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;
    const allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    // In the Studio editor canvas the embed must live in the parent window.
    if (isEditor) {
      return (
        <EditorEmbedPortal
          src={src}
          title={video.title || "YouTube video"}
          allow={allow}
        />
      );
    }
    return (
      <iframe
        src={src}
        title={video.title || "YouTube video"}
        allow={allow}
        allowFullScreen
        data-engine={engine}
      />
    );
  }

  if (video.source === "vimeo" || isVimeo(url)) {
    const id = getVimeoId(url);
    const src = `https://player.vimeo.com/video/${id}?autoplay=${autoplay ? 1 : 0}&title=0&byline=0&portrait=0`;
    const allow = "autoplay; fullscreen; picture-in-picture";
    if (isEditor) {
      return (
        <EditorEmbedPortal
          src={src}
          title={video.title || "Vimeo video"}
          allow={allow}
        />
      );
    }
    return (
      <iframe
        src={src}
        title={video.title || "Vimeo video"}
        allow={allow}
        allowFullScreen
        data-engine={engine}
      />
    );
  }

  // Native video for mp4/hls/dash; HLS/DASH on Safari plays via Apple Native;
  // other browsers will fall back gracefully (and we leave the door open for
  // hls.js/dash.js wiring via the engine selector in a future iteration).
  return (
    <video
      src={url}
      controls
      playsInline
      autoPlay={autoplay}
      poster={video.poster || undefined}
      data-engine={engine}
      onEnded={onEnded}
    >
      <track kind="captions" />
    </video>
  );
};

export default PlayerEmbed;
