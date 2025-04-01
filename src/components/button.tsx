import { MouseEventHandler } from "react";

export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className=" bg-white text-black capitalize shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <p>{label}</p>
    </button>
  );
};
