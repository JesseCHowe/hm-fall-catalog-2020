import React, { useState } from "react";
import { Link } from "react-router-dom";

const RunwayCarousel = ({ dummyData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null);

  function next() {
    if (currentSlide < dummyData.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setDirection("forward");
    }
  }

  function prev() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setDirection("backward");
    }
  }

  return (
    <div className="slideshow-container">
      {dummyData.map((d, i) => {
        let mode;
        i === currentSlide
          ? (mode = `active-slide-${direction}`)
          : (mode = `hidden-slide`);
        if (i === currentSlide - 1 && direction === "forward") {
          mode = "prev-slide-forward";
        }
        if (i === currentSlide + 1 && direction === "backward") {
          mode = "prev-slide-backward";
        }
        if (i === 0 && currentSlide === 0 && !direction) {
          mode = "initial-slide";
        }

        return (
          <div className={`slide ${mode}`} key={`${d.id}-${d.name}-carousel`}>
            <Link to={`/product/${d.id}`}>
              <img src={d.image} alt={d.name} />
            </Link>
          </div>
        );
      })}
      <button className="prev" onClick={() => prev()}>
        &#10094;
      </button>
      <button className="next" onClick={() => next()}>
        &#10095;
      </button>
    </div>
  );
};

export default RunwayCarousel;
