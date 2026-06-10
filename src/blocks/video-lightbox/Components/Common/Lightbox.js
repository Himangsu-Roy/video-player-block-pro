import { useEffect, useId, useRef, useState } from "react";
import Trigger from "./Trigger";
import Modal from "./Modal";
import { readCookie, writeCookie } from "../../utils/functions";

/**
 * Top-level wrapper for the Video Lightbox.
 *
 * Owns: open/close state, all auto-open triggers (delay / exit-intent /
 * url hash), cookie gating, and the deep-link contract.
 *
 * The actual modal markup is built only when `open === true`, which keeps
 * the initial DOM (and the player iframe) cost down to whatever the
 * trigger renders.
 */
const Lightbox = ({ attributes, blockId, inEditor = false }) => {
  const {
    alignment = "center",
    openTrigger = "click",
    openDelaySeconds = 5,
    urlHashKey = "",
    cookieKey = "",
  } = attributes;

  const [open, setOpen] = useState(false);
  const fallbackId = useId();
  // The frontend mount passes the rendered wrapper id (e.g. "vpbVideoLightbox-1");
  // the editor preview can fall back to the React-generated useId.
  const effectiveId = blockId || `vpb-vl-${fallbackId.replace(/[:]/g, "")}`;
  const blockIdRef = useRef(effectiveId);
  const dialogId = `${effectiveId}-dialog`;

  // Honour URL-hash deep links (#<urlHashKey> auto-opens the modal).
  useEffect(() => {
    if (inEditor) return undefined;
    if (typeof window === "undefined") return undefined;

    const matchesHash = () => {
      if (!urlHashKey) return false;
      const h = (window.location.hash || "").replace(/^#/, "");
      // Support both `#watch=hero` and `#hero` shorthand.
      if (h === urlHashKey) return true;
      const [k, v] = h.split("=");
      return k === "watch" && v === urlHashKey;
    };

    if (openTrigger === "urlHash" || urlHashKey) {
      if (matchesHash()) setOpen(true);
      const onHash = () => {
        if (matchesHash()) setOpen(true);
      };
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }
    return undefined;
  }, [inEditor, urlHashKey, openTrigger]);

  // Honour the auto-open-after-delay trigger.
  useEffect(() => {
    if (inEditor) return undefined;
    if (openTrigger !== "autoDelay") return undefined;
    if (cookieKey && readCookie(cookieKey)) return undefined;

    const ms = Math.max(0, Number(openDelaySeconds) || 0) * 1000;
    const t = setTimeout(() => {
      setOpen(true);
      if (cookieKey) writeCookie(cookieKey, "1");
    }, ms);
    return () => clearTimeout(t);
  }, [inEditor, openTrigger, openDelaySeconds, cookieKey]);

  // Honour the exit-intent trigger (mouse leaves the viewport top).
  useEffect(() => {
    if (inEditor) return undefined;
    if (openTrigger !== "exitIntent") return undefined;
    if (typeof document === "undefined") return undefined;
    if (cookieKey && readCookie(cookieKey)) return undefined;

    let armed = true;
    const onLeave = (e) => {
      if (!armed) return;
      // Only fire when the cursor crosses the top of the viewport.
      if (e.clientY <= 0) {
        armed = false;
        setOpen(true);
        if (cookieKey) writeCookie(cookieKey, "1");
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [inEditor, openTrigger, cookieKey]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={`vpb-vl-align-${alignment}`}>
      <div className="vpb-vl-wrap" style={{ position: "relative" }}>
        <Trigger
          attributes={attributes}
          onOpen={handleOpen}
          a11yId={dialogId}
        />
      </div>
      {open && (
        <Modal
          attributes={attributes}
          blockId={blockIdRef.current}
          onClose={handleClose}
          inEditor={inEditor}
        />
      )}
    </div>
  );
};

export default Lightbox;
