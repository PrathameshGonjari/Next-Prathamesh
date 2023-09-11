import DetailPage from "@/components/DetailPage";
import React from "react";
import { getShips } from "../helper";

declare interface ShipComponetType {
  params: {
    shipId: string;
  };
}

const filter = {
  shipId: "",
  offset: "0",
  limit: "12",
};

export async function generateStaticParams(): Promise<unknown> {
  const data = (await getShips(filter)) as ShipDataType[];
  return data?.map((ship: ShipDataType) => ({
    params: { shipId: String(ship?.ship_id) },
  }));
}

async function ShipDetailPage({
  params,
}: ShipComponetType): Promise<React.JSX.Element> {
  const data = (await getShips({
    ...filter,
    shipId: params?.shipId,
  })) as ShipDataType[];

  return <DetailPage description="" image="" title="" subHeading="" />;
}

export default ShipDetailPage;
