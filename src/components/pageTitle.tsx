import { Barlow_Condensed } from "@next/font/google";

const barlow_condensed = Barlow_Condensed({
  weight: ["300", "500"],
  subsets: ["latin"],
});

export const PageTitle = ({
  pNumber,
  pTitle,
}: {
  pNumber: string;
  pTitle: string;
}) => {
  return (
    <h1
      className={`uppercase ${barlow_condensed.className} mx-auto mb-10 w-3/4 text-2xl font-light tracking-[0.16em] text-white`}
    >
      <span
        className={`${barlow_condensed.className} mr-4 text-2xl font-bold text-white text-opacity-25`}
      >
        {pNumber}
      </span>
      {pTitle}
    </h1>
  );
};
