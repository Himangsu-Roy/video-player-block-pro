import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const orientationOptions = [
  { label: __("Horizontal (left / right)", "video-player-block"), value: "horizontal" },
  { label: __("Vertical (top / bottom)", "video-player-block"), value: "vertical" },
];

export const handleStyleOptions = [
  { label: __("Circle", "video-player-block"), value: "circle" },
  { label: __("Arrows", "video-player-block"), value: "arrows" },
  { label: __("Bar", "video-player-block"), value: "bar" },
  { label: __("None", "video-player-block"), value: "none" },
];

export const playModeOptions = [
  { label: __("Synced (shared timeline)", "video-player-block"), value: "synced" },
  { label: __("Independent", "video-player-block"), value: "independent" },
];

export const aspectRatioOptions = [
  { label: "16:9", value: "16:9" },
  { label: "4:3", value: "4:3" },
  { label: "1:1", value: "1:1" },
  { label: "9:16", value: "9:16" },
  { label: __("Custom", "video-player-block"), value: "custom" },
];

export const preloadOptions = [
  { label: __("Metadata (recommended)", "video-player-block"), value: "metadata" },
  { label: __("Auto", "video-player-block"), value: "auto" },
  { label: __("None", "video-player-block"), value: "none" },
];
