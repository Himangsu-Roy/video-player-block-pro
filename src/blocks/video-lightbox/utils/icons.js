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
    className="video-lightbox-icon"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="12" cy="12" r="5" fill={iconColor} stroke="none" />
    <polygon points="11,10 11,14 14,12" fill="#ffffff" stroke="none" />
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

export const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </svg>
);
