import React, { useRef, useEffect, useState, useMemo } from "react";
import ReactPlayer from "react-player";
import "hls-video-element";
import "youtube-video-element";
import "vimeo-video-element";
import "dash-video-element";
import "@mux/mux-video";

import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
  MediaCaptionsButton,
  MediaPosterImage,
  MediaLoadingIndicator,
  MediaPipButton,
  MediaAirplayButton,
  MediaGestureReceiver,
} from "media-chrome/react";
import {
  MediaCaptionsMenu,
  MediaPlaybackRateMenu,
  MediaRenditionMenu,
  MediaSettingsMenu,
  MediaSettingsMenuItem,
  MediaSettingsMenuButton,
} from "media-chrome/react/menu";

const ReactVideoPlayer = ({
  attributes = {},
  iframeWindow,
  children,
  ...restProps
}) => {
  const mergedAttributes = { ...attributes, ...restProps };
  const { items, controls, playerOptions, playerStyles, dimensions } =
    mergedAttributes;

  const effectiveDimensions = {
    width: "100%",
    height: "",
    aspectRatio: "16/9",
    ...(dimensions || {}),
  };

  const settingsMenuRef = useRef(null);
  const mediaRef = useRef(null);
  const posterUrl = items?.posterUrl || "";
  const textTracks = items?.textTracks || [];

  const qualities = useMemo(
    () => items?.videoQualities || [],
    [items?.videoQualities],
  );
  const hasManualQualities = qualities.length > 0;

  const [selectedQualityUrl, setSelectedQualityUrl] = useState(() => {
    const defaultQuality = qualities.find((q) => q.isDefault);
    return defaultQuality ? defaultQuality.url : items?.videoUrl || "";
  });

  // Sync with default quality when it changes in the editor
  useEffect(() => {
    const defaultQuality = qualities.find((q) => q.isDefault);
    if (defaultQuality) {
      setSelectedQualityUrl(defaultQuality.url);
    } else if (!hasManualQualities) {
      setSelectedQualityUrl(items?.videoUrl || "");
    }
  }, [qualities, items?.videoUrl, hasManualQualities]);

  // Bridge manual qualities to media-chrome Rendition API
  useEffect(() => {
    if (!hasManualQualities) return;

    // We need to find the actual media element (video, hls-video, etc.)
    // ReactPlayer might be wrapping it, so we look for the element with slot="media"
    const mediaEl = mediaRef.current;
    if (!mediaEl) return;

    const renditionList = qualities.map((q) => ({
      id: q.url,
      label: q.label,
      selected: selectedQualityUrl === q.url,
    }));

    // Mock the RenditionList API that media-chrome expects
    const mockRenditions = {
      _items: renditionList,
      _selectedId: selectedQualityUrl,
      get selectedId() {
        return this._selectedId;
      },
      set selectedId(id) {
        this._selectedId = id;
        setSelectedQualityUrl(id);
      },
      [Symbol.iterator]() {
        return this._items[Symbol.iterator]();
      },
      forEach(cb) {
        this._items.forEach(cb);
      },
      item(i) {
        return this._items[i];
      },
      get length() {
        return this._items.length;
      },
    };

    // Attach to the media element
    mediaEl.videoRenditions = mockRenditions;
    mediaEl.dispatchEvent(new CustomEvent("video-renditions-change"));

    // Listen for selection changes from media-chrome menus
    const handleSelectionChange = () => {
      if (mediaEl.videoRenditions?.selectedId) {
        setSelectedQualityUrl(mediaEl.videoRenditions.selectedId);
      }
    };

    mediaEl.addEventListener(
      "video-rendition-selection-change",
      handleSelectionChange,
    );
    return () =>
      mediaEl.removeEventListener(
        "video-rendition-selection-change",
        handleSelectionChange,
      );
  }, [qualities, selectedQualityUrl, hasManualQualities]);

  const videoSrc = hasManualQualities
    ? selectedQualityUrl
    : items?.videoUrl || "";

  // Extract sources and tracks from children
  const sourcesFromChildren = [];
  const tracksFromChildren = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === "source") {
      sourcesFromChildren.push(child.props);
    } else if (child.type === "track") {
      tracksFromChildren.push(child.props);
    }
  });

  const mergedTracks = [
    ...textTracks,
    ...tracksFromChildren.map((t) => ({
      kind: t.kind,
      src: t.src,
      language: t.srclang || t.srcLang,
      label: t.label,
      default: t.default !== undefined && t.default !== false,
    })),
  ];

  const allSources =
    sourcesFromChildren.length > 0
      ? sourcesFromChildren
      : videoSrc
      ? [{ src: videoSrc }]
      : [];

  // Parse playback rates from comma-separated string
  const playbackRates = (
    playerOptions?.playbackRates || "0.5, 0.75, 1, 1.25, 1.5, 2"
  )
    .split(",")
    .map((r) => r.trim())
    .join(" ");

  // Reset submenu state when the settings menu closes
  useEffect(() => {
    const menu = settingsMenuRef.current;
    if (!menu) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "hidden" && menu.hidden) {
          // Collapse all expanded submenus when menu closes
          const expandedItems = menu.querySelectorAll('[aria-expanded="true"]');
          expandedItems.forEach((item) => {
            const submenu = item.querySelector('[role="menu"]');
            if (submenu && !submenu.hidden) {
              submenu.hidden = true;
            }
            item.setAttribute("aria-expanded", "false");
          });

          // Remove the has-expanded class from shadow DOM container
          const container = menu.shadowRoot?.querySelector("#container");
          if (container) {
            container.classList.remove("has-expanded");
          }

          // Reset inline size styles
          menu.style.removeProperty("min-width");
          menu.style.removeProperty("min-height");
        }
      }
    });

    observer.observe(menu, { attributes: true, attributeFilter: ["hidden"] });
    return () => observer.disconnect();
  }, []);

  // Prepare box shadow string
  const boxShadow = playerStyles?.shadow
    ?.map(
      (s) =>
        `${s.isInset ? "inset " : ""}${s.hOffset} ${s.vOffset} ${s.blur} ${
          s.spreed
        } ${s.color}`,
    )
    .join(", ");

  // MediaController style with CSS custom properties from playerStyles
  const hasExplicitHeight = !!effectiveDimensions.height;
  const controllerStyle = {
    width: effectiveDimensions.width,
    maxWidth: "100%",
    height: hasExplicitHeight ? effectiveDimensions.height : undefined,
    aspectRatio: hasExplicitHeight ? undefined : effectiveDimensions.aspectRatio,
    margin: effectiveDimensions.width !== "100%" ? "0 auto" : undefined,
    "--media-primary-color": playerStyles?.primaryColor,
    "--media-secondary-color": playerStyles?.secondaryColor,
    "--media-control-background": playerStyles?.controlBackgroundColor,
    "--media-control-hover-background": playerStyles?.buttonHoverColor,
    "--media-text-color": playerStyles?.textColor,
    "--media-icon-color": playerStyles?.iconColor,
    "--media-font-family": "inherit",
    "--media-range-thumb-background": playerStyles?.primaryColor,
    "--media-range-bar-color": playerStyles?.primaryColor,
    "--media-range-track-background": playerStyles?.secondaryColor,
    "--media-tooltip-background": playerStyles?.tooltipBackgroundColor,
    "--media-menu-background": playerStyles?.menuBackgroundColor,
    "--media-menu-item-hover-background": playerStyles?.menuHoverColor,
    "--media-control-padding": "6px",
    "--media-button-icon-width": "24px",
    "--media-button-icon-height": "24px",
    "--media-control-height": "40px",

    // New border radius and shadow properties
    "--media-control-border-radius":
      typeof playerStyles?.controlBorderRadius === "number"
        ? `${playerStyles.controlBorderRadius}px`
        : playerStyles?.controlBorderRadius || "0px",

    "--media-menu-border-radius":
      playerStyles?.menuBorderRadius !== undefined &&
      playerStyles?.menuBorderRadius !== ""
        ? `${playerStyles.menuBorderRadius}px`
        : undefined,

    "--custom-control-backdrop-blur": playerStyles?.controlBackdropBlur
      ? `blur(${
          typeof playerStyles.controlBackdropBlur === "number"
            ? `${playerStyles.controlBackdropBlur}px`
            : playerStyles.controlBackdropBlur
        })`
      : "none",

    borderRadius:
      playerStyles?.borderRadius !== undefined &&
      playerStyles?.borderRadius !== ""
        ? `${playerStyles.borderRadius}px`
        : undefined,
    boxShadow: boxShadow || undefined,
    overflow: "hidden",
  };

  const renderMedia = () => {
    const commonProps = {
      slot: "media",
      src: allSources.length === 1 ? allSources[0].src : undefined,
      poster: posterUrl,
      autoplay: playerOptions?.autoplay ? "" : undefined,
      muted: playerOptions?.muted ? "" : undefined,
      loop: playerOptions?.loop ? "" : undefined,
      playsinline: playerOptions?.playsInline !== false ? "" : undefined,
      crossorigin: playerOptions?.crossOrigin ? "anonymous" : undefined,
      preload: playerOptions?.preload || "metadata",
      style: { width: "100%", height: "100%" },
    };

    const tracksElements = mergedTracks.map((track, index) => (
      <track
        key={`${track.label}-${track.language}-${index}-${track.kind}-${track.default}-${track.src}`}
        kind={track.kind || "captions"}
        src={track.src}
        srcLang={track.language}
        label={track.label}
        default={track.default || false}
      />
    ));

    const tracksObjects = mergedTracks.map((track) => ({
      kind: track.kind || "captions",
      src: track.src,
      srcLang: track.language,
      label: track.label,
      default: track.default || false,
    }));

    const renderSources = () => {
      if (
        allSources.length > 1 ||
        (allSources.length === 1 && !commonProps.src)
      ) {
        return allSources.map((s, i) => <source key={i} {...s} />);
      }
      return null;
    };

    const firstSourceUrl = allSources[0]?.src || "";

    // Mux Video
    if (firstSourceUrl.includes("stream.mux.com")) {
      return (
        <mux-video ref={mediaRef} {...commonProps}>
          {tracksElements}
        </mux-video>
      );
    }
    // YouTube
    if (
      firstSourceUrl.includes("youtube.com") ||
      firstSourceUrl.includes("youtu.be")
    ) {
      return (
        <youtube-video ref={mediaRef} {...commonProps}>
          {tracksElements}
        </youtube-video>
      );
    }
    // Vimeo
    if (firstSourceUrl.includes("vimeo.com")) {
      return (
        <vimeo-video ref={mediaRef} {...commonProps}>
          {tracksElements}
        </vimeo-video>
      );
    }
    // HLS
    if (firstSourceUrl.includes(".m3u8")) {
      return (
        <hls-video ref={mediaRef} {...commonProps}>
          {tracksElements}
        </hls-video>
      );
    }
    // DASH
    if (firstSourceUrl.includes(".mpd")) {
      return (
        <dash-video ref={mediaRef} {...commonProps}>
          {tracksElements}
        </dash-video>
      );
    }
    // Direct Video Files (MP4, WebM, Ogg)
    if (
      allSources.some((s) => s.src?.match(/\.(mp4|webm|ogg)$/i)) ||
      allSources.length > 1
    ) {
      return (
        <video ref={mediaRef} {...commonProps}>
          {renderSources()}
          {tracksElements}
        </video>
      );
    }

    // Fallback to ReactPlayer for other providers
    return (
      <ReactPlayer
        ref={mediaRef}
        {...commonProps}
        url={
          allSources.length > 1 ? allSources.map((s) => s.src) : commonProps.src
        }
        controls={false}
        playing={playerOptions?.autoplay || false}
        volume={1}
        playbackRate={1}
        config={{
          youtube: {
            playerVars: {
              autoplay: playerOptions?.autoplay ? 1 : 0,
            },
          },
          file: {
            attributes: {
              slot: "media", // Important for media-chrome
              crossOrigin: playerOptions?.crossOrigin ? "anonymous" : undefined,
            },
            tracks: tracksObjects,
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          "--controls": "none",
        }}>
        {renderSources()}
      </ReactPlayer>
    );
  };
  

  return (
    <MediaController style={controllerStyle}>
      {/* Video Player */}
      {renderMedia()}

      {/* Poster Image */}
      {posterUrl && <MediaPosterImage slot="poster" src={posterUrl} />}

      {/* Loading Indicator */}
      <MediaLoadingIndicator slot="centered-chrome" />

      {/* Gesture Receiver (click to play/pause) */}
      <MediaGestureReceiver slot="gestures-chrome" />

      {/* Control Bar */}
      <MediaControlBar>
        {/* Play/Pause */}
        {controls?.showPlayControl !== false && <MediaPlayButton />}

        {/* Seek Backward/Forward */}
        {controls?.showSeekControls !== false && (
          <MediaSeekBackwardButton seekOffset={10} />
        )}
        {controls?.showSeekControls !== false && (
          <MediaSeekForwardButton seekOffset={10} />
        )}

        {/* Time Range (scrubber) */}
        {controls?.showTimeControl !== false && (
          <MediaTimeRange>
            {/* {thumbnailsUrl && <PreviewWrapper thumbnailsUrl={thumbnailsUrl} />} */}
          </MediaTimeRange>
        )}

        {/* Time Display */}
        {controls?.showTimeControl !== false && (
          <MediaTimeDisplay showDuration />
        )}

        {/* Volume controls container */}
        {(controls?.showMuteControl !== false ||
          controls?.showVolumeControl !== false) && (
          <div className="vpb-volume-container">
            {controls?.showMuteControl !== false && <MediaMuteButton />}
            {controls?.showVolumeControl !== false && <MediaVolumeRange />}
          </div>
        )}

        {/* Playback Rate */}
        {controls?.showPlaybackRateControl !== false && (
          <MediaPlaybackRateButton rates={playbackRates} />
        )}

        {/* Captions */}
        {controls?.showCaptionControl !== false && <MediaCaptionsButton />}

        {/* Airplay */}
        {controls?.showAirplayControl !== false && <MediaAirplayButton />}

        {/* Picture-in-Picture */}
        {controls?.showPipControl !== false && <MediaPipButton />}

        {/* Fullscreen */}
        {controls?.showFullscreenControl !== false && <MediaFullscreenButton />}

        {/* Settings Menu Button */}
        <MediaSettingsMenuButton />
      </MediaControlBar>

      {/* Settings Menu */}
      <MediaSettingsMenu ref={settingsMenuRef} anchor="auto" hidden>
        <MediaSettingsMenuItem>
          Playback Rate
          <MediaPlaybackRateMenu slot="submenu" rates={playbackRates} hidden />
        </MediaSettingsMenuItem>
        <MediaSettingsMenuItem>
          Captions
          <MediaCaptionsMenu slot="submenu" hidden />
        </MediaSettingsMenuItem>
        <MediaSettingsMenuItem>
          Quality
          <MediaRenditionMenu slot="submenu" hidden />
        </MediaSettingsMenuItem>
      </MediaSettingsMenu>
    </MediaController>
  );
};

export default ReactVideoPlayer;
