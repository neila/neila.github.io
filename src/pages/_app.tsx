import { AppProps } from "next/app";

import { useEffect, useState } from "react";
import "../globals.css";

export const config = {
  unstable_runtimeJS: false,
};

const Main = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
  const [mountCount, setMountCount] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <intended only to run on initial mount>
  useEffect(() => {
    setMounted(!mounted);
    setMountCount(mountCount + 1);
  }, []);

  return (
    <main>
      <p>{mountCount}</p>
      <Component {...pageProps} />
    </main>
  );
};

export default Main;
