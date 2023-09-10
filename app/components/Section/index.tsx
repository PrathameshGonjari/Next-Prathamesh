import CustomCard from "@/components/CustomCard";
import Link from "next/link";

export default function Section({
  ships,
}: {
  ships: RefinedShipDataType[];
}): JSX.Element {
  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
          Ships
        </h2>
        <Link
          href="#"
          className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
        >
          Go to insights
        </Link>
      </div>
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
    </section>
  );
}
