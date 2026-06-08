import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import InteractiveVideo from "../Common/InteractiveVideo";

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
          className: "vpb-interactive-video-editor-preview",
        })}
      >
        <Style attributes={attributes} id={id} />
        <InteractiveVideo attributes={attributes} inEditor={true} />
      </div>
    </>
  );
};

export default Edit;
