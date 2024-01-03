import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Header from "@/components/Header";
import Cells from "@/components/YourLife";

const Home: NextPage = (props: { userDate: string | null }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>SHØ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <Background /> */}
      {/* <Canvas /> */}

      <Cells date={props.userDate} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;
  const userDate = req.cookies.userDate || null;

  return { props: { userDate } };
};

export default Home;
