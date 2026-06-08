import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const videoEngineOptions = [
  { label: __("HTML5 (lightweight)", "video-player-block"), value: "html5" },
  { label: __("React Player", "video-player-block"), value: "react" },
  { label: __("Video.js", "video-player-block"), value: "videojs" },
  { label: __("Vidstack", "video-player-block"), value: "vidstack" },
];

export const videoSourceOptions = [
  { label: "MP4 / WebM", value: "mp4" },
  { label: "HLS (.m3u8)", value: "hls" },
  { label: "DASH (.mpd)", value: "dash" },
  { label: "YouTube", value: "youtube" },
  { label: "Vimeo", value: "vimeo" },
];

export const mobileBehaviorOptions = [
  { label: __("Play video", "video-player-block"), value: "play" },
  { label: __("Show poster only", "video-player-block"), value: "poster" },
  { label: __("Hide video block", "video-player-block"), value: "hide" },
];

export const heightModeOptions = [
  { label: __("Viewport (vh / px)", "video-player-block"), value: "viewport" },
  { label: __("Fixed (px)", "video-player-block"), value: "fixed" },
  { label: __("Aspect ratio", "video-player-block"), value: "aspect" },
];

export const overlayTypeOptions = [
  { label: __("None", "video-player-block"), value: "none" },
  { label: __("Solid color", "video-player-block"), value: "solid" },
  { label: __("Linear gradient", "video-player-block"), value: "gradient" },
  { label: __("Radial gradient", "video-player-block"), value: "radial" },
  { label: __("Noise texture", "video-player-block"), value: "noise" },
];

export const blendModeOptions = [
  { label: __("Normal", "video-player-block"), value: "normal" },
  { label: __("Multiply", "video-player-block"), value: "multiply" },
  { label: __("Screen", "video-player-block"), value: "screen" },
  { label: __("Overlay", "video-player-block"), value: "overlay" },
  { label: __("Darken", "video-player-block"), value: "darken" },
  { label: __("Lighten", "video-player-block"), value: "lighten" },
  { label: __("Soft light", "video-player-block"), value: "soft-light" },
  { label: __("Hard light", "video-player-block"), value: "hard-light" },
  { label: __("Color dodge", "video-player-block"), value: "color-dodge" },
  { label: __("Difference", "video-player-block"), value: "difference" },
];

export const horizontalAlignOptions = [
  { label: __("Left", "video-player-block"), value: "left" },
  { label: __("Center", "video-player-block"), value: "center" },
  { label: __("Right", "video-player-block"), value: "right" },
];

export const verticalAlignOptions = [
  { label: __("Top", "video-player-block"), value: "top" },
  { label: __("Middle", "video-player-block"), value: "middle" },
  { label: __("Bottom", "video-player-block"), value: "bottom" },
];

export const ctaStyleOptions = [
  { label: __("Filled", "video-player-block"), value: "filled" },
  { label: __("Outline", "video-player-block"), value: "outline" },
  { label: __("Ghost", "video-player-block"), value: "ghost" },
  { label: __("Underline", "video-player-block"), value: "underline" },
];

export const trailerButtonStyleOptions = [
  { label: __("Pill", "video-player-block"), value: "pill" },
  { label: __("Round play icon", "video-player-block"), value: "round" },
  { label: __("Bordered", "video-player-block"), value: "bordered" },
];

export const videoFitOptions = [
  { label: __("Cover", "video-player-block"), value: "cover" },
  { label: __("Contain", "video-player-block"), value: "contain" },
  { label: __("Fill", "video-player-block"), value: "fill" },
];

export const preloadOptions = [
  { label: __("Auto", "video-player-block"), value: "auto" },
  { label: __("Metadata", "video-player-block"), value: "metadata" },
  { label: __("None", "video-player-block"), value: "none" },
];

export const scrollIndicatorStyleOptions = [
  { label: __("Mouse / scroll wheel", "video-player-block"), value: "mouse" },
  { label: __("Chevron arrows", "video-player-block"), value: "chevron" },
  { label: __("Animated line", "video-player-block"), value: "line" },
];
