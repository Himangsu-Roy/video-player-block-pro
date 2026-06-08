const iconColor = "#136EF5";

export const blockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 24 24"
    fill="none"
    stroke={iconColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="video-playlist-icon">
    <rect x="2" y="4" width="13" height="14" rx="2" />
    <polygon points="7,8 7,14 12,11" fill={iconColor} stroke="none" />
    <line x1="17" y1="6" x2="22" y2="6" />
    <line x1="17" y1="10" x2="22" y2="10" />
    <line x1="17" y1="14" x2="22" y2="14" />
    <line x1="17" y1="18" x2="20" y2="18" />
  </svg>
);

export const playIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="6,4 20,12 6,20" fill="currentColor" />
  </svg>
);

export const pauseIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="5" width="4" height="14" fill="currentColor" />
    <rect x="14" y="5" width="4" height="14" fill="currentColor" />
  </svg>
);

export const checkIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polyline
      points="4,12 10,18 20,6"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const searchIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="11"
      cy="11"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="16"
      y1="16"
      x2="21"
      y2="21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
