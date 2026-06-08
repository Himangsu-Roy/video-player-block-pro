/**
 * Aspect ratio string ('16:9') -> CSS aspect-ratio value ('16 / 9').
 */
export const aspectToCss = (ar) => {
  if (!ar) return "16 / 9";
  return ar.replace(":", " / ");
};

/**
 * Clamp a number to [min, max].
 */
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

/**
 * Pull a YouTube video ID out of any common URL form.
 */
export const getYouTubeId = (url) => {
  if (!url) return "";
  const m =
    url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/) || [];
  return m[1] || "";
};

/**
 * Pull a Vimeo video ID out of any common URL form.
 */
export const getVimeoId = (url) => {
  if (!url) return "";
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/) || [];
  return m[1] || "";
};

/**
 * Build an iframe-embed URL from a source string + provider.
 */
export const buildEmbedUrl = (source, url, opts = {}) => {
  const { autoplay = false, muted = false, loop = false, controls = true } =
    opts;
  if (source === "youtube") {
    const id = getYouTubeId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: muted ? "1" : "0",
      loop: loop ? "1" : "0",
      controls: controls ? "1" : "0",
      modestbranding: "1",
      rel: "0",
      playsinline: "1",
    });
    if (loop) params.set("playlist", id);
    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  }
  if (source === "vimeo") {
    const id = getVimeoId(url);
    if (!id) return "";
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      muted: muted ? "1" : "0",
      loop: loop ? "1" : "0",
      controls: controls ? "1" : "0",
      playsinline: "1",
    });
    return `https://player.vimeo.com/video/${id}?${params.toString()}`;
  }
  return "";
};

/**
 * Resolve cardBackground attribute (color or gradient) to a CSS background value.
 */
export const resolveCardBackground = (bg) => {
  if (!bg) return "#ffffff";
  if (typeof bg === "string") return bg;
  if (bg.type === "gradient" && bg.value) return bg.value;
  if (bg.value) return bg.value;
  return "#ffffff";
};
