import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import flower1 from '/public/images/flower1.svg';
import flower2 from '/public/images/flower2.svg';

const Title = ({digi, hana, colord, colorh}) => <div className="mt-5 mb-7 justify-center flex"><h1 className={colord}> {digi} </h1><h1 className={colorh}> {hana} </h1></div>

export default function radio() {
    return (
        <div className=''>
            <Head>
                <title>DIGIHANA</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="min-h-full px-8 lg:mx-24 relative">
                <div className='px-8 justify-between flex relative'>

                    <div className='h-full flex-grow relative'>
                        <Title digi="DIGI" hana="HANA" colord="bg-clip-text text-transparent bg-gradient-to-b from-[#22C1C3] to-[#FDBB2D]" colorh="bg-clip-text text-transparent bg-gradient-to-b from-[#833AB4] to-[#FD1D1D]"/>

                        <div className="lg:w-4/6 2xl:w-1/2 lg:ml-32 2xl:ml-48 mt-10 2xl:mt-16 left-2 ">
                            <div className="flex"><Image src={flower1} /><Image src={flower2} /></div>
                            <br />
                            <p>
                                <a href="https://digihana.neila1.repl.co/" className="text-[#22C1C3]">DigiHana</a> is a web application that allows users to mint their own digital flower; a hana. 
                                Each token is unique and its pattern is generated on the fly, as you would anticipate a physical flower's bloom. 
                            </p>
                            <br />
                            <p>
                                What makes these hanas truly unique is the permanence of its beauty and the minter's ownership of it. 
                                Instead of adopting the common practice of storing only the metadata on-chain, only to point to an external and potentially vulnerable source of data, each flower data is encoded and baked directly into the Ethereum blockchain. 
                                Hana owners <em>truly</em> own their hanas, just as they own their necklaces or sneakers; unless the Ethereum ecosystem itself catastrophically fails, your digihanas will be semi-permanently retrievable and verifiable without any external dependencies. 
                            </p>
                            <br />
                            <p>
                                Collection ID 0x5b54de188a660dbf5e2ba6935ce1d70669348ea0
                            </p>
                            <p>
                                <a href='https://rinkeby.rarible.com/collection/0x5b54de188a660dbf5e2ba6935ce1d70669348ea0' className='text-[#fbdb04]'>Rarible</a> / <a href='https://testnets.opensea.io/collection/flowernft-azuwzflo4x' className='text-[#2081E2]'>Opensea</a>
                            </p>
                            <br />
                            <p>
                                You can also mint your own digihanas to this collection using a metamask wallet. 
                                Currently the smart contract is on the Ethereum Testnet (Rinkeby) since I cannot afford the gas fees and all that. 
                                The functionality is entirely the same, the only difference being that your hana won't cost you a penny nor will it be worth any penny. 
                                Try it out by connecting your metamask wallet to the Rinkeby testnet!
                            </p>
                            <br />
                            <p>
                                If there's enough interest, I hope to release it on the main Ethereum network. 
                                If anyone is willing to contribute some ETH to do this, my wallet is 0xd202014D97C95eC6aE01a0e947fD352b54d6effd.
                            </p>
                        </div>

                        <Footer />
                    </div>

                </div>
            </div>

        </div>
    )
}
