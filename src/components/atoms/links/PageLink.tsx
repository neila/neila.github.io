import Link from "next/link";

export const PageLink = (props: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={props.href}
      passHref={true}
      className="no-underline py-2 px-12 relative hover:z-10
      hover:text-success outline-1 outline-dotted"
    >
      {props.children}
    </Link>
  );
};
