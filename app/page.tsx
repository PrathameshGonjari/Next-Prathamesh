import Slider from "@/components/Slider";
import Section from "./components/Section";
import HomeDashboardFooter from "./components/HomeDashboardFooter";
import services from "@/services";
import { getRefinedShipData } from "./helper";

async function getSlide(): Promise<unknown> {
  try {
    const slides = await services.get("/dragons");
    return slides;
  } catch (err) {
    console.error(err);
  }
}

async function getShips(): Promise<unknown> {
  try {
    const ships = await services.get("/ships?limit=6");
    return ships;
  } catch (err) {
    console.error(err);
  }
}

export default async function Home(): Promise<JSX.Element> {
  const slides = (await getSlide()) as SlidesType[];

  const ships = (await getShips()) as ShipDataType[];
  const refinedShipData = getRefinedShipData(ships);

  return (
    <>
      <Slider slides={slides} />
      <Section ships={refinedShipData} />
      <HomeDashboardFooter />
    </>
  );
}
