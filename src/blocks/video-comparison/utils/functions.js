/**
 * Aspect ratio string ('16:9') -> CSS aspect-ratio value ('16 / 9').
 */
export const aspectToCss = (ar, custom) => {
  if (!ar) return "16 / 9";
  if (ar === "custom") {
    const c = (custom || "21:9").replace(":", " / ");
    return c;
  }
  return ar.replace(":", " / ");
};

/**
 * Clamp a number to [min, max].
 */
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
