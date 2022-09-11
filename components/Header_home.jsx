import Image from "next/image";
import Link from "next/link";

import Top from "/public/images/Top.png";

function Header_home() {
  return (
    <header className="stick container fixed top-0 z-10 flex flex-none">
      {/*Logo*/}
      <Link href="/">
        <Image
          className="align-left cursor-pointer rounded-full object-contain"
          src={Top}
          width={80}
          height={80}
        />
      </Link>
    </header>
  );
}

export default Header_home;
