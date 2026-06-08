import { resolvePoster } from "../../utils/functions";

const PlayIcon = ({ style }) => {
  if (style === "triangle") {
    return null;
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

const Tile = ({ video, attributes, onSelect }) => {
  const {
    showTitle,
    showDuration,
    showDescription,
    showPlayIcon,
    playIconStyle,
    hoverEffect,
    lazyLoad,
  } = attributes;

  const poster = resolvePoster(video);

  return (
    <div
      className={`vpb-vg-tile is-hover-${hoverEffect}`}
      role="button"
      tabIndex={0}
      aria-label={video?.title || "Play video"}
      onClick={() => onSelect && onSelect(video)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect && onSelect(video);
        }
      }}
    >
      {poster ? (
        <img
          className="vpb-vg-thumb"
          src={poster}
          alt={video?.title || ""}
          loading={lazyLoad ? "lazy" : "eager"}
          decoding="async"
        />
      ) : (
        <div className="vpb-vg-thumb-placeholder" aria-hidden="true" />
      )}

      <div className="vpb-vg-overlay" aria-hidden="true" />

      {showPlayIcon && (
        <div
          className={`vpb-vg-play is-${playIconStyle || "circle"}`}
          aria-hidden="true"
        >
          <PlayIcon style={playIconStyle} />
        </div>
      )}

      {showDuration && video?.duration && (
        <span className="vpb-vg-duration">{video.duration}</span>
      )}

      {(showTitle || showDescription) && (
        <div className="vpb-vg-meta">
          {showTitle && video?.title && (
            <h3 className="vpb-vg-title-text">{video.title}</h3>
          )}
          {showDescription && video?.description && (
            <p className="vpb-vg-desc">{video.description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Tile;
