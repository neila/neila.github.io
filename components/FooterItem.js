
function FooterItem({ Icon, title }) {
    return (
        <div className='flex flex-col items-center cursor-pointer group w-10 lg:w-20'>
            <Icon className='h-6 mb-1 lg:h-8 lg:mb-2 group-hover:animate-bounce' />
            <p className='opacity-0 group-hover:opacity-100 tracking-widest text-xs lg:text-sm'> {title} </p>
        </div>
    );
}

export default FooterItem
