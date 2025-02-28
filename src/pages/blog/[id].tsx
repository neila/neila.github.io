import BaseLayout from '@/components/layouts/Base';
import Graph from '@/utils/Graph';
import { getAllPosts } from '@/utils/postid';
import type { NextPage } from 'next';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type PostProps = {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  id: string;
};

const post: NextPage<PostProps> = ({ content, id }) => {
  return (
    <>
      <BaseLayout pageTitle={id}>
        <div className="mt-8 mx-auto desktop:w-2/3">
          <article className="px-2">
            <MDXRemote {...content} />
          </article>

          <div id="graph-container">
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
  const { data, content, id } = getAllPosts().find(
    (item) => item.id === params.id,
  );
  const mdxSource = await serialize(content);

  return {
    props: {
      content: mdxSource,
      id: id,
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
