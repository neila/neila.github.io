import { getAllPosts } from "../../utils/postid";
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Graph from '../../components/Graph';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default function post({ content }){
    
    return(
        <div>
            <Head>
                <title></title>
            </Head>

            <Header />

            <div className='lg:w-2/3 mx-auto mt-10'>
                <div className='p-3 lg:p-8 prose lg:prose-lg'>
                    <MDXRemote {...content} />
                </div>

                <div id="graph-container"> 
                    {/*display post network graph*/}
                    <Graph />
                </div >
            </div>

            <Footer />

        </div>
    )
}


export async function getStaticProps( context ) {

    const { params } = context;
    const { data, content } = getAllPosts().find((item) => item.id === params.id)
    const mdxSource = await serialize(content)

    return {
        props: {
            content: mdxSource
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['id'])

    return {
        paths: posts.map((item) => ({
            params: {
                id: item.id,
            },
        })),
        fallback: false
    };
}