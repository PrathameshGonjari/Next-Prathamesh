import DetailPage from "@/components/DetailPage";
import { getShips } from "@/lib/getShip";
import { getShipsById } from "@/lib/getShipById";
import React from "react";
import { getShipDetails } from "./helper";

declare interface ShipComponetType {
  params: {
    shipId: string;
  };
}

const filter = {
  offset: "0",
  limit: "12",
};

export async function generateStaticParams(): Promise<ShipComponetType[]> {
  const data = (await getShips(filter)) as ShipDataType[];
  return data?.map((ship: ShipDataType) => ({
    params: { shipId: String(ship?.ship_id) },
  }));
}

export default async function ShipDetailPage({
  params,
}: ShipComponetType): Promise<React.JSX.Element> {
  const data = (await getShipsById(params?.shipId)) as ShipDataType;
  const refinedData = getShipDetails(data);

  return (
    <DetailPage
      description={refinedData?.description ?? ""}
      image={refinedData?.image}
      title={refinedData?.ship_name}
      subHeading={refinedData?.home_port}
    />
  );
}
