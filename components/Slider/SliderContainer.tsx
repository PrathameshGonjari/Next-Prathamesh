"use client";
import React, { useEffect, useState } from "react";
import SliderButton from "./SliderButton";

const SliderContainer = ({
  slides,
}: {
  slides: SlidesType[];
}): React.JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="relative">
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={`${currentSlide === index ? "block" : "hidden"
                  } transition delay-150 float-left w-full duration-600 ease-in-out`}
              >
                <img src={slide.imageUrl} className="block w-full" alt="..." />
                <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white">
                  <h5 className="text-xl">{slide.label}</h5>
                  <p>{slide.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SliderButton
        onClick={prevSlide}
        araiLabel="Previous Slide"
        additionalClass="left-0"
      >
        Previous
      </SliderButton>
      <SliderButton
        onClick={nextSlide}
        araiLabel="Next Slide"
        additionalClass="right-0"
      >
        Previous
      </SliderButton>
    </>
  );
};

export default SliderContainer;
