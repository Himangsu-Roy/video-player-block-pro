import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const layoutOptions = [
  { label: __("Media left", "video-player-block"), value: "media-left" },
  { label: __("Media right", "video-player-block"), value: "media-right" },
  { label: __("Media top", "video-player-block"), value: "media-top" },
  {
    label: __("Media background (overlay)", "video-player-block"),
    value: "media-background",
  },
];

export const videoSourceOptions = [
  { label: __("Self-hosted / Upload", "video-player-block"), value: "upload" },
  { label: __("YouTube", "video-player-block"), value: "youtube" },
  { label: __("Vimeo", "video-player-block"), value: "vimeo" },
  { label: __("Direct URL (MP4 / WebM / HLS)", "video-player-block"), value: "url" },
];

export const playModeOptions = [
  { label: __("Inline (replace poster)", "video-player-block"), value: "inline" },
  { label: __("Lightbox modal", "video-player-block"), value: "lightbox" },
  { label: __("Hover preview", "video-player-block"), value: "hover-preview" },
];

export const aspectRatioOptions = [
  { label: "16:9", value: "16:9" },
  { label: "9:16 (Reels / Shorts)", value: "9:16" },
  { label: "1:1", value: "1:1" },
  { label: "4:5", value: "4:5" },
];

export const quoteStyleOptions = [
  { label: __("Plain", "video-player-block"), value: "plain" },
  { label: __("Large quote mark", "video-player-block"), value: "large-quote-mark" },
  { label: __("Card bubble", "video-player-block"), value: "card-bubble" },
];

export const ratingOptions = [
  { label: "0", value: 0 },
  { label: "0.5", value: 0.5 },
  { label: "1", value: 1 },
  { label: "1.5", value: 1.5 },
  { label: "2", value: 2 },
  { label: "2.5", value: 2.5 },
  { label: "3", value: 3 },
  { label: "3.5", value: 3.5 },
  { label: "4", value: 4 },
  { label: "4.5", value: 4.5 },
  { label: "5", value: 5 },
];
