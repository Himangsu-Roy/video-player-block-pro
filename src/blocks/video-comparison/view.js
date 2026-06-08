import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import Comparison from "./Components/Common/Comparison";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-comparison");

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
        <Comparison attributes={attributes} blockId={el.id} />
      </>,
    );

    el?.removeAttribute("data-attributes");
  });
});
