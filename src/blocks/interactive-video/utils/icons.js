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
    className="interactive-video-icon"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polygon points="9,9 9,15 15,12" fill={iconColor} stroke="none" />
    <circle cx="18" cy="7" r="1.6" fill={iconColor} stroke="none" />
    <circle cx="5.5" cy="17" r="1.4" fill={iconColor} stroke="none" />
  </svg>
);

export const trashIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
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
