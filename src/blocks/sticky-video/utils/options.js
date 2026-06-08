import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const videoSourceOptions = [
  { label: __("MP4 / WebM", "video-player-block"), value: "mp4" },
  { label: __("HLS (.m3u8)", "video-player-block"), value: "hls" },
  { label: __("YouTube", "video-player-block"), value: "youtube" },
  { label: __("Vimeo", "video-player-block"), value: "vimeo" },
];

export const aspectRatioOptions = [
  { label: "16:9", value: "16:9" },
  { label: "4:3", value: "4:3" },
  { label: "1:1", value: "1:1" },
  { label: "21:9", value: "21:9" },
  { label: __("Custom", "video-player-block"), value: "custom" },
];

export const stickyCornerOptions = [
  { label: __("Bottom right", "video-player-block"), value: "bottom-right" },
  { label: __("Bottom left", "video-player-block"), value: "bottom-left" },
  { label: __("Top right", "video-player-block"), value: "top-right" },
  { label: __("Top left", "video-player-block"), value: "top-left" },
];

export const dockAnimationOptions = [
  { label: __("Slide", "video-player-block"), value: "slide" },
  { label: __("Fade", "video-player-block"), value: "fade" },
  { label: __("None", "video-player-block"), value: "none" },
];

export const boxShadowOptions = [
  { label: __("None", "video-player-block"), value: "none" },
  { label: __("Light", "video-player-block"), value: "light" },
  { label: __("Medium", "video-player-block"), value: "medium" },
  { label: __("Heavy", "video-player-block"), value: "heavy" },
];

export const preloadOptions = [
  { label: __("Auto", "video-player-block"), value: "auto" },
  { label: __("Metadata", "video-player-block"), value: "metadata" },
  { label: __("None", "video-player-block"), value: "none" },
];
