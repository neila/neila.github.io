import Image from "next/image";
import Link from "next/link";
import Top from "/public/images/Top.png";

function Header_home() {
    return (
        <header className="flex flex-none fixed container stick top-0 z-10">
            {/*Logo*/}
            <Link href='/'>
                <Image 
                className = "object-contain rounded-full cursor-pointer align-left" 
                src = {Top}
                width={120} 
                height={120}/>
            </Link>
        </header>
    );
}

export default Header_home
