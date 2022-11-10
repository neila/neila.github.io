import Image from "next/image";
import Link from "next/link";

import Top from "/public/images/top_o.png";

function Header_home() {
  return (
    <header className="fixed z-10">
      {/*Logo*/}
      <Link href="/">
        <Image
          className="cursor-pointer rounded-full "
          alt="SHØ logo"
          src={Top}
          width={80}
          height={80}
        />
      </Link>
    </header>
  );
}

export default Header_home;
