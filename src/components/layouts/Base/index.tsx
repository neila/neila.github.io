import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import type { FC, ReactNode } from "react";

const BaseLayout: FC<{
  pageTitle?: string;
  className?: string;
  children: ReactNode;
}> = ({ pageTitle, className, children }) => {
  return (
    <>
      <Head>
        <title>{`${pageTitle ? `${pageTitle} | neila.github.io` : "neila.github.io"}`}</title>
        <meta name="description" content="website by neila" />
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
