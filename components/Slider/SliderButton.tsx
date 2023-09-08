const SliderButton = ({
  onClick,
  araiLabel,
  children,
  additionalClass
}: {
  onClick: () => void;
  araiLabel: string;
  children: ChildrenType;
  additionalClass?: string
}): JSX.Element => {
  return (
    <button
      className={`absolute bottom-0 ${additionalClass} top-0 z-10 flex w-1/6 items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none`}
      onClick={onClick}
      aria-label={araiLabel}
    >
      {children}
    </button>
  );
};

export default SliderButton;
