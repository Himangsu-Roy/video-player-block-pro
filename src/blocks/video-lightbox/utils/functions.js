/**
 * URL helpers + small utilities shared between the editor and frontend.
 */

export const getYoutubeId = (url) => {
  if (!url) return "";
  const m = url.match(
    /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return m ? m[1] : "";
};

export const isYoutube = (url) =>
  !!url && /(?:youtube\.com|youtu\.be)/i.test(url);

export const getVimeoId = (url) => {
  if (!url) return "";
  const m = url.match(/vimeo\.com\/(?:.*#|.*\/videos?\/)?([0-9]+)/i);
  return m ? m[1] : "";
};

export const isVimeo = (url) => !!url && /vimeo\.com/i.test(url);
export const isHls = (url) => !!url && /\.m3u8(\?|$)/i.test(url);
export const isWistia = (url) =>
  !!url && /(?:wistia\.com|wi\.st)/i.test(url);
export const isBunny = (url) => !!url && /(?:b-cdn\.net|mediadelivery\.net)/i.test(url);

export const detectSource = (url) => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isWistia(url)) return "wistia";
  if (isBunny(url)) return "bunny";
  return "mp4";
};

/**
 * Get the Wistia media ID from a typical Wistia link.
 */
export const getWistiaId = (url) => {
  if (!url) return "";
  const m = url.match(/wistia\.(?:com|net)\/(?:medias|embed\/iframe)\/([a-zA-Z0-9]+)/);
  if (m) return m[1];
  const m2 = url.match(/wi\.st\/medias\/([a-zA-Z0-9]+)/);
  return m2 ? m2[1] : "";
};

/**
 * Aspect ratio string ('16:9') -> CSS aspect-ratio value ('16 / 9').
 */
export const aspectToCss = (ar) => {
  if (!ar || ar === "original") return null;
  return ar.replace(":", " / ");
};

/**
 * Resolve a modal max-width given the size preset.
 */
export const resolveModalMaxWidth = (size, custom) => {
  switch (size) {
    case "small":
      return "560px";
    case "medium":
      return "800px";
    case "large":
      return "1080px";
    case "fullscreen":
      return "100vw";
    case "custom":
      return `${custom || 1080}px`;
    default:
      return "1080px";
  }
};

/**
 * Simple cookie helpers - used to honour the "only auto-open once per
 * visitor" Pro option.
 */
export const readCookie = (key) => {
  if (typeof document === "undefined" || !key) return "";
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    const [k, v] = part.split("=");
    if (k === key) return decodeURIComponent(v || "");
  }
  return "";
};

export const writeCookie = (key, value, days = 30) => {
  if (typeof document === "undefined" || !key) return;
  const exp = new Date();
  exp.setTime(exp.getTime() + days * 86400000);
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${exp.toUTCString()}; path=/; SameSite=Lax`;
};
