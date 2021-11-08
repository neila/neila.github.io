import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Icon from "/public/images/Icon.png"

function Header() {
    return (
        <header className="flex flex-none justify-between sticky top-0 border-b z-10 bg-[#07070D]">
            
            {/*Logo*/}
            <div className="mx-4 mt-2">
                <Link href='/'>
                    {/* <Image 
                    className = "object-contain rounded-full cursor-pointer align-left" 
                    src = {Icon}
                    width={80} 
                    height={80}/> */}
                    <div className="text-2xl lg:text-3xl font-extrabold absolute w-0 cursor-pointer">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
                            Sho Hihara
                        </span>
                    </div>
                </Link>
            </div>

            <Nav />

        </header>
    );
}

export default Header
