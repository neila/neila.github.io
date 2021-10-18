import Head from 'next/head';
import Header_home from '../components/Header_home';
import Nav_home from '../components/Nav_home';
import Background from '../components/Background';
import Canvas from '../components/Canvas';



export default function Home() {
      
    return (
        <div className="">
            <div>
                <Head>
                    <title>Sho Hihara</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Header_home  />

                <Background/>

                {/* <Canvas /> */}
                
                <Nav_home />

            </div>
        </div>
    );
}
