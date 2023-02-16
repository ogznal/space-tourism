import React from "react";
import Link from "next/link";
import { Barlow_Condensed } from "@next/font/google";

const barlow_condensed = Barlow_Condensed({
  weight: ["300", "500"],
  subsets: ["latin"],
});

export const Navbar = ({ currentPage }: { currentPage: string }) => {
  return (
    <header className="relative ml-[55px] flex flex-row place-content-between items-center pt-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <hr className="absolute left-28 z-10 h-px w-2/5 border-0 bg-[#979797] bg-opacity-50" />
      <nav
        className={`${barlow_condensed.className} font-light uppercase tracking-widest text-white lg:w-[830px]`}
      >
        <ul className="flex flex-row items-center gap-x-16 bg-white bg-opacity-5 pl-28 lg:backdrop-blur-xl">
          <Link href="/">
            <li
              className={`flex items-center border-b-[3px] ${
                currentPage == "home"
                  ? "border-white"
                  : "border-transparent hover:border-[#979797]"
              } lg:h-24`}
            >
              <span className="mr-2 font-medium">00</span> Home
            </li>
          </Link>
          <Link href="/destination">
            <li
              className={`flex items-center border-b-[3px] ${
                currentPage == "destination"
                  ? "border-white"
                  : "border-transparent hover:border-[#979797]"
              } lg:h-24`}
            >
              <span className="mr-2 font-medium">01</span> Destination
            </li>
          </Link>
          <Link href="/crew">
            <li
              className={`flex items-center border-b-[3px] ${
                currentPage == "crew"
                  ? "border-white"
                  : "border-transparent hover:border-[#979797]"
              } lg:h-24`}
            >
              <span className="mr-2 font-medium">02</span> Crew
            </li>
          </Link>
          <Link href="/technology">
            <li
              className={`flex items-center border-b-[3px] ${
                currentPage == "technology"
                  ? "border-white"
                  : "border-transparent hover:border-[#979797]"
              } lg:h-24`}
            >
              <span className="mr-2 font-medium">03</span> Technology
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
