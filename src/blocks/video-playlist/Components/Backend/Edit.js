import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Playlist from "../Common/Playlist";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div
        {...useBlockProps({
          draggable: false,
          id: `block-${clientId}`,
          className: "vpb-video-playlist-editor-preview",
        })}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        <Playlist attributes={attributes} clientId={`block-${clientId}`} />
      </div>
    </>
  );
};

export default Edit;
