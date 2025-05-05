import type { Metadata } from 'next';
import Document, {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

type NoncedDocument = DocumentInitialProps & { nonce: string };

export const metadata: Metadata = {
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

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
        <meta property="og:url" content="neila.in05.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="neila.in05.org" />
        <meta
          property="og:image"
          content="https://neila.in05.org/images/about/profilePic.png"
        />
        <meta property="og:description" content="website by neila" />
        <meta name="description" content="website by neila" />
        <meta property="csp-nonce" content={props.nonce} />
      </Head>

      <body
        nonce={props.nonce}
        className="bg-neutral-900 font-serif text-neutral-200"
      >
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
  const nonce = (ctx.req?.headers['x-csp-nonce'] as string) ?? '';

  return { ...initialProps, nonce: nonce };
};

export default CustomDocument;
