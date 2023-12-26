import BaseLayout from "@/components/layouts/Base";
import { NextPage } from "next";

import Link from "next/link";

const NavLinks = () => {
  return (
    <nav>
      <h3>
        <Link href="/_archives/works">works</Link>&emsp;
        <Link href="/_archives/art">art</Link>&emsp;
        <Link href="/_archives/ideas">idea</Link>&emsp;
        <Link href="/_archives/about">about</Link>
      </h3>
    </nav>
  );
};

const HomePage: NextPage = () => {
  const PageLink = (params: {
    refPage: string;
    pageName: string;
  }) => {
    return (
      <div>
        <Link
          href={params.refPage}
          passHref={true}
          className="underline decoration-dotted whitespace-nowrap"
        >
          {params.pageName}
        </Link>
      </div>
    );
  };

  return (
    <>
      <BaseLayout className="px-4">
        <h2>Old Links</h2>
        <NavLinks />

        <h2>Tests</h2>
        <PageLink refPage="/_test/typography" pageName="typography" />
      </BaseLayout>
    </>
  );
};

export default HomePage;
