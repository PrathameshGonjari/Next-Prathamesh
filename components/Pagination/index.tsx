import BackArrow from "@/assets/icons/backarrow.svg";
import ForwardArrow from "@/assets/icons/forwardarrow.svg";
import PaginationButton from "./PaginationButton";
import Image from "next/image";

function Pagination({
  handlePrevious,
  handleForward,
}: {
  handlePrevious: () => void;
  handleForward: () => void;
}): JSX.Element {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <PaginationButton handleClick={handlePrevious}>
          <Image src={BackArrow} alt="back-arrow" />
        </PaginationButton>
        <PaginationButton handleClick={handleForward}>
          <Image src={ForwardArrow} alt="forward-arrow" />
        </PaginationButton>
      </ul>
    </nav>
  );
}

export default Pagination;
