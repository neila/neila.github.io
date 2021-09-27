import Link from 'next/link'

function Nav_home() {
    return (
        <nav_home className="">


            <div className="flex flex-col items-end fixed bottom-3 right-3 lg:mb-10 lg:mr-7 lg:text-lg lg:space-y-1 z-10">

                <Link href='/works'>
                    <div className="underline text-[#F726A7] cursor-pointer lg:no-underline lg:hover:underline font-light">works</div>
                </Link>
                
                <Link href="/ideas"> 
                    <div className="underline text-[#FFDF00] cursor-pointer lg:no-underline lg:hover:underline font-light">ἰδέα</div>
                </Link>
                
                <Link href="/about"> 
                    <div className="underline text-[#01CDFF] cursor-pointer lg:no-underline lg:hover:underline font-light">about</div>
                </Link>
                

            </div>

        </nav_home >
    )
}

export default Nav_home
