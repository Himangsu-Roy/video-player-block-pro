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
    className="video-comparison-icon"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <polyline points="9,9 6,12 9,15" />
    <polyline points="15,9 18,12 15,15" />
  </svg>
);

export const playIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="currentColor"
    aria-hidden="true"
  >
    <polygon points="7,5 19,12 7,19" />
  </svg>
);

export const pauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="currentColor"
    aria-hidden="true"
  >
    <rect x="6" y="5" width="4" height="14" />
    <rect x="14" y="5" width="4" height="14" />
  </svg>
);

export const muteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="currentColor"
    aria-hidden="true"
  >
    <polygon points="3,9 7,9 12,5 12,19 7,15 3,15" />
    <line x1="16" y1="9" x2="22" y2="15" stroke="currentColor" strokeWidth="2" />
    <line x1="22" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const volumeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="currentColor"
    aria-hidden="true"
  >
    <polygon points="3,9 7,9 12,5 12,19 7,15 3,15" />
    <path
      d="M16 8c1.5 1.2 2.5 2.6 2.5 4s-1 2.8-2.5 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const handleArrowsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="9,7 5,12 9,17" />
    <polyline points="15,7 19,12 15,17" />
  </svg>
);
