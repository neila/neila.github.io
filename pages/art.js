import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bbl from '/public/images/bigbanglove.png';
import drd from '/public/images/deepreason_depression.png';
import gsh from '/public/images/galactic_superhighway.png';
import btt from '/public/images/biggerthanthou.png';
import p35 from '/public/images/polygon35.png';
import dghn from '/public/images/flower2.svg';



const Title = ({section, color}) => <div className="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function art() {

    return (
        <div className="art" >
            <Head>
                <title>XRT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />
            
            <Title section="GALLERY" color="text-[#F726DB]" />

            {/* content */}
            <section className="">
                <div className="lg:w-4/5 p-4 mx-auto flex flex-wrap justify-center lg:grid lg:grid-cols-6">
                    

                        <div className="flex flex-col col-span-3">
                            <Image 
                            className = "object-contain w-full h-full cursor-pointer" 
                            src = {dghn} />
                            <div className="w-full">
                                <div className='mx-auto w-4/5 text-center'>
                                    <p className='font-hairline text-sm lg:font-thin'>零華</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col col-start-4 col-span-2">
                            <Image 
                            className = "object-contain w-full h-full cursor-pointer" 
                            src = {bbl} 
                            placeholder='blur'/>
                            <div className="w-full">
                                <div className='mx-auto w-4/5 text-center'>
                                    <p className='font-hairline text-sm lg:font-thin'>Your Love Can Start A Universe</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col col-start-2 col-span-2 m-8">
                            <Image 
                            className = "object-contain w-full h-full cursor-pointer" 
                            src = {btt} 
                            placeholder='blur'/>
                            <div className="w-full">
                                <div className='mx-auto w-4/5 text-center'>
                                    <p className='font-hairline text-sm lg:font-thin'>Eaten By Growth</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col col-start-4 col-span-3 m-8">
                            <Image 
                            className = "object-contain w-full h-full cursor-pointer" 
                            src = {gsh} 
                            placeholder='blur'/>
                            <div className="w-full">
                                <div className='mx-auto w-4/5 text-center'>
                                    <p className='font-hairline text-sm lg:font-thin'>GALACTIC SUPERHIGHWAY</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col col-start-1 col-span-2 m-8">
                            <Image 
                            className = "object-contain w-full h-full cursor-pointer" 
                            src = {drd} 
                            placeholder='blur'/>
                            <div className="w-full">
                                <div className='mx-auto w-4/5 text-center'>
                                    <p className='font-hairline text-sm lg:font-thin'>Deep reason (depression)</p>
                                </div>
                            </div>
                        </div>

                       
                        <div className="flex flex-col col-span-2 m-8">
                            <Image 
                            className = "object-contain w-full h-full cursor-pointer" 
                            src = {p35} 
                            placeholder='blur'/>
                            <div className="w-full">
                                <div className='mx-auto w-4/5 text-center'>
                                    <p className='font-hairline text-sm lg:font-thin'>Polygon 3.5</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
            </section>

            {/* Lower menu + copyright */}
            <Footer />

        </div>
    )
}

