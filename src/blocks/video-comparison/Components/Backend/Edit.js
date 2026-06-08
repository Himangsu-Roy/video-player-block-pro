import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Comparison from "../Common/Comparison";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const id = `block-${clientId}`;

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div
        {...useBlockProps({
          draggable: false,
          id,
          className: "vpb-video-comparison-editor-preview",
        })}
      >
        <Style attributes={attributes} id={id} />
        <Comparison attributes={attributes} blockId={id} inEditor={true} />
      </div>
    </>
  );
};

export default Edit;
