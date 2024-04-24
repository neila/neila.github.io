import type { AppProps } from "next/app";
import "../globals.css";

export const config = {
  unstable_runtimeJS: false,
};

const Main = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default Main;
