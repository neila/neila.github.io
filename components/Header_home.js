import Image from "next/image";
import Link from "next/link";
import Icon from "../public/Icon.png";

function Header_home() {
    return (
        <header className="flex flex-none fixed container lg:mx-7 stick top-0">
            {/*Logo*/}
            <div className="mx-4 mt-2 ">
                <Link href='/'>
                    <Image 
                    className = "object-contain cursor-pointer align-left" 
                    src = {Icon}
                    width={80} 
                    height={80}/>
                </Link>
            </div>
        </header>
    );
}

export default Header_home
