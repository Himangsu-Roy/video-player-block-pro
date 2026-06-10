import { useEffect, useRef, useState } from "react";

/**
 * Editor-only YouTube/Vimeo (or any third-party) embed for the apiVersion-3
 * canvas.
 *
 * Under WordPress Studio the editor canvas is a sandboxed iframe that lacks
 * `allow-same-origin`, so any third-party embed nested inside it crashes and
 * shows a black box. We render the embed iframe into the TOP-LEVEL admin window
 * (a real, unsandboxed origin) and keep it positioned over a placeholder that
 * lives in the canvas. On the frontend this component is never used — callers
 * render a normal inline iframe there.
 *
 * `className` / `style` are applied to the in-canvas placeholder so it can fill
 * whatever container the block uses (modal frame, tile, stage, etc.).
 *
 * `zIndex` allows positioning the portaled embed. For overlay widgets/modals,
 * a high z-index (e.g. 100000) keeps it on top. For background videos, a low
 * z-index (e.g. 0) coupled with transparent editor canvas styles lets the embed
 * sit behind the block's text/controls.
 */
const EditorEmbedPortal = ({ src, title, allow, className, style, zIndex = 100000, clickThrough = false }) => {
  const placeholderRef = useRef(null);
  const portalRoot = useRef(null);
  const [rect, setRect] = useState(null);

  // Build the container + embed iframe in the top-level admin document.
  useEffect(() => {
    const topDoc = window.top?.document || window.document;
    const div = topDoc.createElement("div");
    // If zIndex is low (e.g. background video), or the caller opts into
    // click-through (e.g. a scrollable reels feed), disable pointer-events so
    // the overlay doesn't hijack clicks/wheel.
    const isBg = zIndex <= 0;
    const pointerEvents = isBg || clickThrough ? "none" : "auto";
    div.style.cssText =
      `position:fixed;z-index:${zIndex};overflow:hidden;background:#000;pointer-events:${pointerEvents};`;

    const iframe = topDoc.createElement("iframe");
    iframe.src = src;
    iframe.title = title || "Video";
    if (allow) iframe.setAttribute("allow", allow);
    iframe.setAttribute("allowfullscreen", "");
    
    // For background videos, scale up and center the iframe to achieve cover/crop behavior
    // and hide YouTube/Vimeo control bars, matching the frontend CSS.
    if (isBg) {
      iframe.style.cssText = "position:absolute;width:300%;height:300%;top:-100%;left:-100%;border:0;display:block;";
    } else {
      iframe.style.cssText = "width:100%;height:100%;border:0;display:block;";
    }

    div.appendChild(iframe);
    topDoc.body.appendChild(div);
    portalRoot.current = div;

    return () => {
      div.remove();
      portalRoot.current = null;
    };
  }, [src, title, allow, zIndex, clickThrough]);

  // Track the placeholder position (walking iframe boundaries to top-window
  // coordinates) so the overlay stays aligned as the canvas scrolls.
  useEffect(() => {
    const update = () => {
      const el = placeholderRef.current;
      if (!el) return;

      let box = el.getBoundingClientRect();
      let win = el.ownerDocument.defaultView;
      while (win && win !== window.top) {
        const frameEl = win.frameElement;
        if (!frameEl) break;
        const frameBox = frameEl.getBoundingClientRect();
        box = {
          top: box.top + frameBox.top,
          left: box.left + frameBox.left,
          width: box.width,
          height: box.height,
        };
        win = frameEl.ownerDocument.defaultView;
      }

      setRect((prev) =>
        prev &&
        prev.top === box.top &&
        prev.left === box.left &&
        prev.width === box.width &&
        prev.height === box.height
          ? prev
          : { top: box.top, left: box.left, width: box.width, height: box.height },
      );
    };

    update();
    const id = setInterval(update, 200);
    return () => clearInterval(id);
  }, []);

  // Keep the top-window container positioned over the placeholder.
  useEffect(() => {
    if (!portalRoot.current || !rect) return;
    const s = portalRoot.current.style;
    s.top = `${rect.top}px`;
    s.left = `${rect.left}px`;
    s.width = `${rect.width}px`;
    s.height = `${rect.height}px`;
  }, [rect]);

  return (
    <div
      ref={placeholderRef}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: "180px", background: "transparent", ...style }}
    />
  );
};

export default EditorEmbedPortal;
