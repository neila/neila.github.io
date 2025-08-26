import { useId } from 'react';
import { PageLink } from '@/components/atoms/links/PageLink';

const MainMenu = () => {
  return (
    <nav id={useId()} className="py-2 flex space-x-4 justify-center">
      {/* TODO (3): replace with drop cap */}
      <PageLink href="/">HOME</PageLink>
      {/* <PageLink href="/about">SITE</PageLink>&emsp; */}
      <PageLink href="/me">ABOUT</PageLink>
      <PageLink href="/blog">BLOG</PageLink>
      {/* <PageLink href="/changelog">CHANGES</PageLink> */}
    </nav>
  );
};

const Header = () => {
  return (
    <div className="py-2">
      <MainMenu />
    </div>
  );
};

export default Header;
