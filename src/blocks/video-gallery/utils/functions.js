/**
 * Detect a YouTube URL and extract its video ID.
 */
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

/**
 * Detect the most likely source type from a raw URL.
 */
export const detectSource = (url) => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isDash(url)) return "dash";
  return "mp4";
};

/**
 * Resolve an effective aspect ratio (e.g. "16:9" -> "16/9").
 */
export const resolveAspect = (aspectRatio, customAspect) => {
  if (aspectRatio === "custom") return customAspect || "16/9";
  if (!aspectRatio) return "16/9";
  return aspectRatio.replace(":", "/");
};

/**
 * Build a thumbnail URL for a video item; falls back to a YouTube/Vimeo
 * derived thumbnail when no poster is set.
 */
export const resolvePoster = (item) => {
  if (item?.poster) return item.poster;
  if (item?.source === "youtube" || isYoutube(item?.url)) {
    const id = getYoutubeId(item?.url || "");
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
  return "";
};

/**
 * Build a unique list of categories from the videos array.
 */
export const collectCategories = (videos) => {
  const set = new Set();
  (videos || []).forEach((v) => {
    if (v?.category) set.add(v.category);
  });
  return Array.from(set);
};

/**
 * Build a stable, unique id for a new gallery item.
 */
export const makeId = () =>
  `v-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
