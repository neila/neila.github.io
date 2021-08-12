import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import Icon from "../public/Icon.png"

function Header() {
    return (
        <header className="flex flex-none container lg:mx-7 justify-between sticky top-0 bg-[#07070D] border-b z-10">
            
            {/*Logo*/}
            <div class="mx-4 mt-2">
                <Link href='/'>
                    <Image 
                    className = "object-contain cursor-pointer align-left" 
                    src = {Icon}
                    width={80} 
                    height={80}/>
                </Link>
            </div>

            <Nav />


        </header>
    );
}

export default Header
