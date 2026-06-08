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
    className="video-transcript-icon"
  >
    <rect x="2" y="3" width="9" height="14" rx="1.5" />
    <polygon points="5.5,7.5 5.5,12.5 9,10" fill={iconColor} stroke="none" />
    <line x1="13" y1="5" x2="22" y2="5" />
    <line x1="13" y1="9" x2="22" y2="9" />
    <line x1="13" y1="13" x2="22" y2="13" />
    <line x1="13" y1="17" x2="19" y2="17" />
    <line x1="2" y1="20" x2="22" y2="20" strokeWidth="1" opacity="0.4" />
  </svg>
);
