import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Gallery from "../Common/Gallery";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div
        {...useBlockProps({
          draggable: false,
          id: `block-${clientId}`,
          className: "vpb-video-gallery-editor-preview",
        })}
      >
        <Style attributes={attributes} id={`block-${clientId}`} />
        <Gallery attributes={attributes} isEditor />
      </div>
    </>
  );
};

export default Edit;
