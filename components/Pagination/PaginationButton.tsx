"use client";
function PaginationButton({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: ChildrenType;
}): JSX.Element {
  return (
    <li>
      <div className="page-link" onClick={handleClick}>
        <span className="sr-only">Previous</span>
        {children}
      </div>
    </li>
  );
}

export default PaginationButton;
