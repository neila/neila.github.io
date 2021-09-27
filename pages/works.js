import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Synthfeed from '../public/Synthfeed.png';
import Rap from '../public/rap.jpg';
import AmbulancePic from '../public/nhs.jpg';
import Radio from '../public/radio.jpg';



const Title = ({section, color}) => <div class="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function works() {

    return (
        <div className="works" >
            <Head>
                <title>WXRKS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />
            
            <Title section="WORKS" color="text-[#F726A7]" />

            {/* content */}
            <section className="">
                <div className="lg:w-3/4 2xl:w-1/2 p-4 mx-auto flex flex-wrap relative justify-center -space-x-12 -space-y-2">
                    
                    <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-up cursor-pointer">
                        <Link href='/works/algorap'>
                            <Image 
                            className = "object-cover h-full w-full" 
                            src = {Rap} />
                        </Link>
                        <div className="absolute bottom-3 w-full">
                            <div className='mx-auto w-4/5 text-center lg:text-xl'>
                                AlgoRap
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-down cursor-pointer">
                        <Link href='/works/er-simulation'>
                            <Image 
                            className = "object-cover h-full w-full" 
                            src = {AmbulancePic} />
                        </Link>
                        <div className="absolute top-3 w-full">
                            <div className='mx-auto w-4/5 text-center lg:text-xl'>
                                London Emergency Response Simulation 
                            </div>
                        </div>
                    </div>

                    <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-up cursor-pointer">
                        <Link href='/works/radio'>
                            <Image 
                            className = "object-cover h-full w-full" 
                            src = {Radio} />
                        </Link>
                        <div className="absolute bottom-3 w-full">
                            <div className='mx-auto w-4/5 text-center lg:text-xl'>
                                Radio algorithm <br /> (Song recommendation)
                            </div>
                        </div>
                    </div>

                    <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-down cursor-pointer">
                        <Link href='/works/synthfeed'>
                            <Image 
                            className = "object-cover h-full w-full" 
                            src = {Synthfeed} />
                        </Link>
                        <div className="absolute bottom-28 w-full">
                            <div className='mx-auto w-4/5 text-center lg:text-xl'>
                                SynthFeed
                            </div>
                        </div>
                    </div>

                    {/* <div class="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-down cursor-pointer">
                        <svg class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-full " />
                    </div> */}

                </div>
            </section>

            {/* Lower menu + copyright */}
            <Footer />

        </div>
    )
}

