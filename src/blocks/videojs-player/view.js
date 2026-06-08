import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import VideoJS from "./Components/Common/VideoJS/VideoJS";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-vpb-videojs-player",
  );

  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <VideoJS attributes={attributes} />
      </>,
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
