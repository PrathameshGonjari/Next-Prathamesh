import Slider from "@/components/Slider";
import Section from "./components/Section";
import HomeDashboardFooter from "./components/HomeDashboardFooter";
import services from "@/services";
import { getRefinedShipData } from "./helper";

async function getSlide(): Promise<unknown> {
  try {
    const { data, success } = (await services.get("/dragons")) as {
      data: SlidesType[];
      success: boolean;
    };
    if (success) return data;
    return [];
  } catch (err) {
    console.error(err);
  }
}

async function getShips(): Promise<unknown> {
  try {
    const { data, success } = (await services.get("/ships?limit=6")) as {
      data: ShipDataType[];
      success: boolean;
    };
    if (success) return data;
    return [];
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
