import Link from "next/link";

const PageLink = (params: {
  refPage: string;
  pageName: string;
  color: string;
}) => {
  return (
    <Link
      href={params.refPage}
      passHref={true}
      className={`text-[${params.color}] cursor-pointer underline text-lg font-light desktop:text-2xl desktop:no-underline desktop:hover:underline`}
    >
      {params.pageName}
    </Link>
  );
};

function Nav() {
  return (
    <nav className="my-6 mx-4 flex flex-row space-x-2 desktop:space-x-4">
      <PageLink refPage="/works" pageName="works" color="#26F7A0" />
      <PageLink refPage="/art" pageName="art" color="#F726DB" />
      <PageLink refPage="/ideas" pageName="ἰδέα" color="#FFDF00" />
      <PageLink refPage="/about" pageName="about" color="#01CDFF" />
    </nav>
  );
}

export default Nav;
