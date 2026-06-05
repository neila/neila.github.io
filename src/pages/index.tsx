import type { NextPage } from 'next';
import { useId } from 'react';
import { LinkWithIcon } from '@/components/atoms/links/LinkWithIcon';
import BaseLayout from '@/components/layouts/Base';
import YourLife from '@/mini-app/YourLife';

const HomePage: NextPage = () => {
  return (
    <BaseLayout className="">
      <h1 className="top-heading">Welcome,</h1>
      <div id={`landing-${useId()}`} className="">
        <p>
          This is the website of {(() => {
            const first = `${process.env.NEXT_PUBLIC_FIRST}`;
            return first.charAt(0).toUpperCase() + first.slice(1);
          })()} {(() => {
            const last = `${process.env.NEXT_PUBLIC_LAST}`;
            return last.charAt(0).toUpperCase() + last.slice(1);
          })()}.
        </p>

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
            url="https://github.com/neila/neila.github.io/commits/main/?author=neila"
            text="Changelog"
          />
          .
        </p>
      </div>
      <p>
        Oct 2016 -{' '}
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
        })}
      </p>
      <YourLife />
    </BaseLayout>
  );
};

export default HomePage;
