import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Synthfeed1 from '/public/images/Synthfeed_home.png'

const Title = ({ section, color }) => (
    <div className="mt-5 mb-7 flex-grow-0 text-center">
        <h1 className={color}> {section} </h1>
    </div>
)

export default function synthfeed() {
    return (
        <div className="">
            <Head>
                <title>Synthfeed</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="relative min-h-full px-8 lg:mx-24">
                <div className="relative flex justify-between px-2">
                    <div className="relative h-full flex-grow text-[#6BADDC]">
                        <Title section="SynthFeed" color="text-[#00CC30]" />

                        <div className="left-2 mt-10 lg:ml-32 lg:mt-16 lg:w-4/6 2xl:ml-48 2xl:w-1/2 ">
                            <p>
                                <a
                                    href="https://synthfeed.com/"
                                    className="text-[#00CC30]"
                                    target="_blank"
                                >
                                    SynthFeed
                                </a>{' '}
                                is an online feedback platform for music
                                producers to get targeted feedback from
                                professionals on creative and technical aspects
                                of their work. Currently, the professional
                                artists providing feedback on SynthFeed have
                                accumulated in total multiple billion streams
                                across different platforms. Upon rounds of
                                design iterations, we launched the service on
                                October 2020.
                            </p>
                            <div className="mx-auto w-5/6">
                                <br />
                                <Image src={Synthfeed1} />
                                <a
                                    href="https://synthfeed.com/feedback-report-demo"
                                    className="text-[#00CC30]"
                                    target="_blank"
                                >
                                    feedback demo
                                </a>
                                <br />
                            </div>
                            <p>
                                I joined the team in June 2020 until service
                                launch to assist the website design and
                                development process, including color,
                                typography, and UI.
                            </p>
                            <br />
                            <p>
                                <b>Client side:</b> Vue.js + Vuetify UI
                                framework. <br />
                                <b>Backend:</b> firebase authentication, file
                                storage/audio player, user access levels, cloud
                                analytics.
                            </p>
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
