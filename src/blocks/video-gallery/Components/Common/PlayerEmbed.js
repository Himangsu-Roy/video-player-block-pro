import { useEffect, useRef } from "react";
import {
  getYoutubeId,
  getVimeoId,
  isYoutube,
  isVimeo,
  isHls,
  isDash,
} from "../../utils/functions";
import EditorEmbedPortal from "./EditorEmbedPortal";

/**
 * Native <video> for self-hosted / adaptive sources. MP4 and WebM play
 * natively. HLS (.m3u8) and DASH (.mpd) are NOT natively supported outside
 * Safari, so we lazily load hls.js / dash.js (already bundled by the plugin)
 * and attach them to the element. The libraries are code-split via dynamic
 * import(), so they only download when an HLS/DASH video actually plays.
 */
const NativeVideo = ({ video, autoplay, onEnded }) => {
  const ref = useRef(null);
  const url = video.url;
  const wantHls = video.source === "hls" || isHls(url);
  const wantDash = video.source === "dash" || isDash(url);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let destroyed = false;
    let hls = null;
    let dashPlayer = null;

    if (wantDash) {
      // dash.js drives the element for .mpd streams.
      import("dashjs")
        .then((mod) => {
          if (destroyed || !ref.current) return;
          const dashjs = mod.default || mod;
          dashPlayer = dashjs.MediaPlayer().create();
          dashPlayer.initialize(el, url, autoplay);
        })
        .catch(() => {
          el.src = url; // last-ditch: let the browser try
        });
    } else if (wantHls && !el.canPlayType("application/vnd.apple.mpegurl")) {
      // hls.js for browsers without native HLS (i.e. everything but Safari).
      import("hls.js")
        .then((mod) => {
          if (destroyed || !ref.current) return;
          const Hls = mod.default || mod;
          if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(el);
          } else {
            el.src = url;
          }
        })
        .catch(() => {
          el.src = url;
        });
    } else {
      // MP4/WebM, or Safari with native HLS.
      el.src = url;
    }

    return () => {
      destroyed = true;
      if (hls) {
        try {
          hls.destroy();
        } catch (_) {
          /* ignore */
        }
      }
      if (dashPlayer) {
        try {
          dashPlayer.reset();
        } catch (_) {
          /* ignore */
        }
      }
    };
  }, [url, wantHls, wantDash, autoplay]);

  return (
    <video
      ref={ref}
      controls
      playsInline
      autoPlay={autoplay}
      poster={video.poster || undefined}
      onEnded={onEnded}
    >
      <track kind="captions" />
    </video>
  );
};

/**
 * Renders an in-page video player using a lightweight strategy:
 *
 *  - youtube  -> iframe with the youtube embed URL
 *  - vimeo    -> iframe with the vimeo embed URL
 *  - mp4/hls/dash/anything else -> native <video> tag
 */
const PlayerEmbed = ({ video, onEnded, isEditor = false }) => {
  if (!video?.url) return null;
  const url = video.url;
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
      />
    );
  }

  // Native video for mp4/webm, plus hls.js/dash.js-driven HLS/DASH.
  return (
    <NativeVideo
      video={video}
      autoplay={autoplay}
      onEnded={onEnded}
    />
  );
};

export default PlayerEmbed;
