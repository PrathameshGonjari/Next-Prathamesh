import CustomCard from "@/components/CustomCard";

function ShipList({
  ships,
}: {
  ships: RefinedShipDataType[];
}): React.JSX.Element {
  return (
    <div className="flex flex-wrap -mx-4">
      {ships?.map(
        ({
          shipId,
          image,
          shipName,
          homePort,
        }: RefinedShipDataType): JSX.Element => {
          return (
            <CustomCard
              key={shipId}
              shipId={shipId}
              image={image}
              shipName={shipName}
              homePort={homePort}
            />
          );
        }
      )}
    </div>
  );
}

export default ShipList;
