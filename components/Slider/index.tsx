import SliderContainer from "./SliderContainer";

export default function Slider({ slides }: { slides: SlidesType[] }): JSX.Element {

  return (
    <div className="relative">
      <SliderContainer
        slides={slides}
      />
    </div >
  );
}
