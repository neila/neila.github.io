import Link from 'next/link'

const PageLink = ({refPage, pageName, color}) => {
    return(
        <Link href={refPage}>
            <div className={`underline text-[${color}] cursor-pointer lg:no-underline lg:hover:underline font-light`}>{pageName}</div>
        </Link>

    )
}

function Nav() {

    return (
        <nav className="flex flex-row space-x-2 lg:space-x-4 my-6 mx-4 text-lg lg:text-2xl"> 

            <PageLink refPage="/works" pageName="works" color="#26F7A0"/>
            <PageLink refPage="/art" pageName="art" color="#F726DB"/>
            <PageLink refPage="/ideas" pageName="ἰδέα" color="#FFDF00"/>
            <PageLink refPage="/about" pageName="about" color="#01CDFF"/>

        </nav>
    )
}

export default Nav
