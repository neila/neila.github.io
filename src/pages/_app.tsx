import { AppProps } from "next/app";

import "../globals.css";

const PF = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default PF;
