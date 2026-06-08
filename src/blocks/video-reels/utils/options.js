import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const layoutOptions = [
  {
    label: __("Feed (full-card vertical scroll)", "video-player-block"),
    value: "feed-fullscreen",
  },
  {
    label: __("Inline strip (horizontal swipe)", "video-player-block"),
    value: "inline-strip",
  },
  {
    label: __("Grid then full-screen", "video-player-block"),
    value: "grid-then-fullscreen",
  },
];

export const aspectRatioOptions = [
  { label: "9:16 (Vertical)", value: "9:16" },
  { label: "4:5 (Portrait)", value: "4:5" },
  { label: "1:1 (Square)", value: "1:1" },
];

export const engineOptions = [
  { label: __("Native HTML5", "video-player-block"), value: "native" },
  { label: __("Plyr", "video-player-block"), value: "plyr" },
  { label: __("Video.js", "video-player-block"), value: "videojs" },
  { label: __("Vidstack", "video-player-block"), value: "vidstack" },
];

export const sourceTypeOptions = [
  { label: "MP4 / Direct", value: "mp4" },
  { label: "YouTube / Shorts", value: "youtube" },
  { label: "Vimeo", value: "vimeo" },
  { label: "HLS (.m3u8)", value: "hls" },
  { label: "DASH (.mpd)", value: "dash" },
];

export const snapBehaviorOptions = [
  { label: __("Mandatory (strict)", "video-player-block"), value: "mandatory" },
  { label: __("Proximity (soft)", "video-player-block"), value: "proximity" },
  { label: __("None", "video-player-block"), value: "none" },
];

export const preloadStrategyOptions = [
  { label: __("None", "video-player-block"), value: "none" },
  { label: __("Metadata only", "video-player-block"), value: "metadata" },
  { label: __("Next clip", "video-player-block"), value: "next-one" },
  { label: __("Next two clips", "video-player-block"), value: "next-two" },
];

export const ctaStyleOptions = [
  { label: __("Solid", "video-player-block"), value: "solid" },
  { label: __("Outline", "video-player-block"), value: "outline" },
  { label: __("Pill", "video-player-block"), value: "pill" },
];

export const ctaPositionOptions = [
  { label: __("Bottom", "video-player-block"), value: "bottom" },
  { label: __("Center", "video-player-block"), value: "center" },
];
