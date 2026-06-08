import { useEffect, useRef, useState } from "react";

/**
 * Editor-only YouTube/Vimeo player for the apiVersion-3 canvas.
 *
 * Under WordPress Studio the editor canvas is a sandboxed iframe that lacks
 * `allow-same-origin`, so any third-party embed nested inside it crashes and
 * shows a black box. To work around that we render the embed iframe into the
 * TOP-LEVEL admin window (a real, unsandboxed origin) and keep it positioned
 * over a placeholder that lives in the canvas — the same technique the main
 * video-player block uses for its YouTube/Vimeo preview.
 *
 * On the frontend this component is never used (PlayerEmbed renders a normal
 * inline iframe there); it is only mounted when `isEditor` is true.
 */
const EditorEmbedPortal = ({ src, title, allow }) => {
  const placeholderRef = useRef(null);
  const portalRoot = useRef(null);
  const [rect, setRect] = useState(null);

  // Build the container + embed iframe in the top-level admin document.
  useEffect(() => {
    const topDoc = window.top?.document || window.document;
    const div = topDoc.createElement("div");
    div.style.cssText =
      "position:fixed;z-index:100000;overflow:hidden;background:#000;pointer-events:auto;";

    const iframe = topDoc.createElement("iframe");
    iframe.src = src;
    iframe.title = title || "Video";
    if (allow) iframe.setAttribute("allow", allow);
    iframe.setAttribute("allowfullscreen", "");
    iframe.style.cssText = "width:100%;height:100%;border:0;display:block;";

    div.appendChild(iframe);
    topDoc.body.appendChild(div);
    portalRoot.current = div;

    return () => {
      div.remove();
      portalRoot.current = null;
    };
  }, [src, title, allow]);

  // Track the placeholder's position (walking iframe boundaries to top-window
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
      style={{ width: "100%", height: "100%", minHeight: "200px", background: "#000" }}
    />
  );
};

export default EditorEmbedPortal;
