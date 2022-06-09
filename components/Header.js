import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Top from "/public/images/Top.png"

function Header() {
    return (
        <header className="flex justify-between items-center sticky top-0 border-b z-10 bg-[#07070D]">
            
            {/*Logo*/}
            <Link href='/'>
                <Image 
                className = "object-contain rounded-full cursor-pointer align-left" 
                src = {Top}
                width={120} 
                height={120}/>
            </Link>
            <Nav />

        </header>
    );
}

export default Header
