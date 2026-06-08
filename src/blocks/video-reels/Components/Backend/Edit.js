import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Reels from "../Common/Reels";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div
        {...useBlockProps({
          draggable: false,
          id: `block-${clientId}`,
          className: "vpb-video-reels-editor-preview",
        })}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        <Reels
          attributes={attributes}
          clientId={`block-${clientId}`}
          isEditor={true}
        />
      </div>
    </>
  );
};

export default Edit;
