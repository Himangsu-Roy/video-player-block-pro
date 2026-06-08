import { useRef, useState } from "react";
import { playIcon } from "../../utils/icons";
import { buildSrcUrl, resolvePoster } from "../../utils/functions";

const Tile = ({ reel, index, onOpen, hoverPreview }) => {
  const videoRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const poster = resolvePoster(reel);
  const isIframe = reel.source === "youtube" || reel.source === "vimeo";
  const srcUrl = !isIframe ? buildSrcUrl(reel) : "";

  const onEnter = () => {
    if (!hoverPreview || isIframe) return;
    setHovering(true);
    const v = videoRef.current;
    if (v) {
      try {
        v.muted = true;
        v.play().catch(() => {});
      } catch (e) {
        /* ignore */
      }
    }
  };
  const onLeave = () => {
    setHovering(false);
    const v = videoRef.current;
    if (v) {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        /* ignore */
      }
    }
  };

  return (
    <button
      type="button"
      className="vpb-vr-tile"
      onClick={() => onOpen && onOpen(index)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      aria-label={reel.title || `Reel ${index + 1}`}>
      {poster && <img src={poster} alt={reel.title || ""} loading="lazy" />}
      {hoverPreview && !isIframe && srcUrl && hovering && (
        <video
          ref={videoRef}
          src={srcUrl}
          muted
          playsInline
          loop
          preload="metadata"
        />
      )}
      <span className="vpb-vr-tile-play">{playIcon}</span>
      {(reel.title || reel.authorName) && (
        <span className="vpb-vr-tile-info">
          {reel.title || reel.authorName}
        </span>
      )}
    </button>
  );
};

export default Tile;
