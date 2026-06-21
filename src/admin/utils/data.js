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
      "Enhance your WordPress site with 11 video blocks — four player engines (default, React, Video.js, and Vidstack) plus Gallery, Lightbox, Comparison, Testimonial, Playlist, Reels, and Transcript. Embed YouTube, Vimeo, self-hosted (MP4/WebM), or HLS videos with extensive customization for play icons, backgrounds, player skins, and playback controls.",
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
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: 20181,
      plan_id: 33471,
      public_key: "pk_24433ae07b8acef1ebd1c99de9fa5",
    },
    startButton: {
      label: "Start Now",
      url: `wp-admin/post-new.php?post_type=video-player-block`,
      // url: `wp-admin/post-new.php?post_type=page&title=Video Player Block&content=<!-- wp:vpb/video /-->&nonce=${nonce}`,
    },
  };
};

export const welcomeInfo = (adminUrl = "") => ({
  // Hero card keyword chips (rendered by the canonical Welcome/Overview).
  keywordsLabel: "Blocks",
  keywords: [
    "Gallery",
    "Lightbox",
    "Comparison",
    "Playlist",
    "Reels",
    "Transcript",
    "Testimonial",
    "Videojs",
    "Vidstack",
    "React Video Player",
    "Video Player Block",
  ],

  // Tabbed getting-started guide shown beside the hero card.
  gettingStarted: {
    tabs: [
      {
        key: "gutenberg",
        label: "Gutenberg",
        steps: [
          {
            num: 1,
            title: "Open the Editor",
            body: "Edit any post or page, or create a new one.",
            link: { url: `${adminUrl}post-new.php`, label: "New Post" },
          },
          {
            num: 2,
            title: "Insert a Video Block",
            body: "Click the <strong>+</strong> inserter and search <strong>Video Player</strong>. Pick a player engine or a layout block (Gallery, Hero, Playlist…).",
          },
          {
            num: 3,
            title: "Add Your Video",
            body: "Paste a YouTube/Vimeo URL, or upload a self-hosted <code>MP4/WebM</code> or HLS source.",
          },
          {
            num: 4,
            title: "Style & Publish",
            body: "Tweak controls, skin, and colors in the sidebar, then <strong>Publish</strong>.",
          },
        ],
      },
      {
        key: "shortcode",
        label: "Shortcode",
        steps: [
          {
            num: 1,
            title: "Create a Player",
            body: "Go to <strong>Video Player</strong> in your admin menu and click <strong>Add New</strong>.",
            link: {
              url: `${adminUrl}post-new.php?post_type=video-player-block`,
              label: "Add New Player",
            },
          },
          {
            num: 2,
            title: "Customize & Publish",
            body: "Add your video source, configure player settings, and <strong>Publish</strong> the post.",
          },
          {
            num: 3,
            title: "Copy the Shortcode",
            body: 'Go to <strong>Video Player -> All Players</strong> to find and copy your player shortcode (e.g. <code>[video_player id="123"]</code>).',
            link: {
              url: `${adminUrl}edit.php?post_type=video-player-block`,
              label: "All Players",
            },
          },
          {
            num: 4,
            title: "Paste & Display",
            body: "Paste the copied shortcode into any post, page, widget, or page builder layout where you want the player to render.",
          },
        ],
      },
      {
        key: "elementor",
        label: "Elementor",
        steps: [
          {
            num: 1,
            title: "Create a Player",
            body: "Go to <strong>Video Player -> Add New</strong> to configure and publish a video player, then copy its shortcode.",
            link: {
              url: `${adminUrl}post-new.php?post_type=video-player-block`,
              label: "Add New Player",
            },
          },
          {
            num: 2,
            title: "Edit with Elementor",
            body: "Open any post or page in the <strong>Elementor</strong> editor.",
          },
          {
            num: 3,
            title: "Add Shortcode Widget",
            body: "Search for the <strong>Shortcode</strong> widget in the Elementor elements panel and drag it into your layout.",
          },
          {
            num: 4,
            title: "Paste Shortcode",
            body: 'Paste your player shortcode (e.g., <code>[video_player id="123"]</code>) into the widget input field and save your changes.',
          },
        ],
      },
      {
        key: "php",
        label: "PHP",
        steps: [
          {
            num: 1,
            title: "Get Player ID",
            body: "Go to <strong>Video Player -> All Players</strong> and note the <strong>ID</strong> of the player you want to embed.",
            link: {
              url: `${adminUrl}edit.php?post_type=video-player-block`,
              label: "All Players",
            },
          },
          {
            num: 2,
            title: "Copy PHP Function",
            body: "Copy the WordPress <code>do_shortcode</code> function: <pre><code>&lt;?php echo do_shortcode('[video_player id=\"YOUR_ID\"]'); ?&gt;</code></pre>",
          },
          {
            num: 3,
            title: "Insert in Template",
            body: "Open your theme or template files (e.g., <code>single.php</code>, <code>page.php</code>) in an editor.",
          },
          {
            num: 4,
            title: "Replace ID & Save",
            body: "Paste the code into your PHP file and replace <code>YOUR_ID</code> with the actual ID of your video player.",
          },
        ],
      },
    ],
  },

  changelogs: [
    {
      version: "2.0.0 - 10 Jun 26",
      type: "new",
      list: [
        "<strong>Add:</strong> 7 new Pro video blocks — Video Gallery, Video Playlist, Video Lightbox, Video Reels, Video Comparison, Video Testimonial Card, and Video Transcript.",
        "<strong>Add:</strong> HLS (.m3u8) and DASH (.mpd) streaming support.",
        "<strong>Add:</strong> Mux video integration and external source support (Amazon S3, DigitalOcean Spaces, BunnyCDN).",
        "<strong>Add:</strong> Lazy loading, preloading, and Google Cast / Chromecast support.",
        "<strong>Improve:</strong> Player styling — custom aspect ratios, glassmorphism controls, advanced shadow and border options.",
        "<strong>Fix:</strong> General performance improvements and bug fixes.",
      ],
    },
    {
      version: "1.0.6 - 20 Nov 24",
      type: "new",
      list: [
        "<strong>Fix:</strong> Multiple render issue.",
        "<strong>Add:</strong> 3 new advanced video player blocks (React, Video.js, Vidstack).",
        "<strong>Fix:</strong> Build error.",
      ],
    },
    {
      version: "1.0.5 - 8 Jan 24",
      type: "improvement",
      list: ["<strong>Fix:</strong> Autoplay."],
    },
    {
      version: "1.0.4 - 1 Oct 23",
      type: "improvement",
      list: [
        "<strong>Fix:</strong> Not loading the assets where the block is not added.",
      ],
    },
    {
      version: "1.0.3 - 1 Aug 23",
      type: "new",
      list: ["<strong>Add:</strong> Translate feature."],
    },
    {
      version: "1.0.2 - 1 Jun 23",
      type: "improvement",
      list: [
        "<strong>Improve:</strong> Reduce PHP code.",
        "<strong>Improve:</strong> Performance improvement.",
      ],
    },
    {
      version: "1.0.1 - 1 Apr 23",
      type: "improvement",
      list: ["<strong>Improve:</strong> Reduce PHP code."],
    },
    {
      version: "1.0.0 - 1 Feb 23",
      type: "new",
      list: ["<strong>Add:</strong> Initial release."],
    },
  ],
  changelogsLimit: 5,
  changelogsReadMoreLabel: "View Full Changelog",

  // Pro upsell bullets shown in ProAds (free users only).
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
});

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
