import { useEffect, useRef } from "react";
import {
  getYoutubeId,
  getVimeoId,
  isYoutube,
  isVimeo,
} from "../../utils/functions";
import EditorEmbedPortal from "../../../_shared/media/EditorEmbedPortal";
import AdaptiveVideo from "../../../_shared/media/AdaptiveVideo";

const YT_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
const VIMEO_ALLOW = "autoplay; fullscreen; picture-in-picture";

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
  startTime = 0,
  onEnded,
  onTimeUpdate,
  onLoaded,
  inEditor = false,
}) => {
  const videoRef = useRef(null);
  const iframeRef = useRef(null);
  const seekedRef = useRef(false);

  // Keep the latest callbacks in refs so the postMessage effects below don't
  // re-subscribe on every parent render (the parent passes inline callbacks).
  const onTimeUpdateRef = useRef(onTimeUpdate);
  const onLoadedRef = useRef(onLoaded);
  onTimeUpdateRef.current = onTimeUpdate;
  onLoadedRef.current = onLoaded;

  const resolved = resolveSource(item);

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
      // Expose a uniform controller so chapter seeking is source-agnostic.
      if (onLoadedRef.current) {
        onLoadedRef.current({
          el,
          seek: (t) => {
            try {
              el.currentTime = t;
              if (el.paused) el.play().catch(() => {});
            } catch (e) {
              /* noop */
            }
          },
        });
      }
    };

    el.addEventListener("loadedmetadata", handleLoaded);
    return () => {
      el.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [resolved.type, resolved.url, startTime]);

  // YouTube: drive seek/play and read currentTime over the iframe postMessage
  // API so chapter clicks work without reloading the embed.
  useEffect(() => {
    if (resolved.type !== "youtube") return undefined;
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    const post = (msg) => {
      try {
        iframe.contentWindow?.postMessage(
          JSON.stringify(msg),
          "https://www.youtube.com",
        );
      } catch (e) {
        /* noop */
      }
    };

    const startListening = () =>
      post({ event: "listening", id: "vpb-vp", channel: "widget" });

    const onMessage = (e) => {
      if (typeof e.data !== "string" || !/youtube\.com/.test(e.origin)) return;
      let data;
      try {
        data = JSON.parse(e.data);
      } catch (_) {
        return;
      }
      if (
        data?.event === "infoDelivery" &&
        data.info &&
        typeof data.info.currentTime === "number"
      ) {
        onTimeUpdateRef.current?.(data.info.currentTime);
      }
    };

    window.addEventListener("message", onMessage);
    iframe.addEventListener("load", startListening);
    startListening();

    onLoadedRef.current?.({
      seek: (t) => {
        post({ event: "command", func: "seekTo", args: [t, true] });
        post({ event: "command", func: "playVideo", args: [] });
      },
    });

    return () => {
      window.removeEventListener("message", onMessage);
      iframe.removeEventListener("load", startListening);
    };
  }, [resolved.type, resolved.mediaId]);

  // Vimeo: same idea via the Vimeo player postMessage protocol.
  useEffect(() => {
    if (resolved.type !== "vimeo") return undefined;
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    const post = (msg) => {
      try {
        iframe.contentWindow?.postMessage(
          JSON.stringify(msg),
          "https://player.vimeo.com",
        );
      } catch (e) {
        /* noop */
      }
    };

    const subscribe = () =>
      post({ method: "addEventListener", value: "timeupdate" });

    const onMessage = (e) => {
      if (!/player\.vimeo\.com/.test(e.origin)) return;
      let data = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (_) {
          return;
        }
      }
      if (
        data?.event === "timeupdate" &&
        data.data &&
        typeof data.data.seconds === "number"
      ) {
        onTimeUpdateRef.current?.(data.data.seconds);
      }
    };

    window.addEventListener("message", onMessage);
    iframe.addEventListener("load", subscribe);
    subscribe();

    onLoadedRef.current?.({
      seek: (t) => {
        post({ method: "setCurrentTime", value: t });
        post({ method: "play" });
      },
    });

    return () => {
      window.removeEventListener("message", onMessage);
      iframe.removeEventListener("load", subscribe);
    };
  }, [resolved.type, resolved.mediaId]);

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
      // enablejsapi + origin let us drive seek/play and read currentTime via
      // postMessage, so chapter clicks work for YouTube (not just MP4/HTML5).
      enablejsapi: "1",
      origin:
        typeof window !== "undefined" ? window.location.origin : "",
    });
    if (startTime > 0) params.set("start", String(Math.floor(startTime)));
    const src = `https://www.youtube.com/embed/${resolved.mediaId}?${params.toString()}`;
    if (inEditor) {
      return (
        <EditorEmbedPortal src={src} title={item?.title || "YouTube video"} allow={YT_ALLOW} />
      );
    }
    return (
      <iframe
        ref={iframeRef}
        src={src}
        title={item?.title || "YouTube video"}
        allow={YT_ALLOW}
        allowFullScreen      />
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
    if (inEditor) {
      return (
        <EditorEmbedPortal src={src} title={item?.title || "Vimeo video"} allow={VIMEO_ALLOW} />
      );
    }
    return (
      <iframe
        ref={iframeRef}
        src={src}
        title={item?.title || "Vimeo video"}
        allow={VIMEO_ALLOW}
        allowFullScreen      />
    );
  }

  return (
    <AdaptiveVideo
      ref={videoRef}
      key={resolved.url}
      src={resolved.url}
      sourceType={item?.source?.type}
      controls
      playsInline
      autoPlay
      poster={item?.poster || undefined}      onEnded={onEnded}
      onTimeUpdate={(e) =>
        onTimeUpdate && onTimeUpdate(e.currentTarget.currentTime || 0)
      }>
      <track kind="captions" />
    </AdaptiveVideo>
  );
};

export default Player;
