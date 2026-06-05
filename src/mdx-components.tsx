import type { MDXComponents } from 'mdx/types';
import type { AnchorHTMLAttributes } from 'react';
import { LinkWithIcon } from '@/components/atoms/links/LinkWithIcon';

const components: MDXComponents = {
  a: ({
    children,
    className,
    href,
    rel,
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (!href) {
      return <span className={className}>{children}</span>;
    }

    return (
      <LinkWithIcon
        className={className}
        rel={rel}
        text={children}
        url={href}
      />
    );
  },
};

export function useMDXComponents(mdxComponents: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}
