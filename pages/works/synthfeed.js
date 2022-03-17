import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Synthfeed1 from '/public/images/Synthfeed_home.png'

const Title = ({section, color}) => <div className="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function synthfeed() {
    return (
        <div className=''>
            <Head>
                <title>Synthfeed</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="min-h-full px-8 lg:mx-24 relative">
                <div className='px-2 justify-between flex relative'>

                    <div className='h-full flex-grow relative text-[#6BADDC]'>
                        <Title section="SynthFeed" color="text-[#00CC30]" />

                        <div className="lg:w-4/6 2xl:w-1/2 lg:ml-32 2xl:ml-48 mt-10 lg:mt-16 left-2 ">
                            <p>
                                <a href='https://synthfeed.com/' className="text-[#00CC30]" target="_blank">SynthFeed</a> is an online feedback platform for music producers to get targeted feedback from professionals on creative and technical aspects of their work.
                                Currently, the professional artists providing feedback on SynthFeed have accumulated in total multiple billion streams across different platforms.
                                Upon rounds of design iterations, we launched the service on October 2020.
                            </p>
                            <div className="w-5/6 mx-auto">
                                <br />
                                <Image src = {Synthfeed1} />
                                <a href='https://synthfeed.com/feedback-report-demo' className='text-[#00CC30]' target="_blank">feedback demo</a>
                                <br />
                            </div>
                            <p>
                                I joined the team in June 2020 until service launch to assist the website design and development process, including color, typography, and UI. 
                            </p>
                            <br />
                            <p>
                                <b>Client side:</b> Vue.js + Vuetify UI framework. <br />
                                <b>Backend:</b> firebase authentication, file storage/audio player, user access levels, cloud analytics.
                            </p>
                        </div>

                        <Footer />
                    </div>

                </div>
            </div>

        </div>
    )
}
