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
      outline-dotted outline-success hover:outline-warning
      text-success hover:text-warning"
    >
      {props.children}
    </Link>
  );
};
