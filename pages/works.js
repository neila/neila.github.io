import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Title = ({section, color}) => <div class="mt-3 text-center flex-grow-0"><h1 className={color}> {section} </h1></div>

export default function works() {
    return (
        <div>
            <Head>
                <title>WXRKS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* logo */}
            <Header />
            
            <Title section="works" color="text-[#F726A7]" />

            {/* Lower menu + copyright */}
            <Footer />
        </div>
    )
}

