const ScrollIndicator = ({ style = "mouse", color }) => {
  if (style === "chevron") {
    return (
      <div className="vpb-vh-scroll vpb-vh-scroll--chevron" aria-hidden="true">
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          stroke={color || "#fff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="2,4 16,18 30,4" />
          <polyline points="2,14 16,28 30,14" opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (style === "line") {
    return (
      <div className="vpb-vh-scroll vpb-vh-scroll--line" aria-hidden="true">
        <span
          className="vpb-vh-scroll-line"
          style={{ background: color || "#fff" }}
        />
      </div>
    );
  }

  // default = mouse
  return (
    <div className="vpb-vh-scroll vpb-vh-scroll--mouse" aria-hidden="true">
      <div
        className="vpb-vh-mouse"
        style={{ borderColor: color || "rgba(255,255,255,0.9)" }}
      >
        <span
          className="vpb-vh-mouse-dot"
          style={{ background: color || "rgba(255,255,255,0.9)" }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
