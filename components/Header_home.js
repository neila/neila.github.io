import Image from "next/image";
import Link from "next/link";
import Icon from "/public/images/Icon.png";

function Header_home() {
    return (
        <header className="flex flex-none fixed container stick top-0 z-10">
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
        </header>
    );
}

export default Header_home
