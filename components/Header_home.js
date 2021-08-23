import Image from "next/image";
import Link from "next/link";
import Icon from "../public/Icon.png";

function Header_home() {
    return (
        <header className="flex flex-none fixed container stick top-0">
            {/*Logo*/}
            <div className="mx-4 mt-2">
                <Link href='/'>
                    <Image 
                    className = "object-contain rounded-full cursor-pointer align-left" 
                    src = {Icon}
                    width={80} 
                    height={80}/>
                </Link>
            </div>
        </header>
    );
}

export default Header_home
