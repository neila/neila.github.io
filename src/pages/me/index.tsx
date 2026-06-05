import Image from 'next/image';
import pp from 'public/images/about/profilePic.png';
import { useEffect, useId, useState } from 'react';
import { LinkWithIcon } from '@/components/atoms/links/LinkWithIcon';
import BaseLayout from '@/components/layouts/Base';
import { contactAddresses, walletAddress } from '@/utils/constants';

const ProfilePic = () => {
  return (
    <div className="flex justify-center mx-auto p-2 laptop:p-4 max-h-36 max-w-36 laptop:max-h-72 laptop:max-w-72 overflow-hidden">
      {/* TODO (9): add breathing Halftone effect */}
      <Image
        src={pp}
        alt="profile image"
        className="border-none align-middle rounded-full grayscale hover:grayscale-0"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

const Intro = () => {
  return (
    <section id={`intro-${useId()}`} className="py-4">
      {/* <h1>Work</h1> */}
      {/* TODO (8): acts as abstract until work is better documented upon which this turns into work section */}
      <p>
        I'm a creative engineer from{' '}
        <LinkWithIcon
          url="https://www.youtube.com/watch?v=SZzjw2UfUEk"
          text="Tokyo, Japan"
        />
        . I write about technology, society, language, art, beliefs, and all
        things human. Everything on this website should be considered my own
        viewpoint or writing, unless otherwise specified by a representative or
        publication.
      </p>
    </section>
  );
};

const DonateToAddresses = () => {
  return (
    <div className="border p-2 my-2">
      <p className="text-1">
        To help make ends meet, I accept donations in cryptocurrencies. If you
        appreciate my work, please consider showing your support.
      </p>
      <ul className="font-sans font-3 text-1 space-y-2 pb-2 max-w-full list-outside list-none">
        <li>
          <LinkWithIcon
            className="font-medium"
            url="https://bitcoin.org"
            text="BTC"
          />{' '}
          :{' '}
          <code className="wrap-break-word text-[#f7931a]">
            {/* <LinkWithIcon
              url={`https://blockstream.info/address/${walletAddress.bitcoin}`}
              text={walletAddress.bitcoin}
            /> */}
            {walletAddress.bitcoin}
          </code>
        </li>
        <li className="group">
          <LinkWithIcon
            className="font-medium"
            url="https://ethereum.org"
            text="ETH"
          />{' '}
          :{' '}
          <code className="wrap-break-word text-[#497493]">
            {/* <LinkWithIcon
              url={`https://etherscan.io/address/${walletAddress.ethereum}`}
              text={walletAddress.ethereum}
            /> */}
            {walletAddress.ethereum}
          </code>{' '}
          <span className="text-[0.75rem] leading-4 invisible group-hover:visible">
            stablecoins / L2s accepted
          </span>
        </li>
        <li>
          <LinkWithIcon
            className="font-medium"
            url="https://getmonero.org"
            text="XMR"
          />
          :{' '}
          <code className="wrap-break-word text-[#FF6600]">
            {/* <LinkWithIcon
              url="https://monerohash.com/explorer/"
              text={walletAddress.monero}
            /> */}
            {walletAddress.monero}
          </code>
        </li>
      </ul>
    </div>
  );
};

const Websites = () => {
  return (
    <section id={`online-presence-${useId()}`} className="py-4">
      <h1>Find me on</h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4">
        <ul>
          <h4>Socials</h4>
          <li>
            <LinkWithIcon
              url="https://bsky.app/profile/in05.org"
              text="Bluesky"
            />
          </li>
          <li>
            <LinkWithIcon url="https://x.com/irohasattva" text="X (Twitter)" />
          </li>
          {/* <li>
            <LinkWithIcon
              url="https://social.tchncs.de/@neila"
              text="Mastodon"
              rel="me"
            />
          </li>
          <li>
            <LinkWithIcon
              url="https://primal.net/p/npub1rdsn99fals5lduahfzw487k7waak6aerf04gndpgfs9kxtgy4r0qecqkwc"
              text="Nostr"
            />
          </li> */}
        </ul>
        <ul>
          <h4>Forums</h4>
          <li>
            <LinkWithIcon url="https://lemmy.ml/u/irohas" text="Lemmy" />
          </li>
          <li>
            <LinkWithIcon
              url="https://www.lesswrong.com/users/irohas"
              text="LessWrong"
            />
          </li>
        </ul>
        <ul>
          <h4>Code</h4>
          {/* <li>
            <LinkWithIcon url="https://codeberg.org/irohas" text="Codeberg" />
          </li> */}
          <li>
            <LinkWithIcon url="https://github.com/neila" text="Github" />
          </li>
          <li>
            <LinkWithIcon url="https://sr.ht/~neila/" text="Sourcehut" />
          </li>
        </ul>
        <ul>
          <h4>Mixes</h4>
          <li>
            <LinkWithIcon
              url="https://soundcloud.com/iroha_s/reposts"
              text="Soundcloud"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

const Projects = () => {
  const [host, setHost] = useState('');
  useEffect(() => {
    setHost(window.location.host);
  }, []);

  return (
    <section id={`projects-${useId()}`} className="py-4">
      <h1>Work</h1>
      <p>
        I organize{' '}
        <LinkWithIcon url="https://www.ethtokyo.org" text="ETHTokyo" />, a
        Tokyo-based Ethereum community and coordination layer to to promote the
        widespread use and development of{' '}
        <LinkWithIcon url="https://ethereum.org" text="Ethereum" />. I also
        operate <LinkWithIcon url="https://www.unchain.tech" text="UNCHAIN" />,
        a developer's guild where anyone with internet can come and learn the
        basics of web3 development, taking their first steps to join the
        permissionless ecosystem.
      </p>
      <p>
        I have worked with, published in, or consulted for:{' '}
        <em>
          <LinkWithIcon url="https://www.jt.com/" text="JT" />
        </em>
        ,{' '}
        <em>
          <LinkWithIcon url="https://www.nhk.or.jp/" text="NHK" />
        </em>
        ,{' '}
        <em>
          <LinkWithIcon url="https://www.henkaku.center/en" text="CIT" />{' '}
        </em>
        ,{' '}
        <em>
          <LinkWithIcon
            url="https://www.wolfram.com/"
            text="Wolfram Research"
          />
        </em>
        ,{' '}
        <em>
          <LinkWithIcon url="https://nikkei.com/" text="Nikkei" />
        </em>
        , and other <em>public and private clients</em> in various industries;
        everything on {host} should be considered my own viewpoint or writing
        unless otherwise specified by a representative or publication.
      </p>
      <h1>Past Projects</h1>
      <ul>
        <li>
          <LinkWithIcon url="https://www.in05.org" text="IN05 Network" /> An
          emergent network of artists, entrepreneurs, and hackers building a
          dynamic and collaborative lifestyle.
        </li>
        <li>
          <LinkWithIcon url="https://akiyaz.io" text="Akiyaz" /> An A-to-Z
          solution provider for anyone looking to build something new from the
          rural Japanese landscape.
        </li>
      </ul>
    </section>
  );
};

const Contact = () => {
  return (
    <section id={`contact-links-${useId()}`} className="py-4">
      <h1>Contact me</h1>
      <div className="grid grid-flow-row grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
        <div id={`email-${useId()}`}>
          <p>
            Email:{' '}
            <LinkWithIcon
              url={`mailto:${contactAddresses.email}`}
              text={contactAddresses.email}
            />
          </p>
        </div>
        <div id={`xmpp-${useId()}`}>
          <p>
            XMPP:{' '}
            <LinkWithIcon
              url={`xmpp:${contactAddresses.xmpp}`}
              text={contactAddresses.xmpp}
            />
          </p>
        </div>
        <div id={`matrix-${useId()}`}>
          <p>
            Matrix:{' '}
            <LinkWithIcon
              url={`https://matrix.to/#/${contactAddresses.matrix}`}
              text={contactAddresses.matrix}
            />
          </p>
        </div>
        <div id={`simplex-${useId()}`}>
          <p>
            SimpleX:{' '}
            <LinkWithIcon
              url={`https://simplex.chat/contact/#/?${contactAddresses.simplex}.onion`}
              text="chat with me"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutMePage = () => {
  const nickname = process.env.NEXT_PUBLIC_NICK;
  const donateflag =
    process.env.NEXT_PUBLIC_SHOWDONATEMODAL?.toLowerCase() === 'true';

  return (
    <BaseLayout
      pageTitle={`About ${nickname.charAt(0).toUpperCase()}${nickname.slice(1)}`}
    >
      <article className="laptop:max-w-6xl mx-auto">
        <h1 className="top-heading text-center">
          <span className="text-[4rem]">A</span>BOUT{' '}
          <span className="text-[4rem]">
            {nickname.charAt(0).toUpperCase()}
          </span>
          {nickname.slice(1).toUpperCase()}
        </h1>

        {/* <h4 className="py-4 text-center">
            This page is about me. For information about this website, see the{" "}
            <Link href="/about">About page</Link>.
          </h4> */}

        <ProfilePic />

        <Intro />

        <Projects />

        <Websites />

        <Contact />
      </article>
      {(() => (donateflag ? <DonateToAddresses /> : null))()}
    </BaseLayout>
  );
};

export default AboutMePage;
