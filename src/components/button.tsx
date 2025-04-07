export const Button = ({
  label,
  onClick,
  styles,
}: {
  label: string;
  styles?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white text-gray-500 font-medium capitalize shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer ${styles}`}
    >
      <p>{label}</p>
    </button>
  );
};
