import Link from 'next/link'

function Nav() {
    return (
        <nav className="">

            <div className="flex flex-box my-7 mx-4 lg:text-lg"> 
                
                <Link href='/works'>
                    <div class="underline text-[#F726A7] cursor-pointer lg:no-underline lg:hover:underline font-light">works</div>
                </Link>
                
                <Link href="/ideas"> 
                    <div class="underline text-[#FFDF00] cursor-pointer ml-1.5 lg:ml-2 lg:no-underline lg:hover:underline font-light">ἰδέα</div>
                </Link>
                
                <Link href="/about"> 
                    <div class="underline text-[#01CDFF] cursor-pointer ml-1.5 lg:ml-2 lg:no-underline lg:hover:underline font-light">about</div>
                </Link>


            </div>

        </nav >
    )
}

export default Nav
