import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Synthfeed from '/public/images/Synthfeed.png';
import Rap from '/public/images/rap.jpg';
import AmbulancePic from '/public/images/nhs.jpg';
import Radio from '/public/images/radio.jpg';



const Title = ({section, color}) => <div className="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function works() {

    return (
        <div className="works" >
            <Head>
                <title>WXRKS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />
            
            <Title section="WORKS" color="text-[#26F7A0]" />

            {/* content */}
            <section className="">
                <div className="lg:w-3/4 2xl:w-1/2 p-4 mx-auto flex flex-wrap relative justify-center">
                    
                    <Link href='/works/algorap'>
                        <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative clip-tri-up cursor-pointer">
                            <Image className="h-full w-full object-cover" src = {Rap} />     
                        </div>
                    </Link>
                    
                    
                    <Link href='/works/er-simulation'>
                        <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-down cursor-pointer">
                            <Image className="h-full w-full object-cover" src = {AmbulancePic} /> 
                        </div>
                    </Link>
                    
                    <Link href='/works/radio'>
                        <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-up cursor-pointer">
                            <Image className="h-full w-full object-cover" src = {Radio} />
                        </div>
                    </Link>

                    <Link href='/works/synthfeed'>
                        <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-down cursor-pointer">
                            <Image className="h-full w-full object-cover" src = {Synthfeed} />
                        </div>
                    </Link>

                    {/* <div className="h-36 w-36 lg:h-72 lg:w-72 flex relative overflow-hidden clip-tri-up cursor-pointer">
                        <svg className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-full " />
                    </div> */}

                </div>
            </section>

            {/* Lower menu + copyright */}
            <Footer />

        </div>
    )
}

