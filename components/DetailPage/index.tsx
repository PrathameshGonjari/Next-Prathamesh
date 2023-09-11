function DetailPage({
  description,
  image,
  title,
  subHeading,
}: {
  description: string;
  image: string;
  title: string;
  subHeading: string;
}): React.JSX.Element {
  return (
    <div className="flex items-center justify-center max-96">
      <div className="md:flex border m-10">
        <div className="p-2 md:flex-shrink-0">
          <img
            src={image}
            width="448"
            height="299"
            alt="Ship Image"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4">
          <div className="uppercase text-sm text-indigo-600 font-bold">
            {title}
          </div>
          <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
            {subHeading}
          </div>
          <p className="mt-2 text-gray-900">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
