import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroIcon from '../components/HeroIcon';
import profilePic from '/public/images/profilePic.png';
import {LocationMarkerIcon} from "@heroicons/react/outline";

const Title = ({section, color}) => <div className="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

const ToolLogo = (props) => {
    const {logolink, logoname} = props;
    return (
        <div className="w-20 h-20 lg:h-30 lg:w-30 relative m-2">
            <Image 
                src = {logolink}
                alt = {logoname + " logo"}
                layout = "fill"
            />
        </div>
    )
}

export default function about() {
    return (
        <div>
            <Head>
                <title>ABXUT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Title section="ABOUT" color="text-[#01CDFF]"/>

            {/* profile pic */}
            {/* td: breathing Halftone effect */}
            <div className="h-32 w-32 lg:w-72 lg:h-72 mx-auto overflow-hidden flex justify-center">
                    <Image 
                        src = {profilePic}
                        alt = 'profile image'
                        className="lg:rounded-3xl align-middle border-none"
                    />
            </div>

            {/*-- content - */}
            <div className="min-h-full p-8">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* intro */}
                    <section className="lg:flex flex-col items-start">
                        <div className="lg:w-4/5 mx-auto leading-snug space-y-5">
                            <p> <a href='https://www.youtube.com/watch?v=UL5x60lpGIE'>Konnichiwa</a>. I'm Sho, a creative developer from Japan. <em>Time</em>'s 2006 person of the year. </p>
                            <p> I like questioning things; perhaps even more than finding answers to them. </p>
                            <p> I seek joy in the <a href='https://openlibrary.org/books/OL31390125M/The_God_of_Small_Things'>small things</a>, like sleeping in makeshift spaces, or finding evidence of cultural context in everyday life. </p>
                           
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
                            {/*<SkillTree classNamecontent='w-full h-screen bg-purple-400 rounded-md border-double border-4 border-light-blue-500'/>*/}
                            <ul className='list-disc list-inside leading-snug space-y-3'>
                                <li>
                                    Web development
                                    <ul className='list-none ml-12'>
                                        <li>Headless CMS</li> <li>Responsive web design</li> <li>Progressive enhancement</li>
                                    </ul>
                                </li>
                                <li>
                                    Iterative design
                                    <ul className='list-none ml-12'>
                                        <li>DRY patterns/modular programming</li> <li>Agile development</li> <li>IxD</li>
                                    </ul>
                                </li>
                                <li>
                                    Machine learning
                                    <ul className='list-none ml-12'>
                                        <li>NLP</li> <li>Analytical forecasting</li> <li>Recommendation systems</li>
                                    </ul>
                                </li>
                                <li>
                                    Simulation and modeling
                                    <ul className='list-none ml-12'>
                                        <li>Scenario optimization</li> <li>Game theory simulations</li> <li>Computational physics</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* tools */}
                    <section className="lg:flex space-x-0 space-y-1 lg:space-x-10 items-start">
                        <div className="space-y-1 transform lg:w-0 lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2 > Current Toolkit</h2>
                        </div>
                        <div className="lg:w-full flex flex-wrap gap-1 justify-start">
                            <ToolLogo logolink='https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' logoname='Notion'/>
                            <ToolLogo logolink='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' logoname='Figma'/>
                            <ToolLogo logolink='https://s3.eu-west-2.amazonaws.com/jamescross/images/frontEndTrio.png' logoname='Frontend'/>
                            <ToolLogo logolink='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' logoname='React'/>
                            <ToolLogo logolink='https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png' logoname='Next.js'/>
                            <ToolLogo logolink='https://raw.githubusercontent.com/nodejs/nodejs.org/main/static/images/logo-hexagon.svg' logoname='Node.js'/>
                            <ToolLogo logolink='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' logoname='Python'/>
                            <ToolLogo logolink='https://www.rust-lang.org/logos/rust-logo-512x512.png' logoname='Rust'/>
                            <ToolLogo logolink='https://raw.githubusercontent.com/egonelbre/gophers/master/vector/superhero/standing.svg' logoname='Golang'/>
                            <ToolLogo logolink='https://raw.githubusercontent.com/docker/docker.github.io/master/images/engine.svg' logoname='Docker'/>
                            <ToolLogo logolink='https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' logoname='Git'/>
                            <ToolLogo logolink='https://cryptologos.cc/logos/ethereum-eth-logo.svg' logoname='Ethereum'/>
                            <ToolLogo logolink='https://solana.com/branding/new/logomark/logomark-gradient.svg' logoname='Solana'/>
                        </div>
                    </section>
                    <section className="lg:flex space-x-0 space-y-1 lg:space-x-10 items-start">
                        <div className="space-y-1 transform lg:w-0 lg:rotate-270 lg:translate-y-10 lg:sticky top-72">
                            <h2>Past Tools</h2>
                        </div>
                        <div className="lg:w-full flex flex-wrap gap-1 justify-start">
                            <ToolLogo logolink='https://www.r-project.org/logo/Rlogo.svg' logoname='R'/>
                            <ToolLogo logolink='https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg' logoname='Mathematica'/>
                            <ToolLogo logolink='https://starbeamrainbowlabs.com/images/logos/swi-prolog.svg' logoname='Prolog'/>
                            <ToolLogo logolink='https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg' logoname='Microsoft Office'/>
                            <ToolLogo logolink='https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg' logoname='Firebase'/>
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
                            <div>🏆 National committee scholar '15-'17 // United World Colleges Japan</div>
                        </ul>
                    </section>

                </div>
            </div> 

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}
