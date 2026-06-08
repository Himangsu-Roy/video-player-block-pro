import captionsCss from "../../styles/captions.module.css";
import chapterTitleStyles from "../../styles/chapter-title.module.css";
import styles from "../../styles/video-layout.module.css";

import {
  Captions,
  ChapterTitle,
  Controls,
  Gesture,
  Title,
} from "@vidstack/react";

import * as Buttons from "../buttons";
import * as Menus from "../menus";
import * as Sliders from "../sliders";
import { TimeGroup } from "../time-group";

const defaultControls = {
  showPlayControl: true,
  showMuteControl: true,
  showVolumeControl: true,
  showTimeControl: true,
  showCaptionControl: true,
  showChaptersControl: true,
  showCastControl: true,
  showSettingsControl: true,
  showPipControl: true,
  showFullscreenControl: true,
};

export function VideoLayout({
  doc,
  win,
  thumbnails,
  controls = {},
  playerOptions = {},
  captionStyles = {},
  setAttributes,
  playbackRates,
}) {
  const playerControls = { ...defaultControls, ...controls };

  return (
    <>
      <Gestures />
      {/* <KeyboardDisplay /> */}
      <Captions className={captionsCss.captions} />
      <Controls.Root className={styles.controls}>
        <Controls.Group className={styles.controlsGroup}>
          <Title className="vds-title" />
        </Controls.Group>
        <div className={styles.spacer} />
        <Controls.Group className={`${styles.controlsGroup} vds-controls-group`}>
          <Sliders.Time doc={doc} win={win} thumbnails={thumbnails} />
        </Controls.Group>
        {/* Controls Menu Icons */}
        <Controls.Group className={`${styles.controlsGroup} vds-controls-group`}>
          {playerControls.showPlayControl && (
            <Buttons.Play tooltipPlacement="top start" />
          )}
          {playerControls.showMuteControl && (
            <Buttons.Mute tooltipPlacement="top" />
          )}
          {playerControls.showVolumeControl && (
            <Sliders.Volume doc={doc} win={win} />
          )}
          {playerControls.showTimeControl && <TimeGroup />}
          {playerControls.showChaptersControl && (
            <ChapterTitle
              className={`${chapterTitleStyles.title} vds-chapter-title`}
            />
          )}
          <div className={styles.spacer} />
          {playerControls.showCaptionControl && (
            <Buttons.Caption tooltipPlacement="top" />
          )}
          {playerControls.showChaptersControl && (
            <Buttons.Chapters
              placement="top"
              tooltipPlacement="top"
              thumbnails={thumbnails}
            />
          )}
          {playerControls.showCastControl && (
            <Buttons.GoogleCast tooltipPlacement="top" />
          )}
          {playerControls.showSettingsControl && (
            <Menus.Settings
              placement="top end"
              tooltipPlacement="top"
              playerOptions={playerOptions}
              captionStyles={captionStyles}
              setAttributes={setAttributes}
              playbackRates={playbackRates}
            />
          )}
          {playerControls.showPipControl && (
            <Buttons.PIP tooltipPlacement="top" />
          )}
          {playerControls.showFullscreenControl && (
            <Buttons.Fullscreen tooltipPlacement="top end" />
          )}
        </Controls.Group>
      </Controls.Root>
    </>
  );
}

function Gestures({ doc, win }) {
  return (
    <>
      <Gesture
        className={styles.gesture}
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className={styles.gesture}
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className={styles.gesture}
        event="pointerup"
        action="toggle:controls"
      />
      <Gesture
        className={styles.gesture}
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className={styles.gesture}
        event="dblpointerup"
        action="seek:10"
      />
    </>
  );
}
