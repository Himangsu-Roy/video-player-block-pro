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

export const detectSource = (url) => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  if (isDash(url)) return "dash";
  return "mp4";
};

/**
 * Build the CSS height for the hero stage given the configured mode.
 */
export const resolveHeroHeight = (mode, value) => {
  if (mode === "aspect") return null; // handled via aspect-ratio CSS prop
  if (mode === "fixed") return value || "600px";
  return value || "90vh";
};

/**
 * Should the background video be suppressed for this viewer?
 * Returns true when the visitor prefers reduced motion, has Save-Data on,
 * or is on a viewport narrower than the configured mobile breakpoint
 * (and the editor opted out of mobile playback).
 */
export const shouldSuppressBackgroundVideo = (attributes) => {
  if (typeof window === "undefined") return false;
  const {
    respectReducedMotion,
    respectSaveData,
    mobileBehavior,
    mobileBreakpoint = 768,
  } = attributes || {};

  if (
    respectReducedMotion &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return true;
  }

  if (
    respectSaveData &&
    navigator.connection &&
    navigator.connection.saveData === true
  ) {
    return true;
  }

  if (
    (mobileBehavior === "poster" || mobileBehavior === "hide") &&
    window.innerWidth < mobileBreakpoint
  ) {
    return true;
  }

  return false;
};

/**
 * Build a CSS gradient string from a stop array.
 */
export const stopsToGradient = (stops, angle, type) => {
  if (!stops || !stops.length) return "";
  const parts = stops
    .slice()
    .sort((a, b) => (a.stop || 0) - (b.stop || 0))
    .map((s) => `${s.color || "rgba(0,0,0,0)"} ${s.stop || 0}%`)
    .join(", ");
  if (type === "radial") return `radial-gradient(circle, ${parts})`;
  return `linear-gradient(${angle || 180}deg, ${parts})`;
};
