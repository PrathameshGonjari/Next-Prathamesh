import services from "@/services";
import ShipList from "../components/ShipList";
import { getRefinedShipData } from "../helper";
import PaginationContainer from "./components/PaginationContainer";
import "./style.css";

async function getShips(): Promise<unknown> {
  try {
    const ships = await services.get("/ships?limit=12");
    return ships;
  } catch (err) {
    console.error(err);
  }
}

async function ShipsPage(): Promise<JSX.Element> {
  const ships = (await getShips()) as ShipDataType[];

  const refinedShipData = getRefinedShipData(ships) ?? [];

  return (
    <div className="mt-2">
      <ShipList ships={refinedShipData} />
      <PaginationContainer />
    </div>
  );
}

export default ShipsPage;
