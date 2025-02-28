import fs from 'node:fs';
import path from 'node:path';
import { LinkWithIcon } from '@/components/atoms/links/LinkWithIcon';
import BaseLayout from '@/components/layouts/Base';
import type { blogPostType } from '@/types/blogpost';
import Graph from '@/utils/Graph';
import dateFormat from 'dateformat';
import matter from 'gray-matter';
import React from 'react';

const BlogIndexPage = (props: { postsList: blogPostType[] }) => {
  const Quote = () => {
    return (
      <div className="mx-auto desktop:w-3/5 py-4">
        <blockquote className="border-l-4 p-2 text-center italic">
          <p>&quot;Ego cogito, ergo sum&quot;</p>
          <cite className="ml-16 text-1">- René Descartes</cite>
        </blockquote>
      </div>
    );
  };
  const PostLinksList = () => {
    return (
      <>
        {props.postsList.map((post: blogPostType) => (
          <li key={post.id}>
            <LinkWithIcon
              url={
                `/blog/${encodeURIComponent(post.id)}`
                // TODO (9): parse url to simpler format
              }
              text={post.id}
            />
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <BaseLayout pageTitle="My writings" className="leading-snug">
        <article className="laptop:max-w-6xl mx-auto">
          <section id="abstract">
            <p>
              My biological brain is far too{' '}
              <LinkWithIcon
                url="https://doi.apa.org/doiLanding?doi=10.1037%2F0278-7393.20.5.1063"
                text="forgetful"
              />
              . The raw thoughts that continuously pass through my mind can only
              accumulate for so long. Despite the constant mental wrestling, I
              feel often left stranded in the ponderer&apos;s void, with no
              wisdom to bear.
            </p>
            <p>
              I find this quite unfortunate, since all brilliant ideas are raw
              thoughts at the point of its inception. I created this space to
              nurture these seeds of imagination, so that they can grow into
              something bigger. In the conscious and continuous effort to
              acknolwedge and appreciate the everchanging present, lies the art
              of spontaneous creativity.
            </p>
            <Quote />
          </section>

          <section id="bloglinks" className="pt-8">
            {/* TODO (3) map sections by tag */}
            <h2>Posts</h2>
            <ul>
              <PostLinksList />
            </ul>
          </section>

          <section id="graph-container">
            <Graph />
          </section>
        </article>
      </BaseLayout>

      {/*-- content - */}
    </>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'public/posts');

  const fileNames = fs.readdirSync(postsDirectory, 'utf8');

  const allPostsData = fileNames.map((fileName: string) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const postMetadata = matter(fileContents).data;

    // Combine the data with the id
    return {
      id,
      ...postMetadata,
    };
  });

  const sorted_allPostsData = allPostsData.sort(
    (a: blogPostType, b: blogPostType) => {
      if (a.date_created < b.date_created) {
        return 1;
      }
      return -1;
    },
  );
  const postsList = JSON.parse(JSON.stringify(sorted_allPostsData));

  return {
    props: {
      postsList,
    },
  };
}

export default BlogIndexPage;
