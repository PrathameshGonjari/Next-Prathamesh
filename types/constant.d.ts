type ChildrenType = string | JSX.Element;

declare interface Mission {
  name: string;
  flight: number;
}

declare interface ShipDataType {
  ship_id: string;
  ship_name: string;
  ship_model: null | string;
  ship_type: string;
  roles: string[];
  active: boolean;
  imo: number;
  mmsi: number;
  abs: number;
  class: number;
  weight_lbs: number;
  weight_kg: number;
  year_built: number;
  home_port: string;
  status: string;
  speed_kn: null | number;
  course_deg: null | number;
  position: {
    latitude: null | number;
    longitude: null | number;
  };
  successful_landings: null | number;
  attempted_landings: null | number;
  missions: Mission[];
  url: string;
  image: string;
  description?: string;
}

declare interface RefinedShipDataType {
  shipId: string;
  image: string;
  shipName: string;
  homePort: string;
}

declare interface FilterType {
  limit: string;
  offset: string;
}

declare interface AppReducerState {
  filterappreducer: FilterType;
}
