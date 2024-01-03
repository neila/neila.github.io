import { NextPage } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Cells from "@/components/YourLife";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>SHØ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <Background /> */}
      {/* <Canvas /> */}

      <Cells />
    </div>
  );
};

export default Home;
