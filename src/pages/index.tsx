import BaseLayout from "@/components/layouts/Base";
import { NextPage } from "next";

import Link from "next/link";

const NavLinks = () => {
  return (
    <nav className="justify-center flex flex-wrap">
      <h3 className="-space-x-[29px]">
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
      <h1 className="top-heading">Neila</h1>

      <BaseLayout>
        {/* abstract */}
        <section id="abstract">
          <p>This is the website of neila.</p>
          <p>
            For information about this website's philosophy & method, see the{" "}
            <Link href="/about">About page</Link>.<br />
            For website features & implementation, see the{" "}
            <Link href="/about">Design page</Link>.<br />
            For information about myself and contact information see{" "}
            <Link href="/about">My page</Link>.<br />
            For site updates, see the <Link href="/changelog">Changelog</Link>.
          </p>
        </section>
      </BaseLayout>

      <h2>Old Links</h2>
      <NavLinks />
      <h2>Tests</h2>
      <PageLink refPage="/_test/typography" pageName="typography" />
    </>
  );
};

export default HomePage;
