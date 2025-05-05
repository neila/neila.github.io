import type { AppProps } from 'next/app';
import '../globals.css';

const Main = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default Main;
