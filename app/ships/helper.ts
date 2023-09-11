import services from "@/services";

export const initialShipData = [
  {
    shipId: "",
    image: "",
    shipName: "",
    homePort: "",
  },
];

export async function getShips(filter: FilterType): Promise<unknown> {
  const customPath = new URLSearchParams({
    ...filter,
    offset: filter?.offset?.toString(),
    limit: filter?.limit?.toString(),
  })?.toString();

  try {
    const ships = await services.get(`/ships?${customPath}`);
    return ships;
  } catch (err) {
    console.error(err);
  }
}
