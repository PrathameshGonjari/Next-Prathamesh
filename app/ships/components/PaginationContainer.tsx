"use client";
import Pagination from "@/components/Pagination";
import React from "react";

function ShipListContainer(): React.JSX.Element {
  const handleClick = (): void => {
    alert("hello");
  };
  return (
    <div className="flex justify-center align-middle mb-4">
      <Pagination handlePrevious={handleClick} handleForward={handleClick} />
    </div>
  );
}

export default ShipListContainer;
