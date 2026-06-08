import { useEffect, useRef, useState } from "react";
import Tile from "./Tile";

const Carousel = ({ items, attributes, onSelect }) => {
  const {
    carouselSettings = {},
  } = attributes;

  const {
    slidesToShow = 3,
    slidesToScroll = 1,
    autoplay = false,
    autoplaySpeed = 5000,
    showArrows = true,
    showDots = true,
    infinite = true,
  } = carouselSettings;

  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - slidesToShow);
  const dotsCount = Math.max(1, Math.ceil(items.length / slidesToScroll));

  const goTo = (i) => {
    let next = i;
    if (infinite) {
      if (next < 0) next = maxIndex;
      if (next > maxIndex) next = 0;
    } else {
      next = Math.max(0, Math.min(maxIndex, next));
    }
    setIndex(next);
  };

  const onPrev = () => goTo(index - slidesToScroll);
  const onNext = () => goTo(index + slidesToScroll);

  useEffect(() => {
    if (!autoplay) return undefined;
    const id = setInterval(onNext, Math.max(1000, autoplaySpeed));
    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, index, items.length]);

  // Translate based on % of a single slide (which is 100% / slidesToShow of the
  // visible area). We use translateX with calc to honor the configured gap.
  const trackStyle = {
    transform: `translateX(calc(${index} * (-100% / ${slidesToShow} - var(--vpb-vg-gap, 16px) / ${slidesToShow})))`,
  };

  return (
    <div className="vpb-vg-carousel">
      {showArrows && items.length > slidesToShow && (
        <button
          type="button"
          className="vpb-vg-arrow prev"
          aria-label="Previous"
          onClick={onPrev}
        >
          ‹
        </button>
      )}

      <div className="vpb-vg-carousel-track" ref={trackRef} style={trackStyle}>
        {items.map((v) => (
          <Tile
            key={v.id}
            video={v}
            attributes={attributes}
            onSelect={onSelect}
          />
        ))}
      </div>

      {showArrows && items.length > slidesToShow && (
        <button
          type="button"
          className="vpb-vg-arrow next"
          aria-label="Next"
          onClick={onNext}
        >
          ›
        </button>
      )}

      {showDots && dotsCount > 1 && (
        <div className="vpb-vg-dots">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <button
              type="button"
              key={i}
              className={`vpb-vg-dot ${i === Math.floor(index / slidesToScroll) ? "is-active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i * slidesToScroll)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
