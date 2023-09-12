export const getRefinedShipData = (
  ships: ShipDataType[]
): RefinedShipDataType[] => {
  if (!Array.isArray(ships)) {
    return [];
  }
  const data = ships?.map((ship: ShipDataType) => ({
    ...ship,
    shipId: ship?.ship_id,
    shipName: ship?.ship_name,
    homePort: ship?.home_port,
  }));
  return data;
};
