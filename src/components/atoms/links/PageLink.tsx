import Link from 'next/link';

export const PageLink = (props: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={props.href} passHref={true}>
      <div className="no-underline max-w-full">
        <h4>{props.children}</h4>
      </div>
    </Link>
  );
};
