import { aspectToCss, shadowToCss } from "../../utils/functions";

/**
 * Per-instance scoped CSS for the Interactive Video block. Inlined as a
 * <style> tag so the rules apply both inside the editor canvas and on the
 * frontend without leaking to other blocks.
 */
const Style = ({ attributes, id }) => {
  const {
    aspectRatio = "16:9",
    containerMaxWidth = "960px",
    borderRadius = 10,
    boxShadow = "md",
    accentColor = "#136EF5",
    overlayBgColor = "rgba(15,15,15,0.85)",
    overlayTextColor = "#ffffff",
    chapterListBgColor = "#f7f8fb",
    chapterListTextColor = "#111827",
    alignment = "center",
  } = attributes;

  const sel = `#${id}`;
  const ar = aspectToCss(aspectRatio);
  const shadow = shadowToCss(boxShadow);

  const justify =
    alignment === "left"
      ? "flex-start"
      : alignment === "right"
      ? "flex-end"
      : "center";

  const css = `
    ${sel} { display: flex; justify-content: ${justify}; }
    ${sel} .vpb-iv-wrap {
      width: 100%;
      max-width: ${containerMaxWidth || "100%"};
    }
    ${sel} .vpb-iv-stage {
      position: relative;
      width: 100%;
      aspect-ratio: ${ar};
      background: #000;
      border-radius: ${borderRadius}px;
      overflow: hidden;
      box-shadow: ${shadow};
    }
    ${sel} .vpb-iv-stage video,
    ${sel} .vpb-iv-stage iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
    }
    ${sel} .vpb-iv-overlays {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    ${sel} .vpb-iv-overlay {
      position: absolute;
      max-width: 70%;
      pointer-events: auto;
      transition: opacity 240ms ease, transform 240ms ease;
    }
    ${sel} .vpb-iv-overlay--text,
    ${sel} .vpb-iv-overlay--image,
    ${sel} .vpb-iv-overlay--cta-card {
      background: ${overlayBgColor};
      color: ${overlayTextColor};
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 14px;
      line-height: 1.4;
      box-shadow: 0 6px 18px rgba(0,0,0,0.25);
    }
    ${sel} .vpb-iv-overlay--image img {
      display: block;
      max-width: 220px;
      max-height: 140px;
      border-radius: 6px;
      margin-bottom: 8px;
    }
    ${sel} .vpb-iv-cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
      text-decoration: none;
      cursor: pointer;
      border: 2px solid transparent;
      transition: transform 160ms ease, box-shadow 160ms ease;
    }
    ${sel} .vpb-iv-cta:hover { transform: translateY(-1px); }
    ${sel} .vpb-iv-cta--filled { background: ${accentColor}; color: #fff; }
    ${sel} .vpb-iv-cta--outline {
      background: transparent;
      border-color: ${accentColor};
      color: ${accentColor};
    }
    ${sel} .vpb-iv-cta--ghost {
      background: rgba(255,255,255,0.18);
      color: #fff;
      backdrop-filter: blur(6px);
    }
    ${sel} .vpb-iv-cta--pill {
      background: ${accentColor};
      color: #fff;
      border-radius: 999px;
    }
    ${sel} .vpb-iv-hotspot {
      width: 28px;
      height: 28px;
      background: ${accentColor};
      border: 2px solid #fff;
      box-shadow: 0 0 0 6px rgba(19,110,245,0.18);
      cursor: pointer;
      display: block;
    }
    ${sel} .vpb-iv-hotspot--circle { border-radius: 50%; }
    ${sel} .vpb-iv-hotspot--square { border-radius: 4px; }
    ${sel} .vpb-iv-hotspot--diamond { transform: rotate(45deg); border-radius: 4px; }
    ${sel} .vpb-iv-hotspot--pulse::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: 0 0 0 0 ${accentColor};
      animation: vpbIvPulse 1.6s infinite;
    }
    @keyframes vpbIvPulse {
      0%   { box-shadow: 0 0 0 0 rgba(19,110,245,0.55); }
      70%  { box-shadow: 0 0 0 20px rgba(19,110,245,0); }
      100% { box-shadow: 0 0 0 0 rgba(19,110,245,0); }
    }
    ${sel} .vpb-iv-pos--top-left      { top: 12px; left: 12px; }
    ${sel} .vpb-iv-pos--top-center    { top: 12px; left: 50%; transform: translateX(-50%); }
    ${sel} .vpb-iv-pos--top-right     { top: 12px; right: 12px; }
    ${sel} .vpb-iv-pos--middle-left   { top: 50%; left: 12px; transform: translateY(-50%); }
    ${sel} .vpb-iv-pos--center        { top: 50%; left: 50%; transform: translate(-50%, -50%); }
    ${sel} .vpb-iv-pos--middle-right  { top: 50%; right: 12px; transform: translateY(-50%); }
    ${sel} .vpb-iv-pos--bottom-left   { bottom: 56px; left: 12px; }
    ${sel} .vpb-iv-pos--bottom-center { bottom: 56px; left: 50%; transform: translateX(-50%); }
    ${sel} .vpb-iv-pos--bottom-right  { bottom: 56px; right: 12px; }

    ${sel} .vpb-iv-endscreen {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 24px;
      gap: 10px;
    }
    ${sel} .vpb-iv-endscreen h3 { margin: 0; font-size: 22px; }
    ${sel} .vpb-iv-endscreen p  { margin: 0; opacity: 0.85; font-size: 14px; }
    ${sel} .vpb-iv-endscreen-actions { display: flex; gap: 10px; margin-top: 8px; }
    ${sel} .vpb-iv-rewatch {
      background: transparent;
      color: inherit;
      border: 1px solid currentColor;
      padding: 8px 14px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    }

    ${sel} .vpb-iv-gate {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.78);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      z-index: 3;
    }
    ${sel} .vpb-iv-gate-card {
      background: #fff;
      color: #111;
      max-width: 380px;
      width: 100%;
      padding: 22px;
      border-radius: 10px;
      text-align: center;
    }
    ${sel} .vpb-iv-gate-card h3 { margin: 0 0 6px; font-size: 18px; }
    ${sel} .vpb-iv-gate-card p  { margin: 0 0 14px; font-size: 13px; opacity: 0.75; }
    ${sel} .vpb-iv-gate-card input[type="email"] {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 14px;
      box-sizing: border-box;
    }
    ${sel} .vpb-iv-gate-card button {
      width: 100%;
      padding: 10px 14px;
      border: 0;
      border-radius: 6px;
      background: ${accentColor};
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }

    ${sel} .vpb-iv-chapter-tick {
      position: absolute;
      top: 0;
      width: 3px;
      height: 100%;
      background: ${accentColor};
      opacity: 0.85;
    }

    ${sel} .vpb-iv-chapter-list {
      margin-top: 14px;
      padding: 14px 16px;
      background: ${chapterListBgColor};
      color: ${chapterListTextColor};
      border-radius: 8px;
    }
    ${sel} .vpb-iv-chapter-list ol { margin: 0; padding: 0; list-style: none; }
    ${sel} .vpb-iv-chapter-list li {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      cursor: pointer;
      font-size: 14px;
      border-bottom: 1px dashed rgba(0,0,0,0.08);
    }
    ${sel} .vpb-iv-chapter-list li:last-child { border-bottom: 0; }
    ${sel} .vpb-iv-chapter-list li .vpb-iv-chapter-time {
      color: ${accentColor};
      font-variant-numeric: tabular-nums;
      font-weight: 600;
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};

export default Style;
