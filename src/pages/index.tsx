import BaseLayout from "@/components/layouts/Base";
import type { NextPage } from "next";

import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <>
      <BaseLayout className="px-4 laptop:max-w-6xl mx-auto">
        <h1 className="top-heading">Sho Hihara</h1>

        <div id="abstract">
          <p>This is the website of Sho Hihara.</p>
          <p>
            {/* For information about this website's philosophy & method, see the{" "}
            <Link href="/about">About page</Link>.<br /> */}
            {/* For website features & implementation, see the{" "}
            <Link href="/design">Design page</Link>.<br /> */}
            For information about myself and contact information see{" "}
            <Link href="/me">My page</Link>.
            {/* <br />For site updates, see the <Link href="/changelog">Changelog</Link>. */}
          </p>
        </div>
      </BaseLayout>
    </>
  );
};

export default HomePage;
