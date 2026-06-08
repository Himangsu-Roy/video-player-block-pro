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
    className="video-reels-icon">
    <rect x="7" y="2" width="10" height="20" rx="2.5" />
    <polygon points="10,8 10,16 16,12" fill={iconColor} stroke="none" />
    <line x1="2" y1="8" x2="4" y2="8" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="2" y1="16" x2="4" y2="16" />
    <line x1="20" y1="8" x2="22" y2="8" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="20" y1="16" x2="22" y2="16" />
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

export const muteIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M3 9v6h4l5 4V5L7 9H3z" />
    <line x1="15" y1="9" x2="21" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const unmuteIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M3 9v6h4l5 4V5L7 9H3z" />
    <path
      d="M15 8c1.7 1 2.5 2.4 2.5 4s-.8 3-2.5 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const heartIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path
      d="M12 21s-7-4.5-9.3-9C1 9 2.5 5.5 6 5c2 0 3.5 1.2 4.5 2.8C11.5 6.2 13 5 15 5c3.5.5 5 4 3.3 7C19 16.5 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const heartFilledIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21s-7-4.5-9.3-9C1 9 2.5 5.5 6 5c2 0 3.5 1.2 4.5 2.8C11.5 6.2 13 5 15 5c3.5.5 5 4 3.3 7C19 16.5 12 21 12 21z"
      fill="currentColor"
    />
  </svg>
);

export const shareIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
    <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
  </svg>
);

export const fullscreenIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4,9 4,4 9,4" />
    <polyline points="20,9 20,4 15,4" />
    <polyline points="4,15 4,20 9,20" />
    <polyline points="20,15 20,20 15,20" />
  </svg>
);

export const chevronUpIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,15 12,9 18,15" />
  </svg>
);

export const chevronDownIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

export const closeIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </svg>
);
