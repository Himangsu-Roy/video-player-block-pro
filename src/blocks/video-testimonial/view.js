import { createRoot } from "react-dom/client";

import "./style.scss";
import Style from "./Components/Common/Style";
import Testimonial from "./Components/Common/Testimonial";
import SchemaJsonLd from "./Components/Common/SchemaJsonLd";

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".wp-block-vpb-video-testimonial");

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
        <Testimonial attributes={attributes} blockId={el.id} />
        {attributes.enableSchemaMarkup && (
          <SchemaJsonLd attributes={attributes} />
        )}
      </>,
    );

    el?.removeAttribute("data-attributes");
  });
});
