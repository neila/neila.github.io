import Link from "next/link";

const PageLink = (params: {
  refPage: string;
  pageName: string;
  color: string;
}) => {
  return (
    <Link href={params.refPage}>
      <a
        className={`underline text-[${params.color}] cursor-pointer font-light desktop:text-2xl desktop:no-underline desktop:hover:underline`}
      >
        {params.pageName}
      </a>
    </Link>
  );
};

function Nav_home() {
  return (
    <nav className="fixed bottom-3 right-3 z-10 flex flex-col items-end desktop:mb-10 desktop:mr-7 desktop:space-y-1">
      <PageLink refPage="/works" pageName="works" color="#26F7A0" />
      <PageLink refPage="/art" pageName="art" color="#F726DB" />
      <PageLink refPage="/ideas" pageName="ἰδέα" color="#FFDF00" />
      <PageLink refPage="/about" pageName="about" color="#01CDFF" />
    </nav>
  );
}

export default Nav_home;
