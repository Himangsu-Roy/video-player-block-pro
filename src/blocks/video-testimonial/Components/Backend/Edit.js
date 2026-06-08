import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Testimonial from "../Common/Testimonial";

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
          className: "vpb-video-testimonial-editor-preview",
        })}
      >
        <Style attributes={attributes} id={id} />
        <Testimonial attributes={attributes} blockId={id} inEditor={true} />
      </div>
    </>
  );
};

export default Edit;
