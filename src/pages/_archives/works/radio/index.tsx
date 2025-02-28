import Head from 'next/head';
import Image from 'next/image';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import Songrec from 'public/images/radio/songrec.png';

const Title = (params: { section: string; color: string }) => (
  <div className="mt-5 mb-7 flex-grow-0 text-center">
    <h1 className={params.color}> {params.section} </h1>
  </div>
);

export default function radio() {
  return (
    <div className="">
      <Head>
        <title>Radio algorithm - SHØ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="relative min-h-full px-8 desktop:mx-24">
        <div className="relative flex justify-between px-2">
          <div className="relative h-full flex-grow text-[#C9CBC5]">
            <Title section="Radio algorithm" color="text-[#6CC417]" />

            <div className="left-2 mt-10 desktop:ml-32 desktop:w-4/6 bigmonitor:ml-48 bigmonitor:mt-16 bigmonitor:w-1/2">
              <p>
                I implemented an algorithm that takes a user&apos;s input as a
                song title and returns the list of songs that should be played
                in order; like a radio.
              </p>
              <br />
              <p>
                The algorithm uses a dataset of songs that I found online
                (originally obtained from Spotify) to build a{' '}
                <a
                  href="https://www.dgp.toronto.edu/public_user/JamesStewart/378notes/16redBlack/"
                  className="hover:text-[#6CC417]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Red-Black tree
                </a>{' '}
                based on how close each song in the dataset are to the initial
                song specified by the user. Two songs being <em>close</em> is
                defined as having similar characteristics in terms of attributes
                such as acousticness or tempo. By playing songs in order from
                closest to furthest, I expect the radio to play in such a way
                that transitions between each song are smooth and the atmosphere
                is never abruptly ruined.
              </p>
              <br />
              <p>
                I chose RB trees as the appropriate data structure to use in
                this application because it guarantees the deepest branch to be
                only at most twice as deep as the shallowest branch. This makes
                the structure suitable to deal with large datasets, such as a
                catalogue of songs.
              </p>
              <br />
              <Image
                src={Songrec}
                alt=""
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <br />
              <p>
                <a
                  href="https://drive.google.com/file/d/1CR7qfRLxsezkonrlolWPJBGjj7M9bC_e/view?usp=sharing"
                  className="text-blue-300"
                >
                  code
                </a>
              </p>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
