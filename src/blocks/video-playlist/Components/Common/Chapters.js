import { formatTime } from "../../utils/functions";

const Chapters = ({ item, currentTime, onSeek }) => {
  const chapters = Array.isArray(item?.chapters) ? item.chapters : [];
  if (!chapters.length) return null;

  return (
    <div className="vpb-vp-chapters" aria-label="Chapters">
      <h5 className="vpb-vp-chapters-title">Chapters</h5>
      <ul className="vpb-vp-chapters-list">
        {chapters.map((c, i) => {
          const next = chapters[i + 1];
          const isActive =
            currentTime >= (c.time || 0) &&
            (next == null || currentTime < (next.time || 0));
          return (
            <li
              key={`${c.time}-${i}`}
              className={`vpb-vp-chapter ${isActive ? "is-active" : ""}`}>
              <button
                type="button"
                className="vpb-vp-chapter-btn"
                onClick={() => onSeek && onSeek(c.time || 0)}>
                <span className="vpb-vp-chapter-time">
                  {formatTime(c.time || 0)}
                </span>
                <span className="vpb-vp-chapter-label">
                  {c.label || `Chapter ${i + 1}`}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chapters;
