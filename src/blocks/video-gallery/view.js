import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import Gallery from "./Components/Common/Gallery";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-gallery");

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
        <Gallery attributes={attributes} />
      </>,
    );

    el?.removeAttribute("data-attributes");
  });
});
