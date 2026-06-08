import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import StickyVideo from "./Components/Common/StickyVideo";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-sticky-video");

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
        <StickyVideo attributes={attributes} instanceId={el.id} />
      </>,
    );

    el?.removeAttribute("data-attributes");
  });
});
