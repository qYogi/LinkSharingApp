interface Props {
  onClick: () => void;
}

export const AddNewLinkButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="border border-purple rounded-lg w-full text-purple h-12 cursor-pointer font-semibold  hover:bg-light-purple"
    >
      + Add new link
    </button>
  );
};
