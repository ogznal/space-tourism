import { type NextPage } from "next";
import Head from "next/head";

import { Barlow_Condensed, Bellefair } from "@next/font/google";

import { Navbar } from "../components/navbar";

const barlow_condensed = Barlow_Condensed({
  weight: ["300", "500"],
  subsets: ["latin"],
});

const bellefair = Bellefair({ weight: "400", subsets: ["latin"] });

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main
        className="flex min-h-screen 
        flex-col justify-between
        bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]"
      >
        <Navbar currentPage="home" />
        <section className="mb-16 flex h-full flex-row place-content-between items-end px-60">
          <div className="basis-1/3">
            <h5
              className={`${barlow_condensed.className} text-3xl font-light uppercase tracking-[0.16em] text-[#D0D6F9]`}
            >
              So, you want to travel to
            </h5>
            <h1
              className={`${bellefair.className} text-[150px] uppercase text-white`}
            >
              Space
            </h1>
            <p
              className={`text-xl font-light tracking-wide text-[#D0D6F9] ${barlow_condensed.className}`}
            >
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>
          <div
            className={`uppercase ${bellefair.className} flex h-60 w-60 items-center justify-center rounded-full bg-white text-[32px]`}
          >
            <span>Explore</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
