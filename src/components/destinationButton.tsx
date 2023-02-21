import data from "../../json/data.json";

export const DestinationButton = ({
  value,
  active,
  handler,
}: {
  value: number;
  active: number;
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      className={`h-9 border-b-2 ${
        value === active
          ? "border-white text-white"
          : "border-transparent text-[#D0D6F9] hover:border-[#979797]"
      } text-lg uppercase`}
      value={value}
      onClick={handler}
    >
      {data.destinations[value]?.name}
    </button>
  );
};
