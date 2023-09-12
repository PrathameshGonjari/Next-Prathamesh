import LoaderIcon from "@/assets/icons/loader.svg";
import Image from "next/image";

function Loader(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-96">
      <div role="status">
        <Image src={LoaderIcon} alt="loader-icon" />
      </div>
    </div>
  );
}

export default Loader;
