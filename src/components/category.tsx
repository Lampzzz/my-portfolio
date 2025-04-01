export const CategoryCard = ({ label }: { label: string }) => {
  return (
    <button
      type="button"
      className="bg-white text-black capitalize shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <p>{label}</p>
    </button>
  );
};
