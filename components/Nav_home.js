import Link from 'next/link'

function Nav_home() {
    return (
        <nav_home className="">


            <div className="flex flex-col items-end fixed bottom-3 right-3 lg:mb-10 lg:mr-7 lg:text-lg lg:space-y-1">

                <Link href='/works'>
                    <a class="underline text-[#F726A7] lg:no-underline lg:hover:underline font-light">works</a>
                </Link>
                
                <Link href="/ideas"> 
                    <a class="underline text-[#FFDF00] lg:no-underline lg:hover:underline font-light">ideas</a>
                </Link>
                
                <Link href="/about"> 
                    <a class="underline text-[#01CDFF] lg:no-underline lg:hover:underline font-light">about</a>
                </Link>
                

            </div>

        </nav_home >
    )
}

export default Nav_home
