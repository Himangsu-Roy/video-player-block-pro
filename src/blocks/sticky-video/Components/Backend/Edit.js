import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import StickyVideo from "../Common/StickyVideo";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div
        {...useBlockProps({
          draggable: false,
          id: `block-${clientId}`,
          className: "vpb-sticky-video-editor-preview",
        })}
      >
        <Style attributes={attributes} id={`block-${clientId}`} />
        <StickyVideo
          attributes={attributes}
          inEditor={true}
          instanceId={clientId}
        />
      </div>
    </>
  );
};

export default Edit;
