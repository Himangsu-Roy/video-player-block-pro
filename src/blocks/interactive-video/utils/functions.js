/**
 * Helpers shared between the editor and the frontend hydration script.
 */

export const getYoutubeId = (url) => {
  if (!url) return "";
  const m = url.match(
    /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return m ? m[1] : "";
};

export const getVimeoId = (url) => {
  if (!url) return "";
  const m = url.match(/vimeo\.com\/(?:.*#|.*\/videos?\/)?([0-9]+)/i);
  return m ? m[1] : "";
};

export const detectSource = (url) => {
  if (!url) return "self";
  if (/(?:youtube\.com|youtu\.be)/i.test(url)) return "youtube";
  if (/vimeo\.com/i.test(url)) return "vimeo";
  return "self";
};

export const aspectToCss = (ar) => {
  if (!ar) return "16 / 9";
  return ar.replace(":", " / ");
};

export const shadowToCss = (preset) => {
  switch (preset) {
    case "sm":
      return "0 2px 4px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)";
    case "md":
      return "0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)";
    case "lg":
      return "0 20px 50px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.08)";
    default:
      return "none";
  }
};

export const formatTime = (sec) => {
  const s = Math.max(0, Math.floor(Number(sec) || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r < 10 ? "0" : ""}${r}`;
};

export const uid = (prefix = "ov") =>
  `${prefix}-${Math.random().toString(36).slice(2, 9)}`;

/**
 * Sanitise a single overlay object, applying defaults for any missing field.
 *
 * `endTime` falls back to `startTime + 5` when missing/zero so a newly
 * inserted overlay is visible without the author having to set both fields.
 */
export const normaliseOverlay = (o = {}) => {
  const startTime = Number(o.startTime) || 0;
  const rawEnd = Number(o.endTime);
  const endTime = Number.isFinite(rawEnd) && rawEnd > startTime ? rawEnd : startTime + 5;
  return ({
  id: o.id || uid("ov"),
  type: o.type || "cta",
  startTime,
  endTime,
  position: o.position || "bottom-right",
  content: o.content || "",
  ctaLabel: o.ctaLabel || "",
  ctaUrl: o.ctaUrl || "",
  ctaTarget: o.ctaTarget || "_blank",
  ctaStyle: o.ctaStyle || "filled",
  bgColor: o.bgColor || "#136EF5",
  textColor: o.textColor || "#ffffff",
  borderRadius: typeof o.borderRadius === "number" ? o.borderRadius : 8,
  imageUrl: o.imageUrl || "",
  hotspotShape: o.hotspotShape || "circle",
  pulse: o.pulse !== false,
  });
};

/**
 * Emit an analytics event using wp.hooks if available; falls back to a
 * window event so site-side scripts (GA, Plausible, custom) can listen.
 */
export const emitInteractiveEvent = (eventName, payload) => {
  try {
    if (typeof window !== "undefined" && window.wp?.hooks?.doAction) {
      window.wp.hooks.doAction(`vpb.interactiveVideo.${eventName}`, payload);
    }
    if (typeof window !== "undefined" && typeof CustomEvent === "function") {
      window.dispatchEvent(
        new CustomEvent(`vpbInteractiveVideo:${eventName}`, { detail: payload }),
      );
    }
  } catch (e) {
    // Swallow — analytics must never break playback.
  }
};
