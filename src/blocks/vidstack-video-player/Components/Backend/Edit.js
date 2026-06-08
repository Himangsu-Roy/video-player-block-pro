import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { Player } from "../Common/VidStackVideoPlayer/player";
import { FrontShortCode } from "../../../../Components/Common/FrontShortCode/FrontShortCode";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, currentPostId, currentPostType } = props;

  const isPlayerPostType = ["video-player-block", "free", "pro"].includes(currentPostType);

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps({ draggable: false, id: `block-${clientId}` })}>
        {isPlayerPostType && (
          <FrontShortCode
            postType={currentPostType}
            shortCode={`[video_player id=${currentPostId}]`}
          />
        )}
        
        <Style attributes={attributes} id={`block-${clientId}`} />

        <Player attributes={attributes} setAttributes={setAttributes} />
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
