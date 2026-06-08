import { useBlockProps } from "@wordpress/block-editor";
import { useRefEffect } from "@wordpress/compose";
import { useState } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ReactVideoPlayer from "../Common/ReactPlayer/ReactVideoPlayer";
import { FrontShortCode } from "../../../../Components/Common/FrontShortCode/FrontShortCode";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, currentPostId, currentPostType } = props;
  const [iframeWindow, setIframeWindow] = useState(null);

  const ref = useRefEffect((element) => { 
    const { ownerDocument } = element;
    const { defaultView } = ownerDocument;

    if (defaultView && defaultView !== window) {
      setIframeWindow(defaultView);
    }

    return () => {};
  }, []);

  const isPlayerPostType = ["video-player-block", "free", "pro"].includes(currentPostType);
  const blockProps = useBlockProps({ ref, draggable: false, id: `block-${clientId}` });

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

        <ReactVideoPlayer attributes={attributes} iframeWindow={iframeWindow} />
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
