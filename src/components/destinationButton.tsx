import React from "react";

import data from "../../json/data.json";

export const DestinationButton = ({
  value,
  handler,
}: {
  value: number;
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      className="h-9 border-b-2 border-transparent text-lg uppercase text-[#D0D6F9] hover:border-[#979797]"
      value={value}
      onClick={handler}
    >
      {data.destinations[value]?.name}
    </button>
  );
};
