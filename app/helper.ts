export const getRefinedShipData = (
  ships: ShipDataType[]
): RefinedShipDataType[] => {
  const data = ships?.map((ship: ShipDataType) => ({
    ...ship,
    shipId: ship?.ship_id,
    shipName: ship?.ship_name,
    homePort: ship?.home_port,
  }));
  return data;
};
