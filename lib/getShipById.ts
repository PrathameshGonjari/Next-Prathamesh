import services from "@/services";

export async function getShipsById(id: string): Promise<unknown> {
  try {
    const { data, success } = (await services.get(`/ships/${id}`)) as {
      data: ShipDataType;
      success: boolean;
    };
    if (success) return data;
    return null;
  } catch (err) {
    console.error(err);
  }
}
