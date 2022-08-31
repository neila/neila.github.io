function FooterItem({ Icon, title }) {
  return (
    <div className="group flex w-10 cursor-pointer flex-col items-center desktop:w-20">
      <Icon className="mb-1 h-6 group-hover:animate-bounce desktop:mb-2 desktop:h-8" />
      <p className="text-xs tracking-widest opacity-0 group-hover:opacity-100 desktop:text-sm">
        {' '}
        {title}{' '}
      </p>
    </div>
  )
}

export default FooterItem
