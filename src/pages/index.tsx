import { NextPage } from "next";
import Head from "next/head";

import Background from "@/components/Background";
import Header_home from "@/components/Header_home";
import Nav_home from "@/components/Nav_home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SHØ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header_home />

      <Background />

      {/* <Canvas /> */}

      <Nav_home />
    </div>
  );
};

export default Home;
