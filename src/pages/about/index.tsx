import { LinkWithIcon } from '@/components/atoms/links/LinkWithIcon';
import BaseLayout from '@/components/layouts/Base';
import Link from 'next/link';

const AboutSitePage = () => {
  return (
    <>
      <BaseLayout pageTitle="About this website">
        <article className="laptop:max-w-6xl mx-auto">
          <h1 className="top-heading text-center leading-[8rem]">
            {/* TODO (5): automate capitalization of first word in headings */}
            <span className="text-[3rem]">A</span>BOUT{' '}
            <span className="text-[3rem]">T</span>HIS{' '}
            <span className="text-[3rem]">W</span>EBSITE
          </h1>

          <h2>Content</h2>
          <ol>
            <li>
              <LinkWithIcon url="#design" text="Design" />
            </li>
          </ol>

          <h2 id="design">Design</h2>
          <h3 id="design-links">Custom links</h3>
          <p>
            I use custom{' '}
            <LinkWithIcon
              url="https://en.wikipedia.org/wiki/Hyperlink"
              text="links"
            />{' '}
            to make the link destination immediately visible even before
            visiting the page. It also makes the text in this site look more
            interesting and exploratory. I like to link many external sources
            when I write, and it would be better to make it easy for you to find
            them.
          </p>
          {/* <h2>Technical specfictions</h2> */}
        </article>
      </BaseLayout>
    </>
  );
};

export default AboutSitePage;
