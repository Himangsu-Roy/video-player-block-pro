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
    className="sticky-video-icon"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" opacity="0.45" />
    <rect
      x="12"
      y="12"
      width="9"
      height="6"
      rx="1.2"
      fill={iconColor}
      stroke="none"
    />
    <polygon
      points="15.6,13.6 15.6,16.4 17.8,15 "
      fill="#ffffff"
      stroke="none"
    />
    <line x1="7" y1="21" x2="17" y2="21" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

export const closeIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export const minimizeIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="18" x2="18" y2="18" />
  </svg>
);

export const expandIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 12 3 15 6" />
    <polyline points="15 18 12 21 9 18" />
  </svg>
);

export const pipIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <rect x="12" y="11" width="7" height="5" rx="1" fill="currentColor" stroke="none" />
  </svg>
);

export const playIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" stroke="none">
    <polygon points="8,5 19,12 8,19" />
  </svg>
);
