import { useEffect, useMemo, useRef, useState } from "react";
import Player from "./Player";
import QueueItem from "./QueueItem";
import Chapters from "./Chapters";
import { searchIcon } from "../../utils/icons";
import {
  readDeepLink,
  writeDeepLink,
  shuffleArray,
  formatTime,
} from "../../utils/functions";

const STORAGE_VERSION = "vpb.vp.v1";

const loadProgress = (key) => {
  if (typeof window === "undefined" || !key) return null;
  try {
    const raw = window.localStorage.getItem(`${STORAGE_VERSION}.${key}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
};

const saveProgress = (key, data) => {
  if (typeof window === "undefined" || !key) return;
  try {
    window.localStorage.setItem(
      `${STORAGE_VERSION}.${key}`,
      JSON.stringify(data),
    );
  } catch (e) {
    /* ignore quota errors */
  }
};

const Playlist = ({ attributes, clientId, inEditor = false }) => {
  const {
    items: rawItems = [],
    layout = "queue-right",
    startIndex = 0,
    loopQueue = false,
    shuffle = false,
    autoAdvance = true,
    autoAdvanceDelay = 5,
    showChapters = true,
    showSearch = true,
    rememberProgress = true,
    progressStorageKey = "",
    deepLinkEnabled = true,
    queueTitle = "Up Next",
  } = attributes;

  const storageKey = progressStorageKey || clientId || "video-playlist";

  // Build the order – optionally shuffle on first load.
  const items = useMemo(() => {
    if (!shuffle) return rawItems;
    return shuffleArray(rawItems);
  }, [rawItems, shuffle]);

  const [activeIndex, setActiveIndex] = useState(() => {
    let init = Math.max(0, Math.min(startIndex, items.length - 1));
    if (deepLinkEnabled) {
      const dl = readDeepLink();
      if (
        dl.index != null &&
        Number.isFinite(dl.index) &&
        dl.index >= 0 &&
        dl.index < items.length
      ) {
        init = dl.index;
      }
    }
    if (rememberProgress) {
      const persisted = loadProgress(storageKey);
      if (
        persisted &&
        Number.isFinite(persisted.activeIndex) &&
        persisted.activeIndex >= 0 &&
        persisted.activeIndex < items.length
      ) {
        init = persisted.activeIndex;
      }
    }
    return init;
  });

  const [watched, setWatched] = useState(() => {
    if (!rememberProgress) return {};
    const persisted = loadProgress(storageKey);
    return persisted?.watched || {};
  });

  const [currentTime, setCurrentTime] = useState(0);
  const playerElRef = useRef(null);

  // Initial seek time (deep link or stored position).
  const [initialSeek, setInitialSeek] = useState(() => {
    if (deepLinkEnabled) {
      const dl = readDeepLink();
      if (dl.time != null && Number.isFinite(dl.time) && dl.time > 0) {
        return dl.time;
      }
    }
    if (rememberProgress) {
      const persisted = loadProgress(storageKey);
      const t = persisted?.positions?.[items[activeIndex]?.id];
      if (Number.isFinite(t) && t > 0) return t;
    }
    return 0;
  });

  const [search, setSearch] = useState("");
  const [countdown, setCountdown] = useState(0);
  const countdownTimer = useRef(null);

  // Filtered queue (search) – kept indices stable by reading from items[].
  const visibleItems = useMemo(() => {
    if (!search.trim()) return items.map((it, idx) => ({ it, idx }));
    const q = search.trim().toLowerCase();
    return items
      .map((it, idx) => ({ it, idx }))
      .filter(({ it }) =>
        [it.title, it.description, it.badge]
          .filter(Boolean)
          .some((s) => String(s).toLowerCase().includes(q)),
      );
  }, [items, search]);

  // Persist progress.
  useEffect(() => {
    if (!rememberProgress) return;
    const data = loadProgress(storageKey) || {};
    data.activeIndex = activeIndex;
    data.watched = watched;
    saveProgress(storageKey, data);
  }, [activeIndex, watched, rememberProgress, storageKey]);

  // Persist position every few seconds.
  useEffect(() => {
    if (!rememberProgress) return;
    const id = items[activeIndex]?.id;
    if (!id || !currentTime) return;
    const data = loadProgress(storageKey) || {};
    data.positions = data.positions || {};
    data.positions[id] = currentTime;
    saveProgress(storageKey, data);
  }, [Math.floor(currentTime / 3), activeIndex, items, rememberProgress, storageKey]);

  // Deep link writer.
  useEffect(() => {
    if (!deepLinkEnabled) return;
    writeDeepLink(activeIndex, currentTime);
  }, [activeIndex, Math.floor(currentTime / 5), deepLinkEnabled]);

  // When the active item changes, reset initialSeek to either stored
  // position or zero (no carry-over from previous item).
  useEffect(() => {
    if (rememberProgress) {
      const persisted = loadProgress(storageKey);
      const t = persisted?.positions?.[items[activeIndex]?.id];
      setInitialSeek(Number.isFinite(t) && t > 0 ? t : 0);
    } else {
      setInitialSeek(0);
    }
    setCurrentTime(0);
    cancelCountdown();
  }, [activeIndex]);

  // Listen for hash changes (deep link navigation).
  useEffect(() => {
    if (!deepLinkEnabled || typeof window === "undefined") return undefined;
    const handler = () => {
      const dl = readDeepLink();
      if (
        dl.index != null &&
        dl.index >= 0 &&
        dl.index < items.length &&
        dl.index !== activeIndex
      ) {
        setActiveIndex(dl.index);
      }
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [deepLinkEnabled, items.length, activeIndex]);

  const cancelCountdown = () => {
    if (countdownTimer.current) {
      clearInterval(countdownTimer.current);
      countdownTimer.current = null;
    }
    setCountdown(0);
  };

  const goTo = (idx) => {
    cancelCountdown();
    if (idx < 0 || idx >= items.length) return;
    setActiveIndex(idx);
  };

  const advance = () => {
    const next = activeIndex + 1;
    if (next >= items.length) {
      if (loopQueue) goTo(0);
      return;
    }
    goTo(next);
  };

  const handleEnded = () => {
    // Mark watched.
    const id = items[activeIndex]?.id;
    if (id) setWatched((prev) => ({ ...prev, [id]: true }));

    if (!autoAdvance) return;
    if (activeIndex + 1 >= items.length && !loopQueue) return;

    const delay = Math.max(0, parseInt(autoAdvanceDelay, 10) || 0);
    if (delay === 0) {
      advance();
      return;
    }
    setCountdown(delay);
    let remaining = delay;
    countdownTimer.current = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(countdownTimer.current);
        countdownTimer.current = null;
        setCountdown(0);
        advance();
      } else {
        setCountdown(remaining);
      }
    }, 1000);
  };

  const handleTimeUpdate = (t) => {
    setCurrentTime(t);
  };

  const handleLoaded = (controller) => {
    playerElRef.current = controller;
  };

  const handleSeekChapter = (t) => {
    const ctrl = playerElRef.current;
    if (ctrl && typeof ctrl.seek === "function") {
      // Native <video>, YouTube and Vimeo all expose a uniform seek().
      ctrl.seek(t);
    } else {
      // Fallback (controller not ready yet): reload the embed at the timestamp.
      setInitialSeek(t);
    }
  };

  if (!items.length) {
    return (
      <div className="vpb-vp-root is-empty">
        <p>No playlist items configured.</p>
      </div>
    );
  }

  const activeItem = items[Math.min(activeIndex, items.length - 1)];
  const totalWatched = Object.values(watched).filter(Boolean).length;

  const headerLine = (
    <div className="vpb-vp-qhead">
      <div>
        <h3 className="vpb-vp-qhead-title">{queueTitle}</h3>
        <span className="vpb-vp-qhead-count">
          {totalWatched} / {items.length} watched
        </span>
      </div>
      {showSearch && (
        <div className="vpb-vp-qsearch">
          <span className="vpb-vp-qsearch-icon" aria-hidden="true">
            {searchIcon}
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search…"
            aria-label="Filter playlist"
          />
        </div>
      )}
    </div>
  );

  const queueList = (
    <div className="vpb-vp-qlist" role="listbox" aria-label="Playlist queue">
      {visibleItems.length === 0 && (
        <div className="vpb-vp-qempty">No matches.</div>
      )}
      {visibleItems.map(({ it, idx }) => (
        <QueueItem
          key={it.id || idx}
          item={it}
          index={idx}
          isActive={idx === activeIndex}
          isWatched={!!watched[it.id]}
          attributes={attributes}
          onSelect={goTo}
        />
      ))}
    </div>
  );

  const queuePanel = (
    <aside className="vpb-vp-queue" aria-label="Video queue">
      {headerLine}
      {queueList}
    </aside>
  );

  const stage = (
    <section className="vpb-vp-stage-wrap" aria-label="Active video">
      <div className="vpb-vp-stage">
        <Player
          key={activeItem.id || activeIndex}
          item={activeItem}
          attributes={attributes}
          startTime={initialSeek}
          onEnded={handleEnded}
          onTimeUpdate={handleTimeUpdate}
          onLoaded={handleLoaded}
          inEditor={inEditor}
        />

        {countdown > 0 && (
          <div className="vpb-vp-countdown" role="status">
            <div className="vpb-vp-countdown-inner">
              <span className="vpb-vp-countdown-up">Up next</span>
              <span className="vpb-vp-countdown-title">
                {items[activeIndex + 1]?.title || items[0]?.title}
              </span>
              <div className="vpb-vp-countdown-actions">
                <button
                  type="button"
                  className="vpb-vp-cd-btn is-cancel"
                  onClick={cancelCountdown}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="vpb-vp-cd-btn is-play"
                  onClick={() => {
                    cancelCountdown();
                    advance();
                  }}>
                  Play now ({countdown}s)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="vpb-vp-active-meta">
        <h2 className="vpb-vp-active-title">{activeItem.title}</h2>
        {activeItem.description && (
          <p className="vpb-vp-active-desc">{activeItem.description}</p>
        )}
        <div className="vpb-vp-active-row">
          <span className="vpb-vp-active-pos">
            {activeIndex + 1} of {items.length}
          </span>
          {currentTime > 0 && (
            <span className="vpb-vp-active-time">
              {formatTime(currentTime)}
            </span>
          )}
        </div>
      </div>

      {showChapters && (
        <Chapters
          item={activeItem}
          currentTime={currentTime}
          onSeek={handleSeekChapter}
        />
      )}
    </section>
  );

  return (
    <div className={`vpb-vp-root is-${layout}`}>
      {stage}
      {queuePanel}
    </div>
  );
};

export default Playlist;
