import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "video-player-block") },
  { name: "style", title: __("Style", "video-player-block") },
];

export const layoutOptions = [
  { label: __("Queue on Right", "video-player-block"), value: "queue-right" },
  { label: __("Queue on Left", "video-player-block"), value: "queue-left" },
  { label: __("Queue Below", "video-player-block"), value: "queue-below" },
  { label: __("Theater (queue below, full-width)", "video-player-block"), value: "theater" },
];

export const sourceTypeOptions = [
  { label: "MP4 / Direct", value: "mp4" },
  { label: "YouTube", value: "youtube" },
  { label: "Vimeo", value: "vimeo" },
  { label: "HLS (.m3u8)", value: "hls" },
  { label: "DASH (.mpd)", value: "dash" },
  { label: "Mux", value: "mux" },
];

export const aspectRatioOptions = [
  { label: "16:9 (Widescreen)", value: "16:9" },
  { label: "4:3 (Standard)", value: "4:3" },
  { label: "21:9 (Ultrawide)", value: "21:9" },
  { label: "1:1 (Square)", value: "1:1" },
  { label: "9:16 (Vertical)", value: "9:16" },
  { label: __("Custom", "video-player-block"), value: "custom" },
];
