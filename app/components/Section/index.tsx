import CustomCard from "@/components/CustomCard";

export default function Section(): JSX.Element {
  const CardListArray = [
    {
      id: "1",
      imageUrl: "https://source.unsplash.com/Lki74Jj7H-U/400x300",
      title: "Reliable Schemas",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulladelectus corporis commodi aperiam, amet cupiditate?",
      subTitle: "What Zombies Can Teach You About Food",
    },
    {
      id: "2",
      imageUrl: "https://source.unsplash.com/Lki74Jj7H-U/400x300",
      title: "Client-based Adoption",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulladelectus corporis commodi aperiam, amet cupiditate?",
      subTitle: "Old School Art",
    },
    {
      id: "3",
      imageUrl: "https://source.unsplash.com/Lki74Jj7H-U/400x300",
      title: "Intellectual Capital",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulladelectus corporis commodi aperiam, amet cupiditate?",
      subTitle: "5 Things To Do About Rain",
    },
  ];
  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
          Capsules
        </h2>
        <a
          href="#"
          className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
        >
          Go to insights
        </a>
      </div>

      <div className="flex flex-wrap -mx-4">
        {CardListArray?.map(
          ({
            id,
            imageUrl,
            title,
            description,
            subTitle,
          }: {
            id: string;
            imageUrl: string;
            title: string;
            description: string;
            subTitle: string;
          }): JSX.Element => {
            return (
              <CustomCard
                key={id}
                id={id}
                imageUrl={imageUrl}
                title={title}
                description={description}
                subTitle={subTitle}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
