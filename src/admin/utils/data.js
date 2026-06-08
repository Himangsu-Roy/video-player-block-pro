import blocks from "./blocks";

const slug = "video-player-block";

export const dashboardInfo = (info) => {
  const {
    version,
    isPremium,
    hasPro,
    licenseActiveNonce,
    vpbDisabledBlocks,
    disabledBlocksNonce,
    adminUrl,
    uninstallNonce,
    deleteDataOnUninstall,
  } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Video Player Block${proSuffix}`,
    displayName: `Video Player Block${proSuffix} - Embed and Play Videos in Custom Player`,
    description:
      "Enhance your WordPress site with 14 video blocks — four player engines (default, React, Video.js, and Vidstack) plus Gallery, Hero, Lightbox, Comparison, Testimonial, Playlist, Reels, Interactive Video, Transcript, and Sticky Video. Embed YouTube, Vimeo, self-hosted (MP4/WebM), or HLS videos with extensive customization for play icons, backgrounds, player skins, and playback controls.",
    slug,
    version,
    isPremium,
    hasPro,
    licenseActiveNonce,
    uninstallNonce,
    deleteDataOnUninstall,
    disabledBlocks: vpbDisabledBlocks,
    disabledBlocksNonce,
    adminUrl,
    allBlocks: blocks,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      thumbnail: `https://bplugins.com/wp-content/uploads/2026/05/video-player-block.png`,
      //   thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
      // proThumbnail: `https://bplugins.com/wp-content/uploads/2026/01/3d-image-gallery.png`,
      //   video: "https://www.youtube.com/watch?v=milYZrqLJsE",
      //   isYoutube: true,
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      //   docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: 20181,
      plan_id: 33471,
      public_key: "pk_24433ae07b8acef1ebd1c99de9fa5",
    },
    changelogs: [
      {
        version: "1.12.0 - 4 Jun 26",
        type: "new",
        list: [
          "<strong>Add:</strong> New Pro <strong>Sticky Video Player</strong> block — pins a playing video to a screen corner on scroll, with minimize/close controls and native Picture-in-Picture.",
          "<strong>Add:</strong> Scroll-distance trigger, four dock corners, mobile enable/disable, reduced-motion support, and slide / fade dock animations.",
          "<strong>Add:</strong> Works with self-hosted MP4 / WebM, HLS, YouTube, and Vimeo sources.",
        ],
      },
      {
        version: "1.11.0 - 4 Jun 26",
        type: "new",
        list: [
          "<strong>Add:</strong> New Pro <strong>Video Transcript</strong> block — a synchronized, clickable transcript panel beside any video with click-to-seek.",
          "<strong>Add:</strong> Real-time search, auto-scroll to the active cue, and timestamp labels.",
          "<strong>Add:</strong> VideoObject JSON-LD output for SEO and a visual cue editor in the inspector.",
        ],
      },
      {
        version: "1.10.0 - 2 Jun 26",
        type: "new",
        list: [
          "<strong>Add:</strong> New Pro <strong>Interactive Video</strong> block — timeline-triggered CTA buttons, annotations, image cards, and clickable hotspots.",
          "<strong>Add:</strong> Chapter markers, full end screen, and an email gate with Mailchimp / webhook forwarding.",
          "<strong>Add:</strong> Optional analytics events via wp.hooks for GA, Plausible, and custom listeners.",
        ],
      },
      {
        version: "1.9.0 - 1 Jun 26",
        type: "new",
        list: [
          "<strong>Add:</strong> New Pro <strong>Video Reels</strong> block — a vertical, swipe-driven short-form video feed (Reels / Shorts style).",
          "<strong>Add:</strong> Autoplay-on-visible, tap-to-unmute, a mixed-source queue (MP4 / YouTube / Vimeo / HLS / DASH), and an action rail with Like &amp; Share.",
          "<strong>Add:</strong> ItemList + VideoObject JSON-LD and responsive grid layouts.",
        ],
      },
      {
        version: "1.8.0 - 23 May 26",
        type: "new",
        list: [
          "<strong>Add:</strong> New Pro <strong>Video Playlist</strong> block — a player with a clickable episode queue for sequential viewing.",
        ],
      },
      {
        version: "1.0.6 - 20 Nov 24",
        type: "new",
        list: [
          "<strong>Add:</strong> 3 new advanced video player blocks (React, Video.js, Vidstack).",
          "<strong>Fix:</strong> Multiple render issue.",
        ],
      },
      {
        version: "1.0.0",
        type: "new",
        list: ["<strong>Add:</strong> Initial release."],
      },
    ],
    changelogsLimit: 5,
    changelogsReadMoreLabel: "View Full Changelog",
    proFeatures: [
      "Advanced React Video Player Engine",
      "Industry Standard Video.js Player Support",
      "State-of-the-Art Vidstack Player Engine",
      "HLS (.m3u8) Streaming Support",
      "Advanced Color & Typography Customization",
      "Quality Switcher & Multiple Subtitles Support",
      "Custom Playback Speeds (0.5x to 2x)",
      "External Media Sources (Amazon S3, DigitalOcean, etc.)",
      "Optimized Preload & Media Load Strategies",
      "Custom Border Radius & Player UI Styling",
      "Show/Hide Specific Player Controls",
    ],
    startButton: {
      label: "Start Now",
      url: `wp-admin/post-new.php?post_type=video-player-block`,
      // url: `wp-admin/post-new.php?post_type=page&title=Video Player Block&content=<!-- wp:vpb/video /-->&nonce=${nonce}`,
    },
  };
};

export const demoInfo = {
  allInOneLabel: "See All Demos",
  allInOneLink: "https://bblockswp.com/demo/video-player-block-all-demos/",
  // Derived from blocks.js so every block (14) gets a demo entry automatically.
  demos: blocks.map((block) => ({
    icon: block.icon,
    title: block.title,
    type: "iframe",
    url: block.demo,
  })),
};

export const pricingInfo = {
  logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
  pluginId: 20181,
  planId: 33471,
  licenses: [1, 3, null],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    selected: 3, // choose from licenses item
  },
};
