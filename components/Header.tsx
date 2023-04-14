import Image from "next/legacy/image";
import Link from "next/link";

import Nav from "./Nav";
import Top from "/public/images/top_o.png";

function Header() {
  return (
    <header className="sticky top-0 z-10 flex justify-between border-b bg-[#07070D]">
      {/*Logo*/}
      <Link href="/">
        <Image
          className="cursor-pointer rounded-full"
          alt="SHØ logo"
          src={Top}
          width={80}
          height={80}
        />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
