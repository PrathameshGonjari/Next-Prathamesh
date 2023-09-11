type ChildrenType = string | JSX.Element;

declare interface ShipDataType {
  ship_id: string;
  image: string;
  ship_name: string;
  home_port: string;
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
  shipId?: string;
}

declare interface AppReducerState {
  filterappreducer: FilterType;
}
