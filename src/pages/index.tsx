import BaseLayout from "@/components/layouts/Base";
import { NextPage } from "next";

import Link from "next/link";

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
      <article>
        <h1 className="top-heading pt-12 px-4 -mb-8">Neila</h1>
        <BaseLayout className="px-4">
          {/* abstract */}
          <section id="abstract">
            <p>This is the website of neila.</p>
            <p>
              {/* For information about this website's philosophy & method, see the{" "}
            <Link href="/about">About page</Link>.<br /> */}
              {/* For website features & implementation, see the{" "}
            <Link href="/design">Design page</Link>.<br /> */}
              For information about myself and contact information see{" "}
              <Link href="/me">My page</Link>.
              {/* <br />For site updates, see the <Link href="/changelog">Changelog</Link>. */}
            </p>
          </section>
        </BaseLayout>
      </article>
    </>
  );
};

export default HomePage;
