import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Title = (params: { section: string; color: string }) => (
  <div className="mt-5 mb-7 flex-grow-0 text-center">
    <h1 className={params.color}> {params.section} </h1>
  </div>
);

const ArtWork = (_props: { imagePath: string; caption: string }) => {
  return (
    <div className="text-center">
      <Image
        className="cursor-pointer object-contain"
        src={`public/images/art/${_props.imagePath}`}
        alt={_props.caption}
      />

      <p className="text-md font-thin">{_props.caption}</p>
    </div>
  );
};

const Art: NextPage = () => {
  return (
    <div className="art">
      <Head>
        <title>XRT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* logo */}
      <Header />

      <Title section="GALLERY" color="text-[#F726DB]" />

      {/* content */}
      <section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-12">
          <ArtWork
            imagePath="bigbanglove.png"
            caption="Your Love Can Start A Universe"
          />
          <ArtWork imagePath="biggerthanthou.png" caption="Eaten By Growth" />
          <ArtWork imagePath="reika1.svg" caption="零華" />
          <ArtWork imagePath="sweetlips.png" caption="I Wanna Eat You" />
          <ArtWork
            imagePath="candyflippin' (oops).png"
            caption="Candy Effect"
          />
          <ArtWork imagePath="RUNAWAY_KING.jpg" caption="RUNAWAY KING" />
          <ArtWork
            imagePath="deepreason_depression.png"
            caption="Thoughts I shouldn't have"
          />
          <ArtWork imagePath="polygon35.png" caption="Polygon 3.5" />
          <ArtWork
            imagePath="galactic_superhighway.png"
            caption="GALACTIC SUPERHIGHWAY"
          />
        </div>
      </section>

      {/* Lower menu + copyright */}
      <Footer />
    </div>
  );
};

export default Art;
