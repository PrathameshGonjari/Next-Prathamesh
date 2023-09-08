import SliderContainer from "./SliderContainer";

export default function Slider(): JSX.Element {


  const slides: SlidesType[] = [
    {
      imageUrl: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
      label: "First slide label",
      content: "Some representative placeholder content for the first slide.",
    },
    {
      imageUrl: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
      label: "Second slide label",
      content: "Some representative placeholder content for the second slide.",
    },
    {
      imageUrl: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
      label: "Third slide label",
      content: "Some representative placeholder content for the third slide.",
    },
  ];

  return (
    <div className="relative">
      <SliderContainer
        slides={slides}
      />
    </div >
  );
}
