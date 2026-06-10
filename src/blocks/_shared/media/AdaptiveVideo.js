import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

/**
 * A native <video> that transparently plays adaptive streams:
 *   - DASH (.mpd)  -> dash.js
 *   - HLS  (.m3u8) -> native on Safari, otherwise hls.js
 *   - mp4/webm     -> plain native playback
 *
 * Both libraries are loaded with dynamic import() so they are code-split and
 * only fetched when a DASH/HLS source actually plays. Any standard <video>
 * prop (controls, autoPlay, muted, loop, poster, className, style, event
 * handlers, children such as <track>) is passed straight through, and the
 * underlying element ref is forwarded so callers can drive play state.
 *
 * NOTE: `src` is handled imperatively (not rendered as an attribute) so the
 * adaptive libraries can attach cleanly.
 */
const isHlsUrl = (u) => /\.m3u8(\?|$)/i.test(u || "");
const isDashUrl = (u) => /\.mpd(\?|$)/i.test(u || "");

const AdaptiveVideo = forwardRef(
  ({ src, sourceType, muted, children, ...rest }, ref) => {
    const innerRef = useRef(null);
    useImperativeHandle(ref, () => innerRef.current, []);

    // React only sets the `muted` HTML attribute, not the DOM property, but
    // browsers consult the property when enforcing autoplay policy. Setting it
    // imperatively keeps muted autoplay (and mute toggles) working reliably.
    useEffect(() => {
      const el = innerRef.current;
      if (el) el.muted = !!muted;
    }, [muted]);

    useEffect(() => {
      const el = innerRef.current;
      if (!el || !src) return undefined;

      let destroyed = false;
      let hls = null;
      let dash = null;

      const type = (sourceType || "").toLowerCase();
      const wantDash = type === "dash" || isDashUrl(src);
      const wantHls = type === "hls" || isHlsUrl(src);

      if (wantDash) {
        import("dashjs")
          .then((mod) => {
            if (destroyed || !innerRef.current) return;
            const dashjs = mod.default || mod;
            dash = dashjs.MediaPlayer().create();
            dash.initialize(el, src, !!el.autoplay);
          })
          .catch(() => {
            el.src = src;
          });
      } else if (wantHls && !el.canPlayType("application/vnd.apple.mpegurl")) {
        import("hls.js")
          .then((mod) => {
            if (destroyed || !innerRef.current) return;
            const Hls = mod.default || mod;
            if (Hls.isSupported()) {
              hls = new Hls();
              hls.loadSource(src);
              hls.attachMedia(el);
              if (el.autoplay) {
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                  el.play().catch(() => {});
                });
              }
            } else {
              el.src = src;
            }
          })
          .catch(() => {
            el.src = src;
          });
      } else {
        el.src = src;
      }

      return () => {
        destroyed = true;
        if (hls) {
          try {
            hls.destroy();
          } catch (_) {
            /* ignore */
          }
        }
        if (dash) {
          try {
            dash.reset();
          } catch (_) {
            /* ignore */
          }
        }
      };
    }, [src, sourceType]);

    return (
      <video ref={innerRef} {...rest}>
        {children}
      </video>
    );
  },
);

AdaptiveVideo.displayName = "AdaptiveVideo";

export default AdaptiveVideo;
