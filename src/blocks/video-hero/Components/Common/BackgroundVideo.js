import { useEffect, useRef, useState } from "react";
import {
  getYoutubeId,
  getVimeoId,
  isYoutube,
  isVimeo,
  shouldSuppressBackgroundVideo,
} from "../../utils/functions";

/**
 * Renders the looping background video for the hero.
 *
 * Strategy:
 *   - YouTube / Vimeo: embed iframe with appropriate autoplay+loop params.
 *   - Anything else (mp4/webm/hls/dash): a muted, autoplay, playsinline
 *     native <video>. Browsers handle HLS on Safari natively, and the
 *     other Pro engines (Vidstack, Video.js, react-player) can take over
 *     when explicitly selected.
 *
 * Suppression rules (the suppression hook in utils/functions.js):
 *   - prefers-reduced-motion
 *   - navigator.connection.saveData
 *   - viewport narrower than mobileBreakpoint (when mobileBehavior !== 'play')
 */
const BackgroundVideo = ({ attributes, inEditor = false }) => {
  const {
    backgroundVideoUrl,
    backgroundVideoSource,
    videoEngine,
    posterImage = {},
    loopVideo,
    autoplay,
    muted,
    playsInline,
    playbackRate = 1,
    videoFit = "cover",
    videoPosition = "center center",
    videoOpacity = 100,
    mobileBehavior = "poster",
    lazyLoadVideo,
    preload = "metadata",
  } = attributes;

  const videoRef = useRef(null);
  const [suppressed, setSuppressed] = useState(false);

  // Detect suppression once on mount + on resize. In the editor we always
  // show the background video so the user can see what they are configuring.
  useEffect(() => {
    if (inEditor) return;
    const evaluate = () =>
      setSuppressed(shouldSuppressBackgroundVideo(attributes));
    evaluate();
    window.addEventListener("resize", evaluate);
    return () => window.removeEventListener("resize", evaluate);
  }, [inEditor, attributes]);

  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.playbackRate = playbackRate || 1;
      } catch (e) {
        // Some browsers reject very low playback rates; ignore.
      }
    }
  }, [playbackRate]);

  // mobileBehavior=hide: render only the poster (or nothing) on small screens.
  if (suppressed && mobileBehavior === "hide") {
    return (
      <div
        className="vpb-vh-bg vpb-vh-bg--hidden"
        aria-hidden="true"
        style={{ opacity: videoOpacity / 100 }}
      >
        {posterImage?.url ? (
          <img
            src={posterImage.url}
            alt=""
            className="vpb-vh-poster"
            style={{ objectFit: videoFit, objectPosition: videoPosition }}
          />
        ) : null}
      </div>
    );
  }

  // When suppressed (reduced-motion / saveData / mobile=poster), just show
  // the still poster image instead of the video.
  if (suppressed) {
    return (
      <div
        className="vpb-vh-bg vpb-vh-bg--poster"
        aria-hidden="true"
        style={{ opacity: videoOpacity / 100 }}
      >
        {posterImage?.url ? (
          <img
            src={posterImage.url}
            alt=""
            className="vpb-vh-poster"
            style={{ objectFit: videoFit, objectPosition: videoPosition }}
          />
        ) : null}
      </div>
    );
  }

  const isYt = backgroundVideoSource === "youtube" || isYoutube(backgroundVideoUrl);
  const isVm = backgroundVideoSource === "vimeo" || isVimeo(backgroundVideoUrl);

  // YouTube iframe background - uses the playlist trick to loop and mutes.
  if (isYt) {
    const id = getYoutubeId(backgroundVideoUrl);
    if (!id) return null;
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: muted ? "1" : "0",
      loop: loopVideo ? "1" : "0",
      playlist: id,
      controls: "0",
      modestbranding: "1",
      rel: "0",
      showinfo: "0",
      playsinline: playsInline ? "1" : "0",
      iv_load_policy: "3",
      disablekb: "1",
    });
    return (
      <div
        className="vpb-vh-bg vpb-vh-bg--iframe"
        aria-hidden="true"
        style={{ opacity: videoOpacity / 100 }}
        data-engine={videoEngine}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}?${params.toString()}`}
          title="Background video"
          loading={lazyLoadVideo ? "lazy" : "eager"}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          tabIndex="-1"
          style={{ objectFit: videoFit, objectPosition: videoPosition }}
        />
      </div>
    );
  }

  if (isVm) {
    const id = getVimeoId(backgroundVideoUrl);
    if (!id) return null;
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      muted: muted ? "1" : "0",
      loop: loopVideo ? "1" : "0",
      background: "1",
      controls: "0",
      title: "0",
      byline: "0",
      portrait: "0",
    });
    return (
      <div
        className="vpb-vh-bg vpb-vh-bg--iframe"
        aria-hidden="true"
        style={{ opacity: videoOpacity / 100 }}
        data-engine={videoEngine}
      >
        <iframe
          src={`https://player.vimeo.com/video/${id}?${params.toString()}`}
          title="Background video"
          loading={lazyLoadVideo ? "lazy" : "eager"}
          allow="autoplay; fullscreen"
          frameBorder="0"
          tabIndex="-1"
          style={{ objectFit: videoFit, objectPosition: videoPosition }}
        />
      </div>
    );
  }

  if (!backgroundVideoUrl) {
    // No video URL at all - fall back to the poster image so the editor
    // always has something to show.
    return (
      <div
        className="vpb-vh-bg vpb-vh-bg--poster"
        aria-hidden="true"
        style={{ opacity: videoOpacity / 100 }}
      >
        {posterImage?.url ? (
          <img
            src={posterImage.url}
            alt=""
            className="vpb-vh-poster"
            style={{ objectFit: videoFit, objectPosition: videoPosition }}
          />
        ) : null}
      </div>
    );
  }

  return (
    <div
      className="vpb-vh-bg vpb-vh-bg--video"
      aria-hidden="true"
      style={{ opacity: videoOpacity / 100 }}
      data-engine={videoEngine}
    >
      <video
        ref={videoRef}
        className="vpb-vh-video"
        src={backgroundVideoUrl}
        poster={posterImage?.url || undefined}
        autoPlay={!!autoplay}
        loop={!!loopVideo}
        muted={!!muted}
        playsInline={!!playsInline}
        preload={preload}
        tabIndex="-1"
        aria-hidden="true"
        style={{ objectFit: videoFit, objectPosition: videoPosition }}
      />
    </div>
  );
};

export default BackgroundVideo;
