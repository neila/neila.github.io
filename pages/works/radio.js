import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Songrec from '/public/images/songrec.png'

const Title = ({section, color}) => <div class="mt-5 mb-7 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function radio() {
    return (
        <div className=''>
            <Head>
                <title>Radio algorithm</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="min-h-full px-8 lg:mx-24 relative">
                <div className='px-8 justify-between flex relative'>

                    <div className='h-full flex-grow relative'>
                        <Title section="Radio algorithm"/>

                        <div className="md:w-4/6 lg:w-1/2 md:ml-32 lg:ml-48 mt-10 lg:mt-16 left-2 ">
                            <p>
                                I implemented an algorithm that takes a user’s input as a song title and returns the list of songs that should be played in order; like a radio.
                            </p>
                            <br />
                            <p>
                                The algorithm uses a dataset of songs that I found online (originally obtained from Spotify) to build a <a href='https://www.dgp.toronto.edu/public_user/JamesStewart/378notes/16redBlack/'>Red-Black tree</a> based on how close each song in the dataset are to the initial song specified by the user.
                                Two songs being <em>close</em> is defined as having similar characteristics in terms of attributes such as acousticness or tempo. By playing songs in order from closest to furthest, I expect the radio to play in such a way that transitions between each song are smooth and the atmosphere is never abruptly ruined.
                            </p>
                            <br />
                            <p>
                                I chose RB trees as the appropriate data structure to use in this application because it guarantees the deepest branch to be only at most twice as deep as the shallowest branch. 
                                This makes the structure suitable to deal with large datasets, such as a catalogue of songs. 
                            </p>
                            <br />
                            <Image src = {Songrec} />
                            <br />
                            <p>
                                <a href='https://drive.google.com/file/d/1CR7qfRLxsezkonrlolWPJBGjj7M9bC_e/view?usp=sharing' className='text-blue-300'>code</a>
                            </p>
                        </div>

                        <Footer />
                    </div>

                </div>
            </div>

        </div>
    )
}
