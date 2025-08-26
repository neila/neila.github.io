import Image from 'next/image';

export const LinkWithIcon = (props: {
  url: string;
  text: string;
  rel?: string;
}) => {
  let internal = false;
  let fetchedUrl = '';
  if (props.url.startsWith('/') || props.url.startsWith('#')) {
    fetchedUrl = '/favicon.ico';
    internal = true;
  } else if (props.url.startsWith('mailto:')) {
    fetchedUrl =
      'https://www.google.com/s2/favicons?domain=https://erine.email&sz=256';
  } else if (props.url.startsWith('xmpp:')) {
    fetchedUrl = 'https://www.google.com/s2/favicons?domain=xmpp.org&sz=256';
  } else if (props.url.includes('matrix.to')) {
    fetchedUrl =
      'https://www.google.com/s2/favicons?domain=https://matrix.org&sz=256';
  } else if (props.url.startsWith('http')) {
    fetchedUrl = `https://www.google.com/s2/favicons?domain=https://${new URL(props.url).hostname}&sz=256`;
  }
  return (
    <a
      href={props.url}
      target={internal ? '' : '_blank'}
      rel={props.rel ?? 'noreferrer'}
      className="inline-flex gap-x-0.5 hover:opacity-80 group"
    >
      {props.text}
      {fetchedUrl && (
        <Image
          src={fetchedUrl}
          alt=""
          className="w-3.5 h-3.5 rounded-sm group-hover:grayscale"
          width={100}
          height={100}
        />
      )}
    </a>
  );
};
