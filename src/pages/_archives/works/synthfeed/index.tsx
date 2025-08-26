import Head from 'next/head';
import Image from 'next/image';
import Synthfeed1 from 'public/images/synthfeed/Synthfeed_home.png';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Title = (params: { section: string; color: string }) => (
  <div className="mt-5 mb-7 flex-grow-0 text-center">
    <h1 className={params.color}> {params.section} </h1>
  </div>
);

export default function synthfeed() {
  return (
    <div className="">
      <Head>
        <title>Synthfeed - SHØ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="relative min-h-full px-8 desktop:mx-24">
        <div className="relative flex justify-between px-2">
          <div className="relative h-full flex-grow text-[#6BADDC]">
            <Title section="SynthFeed" color="text-[#00CC30]" />

            <div className="left-2 mt-10 desktop:ml-32 desktop:mt-16 desktop:w-4/6 bigmonitor:ml-48 bigmonitor:w-1/2">
              <p>
                <a
                  href="https://synthfeed.com/"
                  className="text-[#00CC30]"
                  target="_blank"
                  rel="noreferrer"
                >
                  SynthFeed
                </a>{' '}
                is an online feedback platform for music producers to get
                targeted feedback from professionals on creative and technical
                aspects of their work. Synthfeed&apos;s professional artists
                have accumulated in total multiple billion streams across
                different platforms.
              </p>
              <div className="mx-auto w-5/6">
                <br />
                <Image
                  src={Synthfeed1}
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                <a
                  href="https://synthfeed.com/feedback-report-demo"
                  className="text-[#00CC30]"
                  target="_blank"
                  rel="noreferrer"
                >
                  feedback demo
                </a>
                <br />
              </div>
              <br />
              <p>
                Vue.js + Vuetify UI framework, firebase authentication, file
                storage/audio player, user access levels, cloud analytics
              </p>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
