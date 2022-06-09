import Link from 'next/link'

const PageLink = ({refPage, pageName, color}) => {
    return(
        <Link href={refPage}>
            <div className={`underline text-[${color}] cursor-pointer lg:no-underline lg:hover:underline font-light`}>{pageName}</div>
        </Link>

    )
}


function Nav_home() {
    return (
        <nav className="flex flex-col items-end fixed bottom-3 right-3 lg:mb-10 lg:mr-7 lg:text-lg lg:space-y-1 z-10">

            <PageLink refPage="/works" pageName="works" color="#26F7A0"/>
            <PageLink refPage="/art" pageName="art" color="#F726DB"/>
            <PageLink refPage="/ideas" pageName="ἰδέα" color="#FFDF00"/>
            <PageLink refPage="/about" pageName="about" color="#01CDFF"/>

        </nav>
    )
}

export default Nav_home
