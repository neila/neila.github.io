import Image from 'next/image';

const Footer = () => {
  // const _currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center text-sm">
      <p>
        <Image
          src="/images/alphabet_n.png"
          alt="N"
          className="mx-auto h-8 w-8"
          width={100}
          height={100}
        />
      </p>
      <p className="font-mono text-xs">
        PGP fingerprint:{' '}
        <a
          href="https://keybase.io/neila/pgp_keys.asc"
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline"
        >
          <code className="font-thin text-pink-500">
            7E30 0102 93AC 094B 363F DF8D A605 E499 C3DD 8A55
          </code>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
