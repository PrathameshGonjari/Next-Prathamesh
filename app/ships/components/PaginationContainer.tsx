"use client";
import Pagination from "@/components/Pagination";
import { PAGINATION } from "@/constants";
import { updateFilter } from "@/redux/features/filter-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useDispatch } from "react-redux";

function ShipListContainer(): React.JSX.Element {

  const { limit, offset } = useAppSelector((state) => state.filterappreducer);

  const dispatch = useDispatch();

  const handleClick = (e: string): void => {
    let updatedOffset = Number(offset);
    if (e === PAGINATION.FORWARD) {
      updatedOffset += 6;
    }

    if (e === PAGINATION.REVERSE) {
      updatedOffset -= 6;
    }

    const updatedFilter = {
      limit,
      offset: updatedOffset.toString(),
    };

    dispatch(updateFilter(updatedFilter));
  };

  return (
    <div className="flex justify-center align-middle mb-4">
      <Pagination handleClick={handleClick} />
    </div>
  );
}

export default ShipListContainer;
