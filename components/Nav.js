import Link from 'next/link'
import { useRouter } from "next/router";

function Nav() {
    return (
        <nav className="">

            <div className="flex flex-box my-7 mx-4 lg:text-lg"> 
                
                <Link href='/works'>
                    <a class="underline text-[#F726A7] lg:no-underline lg:hover:underline font-light">works</a>
                </Link>
                
                <Link href="/ideas"> 
                    <a class="underline text-[#FFDF00] ml-1.5 lg:ml-2 lg:no-underline lg:hover:underline font-light">ideas</a>
                </Link>
                
                <Link href="/about"> 
                    <a class="underline text-[#01CDFF] ml-1.5 lg:ml-2 lg:no-underline lg:hover:underline font-light">about</a>
                </Link>


            </div>

        </nav >
    )
}

export default Nav
