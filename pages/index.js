import Head from 'next/head'

import Background from '../components/Background'
import Header_home from '../components/Header_home'
import Nav_home from '../components/Nav_home'

export default function Home() {
  return (
    <div className="">
      <div>
        <Head>
          <title>SH0</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header_home />

        <Background />

        {/* <Canvas /> */}

        <Nav_home />
      </div>
    </div>
  )
}
