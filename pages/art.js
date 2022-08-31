import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '../components/Footer'
import Header from '../components/Header'
import bbl from '/public/images/bigbanglove.png'
import btt from '/public/images/biggerthanthou.png'
import cdflp from "/public/images/candyflippin' (oops).png"
import drd from '/public/images/deepreason_depression.png'
import dghn from '/public/images/flower2.svg'
import gsh from '/public/images/galactic_superhighway.png'
import p35 from '/public/images/polygon35.png'
import rwkng from '/public/images/RUNAWAY_KING.jpg'

const Title = ({ section, color }) => (
  <div className="mt-5 mb-7 flex-grow-0 text-center">
    <h1 className={color}> {section} </h1>
  </div>
)

const ArtWork = (props) => {
  const { colStart, colSpan, image, caption } = props
  return (
    <div className={`flex flex-col ${colStart} ${colSpan} m-8`}>
      <Image
        className="h-full w-full cursor-pointer object-contain"
        src={image}
      />
      <div className="w-full">
        <div className="mx-auto w-4/5 text-center">
          <p className="text-sm font-hairline desktop:font-thin">{caption}</p>
        </div>
      </div>
    </div>
  )
}

export default function art() {
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
            colStart="col-start-1"
            colSpan="col-span-2"
            image={rwkng}
            caption="RUNAWAY KING"
          />
          <ArtWork
            colStart="col-start-3"
            colSpan="col-span-2"
            image={dghn}
            caption="零華"
          />
          <ArtWork
            colStart="col-start-5"
            colSpan="col-span-2"
            image={bbl}
            caption="Your Love Can Start A Universe"
          />
          <ArtWork
            colStart="col-start-1"
            colSpan="col-span-2"
            image={cdflp}
            caption="Candy effect"
          />
          <ArtWork
            colStart="col-start-3"
            colSpan="col-span-2"
            image={btt}
            caption="Eaten By Growth"
          />
          <ArtWork
            colStart="col-start-5"
            colSpan="col-span-2"
            image={p35}
            caption="Polygon 3.5"
          />
          <ArtWork
            colStart="col-start-2"
            colSpan="col-span-2"
            image={drd}
            caption="Deep Reason (depression)"
          />
          <ArtWork
            colStart="col-start-4"
            colSpan="col-span-3"
            image={gsh}
            caption="GALACTIC SUPERHIGHWAY"
          />
        </div>
      </section>

      {/* Lower menu + copyright */}
      <Footer />
    </div>
  )
}
