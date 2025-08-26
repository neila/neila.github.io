import fs from 'node:fs';
import path from 'node:path';
import dateFormat from 'dateformat';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import { useId } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Graph from '@/utils/Graph';

type Post = {
  id: string;
  type: string;
  date_created: string;
  last_edited: string;
  tagas: string;
};

const Title = (params: { section: string; color: string }) => (
  <div className="mt-5 mb-7 flex-grow-0 text-center">
    <h1 className={params.color}> {params.section} </h1>
  </div>
);

const ideas = ({ postsList }) => {
  return (
    <div>
      <Head>
        <title>XDEA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* logo */}
      <Header />

      <Title section="ἸΔΈΑ" color="text-[#FFDF00]" />

      {/*-- content - */}
      <div className="min-h-full p-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* intro */}
          <section className="items-start desktop:flex">
            <div className="mx-auto space-y-5 leading-snug desktop:w-4/5">
              <p>
                My biological brain is far too{' '}
                <a
                  href="https://doi.apa.org/doiLanding?doi=10.1037%2F0278-7393.20.5.1063"
                  target="_blank"
                  rel="noreferrer"
                >
                  forgetful
                </a>
                . The raw thoughts that continuously pass through my mind can
                only accumulate for so long. Despite the constant mental
                wrestling, I feel often left stranded in the ponderer&apos;s
                void, with no wisdom to bear.
              </p>
              <p>
                I find this quite unfortunate, since all brilliant ideas are raw
                thoughts at the point of its inception. I created this space to
                nurture these seeds of imagination, so that they can grow into
                something bigger. In the conscious and continuous effort to
                acknolwedge and appreciate the everchanging present, lies the
                art of spontaneous creativity. I named this page after the{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Idea"
                  target="_blank"
                  rel="noreferrer"
                >
                  ancient Greek word
                </a>
                , to which we still owe its use today.
              </p>
              <div className="relative mx-auto desktop:w-3/5">
                <blockquote className="relative border-l-4 p-4 text-center text-xl italic">
                  <p className="mb-4">&quot;Ego cogito, ergo sum&quot;</p>
                  <cite className="ml-16 text-base">- René Descartes</cite>
                </blockquote>
              </div>
            </div>
          </section>

          <ul className="flex flex-col space-y-2 px-0">
            {postsList.map(
              (post: { id: string; date_created: string; tags: string }) => (
                <div
                  key={post.id}
                  className="cursor-pointer rounded-md bg-gradient-to-r from-purple-700 via-blue-400 to-green-500 px-3 align-middle hover:from-pink-500 hover:to-yellow-500"
                >
                  <Link
                    href={{
                      pathname: `/ideas/${encodeURIComponent(post.id)}`,
                    }}
                  >
                    <div>
                      <h3 className="truncate text-base desktop:text-lg">
                        {post.id}
                      </h3>
                      <p className="truncate text-xs desktop:text-sm">
                        {dateFormat(post.date_created, 'yyyy-mm-dd', true)} |{' '}
                        {post.tags}
                      </p>
                    </div>
                  </Link>
                </div>
              ),
            )}
          </ul>
        </div>
      </div>

      <div id={useId()}>
        <Graph />
      </div>

      {/* Lower menu + copyright */}
      <Footer />
    </div>
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

  const sorted_allPostsData = allPostsData.sort((a: Post, b: Post) => {
    if (a.date_created < b.date_created) {
      return 1;
    }
    return -1;
  });
  const postsList = JSON.parse(JSON.stringify(sorted_allPostsData));

  return {
    props: {
      postsList,
    },
  };
}

export default ideas;
