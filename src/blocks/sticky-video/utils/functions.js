/**
 * Detect a YouTube URL and extract its 11-char video ID.
 */
export const getYoutubeId = (url) => {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : "";
};

export const isYoutube = (url) => !!url && /(?:youtube\.com|youtu\.be)/i.test(url);

export const getVimeoId = (url) => {
  if (!url) return "";
  const match = url.match(/vimeo\.com\/(?:.*#|.*\/videos?\/)?([0-9]+)/i);
  return match ? match[1] : "";
};

export const isVimeo = (url) => !!url && /vimeo\.com/i.test(url);
export const isHls = (url) => !!url && /\.m3u8(\?|$)/i.test(url);

/**
 * Best-effort detection of the source kind from a raw URL.
 */
export const detectSource = (url) => {
  if (!url) return "mp4";
  if (isYoutube(url)) return "youtube";
  if (isVimeo(url)) return "vimeo";
  if (isHls(url)) return "hls";
  return "mp4";
};

/**
 * Turn the aspectRatio attribute into a CSS aspect-ratio value.
 */
export const resolveAspectRatio = (ratio, custom) => {
  if (ratio === "custom") return custom || "16/9";
  if (!ratio) return "16/9";
  return ratio.replace(":", "/");
};

/**
 * Map a box-shadow preset name to a real CSS box-shadow value.
 */
export const resolveBoxShadow = (preset) => {
  switch (preset) {
    case "none":
      return "none";
    case "light":
      return "0 4px 12px rgba(0,0,0,0.18)";
    case "heavy":
      return "0 24px 60px rgba(0,0,0,0.55)";
    case "medium":
    default:
      return "0 12px 32px rgba(0,0,0,0.35)";
  }
};

/**
 * Should sticky behavior be suppressed for the current visitor?
 * Honors the reduced-motion + mobile toggles. Always false in the editor.
 */
export const shouldDisableSticky = (attributes) => {
  if (typeof window === "undefined") return false;
  const {
    stickyEnabled,
    enableOnMobile,
    mobileBreakpoint = 768,
    respectReducedMotion,
    dockAnimation,
  } = attributes || {};

  if (!stickyEnabled) return true;

  if (
    !enableOnMobile &&
    typeof window.innerWidth === "number" &&
    window.innerWidth < mobileBreakpoint
  ) {
    return true;
  }

  // Reduced motion does not disable docking outright (the user may still want
  // their video to stay visible) — it only disables the animated transition.
  // That is handled in the component; nothing to suppress here.
  void respectReducedMotion;
  void dockAnimation;

  return false;
};

/**
 * Whether animated docking transitions should be used for this visitor.
 */
export const prefersReducedMotion = () => {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
