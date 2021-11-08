import{
    AtSymbolIcon,
    CashIcon
} from "@heroicons/react/outline";
import FooterItem from "./FooterItem";
import { useState } from "react";
import Image from "next/image";

function Footer() {

    const [DonateModal, setDonateModal] = useState(false);
    const showModal = () => { setDonateModal(true); console.log('happening') };
    const closeModal = () => { setDonateModal(false) };


    return (
    <>
        <footer className="flex-row m-5 justify-between items-center h-auto">
            <div className="flex flexbox items-center justify-center">
                <a href="mailto:sho@uni.minerva.edu"><FooterItem title="CONTACT" Icon={AtSymbolIcon} /></a>
                <div><FooterItem title="SUPPORT" Icon={CashIcon}/></div> {/* div onClick={showModal}*/}
                {/* <FooterItem  title="SUPPORT" Icon={GiftIcon} />   */}
            </div>

            <p className="text-center text-xs lg:text-base">
                All rights reserved. Sho Hihara ©︎ 2021
            </p>

        </footer>

        {/* {DonateModal ? (
            <div className="z-40 items-center justify-center flex fixed inset-0" onClick={() => setDonateModal(false)}>
                
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none" onClick={(e) => {e.stopPropagation(); setDonateModal(true)}}>

                    <div className="flex flex-row relative pt-6 pl-6 pr-6 h-16 space-x-4 text-left">
                        <text className="my-2 text-black leading-relaxed"> Connect Metamask wallet </text>
                        <div className="btn-wrapper text-center">
                            <div className="h-12 w-12 relative">
                                <Image src={'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg'} layout='fill'/>
                            </div>
                         </div>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start p-3 lg:p-6 rounded-b">
                        <button
                            className="bg-red-500 text-white font-bold text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={(e) => {e.stopPropagation(); setDonateModal(true)}}
                        > Apply </button>
                        <button
                            className="text-black background-transparent font-bold text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={(e) => {e.stopPropagation(); setDonateModal(false)}}
                        > Cancel </button>    
                    </div>

                </div>

            </div>
        ) : null} */}
    </>
    );
}

export default Footer
