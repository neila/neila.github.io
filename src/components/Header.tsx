import { PageLink } from '@/components/atoms/links/PageLink';

const Header = () => {
  const MainMenu = () => {
    return (
      <nav id="menu" className="py-2 flex justify-center">
        <h3 className="-space-x-[24px] leading-[57px]">
          {/* TODO (3): replace with drop cap */}
          <PageLink href="/">🏠</PageLink>&emsp;
          {/* <PageLink href="/about">SITE</PageLink>&emsp; */}
          <PageLink href="/me">ME</PageLink>&emsp;
          <PageLink href="/blog">BLOG</PageLink>
          {/* <PageLink href="/changelog">CHANGES</PageLink> */}
        </h3>
      </nav>
    );
  };

  return (
    <>
      <div className="py-2 justify-center">
        <MainMenu />
      </div>
    </>
  );
};

export default Header;
