"use client";
import Loader from "@/components/Loader";
import { getShips } from "@/lib/getShip";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import ShipList from "../components/ShipList";
import { getRefinedShipData } from "../helper";
import PaginationContainer from "./components/PaginationContainer";
import { initialShipData } from "./helper";
import "./style.css";

function ShipsPage(): JSX.Element {
  const [shipData, setShipData] =
    useState<RefinedShipDataType[]>(initialShipData);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const latestFilter: FilterType = useAppSelector(
    (state) => state.filterappreducer
  );

  useEffect(() => {
    void loadShipData(latestFilter);
  }, [latestFilter]);

  const loadShipData = async (filter: FilterType): Promise<void> => {
    try {
      const data = (await getShips(filter)) as ShipDataType[];
      const refinedShipData = getRefinedShipData(data) ?? [];
      setShipData(refinedShipData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-4">
      <ShipList ships={shipData} />
      <PaginationContainer />
    </div>
  );
}

export default ShipsPage;
