import { NextPage } from "next";
import Head from "next/head";
import Image, { type StaticImageData } from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import rwkng from "public/images/art/RUNAWAY_KING.jpg";
import bbl from "public/images/art/bigbanglove.png";
import btt from "public/images/art/biggerthanthou.png";
import cdflp from "public/images/art/candyflippin' (oops).png";
import drd from "public/images/art/deepreason_depression.png";
import gsh from "public/images/art/galactic_superhighway.png";
import p35 from "public/images/art/polygon35.png";
import dghn from "public/images/art/reika1.svg";
import swlp from "public/images/art/sweetlips.png";

const Title = (params: { section: string; color: string }) => (
  <div className="mt-5 mb-7 flex-grow-0 text-center">
    <h1 className={params.color}> {params.section} </h1>
  </div>
);

const ArtWork = (props: {
  colStart: string;
  colSpan: string;
  image: StaticImageData;
  caption: string;
}) => {
  const { colStart, colSpan, image, caption } = props;
  return (
    <div
      className={`flex flex-col col-start-${colStart} col-span-${colSpan} m-8`}
    >
      <Image
        className="h-full w-full cursor-pointer object-contain"
        src={image}
        alt={caption}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="w-full">
        <div className="mx-auto w-4/5 text-center">
          <p className="text-sm font-hairline desktop:font-thin">{caption}</p>
        </div>
      </div>
    </div>
  );
};

const art: NextPage = () => {
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
      <section className="">
        <div className="mx-auto flex flex-wrap justify-center p-4 desktop:grid desktop:w-4/5 desktop:grid-cols-6">
          <ArtWork
            colStart="1"
            colSpan="2"
            image={bbl}
            caption="Your Love Can Start A Universe"
          />
          <ArtWork
            colStart="3"
            colSpan="2"
            image={btt}
            caption="Eaten By Growth"
          />
          <ArtWork colStart="5" colSpan="2" image={dghn} caption="零華" />
          <ArtWork
            colStart="1"
            colSpan="2"
            image={swlp}
            caption="I Wanna Eat You"
          />
          <ArtWork
            colStart="3"
            colSpan="2"
            image={cdflp}
            caption="Candy Effect"
          />
          <ArtWork
            colStart="5"
            colSpan="2"
            image={rwkng}
            caption="RUNAWAY KING"
          />
          <ArtWork
            colStart="1"
            colSpan="2"
            image={drd}
            caption="Thoughts I shouldn't have"
          />
          <ArtWork colStart="3" colSpan="2" image={p35} caption="Polygon 3.5" />
          <ArtWork
            colStart="5"
            colSpan="2"
            image={gsh}
            caption="GALACTIC SUPERHIGHWAY"
          />
        </div>
      </section>

      {/* Lower menu + copyright */}
      <Footer />
    </div>
  );
};

export default art;
