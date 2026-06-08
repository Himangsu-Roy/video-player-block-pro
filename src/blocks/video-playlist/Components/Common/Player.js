import { useEffect, useRef } from "react";
import {
  getYoutubeId,
  getVimeoId,
  isYoutube,
  isVimeo,
} from "../../utils/functions";

/**
 * Resolves a playable URL for an item.
 * Returns { type, url, mediaId } – type one of: youtube | vimeo | native.
 */
const resolveSource = (item) => {
  const src = item?.source || {};
  const url = src.url || "";
  const type = (src.type || "").toLowerCase();
  if (type === "youtube" || isYoutube(url)) {
    const id = src.mediaId || getYoutubeId(url);
    return { type: "youtube", url, mediaId: id };
  }
  if (type === "vimeo" || isVimeo(url)) {
    const id = src.mediaId || getVimeoId(url);
    return { type: "vimeo", url, mediaId: id };
  }
  if (type === "mux" && src.mediaId) {
    return {
      type: "native",
      url: `https://stream.mux.com/${src.mediaId}.m3u8`,
      mediaId: src.mediaId,
    };
  }
  return { type: "native", url, mediaId: "" };
};

const Player = ({
  item,
  attributes,
  startTime = 0,
  onEnded,
  onTimeUpdate,
  onLoaded,
}) => {
  const videoRef = useRef(null);
  const iframeRef = useRef(null);
  const seekedRef = useRef(false);

  const resolved = resolveSource(item);
  const engine = attributes?.engine || "default";

  // Native <video>: handle initial seek + play
  useEffect(() => {
    seekedRef.current = false;
  }, [item?.id]);

  useEffect(() => {
    if (resolved.type !== "native") return undefined;
    const el = videoRef.current;
    if (!el) return undefined;

    const handleLoaded = () => {
      if (!seekedRef.current && startTime && startTime > 0) {
        try {
          el.currentTime = startTime;
        } catch (e) {
          /* noop */
        }
        seekedRef.current = true;
      }
      if (onLoaded) onLoaded(el);
    };

    el.addEventListener("loadedmetadata", handleLoaded);
    return () => {
      el.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [resolved.type, resolved.url, startTime, onLoaded]);

  if (!resolved.url && resolved.type === "native") {
    return (
      <div className="vpb-vp-stage-empty">
        <span>No source set for this item.</span>
      </div>
    );
  }

  if (resolved.type === "youtube") {
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    if (startTime > 0) params.set("start", String(Math.floor(startTime)));
    const src = `https://www.youtube.com/embed/${resolved.mediaId}?${params.toString()}`;
    return (
      <iframe
        ref={iframeRef}
        src={src}
        title={item?.title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        data-engine={engine}
      />
    );
  }

  if (resolved.type === "vimeo") {
    const params = new URLSearchParams({
      autoplay: "1",
      title: "0",
      byline: "0",
      portrait: "0",
    });
    if (startTime > 0) params.set("#t", `${Math.floor(startTime)}s`);
    const src = `https://player.vimeo.com/video/${resolved.mediaId}?${params.toString()}`;
    return (
      <iframe
        ref={iframeRef}
        src={src}
        title={item?.title || "Vimeo video"}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        data-engine={engine}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      key={resolved.url}
      src={resolved.url}
      controls
      playsInline
      autoPlay
      poster={item?.poster || undefined}
      data-engine={engine}
      onEnded={onEnded}
      onTimeUpdate={(e) =>
        onTimeUpdate && onTimeUpdate(e.currentTarget.currentTime || 0)
      }>
      <track kind="captions" />
    </video>
  );
};

export default Player;
