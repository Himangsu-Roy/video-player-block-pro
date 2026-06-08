import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import InteractiveVideo from "./Components/Common/InteractiveVideo";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-interactive-video");

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
        <InteractiveVideo attributes={attributes} />
      </>,
    );

    el?.removeAttribute("data-attributes");
  });
});
