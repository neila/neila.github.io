import type { NextPage } from 'next';
import Head from 'next/head';
import { useId } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Graph from '@/utils/Graph';
import { postComponents } from '@/utils/postComponents';
import { getAllPosts } from '@/utils/postid';

type PostProps = {
  id: string;
};

const post: NextPage<PostProps> = ({ id }) => {
  const PostContent = postComponents[id];

  return (
    <div>
      <Head>
        <title>{`${id} - irohas.eth`}</title>
      </Head>

      <Header />

      <div className="mx-auto mt-10 desktop:w-2/3">
        <div className="prose p-3 desktop:prose-lg desktop:p-8">
          <PostContent />
        </div>

        <div id={useId()}>
          {/*display post network graph*/}
          <Graph />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const post = getAllPosts().find((item) => item.id === params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: post.id,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((item) => ({
      params: {
        id: item.id,
      },
    })),
    fallback: false,
  };
}

export default post;
