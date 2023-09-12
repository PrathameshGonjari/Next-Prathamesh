declare interface PaginationButtonProps {
  id: string;
  handleClick: (id: string) => void;
  children: React.ReactNode;
}

function PaginationButton({
  id,
  handleClick,
  children,
}: PaginationButtonProps): JSX.Element {
  const handleClickWrapper = (): void => {
    handleClick(id);
  };
  return (
    <li>
      <div className="cursor-pointer" onClick={handleClickWrapper}>
        <span className="sr-only">Previous</span>
        {children}
      </div>
    </li>
  );
}

export default PaginationButton;
