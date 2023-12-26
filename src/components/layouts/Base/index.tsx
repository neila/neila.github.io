import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { FC, ReactNode } from "react";

const BaseLayout: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <>
      <Head>
        <title>Neila</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-2">
        <Header />

        <main className={className}>{children}</main>

        {/* Lower menu + copyright */}
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
