import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import Top from '/public/images/Top.png'

function Header() {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-[#07070D]">
            {/*Logo*/}
            <Link href="/">
                <Image
                    className="align-left cursor-pointer rounded-full object-contain"
                    src={Top}
                    width={120}
                    height={120}
                />
            </Link>
            <Nav />
        </header>
    )
}

export default Header
