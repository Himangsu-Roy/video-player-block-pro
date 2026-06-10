import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const layoutOptions = [
  { label: __("Grid", "video-player-block"), value: "grid" },
  { label: __("Masonry", "video-player-block"), value: "masonry" },
  { label: __("Carousel", "video-player-block"), value: "carousel" },
  { label: __("Bento", "video-player-block"), value: "bento" },
];

export const aspectRatioOptions = [
  { label: "16:9", value: "16:9" },
  { label: "4:3", value: "4:3" },
  { label: "1:1", value: "1:1" },
  { label: "9:16", value: "9:16" },
  { label: "21:9", value: "21:9" },
  { label: __("Custom", "video-player-block"), value: "custom" },
];

export const sourceOptions = [
  { label: "MP4 / Direct", value: "mp4" },
  { label: "YouTube", value: "youtube" },
  { label: "Vimeo", value: "vimeo" },
  { label: "HLS (.m3u8)", value: "hls" },
  { label: "DASH (.mpd)", value: "dash" },
];

export const playbackModeOptions = [
  { label: __("Lightbox", "video-player-block"), value: "lightbox" },
  { label: __("Inline", "video-player-block"), value: "inline" },
  { label: __("Featured + Playlist", "video-player-block"), value: "featured" },
];

export const filterStyleOptions = [
  { label: __("Pills", "video-player-block"), value: "pills" },
  { label: __("Tabs", "video-player-block"), value: "tabs" },
  { label: __("Dropdown", "video-player-block"), value: "dropdown" },
];

export const playIconStyleOptions = [
  { label: __("Circle", "video-player-block"), value: "circle" },
  { label: __("Square", "video-player-block"), value: "square" },
  { label: __("Triangle", "video-player-block"), value: "triangle" },
];

export const hoverEffectOptions = [
  { label: __("None", "video-player-block"), value: "none" },
  { label: __("Zoom", "video-player-block"), value: "zoom" },
  { label: __("Tilt", "video-player-block"), value: "tilt" },
  { label: __("Overlay Fade", "video-player-block"), value: "overlayFade" },
  { label: __("Preview Clip", "video-player-block"), value: "previewClip" },
];

export const lightboxThemeOptions = [
  { label: __("Dark", "video-player-block"), value: "dark" },
  { label: __("Light", "video-player-block"), value: "light" },
  { label: __("Glass", "video-player-block"), value: "glass" },
];
