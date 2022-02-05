import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Icon from "/public/images/Icon.png"

function Header() {
    return (
        <header className="flex justify-between sticky top-0 border-b z-10 bg-[#07070D]">
            
            {/*Logo*/}
            <Link href='/'>
                {/* <Image 
                className = "object-contain rounded-full cursor-pointer align-left" 
                src = {Icon}
                width={80} 
                height={80}/> */}
                <div className="mx-4 my-2 cursor-pointer leading-tight">
                    <div><span className="text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                        Sho
                    </span></div>
                    <div><span className="text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                        Hihara
                    </span></div>
                </div>
            </Link>

            <Nav />

        </header>
    );
}

export default Header
