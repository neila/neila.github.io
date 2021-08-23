import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Graph from '../components/Graph';
import Date from '../components/Date';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const Title = ({section, color}) => <div class="mt-3 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function ideas({ allPostsData_f }) {
    return (
        <div>
            <Head>
                <title>XDEAS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />
            
            <Title section="ideas" color="text-[#FFDF00]"/>

            {/*-- content - */}
            <div className="min-h-full p-8">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* intro */}
                    <section className="lg:fle x items-start">
                            <div className="lg:w-4/5 mx-auto leading-snug space-y-5">
                                <p>Sho // creative developer</p>
                                <p>Lorem ipsum j focmdolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! .</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            </div>
                    </section>
                    
                    {/* skills */}
                    <section className="lg:flex space-x-0 lg:space-x-10 items-start">
                        <div className="space-y-1 transform lg:w-0 lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2>
                            Skills
                            </h2>
                        </div>
                        <div className="lg:w-full mx-auto leading-snug space-y-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                        </div>
                    </section>

                    <ul className='space-y-2 flex flex-col px-0'>
                        {allPostsData_f.map(({ id, date, tags}) => (
                            <postlink key={id}>
                                <Link href={`/ideas/${encodeURIComponent(id)}`} passHref>
                                    <div>
                                        <h3 className=' truncate'>{id}</h3>
                                        <small className=' truncate'>{date}, {tags}</small>
                                    </div>
                                </Link>
                            </postlink>
                        ))}
                    </ul>

                </div>
            </div> 

            <div id="graph-container"> 
                <Graph />
            </div >

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory, 'utf8')

    // ALL NOTES TO BE PUBLISHED MUST BE IN /posts. THE DIRECTORY CANNOT HAVE ANY NESTED FOLDERS.

    const allPostsData = fileNames.map(fileName => {

        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/,'')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })

    const sorted_allPostsData = allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
    const allPostsData_f = JSON.parse(JSON.stringify(sorted_allPostsData))


    return {
      props: {
        allPostsData_f
      }
    }
  }