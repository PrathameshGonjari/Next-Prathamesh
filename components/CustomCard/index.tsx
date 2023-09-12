import PlaceholderImage from "@/assets/images/placeholder.jpg"
import Link from "next/link";

const CustomCard = ({
  shipId,
  image,
  shipName,
  homePort,
}: {
  shipId: string;
  image: string;
  shipName: string;
  homePort: string;
}): React.JSX.Element => {
  return (
    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
      <img
        src={image ?? PlaceholderImage.src}
        alt="Card img"
        className="object-cover object-center w-full h-48"
      />
      <div className="flex flex-grow">
        <div className="triangle"></div>
        <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
          <div>
            <Link
              href={`ships/${shipId}`}
              className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
            >
              {shipName}
            </Link>
            <Link
              href={`ships/${shipId}`}
              className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
            >
              {homePort}
            </Link>
            {/* <p className="mb-4">{description}</p> */}
          </div>
          <div>
            <Link
              href={`ships/${shipId}`}
              className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
