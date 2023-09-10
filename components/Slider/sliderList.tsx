function SliderList({
  slides,
  currentSlide,
}: {
  slides: SlidesType[];
  currentSlide: number;
}): React.JSX.Element {
  return (
    <div className="w-full overflow-hidden">
      {slides?.map((slide, index) => {
        const isActive = currentSlide === index;
        const imageStyle = {
          height: isActive ? "90vh" : "0",
          transition: "opacity 0.6s ease, height 0.6s ease",
        };
        return (
          <div
            key={index}
            className={`${isActive ? "block" : "hidden"
              } transition delay-150 float-left w-full duration-600 ease-in-out`}
          >
            <img
              style={imageStyle}
              src={slide?.flickr_images?.[0]}
              className="  block w-full"
              alt="imageUrl"
            />
            <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white">
              <h5 className="text-xl">{slide.name}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SliderList;
