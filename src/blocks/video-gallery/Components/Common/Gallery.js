import { useEffect, useMemo, useState } from "react";
import { __ } from "@wordpress/i18n";
import Tile from "./Tile";
import Carousel from "./Carousel";
import Lightbox from "./Lightbox";
import PlayerEmbed from "./PlayerEmbed";
import { collectCategories, resolvePoster } from "../../utils/functions";

const ALL = "__all__";

const Filters = ({ categories, active, onChange, filterStyle }) => {
  if (!categories.length) return null;

  if (filterStyle === "dropdown") {
    return (
      <div className="vpb-vg-filters is-dropdown">
        <select
          className="vpb-vg-filter-select"
          value={active}
          onChange={(e) => onChange(e.target.value)}
          aria-label={__("Filter videos by category", "video-player-block")}
        >
          <option value={ALL}>{__("All", "video-player-block")}</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={`vpb-vg-filters is-${filterStyle || "pills"}`}>
      <button
        type="button"
        className={`vpb-vg-filter-btn ${active === ALL ? "is-active" : ""}`}
        onClick={() => onChange(ALL)}
      >
        {__("All", "video-player-block")}
      </button>
      {categories.map((c) => (
        <button
          type="button"
          key={c}
          className={`vpb-vg-filter-btn ${active === c ? "is-active" : ""}`}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

const Gallery = ({ attributes, isEditor = false }) => {
  const {
    videos = [],
    layout = "grid",
    playbackMode = "lightbox",
    showFilters,
    filterStyle,
    autoplayNext,
    loop,
    emptyStateText,
  } = attributes;

  const [activeFilter, setActiveFilter] = useState(ALL);
  const [openIndex, setOpenIndex] = useState(-1);
  const [inlineId, setInlineId] = useState(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const categories = useMemo(() => collectCategories(videos), [videos]);

  const filtered = useMemo(() => {
    if (activeFilter === ALL) return videos;
    return videos.filter((v) => v?.category === activeFilter);
  }, [videos, activeFilter]);

  // When the filter changes (or the underlying videos change), reset
  // openIndex/featuredIndex/inlineId so we never point at a stale or
  // out-of-range item. This is required when filters produce an empty
  // set or when the currently-playing video is filtered out.
  useEffect(() => {
    setOpenIndex(-1);
    setInlineId(null);
    setFeaturedIndex(0);
  }, [activeFilter, videos]);

  const openVideo = (video) => {
    const i = filtered.findIndex((v) => v.id === video.id);

    if (playbackMode === "inline") {
      setInlineId(video.id);
      return;
    }
    if (playbackMode === "featured") {
      setFeaturedIndex(Math.max(0, i));
      return;
    }
    setOpenIndex(i);
  };

  const closeLightbox = () => setOpenIndex(-1);

  const advance = (delta) => {
    setOpenIndex((curr) => {
      if (curr < 0) return curr;
      const next = curr + delta;
      if (next < 0) return loop ? filtered.length - 1 : 0;
      if (next >= filtered.length) return loop ? 0 : filtered.length - 1;
      return next;
    });
  };

  // Featured (playlist) mode handlers
  const onFeaturedEnded = () => {
    if (!autoplayNext) return;
    const next = featuredIndex + 1;
    if (next >= filtered.length) {
      if (loop) setFeaturedIndex(0);
      return;
    }
    setFeaturedIndex(next);
  };

  const renderTiles = (items) =>
    items.map((v) => {
      if (playbackMode === "inline" && inlineId === v.id) {
        return (
          <div key={v.id} className="vpb-vg-tile" style={{ cursor: "default" }}>
            <PlayerEmbed video={v} attributes={attributes} isEditor={isEditor} />
          </div>
        );
      }
      return (
        <Tile
          key={v.id}
          video={v}
          attributes={attributes}
          onSelect={openVideo}
        />
      );
    });

  const renderLayoutContainer = () => {
    if (!filtered.length) {
      return (
        <div className="vpb-vg-empty">
          {emptyStateText || __("No videos to display.", "video-player-block")}
        </div>
      );
    }

    if (layout === "carousel") {
      return (
        <Carousel
          items={filtered}
          attributes={attributes}
          onSelect={openVideo}
        />
      );
    }

    if (layout === "masonry") {
      return <div className="vpb-vg-masonry">{renderTiles(filtered)}</div>;
    }

    if (layout === "bento") {
      return <div className="vpb-vg-bento">{renderTiles(filtered)}</div>;
    }

    return <div className="vpb-vg-grid">{renderTiles(filtered)}</div>;
  };

  const renderFeatured = () => {
    if (!filtered.length) {
      return (
        <div className="vpb-vg-empty">
          {emptyStateText || __("No videos to display.", "video-player-block")}
        </div>
      );
    }
    const current = filtered[Math.min(featuredIndex, filtered.length - 1)];
    return (
      <div className="vpb-vg-featured">
        <div className="vpb-vg-stage">
          <PlayerEmbed
            key={current.id}
            video={current}
            attributes={attributes}
            onEnded={onFeaturedEnded}
            isEditor={isEditor}
          />
        </div>
        <div className="vpb-vg-playlist" role="listbox">
          {filtered.map((v, i) => (
            <div
              key={v.id}
              className={`vpb-vg-pitem ${i === featuredIndex ? "is-active" : ""}`}
              role="option"
              aria-selected={i === featuredIndex}
              tabIndex={0}
              onClick={() => setFeaturedIndex(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setFeaturedIndex(i);
                }
              }}
            >
              {resolvePoster(v) ? (
                <img
                  className="vpb-vg-pthumb"
                  src={resolvePoster(v)}
                  alt={v.title || ""}
                  loading="lazy"
                />
              ) : (
                <div
                  className="vpb-vg-pthumb"
                  style={{ background: "#1f2937" }}
                />
              )}
              <div className="vpb-vg-pmeta">
                <h4 className="vpb-vg-ptitle">{v.title}</h4>
                {v.duration && (
                  <span className="vpb-vg-pdur">{v.duration}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const showFiltersUI = showFilters && categories.length > 0;

  return (
    <div className="vpb-vg-root">
      {showFiltersUI && (
        <Filters
          categories={categories}
          active={activeFilter}
          onChange={setActiveFilter}
          filterStyle={filterStyle}
        />
      )}

      {playbackMode === "featured" ? renderFeatured() : renderLayoutContainer()}

      {playbackMode === "lightbox" && openIndex >= 0 && (
        <Lightbox
          video={filtered[openIndex]}
          attributes={attributes}
          onClose={closeLightbox}
          onPrev={() => advance(-1)}
          onNext={() => advance(1)}
          showNav={filtered.length > 1}
          isEditor={isEditor}
        />
      )}
    </div>
  );
};

export default Gallery;
