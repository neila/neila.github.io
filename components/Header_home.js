import Image from "next/image";
import Link from "next/link";
import Icon from "/public/images/Icon.png";

function Header_home() {
    return (
        <header className="flex flex-none fixed container stick top-0 z-10">
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
        </header>
    );
}

export default Header_home
