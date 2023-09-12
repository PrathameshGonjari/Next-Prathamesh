import services from "@/services";

export async function getShips(filter: FilterType): Promise<unknown> {
  const customPath = new URLSearchParams({
    ...filter,
    offset: filter?.offset?.toString(),
    limit: filter?.limit?.toString(),
  })?.toString();

  try {
    const { data, success } = (await services.get(`/ships?${customPath}`)) as {
      data: ShipDataType[];
      success: boolean;
    };
    if (success) return data;
    return [];
  } catch (err) {
    console.error(err);
  }
}
