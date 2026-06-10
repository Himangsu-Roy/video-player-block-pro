import { useBlockProps } from "@wordpress/block-editor";
import { useRefEffect } from "@wordpress/compose";
import { useState } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ReactVideoPlayer from "../Common/ReactPlayer/ReactVideoPlayer";
import { FrontShortCode } from "../../../../Components/Common/FrontShortCode/FrontShortCode";
import { isYouTubeOrVimeo, getYouTubeId } from "../../utils/functions";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, currentPostId, currentPostType } = props;
  const [iframeWindow, setIframeWindow] = useState(null);

  const ref = useRefEffect((element) => { 
    const { ownerDocument } = element;
    const { defaultView } = ownerDocument;

    if (defaultView && defaultView !== window) {
      setIframeWindow(defaultView);

      // Register custom elements in the iframe context
      const tags = [
        'media-controller',
        'media-control-bar',
        'media-time-range',
        'media-time-display',
        'media-volume-range',
        'media-playback-rate-button',
        'media-play-button',
        'media-seek-backward-button',
        'media-seek-forward-button',
        'media-mute-button',
        'media-fullscreen-button',
        'media-captions-button',
        'media-poster-image',
        'media-loading-indicator',
        'media-pip-button',
        'media-airplay-button',
        'media-gesture-receiver',
        'media-captions-menu',
        'media-playback-rate-menu',
        'media-rendition-menu',
        'media-settings-menu',
        'media-settings-menu-item',
        'media-settings-menu-button',
        'youtube-video',
        'vimeo-video',
        'hls-video',
        'dash-video',
        'mux-video'
      ];
      tags.forEach(tag => {
        if (!defaultView.customElements.get(tag)) {
          const constructor = defaultView.customElements.get(tag);
          if (constructor) {
            try {
              defaultView.customElements.define(tag, constructor);
            } catch (e) {
              console.warn(`Failed to register ${tag} in iframe`, e);
            }
          }
        }
      });
    }

    return () => {};
  }, []);

  const isPlayerPostType = ["video-player-block", "free", "pro"].includes(currentPostType);
  const blockProps = useBlockProps({ ref, draggable: false, id: `block-${clientId}` });

  // YouTube/Vimeo can't actually play inside the sandboxed Studio editor canvas,
  // but the media-chrome control skin + poster still render. So in the editor we
  // show the real player UI over a poster (falling back to the YouTube thumbnail
  // when no poster is set) instead of a black box. Live playback works on the
  // frontend, where there's no sandbox.
  const defaultQuality = (attributes?.items?.videoQualities || []).find(
    (q) => q.isDefault,
  );
  const editorVideoUrl =
    defaultQuality?.url || attributes?.items?.videoUrl || "";
  const ytId = getYouTubeId(editorVideoUrl);
  const fallbackPoster = ytId
    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
    : "";
  const needsFallbackPoster =
    isYouTubeOrVimeo(editorVideoUrl) &&
    !attributes?.items?.posterUrl &&
    fallbackPoster;
  const editorAttributes = needsFallbackPoster
    ? {
        ...attributes,
        items: { ...(attributes.items || {}), posterUrl: fallbackPoster },
      }
    : attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...blockProps}>
        {isPlayerPostType && (
          <FrontShortCode
            postType={currentPostType}
            shortCode={`[video_player id=${currentPostId}]`}
          />
        )}
        <Style attributes={attributes} id={`block-${clientId}`} />

        <ReactVideoPlayer
          attributes={editorAttributes}
          iframeWindow={iframeWindow}
        />
      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getCurrentPostId, getCurrentPostType } = select("core/editor");
  return {
    currentPostId:
      getCurrentPostId() || select("core").getEditedPostAttribute("id"),
    currentPostType:
      getCurrentPostType() || select("core").getEditedPostAttribute("type"),
  };
})(Edit);
