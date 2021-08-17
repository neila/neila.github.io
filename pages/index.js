import Head from 'next/head';
import Header_home from '../components/Header_home';
import Nav_home from '../components/Nav_home';
import Background from '../components/Background'



export default function Home() {
      
    return (
        <div>
            <Head>
                <title>Sho Hihara</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header_home  />
            
            <Nav_home />

            <div className='flex h-screen w-screen'>
                <Background />
            </div>

        </div>
    );
}
