import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const videoSourceOptions = [
  { label: __("Self-hosted (MP4 / WebM)", "video-player-block"), value: "self" },
  { label: "YouTube", value: "youtube" },
  { label: "Vimeo", value: "vimeo" },
];

export const aspectRatioOptions = [
  { label: "16:9", value: "16:9" },
  { label: "4:3", value: "4:3" },
  { label: "1:1", value: "1:1" },
  { label: "9:16", value: "9:16" },
  { label: "21:9", value: "21:9" },
];

export const overlayTypeOptions = [
  { label: __("CTA button", "video-player-block"), value: "cta" },
  { label: __("Text annotation", "video-player-block"), value: "text" },
  { label: __("Image card", "video-player-block"), value: "image-card" },
  { label: __("Clickable hotspot", "video-player-block"), value: "hotspot" },
];

export const overlayPositionOptions = [
  { label: __("Top left", "video-player-block"), value: "top-left" },
  { label: __("Top center", "video-player-block"), value: "top-center" },
  { label: __("Top right", "video-player-block"), value: "top-right" },
  { label: __("Middle left", "video-player-block"), value: "middle-left" },
  { label: __("Center", "video-player-block"), value: "center" },
  { label: __("Middle right", "video-player-block"), value: "middle-right" },
  { label: __("Bottom left", "video-player-block"), value: "bottom-left" },
  { label: __("Bottom center", "video-player-block"), value: "bottom-center" },
  { label: __("Bottom right", "video-player-block"), value: "bottom-right" },
];

export const ctaStyleOptions = [
  { label: __("Filled", "video-player-block"), value: "filled" },
  { label: __("Outline", "video-player-block"), value: "outline" },
  { label: __("Ghost", "video-player-block"), value: "ghost" },
  { label: __("Pill", "video-player-block"), value: "pill" },
];

export const ctaTargetOptions = [
  { label: __("New tab", "video-player-block"), value: "_blank" },
  { label: __("Same tab", "video-player-block"), value: "_self" },
];

export const hotspotShapeOptions = [
  { label: __("Circle", "video-player-block"), value: "circle" },
  { label: __("Square", "video-player-block"), value: "square" },
  { label: __("Diamond", "video-player-block"), value: "diamond" },
];

export const boxShadowOptions = [
  { label: __("None", "video-player-block"), value: "none" },
  { label: __("Small", "video-player-block"), value: "sm" },
  { label: __("Medium", "video-player-block"), value: "md" },
  { label: __("Large", "video-player-block"), value: "lg" },
];

export const gateProviderOptions = [
  { label: __("None (just show form)", "video-player-block"), value: "none" },
  { label: __("Mailchimp", "video-player-block"), value: "mailchimp" },
  { label: __("Webhook", "video-player-block"), value: "webhook" },
];
