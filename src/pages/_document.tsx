import Document, {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import React from "react";

type NoncedDocument = DocumentInitialProps & { nonce: string };

const CustomDocument = (props: NoncedDocument) => {
  return (
    <Html
      prefix="og: https://ogp.me/ns#"
      nonce={props.nonce}
      lang="en"
      className="dark"
    >
      <Head nonce={props.nonce}>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="neila.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="neila.github.io" />
        <meta
          property="og:image"
          content="https://neila.github.io/images/profilePic.png"
        />
        <meta property="og:description" content="website by neila" />
        <meta name="description" content="website by neila" />
        <meta property="csp-nonce" content={props.nonce} />
      </Head>

      <body nonce={props.nonce}>
        <Main />
        <NextScript nonce={props.nonce} />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<NoncedDocument> => {
  const initialProps = await Document.getInitialProps(ctx);
  const nonce = (ctx.req?.headers["x-csp-nonce"] as string) ?? "";

  return { ...initialProps, nonce: nonce };
};

export default CustomDocument;
