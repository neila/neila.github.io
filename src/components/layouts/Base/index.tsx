import Footer from "@/components/Footer";
import TopMenu from "@/components/Header";
import Head from "next/head";
import { FC, ReactNode } from "react";

const BaseLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Neila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-2">
        <TopMenu />

        <main>{children}</main>

        {/* Lower menu + copyright */}
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
