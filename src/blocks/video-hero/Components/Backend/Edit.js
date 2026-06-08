import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Hero from "../Common/Hero";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div
        {...useBlockProps({
          draggable: false,
          id: `block-${clientId}`,
          className: "vpb-video-hero-editor-preview",
        })}
      >
        <Style attributes={attributes} id={`block-${clientId}`} />
        <Hero attributes={attributes} inEditor={true} />
      </div>
    </>
  );
};

export default Edit;
