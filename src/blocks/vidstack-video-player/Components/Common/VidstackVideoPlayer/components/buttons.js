import buttonStyles from "../styles/button.module.css";
import menuStyles from "../styles/menu.module.css";
import tooltipStyles from "../styles/tooltip.module.css";

import {
  CaptionButton,
  FullscreenButton,
  GoogleCastButton,
  isTrackCaptionKind,
  Menu,
  MuteButton,
  PIPButton,
  PlayButton,
  Tooltip,
  useChapterOptions,
  useMediaState,
} from "@vidstack/react";
import {
  ClosedCaptionsIcon,
  ClosedCaptionsOnIcon,
  FullscreenExitIcon,
  FullscreenIcon,
  MuteIcon,
  PauseIcon,
  PictureInPictureExitIcon,
  PictureInPictureIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeLowIcon,
  ChromecastIcon,
  ChaptersIcon,
} from "@vidstack/react/icons";

export function Play({ tooltipPlacement }) {
  const isPaused = useMediaState("paused");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PlayButton className={`play-button vds-button ${buttonStyles.button}`}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </PlayButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipStyles.tooltip}
        placement={tooltipPlacement}
        portal={false}>
        {isPaused ? "Play" : "Pause"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Mute({ tooltipPlacement }) {
  const volume = useMediaState("volume"),
    isMuted = useMediaState("muted");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <MuteButton className={`mute-button vds-button ${buttonStyles.button}`}>
          {isMuted || volume == 0 ? (
            <MuteIcon />
          ) : volume < 0.5 ? (
            <VolumeLowIcon />
          ) : (
            <VolumeHighIcon />
          )}
        </MuteButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipStyles.tooltip}
        placement={tooltipPlacement}
        portal={false}>
        {isMuted ? "Unmute" : "Mute"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Caption({ tooltipPlacement }) {
  const track = useMediaState("textTrack"),
    isOn = track && isTrackCaptionKind(track);
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <CaptionButton className={`caption-button vds-button ${buttonStyles.button}`}>
          {isOn ? <ClosedCaptionsOnIcon /> : <ClosedCaptionsIcon />}
        </CaptionButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipStyles.tooltip}
        placement={tooltipPlacement}
        portal={false}>
        {isOn ? "Closed-Captions Off" : "Closed-Captions On"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function PIP({ tooltipPlacement }) {
  const isActive = useMediaState("pictureInPicture");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PIPButton className={`pip-button vds-button ${buttonStyles.button}`}>
          {isActive ? <PictureInPictureExitIcon /> : <PictureInPictureIcon />}
        </PIPButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipStyles.tooltip}
        placement={tooltipPlacement}
        portal={false}>
        {isActive ? "Exit PIP" : "Enter PIP"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Fullscreen({ tooltipPlacement }) {
  const isActive = useMediaState("fullscreen");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <FullscreenButton
          className={`fullscreen-button vds-button ${buttonStyles.button}`}>
          {isActive ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </FullscreenButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipStyles.tooltip}
        placement={tooltipPlacement}
        portal={false}>
        {isActive ? "Exit Fullscreen" : "Enter Fullscreen"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function GoogleCast({ tooltipPlacement }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <GoogleCastButton
          className={`cast-button vds-button ${buttonStyles.button}`}>
          <ChromecastIcon />
        </GoogleCastButton>
      </Tooltip.Trigger>
      <Tooltip.Content
        className={tooltipStyles.tooltip}
        placement={tooltipPlacement}
        portal={false}>
        Google Cast
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Chapters({ placement, tooltipPlacement, thumbnails }) {
  return (
    <Menu.Root className={menuStyles.menu}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Menu.Button
            className={`chapters-button vds-button vds-menu-button ${buttonStyles.button}`}>
            <ChaptersIcon />
          </Menu.Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          className={tooltipStyles.tooltip}
          placement={tooltipPlacement}
          portal={false}>
          Chapters
        </Tooltip.Content>
      </Tooltip.Root>
      <Menu.Content className={`${menuStyles.menu} vds-menu-content`} placement={placement} portal={false}>
        <ChapterOptions thumbnails={thumbnails} />
      </Menu.Content>
    </Menu.Root>
  );
}

function ChapterOptions() {
  const options = useChapterOptions();
  return (
    <Menu.RadioGroup
      className={menuStyles.radioGroup}
      value={options.selectedValue}>
      {options.map(
        ({
          label,
          value,
          select,
          startTimeText,
          durationText,
          setProgressVar,
        }) => (
          <Menu.Radio
            className={menuStyles.radio}
            value={value}
            onSelect={select}
            ref={setProgressVar}
            key={value}>
            {/* {thumbnails && thumbnails.endsWith(".vtt") ? (
              <Thumbnail.Root
                src={thumbnails}
                time={startTime}
                className={menuStyles.thumbnail}>
                <Thumbnail.Img />
              </Thumbnail.Root>
            ) : videoSrc ? (
              <ChapterThumbnail
                videoSrc={videoSrc}
                startTime={startTime}
                className={menuStyles.thumbnail}
              />
            ) : null} */}
            <div className={menuStyles.chapterDetails}>
              <span className={menuStyles.chapterTitle}>{label}</span>
              <div className={menuStyles.chapterMeta}>
                <span className={menuStyles.chapterStartTime}>
                  {startTimeText}
                </span>
                <span className={menuStyles.chapterDuration}>
                  {durationText}
                </span>
              </div>
            </div>
            <div className={menuStyles.progressBar} />
          </Menu.Radio>
        ),
      )}
    </Menu.RadioGroup>
  );
}
