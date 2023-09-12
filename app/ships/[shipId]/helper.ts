export const getShipDetails = (ship: ShipDataType): ShipDataType => {
  const data = {
    ...ship,
    description: `the name ${ship?.ship_name} While the ship's model ${
      ship?.ship_name
    }, and it type is ${ship?.ship_type}, primarily serving roles as a ${
      ship?.roles?.[0]
    } and ${ship?.roles?.[1]} Currently, it is ${
      ship?.active ? "active" : "not active"
    }  in maritime operations. With an International Maritime Organization (IMO) number of ${
      ship?.imo
    } and a Maritime Mobile Service Identity (MMSI) number of ${
      ship?.mmsi
    }, the ship boasts a notable American Bureau of Shipping (ABS) number of ${
      ship?.abs
    } and a class number of ${ship?.class}. It has a substantial weight of ${
      ship?.weight_lbs
    } pounds ${ship?.weight_kg} and was constructed in the year ${
      ship?.year_built
    }. The ship's home port is ${ship?.home_port}`,
  };
  return data;
};
