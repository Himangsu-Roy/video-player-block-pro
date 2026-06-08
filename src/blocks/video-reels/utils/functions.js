export const getYoutubeId = (url) => {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : "";
};

export const isYoutube = (url) =>
  !!url && /(?:youtube\.com|youtu\.be)/i.test(url);

export const getVimeoId = (url) => {
  if (!url) return "";
  const match = url.match(/vimeo\.com\/(?:.*#|.*\/videos?\/)?([0-9]+)/i);
  return match ? match[1] : "";
};

export const isVimeo = (url) => !!url && /vimeo\.com/i.test(url);

export const isHls = (url) => !!url && /\.m3u8(\?|$)/i.test(url);

export const isDash = (url) => !!url && /\.mpd(\?|$)/i.test(url);

export const detectSourceType = (url) => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isDash(url)) return "dash";
  return "mp4";
};

export const resolveAspect = (aspectRatio) => {
  if (!aspectRatio) return "9/16";
  return aspectRatio.replace(":", "/");
};

export const resolvePoster = (reel) => {
  if (!reel) return "";
  if (reel.poster) return reel.poster;
  const url = reel.url || "";
  if (reel.source === "youtube" || isYoutube(url)) {
    const id = getYoutubeId(url);
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return "";
};

export const makeId = () =>
  `rl-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const shadowToCss = (s) => {
  if (!s) return "none";
  return `${s.x || 0}px ${s.y || 0}px ${s.blur || 0}px ${s.spread || 0}px ${
    s.color || "rgba(0,0,0,0.45)"
  }`;
};

export const formatHashtag = (tag) => {
  if (!tag) return "";
  const trimmed = String(tag).trim().replace(/^#+/, "");
  return trimmed ? `#${trimmed}` : "";
};

export const parseHashtags = (input) => {
  if (Array.isArray(input)) {
    return input.map((t) => String(t).replace(/^#+/, "").trim()).filter(Boolean);
  }
  if (typeof input !== "string") return [];
  return input
    .split(/[\s,]+/)
    .map((t) => t.replace(/^#+/, "").trim())
    .filter(Boolean);
};

export const readDeepLinkReel = () => {
  if (typeof window === "undefined") return null;
  const hash = (window.location.hash || "").replace(/^#/, "");
  if (!hash) return null;
  const params = new URLSearchParams(hash);
  const raw = params.get("reel");
  if (raw == null || raw === "") return null;
  const n = parseInt(raw, 10);
  return Number.isFinite(n) ? n : null;
};

export const writeDeepLinkReel = (index) => {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(
      (window.location.hash || "").replace(/^#/, ""),
    );
    params.set("reel", String(index));
    const next = `#${params.toString()}`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", next);
    } else {
      window.location.hash = next;
    }
  } catch (e) {
    /* ignore */
  }
};

export const buildSrcUrl = (reel) => {
  if (!reel) return "";
  const url = reel.url || "";
  const type = reel.source || detectSourceType(url);
  if (type === "youtube") {
    const id = getYoutubeId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      autoplay: "0",
      mute: "1",
      controls: "0",
      modestbranding: "1",
      playsinline: "1",
      loop: "1",
      playlist: id,
      rel: "0",
    });
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  }
  if (type === "vimeo") {
    const id = getVimeoId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      autoplay: "0",
      muted: "1",
      loop: "1",
      controls: "0",
      playsinline: "1",
    });
    return `https://player.vimeo.com/video/${id}?${params.toString()}`;
  }
  return url;
};
