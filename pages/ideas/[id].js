import { getAllPosts } from "../../lib/postid";
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Graph from '../../components/Graph';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default function post({ title, content }){

    return(
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <div className='lg:w-2/3 mx-auto mt-10'>
                <div className='p-3 lg:p-8 prose lg:prose-lg'>
                    <MDXRemote {...content} />
                </div>

                <div>
                    {/* console.log({postData.id})
                    console.log({postData.content})
                    console.log({postData.Html})
                    console.log({postData.type})
                    console.log({postData.tags}) 
                    console.log({Object.keys(postData)})
                    console.log({dateFormat(postData.datetime, "yyyy-mm-dd", true)})
                    
                    formatting needed 
                    find md file and get backlinks from yaml? */}
                </div>

                <div id="graph-container"> 
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
            content:mdxSource,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: getAllPosts().map((item) => ({
            params: {
                id: item.id,
            },
        })),
        fallback: false
    };
}