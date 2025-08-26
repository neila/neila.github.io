import type { NextPage } from 'next';
import Link from 'next/link';
import { PageLink } from '@/components/atoms/links/PageLink';
import BaseLayout from '@/components/layouts/Base';

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
  return (
    <BaseLayout className="px-4">
      <h2>Old Links</h2>
      <NavLinks />

      <h2>Tests</h2>
      <PageLink href="/_test/typography">typography</PageLink>
    </BaseLayout>
  );
};

export default HomePage;
