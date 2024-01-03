import { NextPage } from "next";
import Head from "next/head";
import Image, { type StaticImageData } from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/TopMenu";

import rwkng from "public/images/art/RUNAWAY_KING.jpg";
import bbl from "public/images/art/bigbanglove.png";
import btt from "public/images/art/biggerthanthou.png";
import cdflp from "public/images/art/candyflippin' (oops).png";
import drd from "public/images/art/deepreason_depression.png";
import gsh from "public/images/art/galactic_superhighway.png";
import p35 from "public/images/art/polygon35.png";
import dghn from "public/images/art/reika1.svg";
import swlp from "public/images/art/sweetlips.png";

const Art: NextPage = () => {
  const Title = (params: { section: string; color: string }) => (
    <div className="mt-5 mb-7 flex-grow-0 text-center">
      <h1 className={params.color}> {params.section} </h1>
    </div>
  );

  const ArtWork = (props: {
    image: StaticImageData;
    caption: string;
  }) => {
    const { image, caption } = props;
    return (
      <div className="text-center">
        <Image
          className="cursor-pointer object-contain"
          src={image}
          alt={caption}
        />

        <p className="text-md font-thin">{caption}</p>
      </div>
    );
  };

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
          <ArtWork image={bbl} caption="Your Love Can Start A Universe" />
          <ArtWork image={btt} caption="Eaten By Growth" />
          <ArtWork image={dghn} caption="零華" />
          <ArtWork image={swlp} caption="I Wanna Eat You" />
          <ArtWork image={cdflp} caption="Candy Effect" />
          <ArtWork image={rwkng} caption="RUNAWAY KING" />
          <ArtWork image={drd} caption="Thoughts I shouldn't have" />
          <ArtWork image={p35} caption="Polygon 3.5" />
          <ArtWork image={gsh} caption="GALACTIC SUPERHIGHWAY" />
        </div>
      </section>

      {/* Lower menu + copyright */}
      <Footer />
    </div>
  );
};

export default Art;
