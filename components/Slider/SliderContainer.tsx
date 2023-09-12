"use client";
import React, { useEffect, useState } from "react";
import SliderButton from "./SliderButton";
import BackArrow from "@/assets/icons/backarrow.svg";
import ForwardArrow from "@/assets/icons/forwardarrow.svg";
import Image from "next/image";
import SliderList from "./sliderList";

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
      <SliderList currentSlide={currentSlide} slides={slides ?? []} />
      <SliderButton
        onClick={prevSlide}
        araiLabel="Previous Slide"
        additionalClass="left-0"
      >
        <>
          <span className="inline-block h-8 w-8">
            <Image width={50} height={50} src={BackArrow} alt="" />
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </>
      </SliderButton>
      <SliderButton
        onClick={nextSlide}
        araiLabel="Next Slide"
        additionalClass="right-0"
      >
        <>
          <span className="inline-block h-8 w-8">
            <Image width={50} height={50} src={ForwardArrow} alt="" />
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </>
      </SliderButton>
    </>
  );
};

export default SliderContainer;
