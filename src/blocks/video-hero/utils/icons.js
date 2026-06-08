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
    className="video-hero-icon"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" opacity="0.5" />
    <polygon
      points="10,13.5 10,17.5 13.5,15.5"
      fill={iconColor}
      stroke="none"
    />
    <line x1="6" y1="7" x2="14" y2="7" strokeWidth="1.5" />
  </svg>
);
