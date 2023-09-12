import BackArrow from "@/assets/icons/backarrow.svg";
import ForwardArrow from "@/assets/icons/forwardarrow.svg";
import PaginationButton from "./PaginationButton";
import Image from "next/image";
import { PAGINATION } from "@/constants";

function Pagination({
  handleClick,
}: {
  handleClick: (e: string) => void;
}): JSX.Element {

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center gap-6 -space-x-px h-8 text-sm">
        <PaginationButton id={PAGINATION.REVERSE} handleClick={handleClick}>
          <Image src={BackArrow} alt="back-arrow" />
        </PaginationButton>
        <PaginationButton id={PAGINATION.FORWARD} handleClick={handleClick}>
          <Image src={ForwardArrow} alt="forward-arrow" />
        </PaginationButton>
      </ul>
    </nav>
  );
}

export default Pagination;
