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

      <body className="px-2 border">
        <TopMenu />

        <main>{children}</main>

        {/* Lower menu + copyright */}
        <Footer />
      </body>
    </>
  );
};

export default BaseLayout;
