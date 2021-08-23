import { getAllPostIds, getPostData } from '../../lib/postid';
import Head from 'next/head';
import Date from '../../components/Date';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Graph from '../../components/Graph';

export default function Post({ postData }) {
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <Header />

            <div className='w-2/3 mx-auto mt-10 bg-[#240046]'>
                <div className='p-3 lg:p-8' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <div>
                    {/* console.log({postData.id})
                    console.log({postData.content})
                    console.log({postData.Html})
                    console.log({postData.type})
                    console.log({postData.tags})
                    console.log({Object.keys(postData)}) */}
                    {/* console.log({postData.datetime})      formatting needed */}
                    {/* find md file and get backlinks from yaml? */}
                </div>
                <div id="graph-container"> 
                    <Graph />
                </div >
            </div>

            <Footer />

        </div>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}