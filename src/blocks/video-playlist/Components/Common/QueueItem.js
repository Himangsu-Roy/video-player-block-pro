import { resolvePoster } from "../../utils/functions";
import { checkIcon, playIcon } from "../../utils/icons";

const QueueItem = ({
  item,
  index,
  isActive,
  isWatched,
  attributes,
  onSelect,
}) => {
  const {
    showThumbnails = true,
    showDuration = true,
    showDescription = true,
    showWatchedCheckmarks = true,
    showCounter = true,
  } = attributes;

  const poster = resolvePoster(item);

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(index);
    }
  };

  return (
    <div
      className={`vpb-vp-qitem ${isActive ? "is-active" : ""} ${
        isWatched ? "is-watched" : ""
      }`}
      role="option"
      aria-selected={isActive}
      tabIndex={0}
      onClick={() => onSelect(index)}
      onKeyDown={handleKey}>
      {showCounter && <span className="vpb-vp-qnum">{index + 1}</span>}

      {showThumbnails && (
        <div className="vpb-vp-qthumb-wrap">
          {poster ? (
            <img
              className="vpb-vp-qthumb"
              src={poster}
              alt={item.title || ""}
              loading="lazy"
            />
          ) : (
            <div className="vpb-vp-qthumb is-placeholder" />
          )}

          {isActive ? (
            <span className="vpb-vp-qbadge is-playing" aria-hidden="true">
              {playIcon}
            </span>
          ) : (
            <span className="vpb-vp-qbadge is-play-hover" aria-hidden="true">
              {playIcon}
            </span>
          )}

          {showDuration && item.duration && (
            <span className="vpb-vp-qdur">{item.duration}</span>
          )}
        </div>
      )}

      <div className="vpb-vp-qmeta">
        <div className="vpb-vp-qtitle-row">
          <h4 className="vpb-vp-qtitle">{item.title || "Untitled"}</h4>
          {item.badge && (
            <span className="vpb-vp-qpill">{item.badge}</span>
          )}
        </div>

        {showDescription && item.description && (
          <p className="vpb-vp-qdesc">{item.description}</p>
        )}

        {!showThumbnails && showDuration && item.duration && (
          <span className="vpb-vp-qdur is-inline">{item.duration}</span>
        )}
      </div>

      {showWatchedCheckmarks && isWatched && !isActive && (
        <span className="vpb-vp-qcheck" aria-label="Watched">
          {checkIcon}
        </span>
      )}
    </div>
  );
};

export default QueueItem;
