import PlaceHolderImage from "@/assets/images/placeholder.jpg";

function EmptySlider(): JSX.Element {
  const defaultImageStyle = {
    height: "90vh",
    transition: "opacity 0.6s ease, height 0.6s ease",
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="transition delay-150 float-left w-full duration-600 ease-in-out">
        <img
          style={defaultImageStyle}
          src={PlaceHolderImage.src}
          className="  block w-full"
          alt="imageUrl"
        />
        <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white">
          <h5 className="text-xl">{"No Slide"}</h5>
          <p>Something Went Wrong</p>
        </div>
      </div>
    </div>
  );
}

export default EmptySlider;
