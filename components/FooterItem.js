function FooterItem({ Icon, title }) {
  return (
    <div className="group flex w-10 cursor-pointer flex-col items-center lg:w-20">
      <Icon className="mb-1 h-6 group-hover:animate-bounce lg:mb-2 lg:h-8" />
      <p className="text-xs tracking-widest opacity-0 group-hover:opacity-100 lg:text-sm">
        {' '}
        {title}{' '}
      </p>
    </div>
  )
}

export default FooterItem
