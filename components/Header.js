import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import Top from '/public/images/Top.png'

function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-[#07070D]">
      {/*Logo*/}
      <Link href="/">
        <a>
          <Image
            className="align-left cursor-pointer rounded-full object-contain"
            src={Top}
            width={80}
            height={80}
          />
        </a>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
