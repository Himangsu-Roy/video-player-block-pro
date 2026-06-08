import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import Reels from "./Components/Common/Reels";
import Schema from "./Components/Common/Schema";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-reels");

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
        <Reels attributes={attributes} clientId={el.id} isEditor={false} />
        {attributes?.seoJsonLd !== false && <Schema attributes={attributes} />}
      </>,
    );

    el?.removeAttribute("data-attributes");
  });
});
