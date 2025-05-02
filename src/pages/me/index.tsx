import { LinkWithIcon } from '@/components/atoms/links/LinkWithIcon';
import BaseLayout from '@/components/layouts/Base';
import { walletAddress } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import pp from 'public/images/about/profilePic.png';

const ProfilePic = () => {
  return (
    <div
      className="flex justify-center mx-auto p-2 laptop:p-4
      max-h-36 max-w-36 laptop:max-h-72 laptop:max-w-72 overflow-hidden"
    >
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

const Work = () => {
  return (
    <section id="abstract" className="py-4">
      {/* <h1>Work</h1> */}
      {/* TODO (8): acts as abstract until work is better documented upon which this turns into work section */}
      <p>
        <span className="text-2.25 font-5 leading-[1.25rem]">P</span>
        rofessionally, I find myself wearing many hats over my varied interests
        and specialities. Primarily, I see myself as an artist and entrepreneur,
        always thinking about and working on exciting new ideas. At times, I am
        an{' '}
        <LinkWithIcon
          url="/_archives/works/er-simulation"
          text="OSINT researcher"
        />
        , gathering intel and compiling relevant information to pursue my (or my
        client's) goals. Other times I am a{' '}
        <LinkWithIcon
          url="https://github.com/neila"
          text="software developer"
        />
        , building systems and applications that help us automate, so that we
        can focus on more important things.
      </p>
      <p>
        I have worked for, published in, or consulted for:{' '}
        <em>
          <LinkWithIcon url="https://www.nhk.or.jp/" text="NHK" /> (2022-2023)
        </em>
        ,{' '}
        <em>
          <LinkWithIcon url="https://www.henkaku.center/en" text="CIT" />{' '}
          (2021-2022)
        </em>
        ,{' '}
        <em>
          <LinkWithIcon
            url="https://www.wolfram.com/"
            text="Wolfram Research"
          />{' '}
          (2020)
        </em>
        ,{' '}
        <em>
          <LinkWithIcon url="https://nikkei.com/" text="Nikkei" /> (2017-2019)
        </em>
        , and other <em>private clients (2017-)</em> in various industries.
        Everything on this website should be considered my own viewpoint or
        writing, unless otherwise specified by a representative or publication.
      </p>
    </section>
  );
};

const DonateToAddresses = () => {
  return (
    <div className="border border-1 p-2 my-2">
      <p className="text-1">
        To help make ends meet, I accept small (or large, if you insist)
        donations in cryptocurrencies. If you appreciate my work, please
        consider showing your support.
      </p>

      <ul
        className="font-sans font-3 text-1
        space-y-2 pb-2 max-w-full list-outside list-none"
      >
        <li>
          BTC:{' '}
          <code className="break-words text-pink-500">
            {walletAddress.bitcoin}
          </code>
        </li>
        <li className="group">
          ETH:{' '}
          <code className="break-words text-pink-500">
            {walletAddress.ethereum}
          </code>
          <span className="text-[0.75rem] leading-4 invisible group-hover:visible">
            (stablecoins and L2s also accepted)
          </span>
        </li>

        <li>
          XMR:{' '}
          <code className="break-words max-w-full text-pink-500">
            {walletAddress.monero}
          </code>
        </li>
      </ul>
    </div>
  );
};

const Websites = () => {
  return (
    <section id="websites" className="py-4">
      <h1>You can find me on</h1>
      <div className="grid grid-cols-3 gap-4">
        <ul>
          <h4>Socials</h4>
          <li>
            <LinkWithIcon
              url="https://bsky.app/profile/in05.org"
              text="Bluesky"
            />
          </li>
          <li>
            <LinkWithIcon
              url="https://social.tchncs.de/@neila"
              text="Mastodon"
            />
          </li>
          <li>
            <LinkWithIcon
              url="https://primal.net/p/npub1rdsn99fals5lduahfzw487k7waak6aerf04gndpgfs9kxtgy4r0qecqkwc"
              text="Nostr"
            />
          </li>
        </ul>
        <ul>
          <h4>Forums</h4>
          <li>
            <LinkWithIcon url="https://discuss.tchncs.de/u/nla" text="Lemmy" />
          </li>
        </ul>
        <ul>
          <h4>Code</h4>
          <li>
            <LinkWithIcon url="https://github.com/neila" text="Github" />
          </li>
        </ul>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-4">
      <h1>Projects</h1>
      <ul>
        <li>
          <LinkWithIcon url="https://akiyaz.io" text="Akiyaz" /> An A-to-Z
          solution provider for anyone looking to build something new from the
          rural Japanese landscape.
        </li>
        <li>
          <LinkWithIcon url="https://ethereumjp.org" text="Ethereum Japan" />
          Developing Ethereum from Japan, featuring projects like{' '}
          <LinkWithIcon url="https://ethtokyo.org" text="ETHTokyo" /> and{' '}
          <LinkWithIcon url="https://www.unchain.tech" text="UNCHAIN" />.
        </li>
        <li>
          <LinkWithIcon url="https://www.in05.org" text="IN05 Network" /> An
          emergent network of artists, entrepreneurs, and hackers building a
          dynamic and collaborative lifestyle.
        </li>
      </ul>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-4">
      <h1>Contact me</h1>
      <div className="grid grid-flow-row grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-8">
        <div id="liame">
          <p>
            <LinkWithIcon
              url={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              text="Email"
            />
          </p>
        </div>
        <div id="margelet">
          <p>
            <LinkWithIcon url="https://t.me/neilasan" text="Telegram" />
          </p>
        </div>
        <div id="noisses">
          <p>
            <LinkWithIcon
              url={`https://getsession.org/?${process.env.NEXT_PUBLIC_SESSION_ID}`}
              text="Session"
            />
          </p>
        </div>
        <div id="ppmx">
          <p>
            <LinkWithIcon
              url={`xmpp:${process.env.NEXT_PUBLIC_XMPP}`}
              text="XMPP"
            />
          </p>
        </div>
        <div id="esabyek" hidden>
          <p>
            <LinkWithIcon url="https://keybase.io/neila" text="Keybase" />
          </p>
        </div>
        <div id="langis" hidden>
          <p>
            <LinkWithIcon
              // url="https://envs.sh/2_V"
              url={`https://signal.me/#eu/${process.env.NEXT_PUBLIC_SIGNAL}`}
              text="Signal"
            />
          </p>
        </div>
        <div id="xelpmis" hidden>
          <p>
            <LinkWithIcon
              // url="https://envs.sh/2B8"
              url={`https://simplex.chat/contact/#/?${process.env.NEXT_PUBLIC_SIMPLEX}.onion`}
              text="SimpleX"
            />
          </p>
        </div>
        <div id="xirtam" hidden>
          <p>
            <LinkWithIcon
              url={`https://matrix.to/#/${process.env.NEXT_PUBLIC_MATRIX}`}
              text="Matrix"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutMePage = () => {
  return (
    <>
      <BaseLayout pageTitle="About Neila" className="px-4">
        <article className="laptop:max-w-6xl mx-auto">
          <h1 className="top-heading text-center">
            <span className="text-[4rem]">A</span>BOUT{' '}
            <span className="text-[4rem]">N</span>EILA
          </h1>

          {/* <h4 className="py-4 text-center">
            This page is about me. For information about this website, see the{" "}
            <Link href="/about">About page</Link>.
          </h4> */}

          <ProfilePic />

          <Work />

          {/* <DonateToAddresses /> */}

          <Projects />

          <Websites />

          <Contact />
        </article>
      </BaseLayout>
    </>
  );
};

export default AboutMePage;
