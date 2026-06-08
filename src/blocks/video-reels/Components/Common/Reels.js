import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Slide from "./Slide";
import Tile from "./Tile";
import { closeIcon } from "../../utils/icons";
import {
  readDeepLinkReel,
  writeDeepLinkReel,
} from "../../utils/functions";

const Reels = ({ attributes, isEditor = false }) => {
  const {
    reels: rawReels = [],
    layout = "feed-fullscreen",
    startMuted = true,
    snapBehavior = "mandatory",
    swipeGestures = true,
    keyboardNavigation = true,
    autoplayThreshold = 60,
    preloadStrategy = "next-one",
    thumbnailHoverPreview = true,
    deepLinkHash = true,
    maxClipsPerPage = 0,
    loadMoreLabel = "Load more",
  } = attributes;

  const reels = rawReels;
  const total = reels.length;

  const [visibleCount, setVisibleCount] = useState(() => {
    if (!maxClipsPerPage || maxClipsPerPage <= 0) return total;
    return Math.min(maxClipsPerPage, total);
  });

  useEffect(() => {
    if (!maxClipsPerPage || maxClipsPerPage <= 0) setVisibleCount(total);
  }, [maxClipsPerPage, total]);

  const visible = useMemo(
    () => reels.slice(0, visibleCount),
    [reels, visibleCount],
  );

  const [activeIndex, setActiveIndex] = useState(() => {
    if (deepLinkHash) {
      const dl = readDeepLinkReel();
      if (dl != null && dl >= 0 && dl < total) return dl;
    }
    return 0;
  });
  const [isMuted, setIsMuted] = useState(!!startMuted);
  const [modalIndex, setModalIndex] = useState(null);

  const containerRef = useRef(null);
  const visibilityRef = useRef({});

  // Track per-slide intersection ratios; pick most-visible as active.
  const onSlideVisibility = useCallback(
    (index, ratio) => {
      visibilityRef.current[index] = ratio;
      let best = -1;
      let bestRatio = 0;
      Object.keys(visibilityRef.current).forEach((k) => {
        const r = visibilityRef.current[k];
        if (r > bestRatio) {
          bestRatio = r;
          best = parseInt(k, 10);
        }
      });
      if (best >= 0 && bestRatio * 100 >= autoplayThreshold) {
        setActiveIndex((prev) => (prev === best ? prev : best));
      }
    },
    [autoplayThreshold],
  );

  useEffect(() => {
    if (!deepLinkHash) return;
    if (isEditor) return;
    writeDeepLinkReel(activeIndex);
  }, [activeIndex, deepLinkHash, isEditor]);

  const goTo = useCallback(
    (delta) => {
      setActiveIndex((prev) => {
        const next = Math.max(0, Math.min(visibleCount - 1, prev + delta));
        const root = containerRef.current;
        if (root) {
          const slide = root.querySelector(
            `.vpb-vr-slide[data-reel-index="${next}"]`,
          );
          if (slide && slide.scrollIntoView) {
            slide.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
        return next;
      });
    },
    [visibleCount],
  );

  useEffect(() => {
    if (!keyboardNavigation) return undefined;
    if (isEditor) return undefined;
    const handler = (e) => {
      if (modalIndex != null) {
        if (e.key === "Escape") setModalIndex(null);
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          setModalIndex((i) => Math.min(visibleCount - 1, (i || 0) + 1));
        }
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          setModalIndex((i) => Math.max(0, (i || 0) - 1));
        }
        return;
      }
      if (!containerRef.current) return;
      const within = containerRef.current.contains(document.activeElement);
      if (!within && document.activeElement !== document.body) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goTo(1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(-1);
      }
      if (e.key === "m" || e.key === "M") {
        setIsMuted((m) => !m);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goTo, keyboardNavigation, isEditor, modalIndex, visibleCount]);

  // Touch swipe (vertical / horizontal depending on layout)
  useEffect(() => {
    if (!swipeGestures) return undefined;
    if (isEditor) return undefined;
    const el = containerRef.current;
    if (!el) return undefined;
    let startX = 0;
    let startY = 0;
    let tracking = false;
    const isHoriz = layout === "inline-strip";
    const threshold = 50;
    const onStart = (e) => {
      const t = e.touches ? e.touches[0] : e;
      startX = t.clientX;
      startY = t.clientY;
      tracking = true;
    };
    const onEnd = (e) => {
      if (!tracking) return;
      tracking = false;
      const t = e.changedTouches ? e.changedTouches[0] : e;
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (isHoriz) {
        if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
          goTo(dx < 0 ? 1 : -1);
        }
      } else {
        if (Math.abs(dy) > threshold && Math.abs(dy) > Math.abs(dx)) {
          goTo(dy < 0 ? 1 : -1);
        }
      }
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [goTo, layout, swipeGestures, isEditor]);

  const toggleMute = () => setIsMuted((m) => !m);

  const requestFullscreen = (el) => {
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  };

  const shouldPreload = (idx) => {
    if (preloadStrategy === "none") return false;
    if (preloadStrategy === "metadata") return true;
    if (preloadStrategy === "next-one") return Math.abs(idx - activeIndex) <= 1;
    if (preloadStrategy === "next-two") return Math.abs(idx - activeIndex) <= 2;
    return false;
  };

  if (!total) {
    return (
      <div className="vpb-vr-root vpb-vr-empty">
        <p>No reels yet. Use the inspector to add your first clip.</p>
      </div>
    );
  }

  // ---------- Grid layout (grid-then-fullscreen) ----------
  if (layout === "grid-then-fullscreen") {
    return (
      <div
        className="vpb-vr-root is-grid"
        ref={containerRef}
        style={{ maxWidth: "none" }}>
        <div className="vpb-vr-grid">
          {visible.map((reel, idx) => (
            <Tile
              key={reel.id || idx}
              reel={reel}
              index={idx}
              hoverPreview={!!thumbnailHoverPreview && !isEditor}
              onOpen={(i) => setModalIndex(i)}
            />
          ))}
        </div>
        {!!maxClipsPerPage && visibleCount < total && (
          <button
            type="button"
            className="vpb-vr-load-more"
            onClick={() =>
              setVisibleCount((c) => Math.min(total, c + maxClipsPerPage))
            }>
            {loadMoreLabel}
          </button>
        )}

        {modalIndex != null && !isEditor && (
          <div
            className="vpb-vr-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Reels viewer">
            <button
              type="button"
              className="vpb-vr-modal-close"
              onClick={() => setModalIndex(null)}
              aria-label="Close">
              {closeIcon}
            </button>
            <div className="vpb-vr-modal-inner">
              <Slide
                reel={visible[modalIndex]}
                index={modalIndex}
                total={visible.length}
                attributes={attributes}
                isActive
                isEditor={false}
                isMuted={isMuted}
                onToggleMute={toggleMute}
                onVisibilityChange={() => {}}
                onFullscreenRequest={requestFullscreen}
                shouldPreload
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---------- Inline strip (horizontal swipe) ----------
  if (layout === "inline-strip") {
    return (
      <div
        className="vpb-vr-root is-strip"
        ref={containerRef}
        tabIndex={0}>
        <div className="vpb-vr-strip">
          {visible.map((reel, idx) => (
            <Slide
              key={reel.id || idx}
              reel={reel}
              index={idx}
              total={visible.length}
              attributes={attributes}
              isActive={idx === activeIndex}
              isEditor={isEditor}
              isMuted={isMuted}
              onToggleMute={toggleMute}
              onVisibilityChange={onSlideVisibility}
              onFullscreenRequest={requestFullscreen}
              shouldPreload={shouldPreload(idx)}
            />
          ))}
        </div>
      </div>
    );
  }

  // ---------- Default feed-fullscreen (vertical scroll-snap) ----------
  return (
    <div className="vpb-vr-root is-feed" ref={containerRef} tabIndex={0}>
      <div
        className={`vpb-vr-feed is-snap-${snapBehavior}`}>
        {visible.map((reel, idx) => (
          <Slide
            key={reel.id || idx}
            reel={reel}
            index={idx}
            total={visible.length}
            attributes={attributes}
            isActive={idx === activeIndex}
            isEditor={isEditor}
            isMuted={isMuted}
            onToggleMute={toggleMute}
            onVisibilityChange={onSlideVisibility}
            onFullscreenRequest={requestFullscreen}
            shouldPreload={shouldPreload(idx)}
          />
        ))}
      </div>
      {!!maxClipsPerPage && visibleCount < total && (
        <button
          type="button"
          className="vpb-vr-load-more"
          onClick={() =>
            setVisibleCount((c) => Math.min(total, c + maxClipsPerPage))
          }>
          {loadMoreLabel}
        </button>
      )}
    </div>
  );
};

export default Reels;
