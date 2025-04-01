import { LinkWithIcon } from '@/components/atoms/links/LinkWithIcon';
import BaseLayout from '@/components/layouts/Base';
import type { NextPage } from 'next';

import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <>
      <BaseLayout className="px-4 laptop:max-w-6xl mx-auto">
        <h1 className="top-heading">Welcome,</h1>

        <div id="abstract">
          <p>This is the website of Neil Atman.</p>
          <p>
            {/* For information about this website's philosophy & method, see the{" "}
            <Link href="/about">About page</Link>.<br /> */}
            {/* For website features & implementation, see the{" "}
            <Link href="/design">Design page</Link>.<br /> */}
            For information about myself and contact information see{' '}
            <LinkWithIcon url="/me" text="My page" />.
            <br />
            For site updates, see the{' '}
            <LinkWithIcon
              url="https://github.com/neila/neila.github.io/commits/main/"
              text="Changelog"
            />
            .
          </p>
        </div>
      </BaseLayout>
      {/* <a rel="me" href="https://social.tchncs.de/@neila">Mastodon</a> */}
    </>
  );
};

export default HomePage;
