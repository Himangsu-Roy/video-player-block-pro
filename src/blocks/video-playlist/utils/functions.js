export const getYoutubeId = (url) => {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
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

export const isMux = (url) => !!url && /stream\.mux\.com/i.test(url);

export const detectSourceType = (url) => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isDash(url)) return "dash";
  if (isMux(url)) return "mux";
  return "mp4";
};

export const resolveAspect = (aspectRatio, customAspect) => {
  if (aspectRatio === "custom") return customAspect || "16/9";
  if (!aspectRatio) return "16/9";
  return aspectRatio.replace(":", "/");
};

export const resolvePoster = (item) => {
  if (item?.poster) return item.poster;
  const src = item?.source || {};
  const url = src.url || "";
  if (src.type === "youtube" || isYoutube(url)) {
    const id = src.mediaId || getYoutubeId(url);
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return "";
};

export const makeId = () =>
  `vp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const s = Math.floor(seconds % 60);
  const m = Math.floor((seconds / 60) % 60);
  const h = Math.floor(seconds / 3600);
  const ss = s.toString().padStart(2, "0");
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${ss}`;
  }
  return `${m}:${ss}`;
};

export const parseTimeToSeconds = (val) => {
  if (val == null) return 0;
  if (typeof val === "number") return val;
  const str = String(val).trim();
  if (!str) return 0;
  if (!str.includes(":")) {
    const n = parseFloat(str);
    return Number.isFinite(n) ? n : 0;
  }
  const parts = str.split(":").map((p) => parseInt(p, 10) || 0);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
};

export const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const readDeepLink = () => {
  if (typeof window === "undefined") return { index: null, time: null };
  const hash = (window.location.hash || "").replace(/^#/, "");
  if (!hash) return { index: null, time: null };
  const params = new URLSearchParams(hash);
  const idx = params.get("video");
  const t = params.get("t");
  return {
    index: idx != null && idx !== "" ? parseInt(idx, 10) : null,
    time: t != null && t !== "" ? parseFloat(t) : null,
  };
};

export const writeDeepLink = (index, time) => {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams();
    params.set("video", String(index));
    if (Number.isFinite(time) && time > 0) {
      params.set("t", String(Math.round(time)));
    }
    const next = `#${params.toString()}`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", next);
    } else {
      window.location.hash = next;
    }
  } catch (e) {
    // ignore
  }
};
