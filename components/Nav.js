import Link from 'next/link'

function Nav() {
    return (
        <nav className="">

            <div className="flex flex-row space-x-1 lg:space-x-2 my-7 mx-4 lg:text-lg"> 
                
                <Link href='/works'>
                    <div className="underline text-[#26F7A0] cursor-pointer lg:no-underline lg:hover:underline font-light">works</div>
                </Link>

                <Link href='/art'>
                    <div className="underline text-[#F726DB]  cursor-pointer lg:no-underline lg:hover:underline font-light">art</div>
                </Link>
                
                <Link href="/ideas"> 
                    <div className="underline text-[#FFDF00] cursor-pointer lg:no-underline lg:hover:underline font-light">ἰδέα</div>
                </Link>
                
                <Link href="/about"> 
                    <div className="underline text-[#01CDFF] cursor-pointer lg:no-underline lg:hover:underline font-light">about</div>
                </Link>


            </div>

        </nav >
    )
}

export default Nav
