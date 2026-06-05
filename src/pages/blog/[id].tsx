import type { NextPage } from 'next';
import Head from 'next/head';
import { useId } from 'react';
import BaseLayout from '@/components/layouts/Base';
import Graph from '@/utils/Graph';
import { postComponents } from '@/utils/postComponents';
import { getAllPosts } from '@/utils/postid';

type PostProps = {
  id: string;
};

const post: NextPage<PostProps> = ({ id }) => {
  const PostContent = postComponents[id];

  return (
    <>
      <Head>
        <meta name="fediverse:creator" content="@neila@social.tchncs.de" />
      </Head>
      <BaseLayout pageTitle={id}>
        <div className="mt-8 mx-auto desktop:w-2/3">
          <article className="px-2">
            <PostContent />
          </article>

          <div id={useId()}>
            {/*display post network graph*/}
            <Graph />
          </div>
        </div>
      </BaseLayout>
    </>
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
