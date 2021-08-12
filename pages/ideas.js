import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Graph from '../components/Graph';


const Title = ({section, color}) => <div class="mt-3 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function ideas() {
    return (
        <div>
            <Head>
                <title>XDEAS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />
            
            <Title section="ideas" color="text-[#FFDF00]"/>

            <div id="graph-container"> 
                <Graph />
            </div >

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}

