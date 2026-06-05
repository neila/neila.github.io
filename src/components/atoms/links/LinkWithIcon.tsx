import Image from 'next/image';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';

const getRandomHex = () => {
  const r = Math.floor(60 + Math.random() * 196);
  const b = Math.floor(60 + Math.random() * 196);
  const g = Math.floor(60 + Math.random() * 196);

  return `#${[r, g, b]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('')}`;
};

const lightenHex = (hex: string, weight = 0.45) => {
  const cleanHex = hex.replace('#', '');

  const num = parseInt(cleanHex, 16);

  const r = num >> 16;
  const g = (num >> 8) & 255;
  const b = num & 255;

  const mixedR = Math.round(r + (255 - r) * weight);
  const mixedG = Math.round(g + (255 - g) * weight);
  const mixedB = Math.round(b + (255 - b) * weight);

  return `#${[mixedR, mixedG, mixedB]
    .map((value) => value.toString(16).padStart(2, '0'))
    .join('')}`;
};

export const LinkWithIcon = (props: {
  className?: string;
  url: string;
  text: ReactNode;
  rel?: string;
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [fallbackColor] = useState(() => getRandomHex());
  const [faviconDominantColor, setFaviconDominantColor] = useState<
    string | null
  >(null);

  const handleFaviconLoad = async () => {
    if (!imgRef.current) return;

    try {
      const { getColor } = await import('colorthief');
      const color = await getColor(imgRef.current, {
        quality: 1,
        worker: false,
      });

      if (!color) return;

      const DominantColor = color.isDark
        ? lightenHex(color.hex())
        : color.hex();

      setFaviconDominantColor(DominantColor);
    } catch (e) {
      console.error('Color extraction fail:', e);
    }
  };

  let internal = false;
  // const iconFetchBaseUrl = 'https://f7.allesedv.com/';
  const iconFetchBaseUrl = 'https://icon.horse/icon/';
  let fetchedUrl = '';
  if (props.url.startsWith('/') || props.url.startsWith('#')) {
    fetchedUrl = '/favicon.ico';
    internal = true;
  } else if (props.url.startsWith('mailto:')) {
    fetchedUrl = `${iconFetchBaseUrl}erine.email`;
  } else if (props.url.startsWith('xmpp:')) {
    fetchedUrl = `${iconFetchBaseUrl}xmpp.org`;
  } else if (props.url.includes('matrix.to')) {
    fetchedUrl = `${iconFetchBaseUrl}matrix.org`;
  } else if (props.url.startsWith('http')) {
    fetchedUrl = `${iconFetchBaseUrl}${new URL(props.url).hostname}`;
  }

  return (
    <a
      href={props.url}
      target={internal ? '' : '_blank'}
      rel={props.rel ?? 'noreferrer'}
      style={
        {
          '--dominant-color':
            faviconDominantColor !== '#e6e5e0'
              ? faviconDominantColor
              : fallbackColor,
        } as React.CSSProperties
      }
      className={`inline-flex gap-x-0.5 hover:opacity-80 hover:text-(--dominant-color) group ${props.className}`} //
    >
      {props.text}
      {fetchedUrl && (
        <Image
          ref={imgRef}
          src={fetchedUrl}
          alt=""
          className={`w-3.5 h-3.5 rounded-sm grayscale group-hover:grayscale-0`}
          width={100}
          height={100}
          onLoad={handleFaviconLoad}
          crossOrigin="anonymous"
        />
      )}
    </a>
  );
};
