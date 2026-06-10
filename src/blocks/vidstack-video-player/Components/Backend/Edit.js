import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import { useRefEffect } from "@wordpress/compose";
import { useState, useEffect } from "@wordpress/element";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { Player } from "../Common/VidStackVideoPlayer/player";
import { FrontShortCode } from "../../../../Components/Common/FrontShortCode/FrontShortCode";
import EditorEmbedPortal from "../../../_shared/media/EditorEmbedPortal";
import { isYouTubeOrVimeo, buildEditorEmbedUrl } from "../../utils/functions";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, currentPostId, currentPostType } = props;
  const [iframeWindow, setIframeWindow] = useState(window);
  const [iframeDocument, setIframeDocument] = useState(document);

  const ref = useRefEffect((element) => { 
    const { ownerDocument } = element;
    const { defaultView } = ownerDocument;

    if (defaultView && defaultView !== window) {
      setIframeWindow(defaultView);
      setIframeDocument(ownerDocument);
    }

    return () => {};
  }, []);

  useEffect(() => {
    if (!iframeWindow || iframeWindow === window) return;

    const handleMessage = (event) => {
      try {
        const forwardedEvent = new MessageEvent("message", {
          data: event.data,
          origin: event.origin,
          lastEventId: event.lastEventId,
          source: event.source,
          ports: event.ports ? [...event.ports] : [],
        });
        window.dispatchEvent(forwardedEvent);
      } catch (e) {
        console.error("Error forwarding message event:", e);
      }
    };

    iframeWindow.addEventListener("message", handleMessage);
    return () => {
      iframeWindow.removeEventListener("message", handleMessage);
    };
  }, [iframeWindow]);

  const isPlayerPostType = ["video-player-block", "free", "pro"].includes(currentPostType);

  // YouTube/Vimeo can't render inside the sandboxed Studio editor canvas, so we
  // preview them through a top-window portal. Native/HLS keep the live Vidstack
  // player (same-origin, works in the canvas). All sources play normally on the
  // frontend with the full Vidstack skin.
  const editorVideoUrl = attributes?.items?.videoUrl || "";
  const useEmbedPreview = isYouTubeOrVimeo(editorVideoUrl);
  const embedPreviewUrl = useEmbedPreview ? buildEditorEmbedUrl(editorVideoUrl) : "";

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps({ ref, draggable: false, id: `block-${clientId}` })}>
        {isPlayerPostType && (
          <FrontShortCode
            postType={currentPostType}
            shortCode={`[video_player id=${currentPostId}]`}
          />
        )}
        
        <Style attributes={attributes} id={`block-${clientId}`} />

        {useEmbedPreview && embedPreviewUrl ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              background: "#000",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <EditorEmbedPortal
              src={embedPreviewUrl}
              title={attributes?.items?.playerTitle || "Video preview"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              clickThrough
            />
          </div>
        ) : (
          <Player
            // Remount once the editor's iframe window is detected so Vidstack's
            // sliders/controls bind pointer listeners to the correct realm —
            // otherwise click-to-seek and the hover thumbnail preview don't work
            // in the editor (the player first mounts against the main window).
            key={iframeWindow === window ? "vpb-main-win" : "vpb-iframe-win"}
            doc={iframeDocument}
            win={iframeWindow}
            attributes={attributes}
            setAttributes={setAttributes}
          />
        )}
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
