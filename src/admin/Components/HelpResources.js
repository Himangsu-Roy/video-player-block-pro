import { __ } from "@wordpress/i18n";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true">
    <path
      d="M5 12h14M13 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DocIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.5 3h8L19 7.5V19a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M14 3v4a1.5 1.5 0 0 0 1.5 1.5H19M8 12h7M8 16h5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 11.5a7.5 7.5 0 1 1 14.45 2.93l.94 3.13a.6.6 0 0 1-.75.75l-3.13-.94A7.5 7.5 0 0 1 4 11.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M9 10.5h.01M12 10.5h.01M15 10.5h.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m12 3.5 2.7 5.46 6.02.87-4.36 4.25 1.03 6L12 17.25l-5.39 2.83 1.03-6L3.28 9.83l6.02-.87L12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const HelpResources = ({ slug = "video-player-block", pages = {} }) => {
  const docsUrl = pages.docs || `https://bplugins.com/docs/${slug}/`;
  const reviewUrl = `https://wordpress.org/support/plugin/${slug}/reviews/#new-post`;

  const resources = [
    {
      key: "docs",
      title: __("Read Documentation", "video-player-block"),
      description: __(
        "Step-by-step guides, setup walkthroughs, and answers to common questions.",
        "video-player-block",
      ),
      cta: __("Browse the docs", "video-player-block"),
      href: docsUrl,
      icon: <DocIcon />,
      accent: "blue",
      external: true,
    },
    {
      key: "support",
      title: __("Contact Support", "video-player-block"),
      description: __(
        "Stuck on something? Our team usually replies within one business day.",
        "video-player-block",
      ),
      cta: __("Open a ticket", "video-player-block"),
      href: "https://bplugins.com/support",
      icon: <SupportIcon />,
      accent: "purple",
      external: true,
    },
    {
      key: "rate",
      title: __("Rate the Plugin", "video-player-block"),
      description: __(
        "Enjoying it? A quick 5-star review helps other creators discover the plugin.",
        "video-player-block",
      ),
      cta: __("Leave a review", "video-player-block"),
      href: reviewUrl,
      icon: <StarIcon />,
      accent: "amber",
      external: true,
    },
    {
      key: "other",
      title: __("Other Plugins", "video-player-block"),
      description: __(
        "Explore the full bPlugins library — blocks for galleries, sliders, players, and more.",
        "video-player-block",
      ),
      cta: __("See all plugins", "video-player-block"),
      href: "#/our-plugins",
      icon: <GridIcon />,
      accent: "teal",
      external: false,
    },
  ];

  return (
    <section className="vpbHelp" aria-labelledby="vpbHelpTitle">
      <header className="vpbHelp__hero">
        <div className="vpbHelp__heroInner">
          <span className="vpbHelp__eyebrow">
            {__("Help & Resources", "video-player-block")}
          </span>
          <h2 id="vpbHelpTitle" className="vpbHelp__title">
            {__("How can we help you today?", "video-player-block")}
          </h2>
          <p className="vpbHelp__subtitle">
            {__(
              "Documentation, friendly support, and a community of creators — pick the path that fits where you're stuck.",
              "video-player-block",
            )}
          </p>
        </div>
      </header>

      <ul className="vpbHelp__grid" role="list">
        {resources.map((item) => (
          <li key={item.key} className={`vpbHelpCard vpbHelpCard--${item.accent}`}>
            <a
              className="vpbHelpCard__link"
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}>
              <span className="vpbHelpCard__icon" aria-hidden="true">
                {item.icon}
              </span>

              <div className="vpbHelpCard__body">
                <h3 className="vpbHelpCard__title">{item.title}</h3>
                <p className="vpbHelpCard__desc">{item.description}</p>
              </div>

              <span className="vpbHelpCard__cta">
                {item.cta}
                <ArrowIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="vpbHelp__footer">
        <div className="vpbHelp__footerText">
          <h3>{__("Still stuck on something?", "video-player-block")}</h3>
          <p>
            {__(
              "Send us a quick screenshot and the steps you tried — we'll help you get unblocked fast.",
              "video-player-block",
            )}
          </p>
        </div>
        <a
          className="vpbHelp__footerBtn"
          href="https://bplugins.com/support"
          target="_blank"
          rel="noopener noreferrer">
          {__("Email the team", "video-player-block")}
          <ArrowIcon />
        </a>
      </footer>
    </section>
  );
};

export default HelpResources;
