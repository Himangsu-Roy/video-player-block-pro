import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import Playlist from "./Components/Common/Playlist";
import Schema from "./Components/Common/Schema";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-playlist");

  els.forEach((el) => {
    let attributes;
    try {
      attributes = JSON.parse(el.dataset.attributes || "{}");
    } catch (err) {
      attributes = {};
    }

    createRoot(el).render(
      <>
        <Style attributes={attributes} id={el.id} />
        <Playlist attributes={attributes} clientId={el.id} />
        {attributes?.emitSchema !== false && <Schema attributes={attributes} />}
      </>,
    );

    el?.removeAttribute("data-attributes");
  });
});
