import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const triggerTypeOptions = [
  { label: __("Thumbnail image", "video-player-block"), value: "thumbnail" },
  { label: __("Button", "video-player-block"), value: "button" },
  {
    label: __("Play icon (no thumbnail)", "video-player-block"),
    value: "playIcon",
  },
];

export const aspectRatioOptions = [
  { label: "16:9", value: "16:9" },
  { label: "4:3", value: "4:3" },
  { label: "1:1", value: "1:1" },
  { label: "9:16", value: "9:16" },
  { label: "21:9", value: "21:9" },
  { label: __("Original", "video-player-block"), value: "original" },
];

export const buttonIconOptions = [
  { label: __("Play icon", "video-player-block"), value: "play" },
  { label: __("No icon", "video-player-block"), value: "none" },
];

export const buttonStyleOptions = [
  { label: __("Filled", "video-player-block"), value: "filled" },
  { label: __("Outline", "video-player-block"), value: "outline" },
  { label: __("Ghost", "video-player-block"), value: "ghost" },
  { label: __("Underline", "video-player-block"), value: "underline" },
];

export const playIconStyleOptions = [
  { label: __("Circle", "video-player-block"), value: "circle" },
  { label: __("Square", "video-player-block"), value: "square" },
  { label: __("Minimal", "video-player-block"), value: "minimal" },
  { label: __("Pulse ring", "video-player-block"), value: "pulse" },
];

export const thumbnailHoverEffectOptions = [
  { label: __("None", "video-player-block"), value: "none" },
  { label: __("Zoom", "video-player-block"), value: "zoom" },
  { label: __("Brighten", "video-player-block"), value: "brighten" },
  { label: __("Tilt", "video-player-block"), value: "tilt" },
];

export const videoSourceOptions = [
  { label: "YouTube", value: "youtube" },
  { label: "Vimeo", value: "vimeo" },
  { label: "MP4 / WebM", value: "mp4" },
  { label: "HLS (.m3u8)", value: "hls" },
  { label: "Wistia", value: "wistia" },
  { label: "Bunny Stream", value: "bunny" },
];

export const videoEngineOptions = [
  { label: __("Plyr (default)", "video-player-block"), value: "plyr" },
  { label: __("Video.js", "video-player-block"), value: "videojs" },
  { label: __("Vidstack", "video-player-block"), value: "vidstack" },
  { label: __("Native iframe", "video-player-block"), value: "nativeIframe" },
];

export const modalSizeOptions = [
  { label: __("Small", "video-player-block"), value: "small" },
  { label: __("Medium", "video-player-block"), value: "medium" },
  { label: __("Large", "video-player-block"), value: "large" },
  { label: __("Fullscreen", "video-player-block"), value: "fullscreen" },
  { label: __("Custom width", "video-player-block"), value: "custom" },
];

export const modalThemeOptions = [
  { label: __("Dark", "video-player-block"), value: "dark" },
  { label: __("Light", "video-player-block"), value: "light" },
  { label: __("Glass", "video-player-block"), value: "glass" },
  { label: __("Custom", "video-player-block"), value: "custom" },
];

export const modalAnimationOptions = [
  { label: __("Fade", "video-player-block"), value: "fade" },
  { label: __("Scale", "video-player-block"), value: "scale" },
  { label: __("Slide up", "video-player-block"), value: "slide" },
  { label: __("None", "video-player-block"), value: "none" },
];

export const openTriggerOptions = [
  { label: __("Click", "video-player-block"), value: "click" },
  { label: __("Auto after delay", "video-player-block"), value: "autoDelay" },
  { label: __("Exit intent", "video-player-block"), value: "exitIntent" },
  { label: __("URL hash", "video-player-block"), value: "urlHash" },
];

export const closeButtonStyleOptions = [
  { label: __("Circle", "video-player-block"), value: "circle" },
  { label: __("Square", "video-player-block"), value: "square" },
  { label: __("Minimal", "video-player-block"), value: "minimal" },
];
