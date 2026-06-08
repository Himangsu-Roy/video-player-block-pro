import "@vidstack/react/player/styles/base.css";
import { useEffect, useRef } from "react";
import styles from "./player.module.css";

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  isYouTubeProvider,
} from "@vidstack/react";

import { VideoLayout } from "./components/layouts/video-layout";
import { textTracks } from "./tracks";

export function Player({
  doc = document, 
  win = window,
  attributes = {},
  setAttributes,
}) {
  const { items = {}, playerOptions = {}, controls = {} } = attributes;
  const effectivePlayerOptions = {
    autoplay: false,
    loop: false,
    muted: false,
    playsInline: true,
    crossOrigin: false,
    preload: "metadata",
    load: "visible",
    posterFit: "cover",
    nativeControls: false,
    announcements: true,
    keyboardAnimations: true,
    ...playerOptions,
  };
  let player = useRef(null);

  useEffect(() => {
    // Subscribe to state updates.
    if (player.current) {
      return player.current.subscribe(({ paused, viewType }) => {
        // console.log('is paused?', '->', state.paused);
        // console.log('is audio view?', '->', state.viewType === 'audio');
      });
    }
  }, []);

  function onProviderChange(provider, nativeEvent) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }

    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(detail, nativeEvent) {
    // ...
  }

  // Build active tracks array, starting with items.textTracks (filter out empty ones)
  let activeTracks = (items.textTracks || []).filter(
    (t) => t.src && t.src.trim() !== "",
  );

  // Map to track added sources to avoid duplicates from legacy fields (Keyed by URL only)
  const addedSources = new Set();
  activeTracks.forEach((t) => addedSources.add(t.src));

  // Legacy subtitles
  if (
    items.subtitlesUrl &&
    items.subtitlesUrl.trim() !== "" &&
    !addedSources.has(items.subtitlesUrl)
  ) {
    activeTracks.push({
      src: items.subtitlesUrl,
      label: items.subtitlesLabel || "English",
      language: items.subtitlesLanguage || "en-US",
      kind: "subtitles",
      default: true,
    });
    addedSources.add(items.subtitlesUrl);
  }

  // Legacy captions
  if (
    items.captionUrl &&
    items.captionUrl.trim() !== "" &&
    !addedSources.has(items.captionUrl)
  ) {
    activeTracks.push({
      src: items.captionUrl,
      label: items.captionLabel || "English",
      language: items.captionLanguage || "en-US",
      kind: "captions",
      default: true,
    });
    addedSources.add(items.captionUrl);
  }

  // Legacy chapters
  if (
    items.chaptersUrl &&
    items.chaptersUrl.trim() !== "" &&
    !addedSources.has(items.chaptersUrl)
  ) {
    activeTracks.push({
      src: items.chaptersUrl,
      kind: "chapters",
      language: "en-US",
      default: true,
    });
    addedSources.add(items.chaptersUrl);
  }

  // If no dynamic tracks and no videoUrl (preview mode?), use static textTracks
  if (activeTracks.length === 0 && !items.videoUrl) {
    activeTracks = textTracks;
  }

  const playerKey = `${items.videoUrl}-${activeTracks
    .map((t) => t.src)
    .join("-")}`;

  const captionStyles = attributes.captionStyles || {};

  // Process playback rates string into an array of numbers
  const playbackRatesStr =
    typeof effectivePlayerOptions.playbackRates === "string" &&
    effectivePlayerOptions.playbackRates.trim() !== ""
      ? effectivePlayerOptions.playbackRates
      : "0.5, 0.75, 1, 1.25, 1.5, 2";

  const playbackRates = playbackRatesStr
    .split(",")
    .map((rate) => parseFloat(rate.trim()))
    .filter((rate) => !isNaN(rate) && rate > 0);

  return (
    <MediaPlayer
      key={playerKey}
      className={`${styles.player} player`}
      title={items.playerTitle || ""}
      src={items.videoUrl || ""}
      crossOrigin={effectivePlayerOptions.crossOrigin ? "anonymous" : undefined}
      playsInline={!!effectivePlayerOptions.playsInline}
      onProviderChange={onProviderChange}
      onCanPlay={onCanPlay}
      ref={player}
      googleCast={{}}
      autoplay={!!effectivePlayerOptions.autoplay}
      loop={!!effectivePlayerOptions.loop}
      muted={!!effectivePlayerOptions.muted}
      load={effectivePlayerOptions.load}
      preload={effectivePlayerOptions.preload}
      controls={effectivePlayerOptions.nativeControls}
      nativeControls={effectivePlayerOptions.nativeControls}
      keyShortcuts={effectivePlayerOptions.keyboardAnimations}
      announcements={effectivePlayerOptions.announcements}
      playbackRates={playbackRates}>
      <MediaProvider>
        <Poster
          className={styles.poster}
          src={items.posterUrl || ""}
          alt={items.playerTitle || "Video Poster"}
        />
        {activeTracks.map((track) => (
          <Track {...track} key={track.src} />
        ))}
      </MediaProvider>

      {/* Only show custom layout if not using native controls */}
      {!effectivePlayerOptions.nativeControls && (
        <VideoLayout
          doc={doc}
          win={win}
          controls={controls}
          playerOptions={effectivePlayerOptions}
          captionStyles={captionStyles}
          setAttributes={setAttributes}
          thumbnails={items.thumbnailsUrl || ""}
          playbackRates={playbackRates}
        />
      )}
    </MediaPlayer>
  );
}
