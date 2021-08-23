import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroIcon from '../components/HeroIcon';
import Filter_Profile from '../components/Filter_Profile';
import profilePic from '../public/profilePic.png';
import {LocationMarkerIcon} from "@heroicons/react/outline";

const Title = ({section, color}) => <div class="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function about() {
    return (
        <div>
            <Head>
                <title>ABXUT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Title section="about" color="text-[#01CDFF]"/>

            {/* profile pic */}
            {/* Breathing Halftone later */}
            <div className="max-h-32 lg:max-h-72 flex justify-center">
                <div className="w-32 lg:w-72 mx-auto overflow-hidden">
                    <Image 
                        src = {profilePic}
                        alt = 'profile image'
                        className="lg:h-full shadow rounded-3xl align-middle border-none"
                    />
                </div>
            </div>

            {/*-- content - */}
            <div className="min-h-full p-8">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* intro */}
                    <section className="lg:flex flex-col items-start">
                        <div className="lg:w-4/5 mx-auto leading-snug space-y-5">
                            <p className='text-center'>Sho // free nerd // <em>Homo sapiens</em></p>
                            <p><a href='https://www.youtube.com/watch?v=UL5x60lpGIE'>Konnichiwa</a>, I'm Sho, a developer and an artist from Japan. </p>
                            <p>In May 2021, I completed my studies at Minerva University, where I specialized in applications of simulation algorithms and machine learning.</p>
                            <p>I grew up in many places. Over the years, this resulted in my development of a sense of existential angst; resonating with works such as Ijeoma Umebinyuo's <em>Diaspora Blues</em>. 
                            Perhaps oweing to these frequent environmental changes I underwent, it is my second nature to ask questions more than I answer them. About progress. About justice. About family. Self. Love. About the whole universe.</p>
                            <p>Aside from my computational and artistic pursuits, I enjoy the <a href='https://openlibrary.org/books/OL31390125M/The_God_of_Small_Things'>small things</a>; dancing through my everyday movements, sleeping in makeshift spaces, and getting off at unvisited subway stations without my phone.</p>
                            <p>I am currently available for visual design and digital art commissions.</p>
                            <div className='flex justify-center w-full'>
                                <div className='flex object-center font-normal p-2 pr-10 rounded-md bg-[#7D8491] max-w-prose whitespace-nowrap'>
                                    <HeroIcon Icon={LocationMarkerIcon}/><a className='hover:text-red-600' href='https://www.youtube.com/watch?v=QsZlY0Vz4-o'>New York City, USA</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* skills */}
                    <section className="lg:flex space-x-0 lg:space-x-10 items-start">
                        <div className="space-y-1 transform lg:w-0 lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2>Skills</h2>
                        </div>
                        <div className="lg:w-full mx-auto leading-snug space-y-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quae. Exercitationem, aspernatur cupiditate reiciendis veniam fugiat rerum officia dolor accusantium ipsam cum provident eum voluptatum numquam consequatur! Consectetur, quos rem.</p>
                        </div>
                    </section>

                    {/* tools */}
                    <section className="lg:flex space-x-0 space-y-1 lg:space-x-10 items-start">
                        <div className="space-y-1 transform lg:w-0 lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2>
                            Current Toolkit
                            </h2>
                        </div>
                        <div className="lg:w-full flex flex-wrap gap-1 justify-start">
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png' alt='Next.js Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='React Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' alt='Python Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' alt='PyTorch Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' alt='VS Code Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' alt='Figma Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' alt='Notion Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/en/e/e2/2015_Logic_Pro_Logo.png' alt='Logic Pro X Logo' layout='fill'/>
                            </div>
                        </div>
                    </section>
                    <section className="lg:flex space-x-0 space-y-1 lg:space-x-10 items-start">
                        <div className="space-y-1 transform lg:w-0 lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2>Past Tools</h2>
                        </div>
                        <div className="lg:w-full flex flex-wrap gap-1 justify-start">
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://www.r-project.org/logo/Rlogo.svg' alt='R Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg' alt='Mathematica Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://starbeamrainbowlabs.com/images/logos/swi-prolog.svg' alt='SWI-Prolog Logo' layout='fill'/>
                            </div>
                            <div className="w-20 h-20 lg:h-30 lg:w-30 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg' alt='MS Office Logo' layout='fill'/>
                            </div>
                            <div className="w-32 h-20 lg:h-30 lg:w-44 relative">
                                <Image src='https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg' alt='LaTeX Logo' layout='fill'/>
                            </div>
                        </div>
                    </section>
                    
                    {/* education */}
                    <section className="lg:flex space-x-0 space-y-1 lg:space-x-10 items-start">
                        <div className="transform lg:w-0 lg:rotate-270 lg:translate-y-24 lg:sticky top-72">
                            <h2>Education</h2>
                        </div>
                        <ul className="lg:w-full mx-auto leading-snug space-y-3">
                            <div>🎓 Minerva University '21 (B.Sc.)</div>
                            <div>🎓 Pearson College UWC '17 (IB Diploma)</div>
                        </ul>
                    </section>
                    
                    {/* awards */}
                    <section className="lg:flex space-x-0 space-y-1 lg:space-x-10 items-start">
                        <div className="transform lg:w-0 lg:rotate-270  lg:translate-y-16 lg:sticky top-72">
                            <h2>Awards</h2>
                        </div>
                        <ul className="lg:w-full mx-auto leading-snug space-y-3">
                            <div>🏆 Fellow, '17-pres. // Masason foundation</div>
                            <div>🏆 Japanese national committee scholar '15-'17 // United World Colleges </div>
                        </ul>
                    </section>

                </div>
            </div> 

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}
