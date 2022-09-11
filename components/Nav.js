import Link from 'next/link'

const PageLink = ({ refPage, pageName, color }) => {
  return (
    <Link href={refPage}>
      <a
        className={`text-[${color}] cursor-pointer text-lg font-light underline desktop:text-2xl desktop:no-underline desktop:hover:underline`}
      >
        {pageName}
      </a>
    </Link>
  )
}

function Nav() {
  return (
    <nav className="my-6 mx-4 flex flex-row space-x-2 desktop:space-x-4">
      <PageLink refPage="/works" pageName="works" color="#26F7A0" />
      <PageLink refPage="/art" pageName="art" color="#F726DB" />
      <PageLink refPage="/ideas" pageName="ἰδέα" color="#FFDF00" />
      <PageLink refPage="/about" pageName="about" color="#01CDFF" />
    </nav>
  )
}

export default Nav
