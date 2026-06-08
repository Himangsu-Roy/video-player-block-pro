import {
  Container,
  BufferingIndicator,
  Controls,
  FullscreenButton,
  MuteButton,
  PiPButton,
  PlayButton,
  PlaybackRateButton,
  Popover,
  Poster,
  SeekButton,
  Slider,
  Time,
  TimeSlider,
  Tooltip,
  VolumeSlider,
} from "@videojs/react";

import { Button, SEEK_TIME } from "./Button";
import { ErrorDialog, errorClasses } from "./ErrorDialog";
import CaptionsMenu from "./CaptionsMenu";
import { PlayLabel, PiPLabel, FullscreenLabel } from "./Labels";
import {
  BufferingIcon,
  RestartIcon,
  PlayIcon,
  PauseIcon,
  SeekIcon,
  VolumeOffIcon,
  VolumeLowIcon,
  VolumeHighIcon,
  PiPIcon,
  FullscreenEnterIcon,
  FullscreenExitIcon,
} from "./Icons";

const VideoJSSkin = ({ children, className, posterUrl, controls = {}, dimensions = {}, ...rest }) => {
  const {
    showPlayControl = true,
    showSeekControls = true,
    showMuteControl = true,
    showVolumeControl = true,
    showTimeControl = true,
    showPlaybackRateControl = true,
    showCaptionControl = true,
    showPipControl = true,
    showFullscreenControl = true,
  } = controls;

  const hasExplicitHeight = !!dimensions.height;
  const containerStyle = {
    width: dimensions.width || "100%",
    maxWidth: "100%",
    height: hasExplicitHeight ? dimensions.height : undefined,
    aspectRatio: hasExplicitHeight ? undefined : (dimensions.aspectRatio || "16/9"),
    margin: dimensions.width !== "100%" ? "0 auto" : undefined,
  };

  return (
    <Container
      className={["media-default-skin media-default-skin--video", className]
        .filter(Boolean)
        .join(" ")}
      style={containerStyle}
      {...rest}>
      {children}

      {posterUrl && <Poster src={posterUrl} alt="" />}

      <BufferingIndicator
        render={(props) => (
          <div {...props} className="media-buffering-indicator">
            <div className="media-surface">
              <BufferingIcon />
            </div>
          </div>
        )}
      />

      <ErrorDialog classes={errorClasses} />

      <Controls.Root className="media-surface media-controls">
        <Tooltip.Provider>
          {/* Play */}
          {showPlayControl && (
            <Tooltip.Root side="top">
              <Tooltip.Trigger
                render={
                  <PlayButton
                    render={(props) => (
                      <Button
                        {...props}
                        className="media-button--icon media-button--play">
                        <RestartIcon />
                        <PlayIcon />
                        <PauseIcon />
                      </Button>
                    )}
                  />
                }
              />
              <Tooltip.Popup className="media-surface media-tooltip">
                <PlayLabel />
              </Tooltip.Popup>
            </Tooltip.Root>
          )}

          {/* Seek backward */}
          {showSeekControls && (
            <Tooltip.Root side="top">
              <Tooltip.Trigger
                render={
                  <SeekButton
                    seconds={-SEEK_TIME}
                    render={(props) => (
                      <Button
                        {...props}
                        className="media-button--icon media-button--seek">
                        <span className="media-icon__container">
                          <SeekIcon flipped />
                          <span className="media-icon__label">{SEEK_TIME}</span>
                        </span>
                      </Button>
                    )}
                  />
                }
              />
              <Tooltip.Popup className="media-surface media-tooltip">
                Seek backward {SEEK_TIME} seconds
              </Tooltip.Popup>
            </Tooltip.Root>
          )}

          {/* Seek forward */}
          {showSeekControls && (
            <Tooltip.Root side="top">
              <Tooltip.Trigger
                render={
                  <SeekButton
                    seconds={SEEK_TIME}
                    render={(props) => (
                      <Button
                        {...props}
                        className="media-button--icon media-button--seek">
                        <span className="media-icon__container">
                          <SeekIcon />
                          <span className="media-icon__label">{SEEK_TIME}</span>
                        </span>
                      </Button>
                    )}
                  />
                }
              />
              <Tooltip.Popup className="media-surface media-tooltip">
                Seek forward {SEEK_TIME} seconds
              </Tooltip.Popup>
            </Tooltip.Root>
          )}

          {/* Time + Slider */}
          {showTimeControl && (
            <Time.Group className="media-time">
              <Time.Value type="current" className="media-time__value" />
              <TimeSlider.Root className="media-slider">
                <TimeSlider.Track className="media-slider__track">
                  <TimeSlider.Fill className="media-slider__fill" />
                  <TimeSlider.Buffer className="media-slider__buffer" />
                </TimeSlider.Track>
                <TimeSlider.Thumb className="media-slider__thumb" />
                <Slider.Thumbnail className="media-slider__thumbnail" />
              </TimeSlider.Root>
              <Time.Value type="duration" className="media-time__value" />
            </Time.Group>
          )}

          {/* Playback rate */}
          {showPlaybackRateControl && (
            <Tooltip.Root side="top">
              <Tooltip.Trigger
                render={
                  <PlaybackRateButton
                    render={(props) => (
                      <Button
                        {...props}
                        className="media-button--icon media-button--playback-rate"
                      />
                    )}
                  />
                }
              />
              <Tooltip.Popup className="media-surface media-tooltip">
                Toggle playback rate
              </Tooltip.Popup>
            </Tooltip.Root>
          )}

          {/* Volume */}
          {showMuteControl && (
            <Popover.Root openOnHover delay={200} closeDelay={100} side="top">
              <Popover.Trigger
                render={
                  <MuteButton
                    render={(props) => (
                      <Button
                        {...props}
                        className="media-button--icon media-button--mute">
                        <VolumeOffIcon />
                        <VolumeLowIcon />
                        <VolumeHighIcon />
                      </Button>
                    )}
                  />
                }
              />
              {showVolumeControl && (
                <Popover.Popup className="media-surface media-popover media-popover--volume">
                  <VolumeSlider.Root
                    className="media-slider"
                    orientation="vertical"
                    thumbAlignment="edge">
                    <VolumeSlider.Track className="media-slider__track">
                      <VolumeSlider.Fill className="media-slider__fill" />
                    </VolumeSlider.Track>
                    <VolumeSlider.Thumb className="media-slider__thumb media-slider__thumb--persistent" />
                  </VolumeSlider.Root>
                </Popover.Popup>
              )}
            </Popover.Root>
          )}

          {/* Captions */}
          {showCaptionControl && <CaptionsMenu />}

          {/* PiP */}
          {showPipControl && (
            <Tooltip.Root side="top">
              <Tooltip.Trigger
                render={
                  <PiPButton
                    render={(props) => (
                      <Button {...props} className="media-button--icon">
                        <PiPIcon />
                      </Button>
                    )}
                  />
                }
              />
              <Tooltip.Popup className="media-surface media-tooltip">
                <PiPLabel />
              </Tooltip.Popup>
            </Tooltip.Root>
          )}

          {/* Fullscreen */}
          {showFullscreenControl && (
            <Tooltip.Root side="top">
              <Tooltip.Trigger
                render={
                  <FullscreenButton
                    render={(props) => (
                      <Button
                        {...props}
                        className="media-button--icon media-button--fullscreen">
                        <FullscreenEnterIcon />
                        <FullscreenExitIcon />
                      </Button>
                    )}
                  />
                }
              />
              <Tooltip.Popup className="media-surface media-tooltip">
                <FullscreenLabel />
              </Tooltip.Popup>
            </Tooltip.Root>
          )}
        </Tooltip.Provider>
      </Controls.Root>

      <div className="media-overlay" />
    </Container>
  );
};

export default VideoJSSkin;
