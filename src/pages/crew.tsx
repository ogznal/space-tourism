import { type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";

const CrewPage: NextPage = () => {
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
        bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
      >
        <Navbar currentPage="crew" />
      </main>
    </>
  );
};

export default CrewPage;