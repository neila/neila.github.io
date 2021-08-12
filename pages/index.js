import Head from 'next/head';
import Header_home from '../components/Header_home';
import Footer from '../components/Footer'
import Nav_home from '../components/Nav_home';

export default function Home() {
    return (
        <div>
            <Head>
                <title>KIDD AKXRA</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header_home  />

            
            <Nav_home />


        </div>
    );
}
