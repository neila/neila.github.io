import BaseLayout from "@/components/layouts/Base";
import { walletAddress } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import pp from "public/images/about/profilePic.png";

const ProfilePic = () => {
  return (
    <div
      className="flex justify-center mx-auto p-2 desktop:p-4
      max-h-36 max-w-36 desktop:max-h-72 desktop:max-w-72 overflow-hidden"
    >
      {/* TODO (9): add breathing Halftone effect */}
      <Image
        src={pp}
        alt="profile image"
        className="border-none align-middle rounded-full grayscale hover:grayscale-0"
        style={{
          maxWidth: "100%",
          height: "auto",
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
        <span className="text-2.25 font-5 leading-[1.25rem]">I</span> am a
        researcher and software developer. I work in a variety of fields
        including web development{/*(sysadmin, frontend)*/}, machine learning
        {/*(NLP, forecast systems)*/}, and cybersecurity
        {/*(web
        applications, cryptography, OSINT research)*/}
        .{" "}
        {/* and simulations modeling (agent-based modeling, newtonian systems). */}
        I have worked for, published in, or consulted for:{" "}
        <em>
          <a href="https://www.nhk.or.jp/">NHK</a> (2022)
        </em>
        ,{" "}
        <em>
          <a href="https://www.henkaku.center/en">CIT</a> (2022)
        </em>
        ,{" "}
        <em>
          <a href="https://www.wolfram.com/">Wolfram Research</a> (2020)
        </em>
        ,{" "}
        <em>
          <a href="https://nikkei.com/">Nikkei</a> (2017-2019)
        </em>
        , and <em>private clients (2017-)</em>; everything on this website
        should be considered my own viewpoint or writing unless otherwise
        specified by a representative or publication.
      </p>
      <p>
        I'm a a strong believer of the power of open communities, and work
        actively with <a href="https://ethereumjapan.org">some</a> as well as
        helped to launch <a href="https://unchain.tech/">a few</a>. It seems to
        me that open access naturally asks of its audience to assess the true
        value of the work with their own eyes instead of a price tag; where
        irreplaceble value is found, it is also far easier for them to
        contribute, collaborate, and participate in its further development
        rather than merely consuming.
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
          Bitcoin:{" "}
          <code className="break-words text-pink-500">
            {walletAddress.bitcoin}
          </code>
        </li>
        <li>
          Ethereum:{" "}
          <code className="break-words text-pink-500">
            {walletAddress.ethereum}
          </code>
        </li>
        <li className="group">
          DAI/USDT/USDC:{" "}
          <code className="break-words text-pink-500">
            {walletAddress.polygon}
          </code>{" "}
          <span className="text-[0.75rem] leading-4 invisible group-hover:visible">
            (Accepting on: Polygon PoS, Optimism, Arbitrum, Scroll)
          </span>
        </li>
        <li>
          Monero:{" "}
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
      <h1>Websites</h1>
      <ul>
        <li>
          <p>Microblog - </p>
          <a href="https://bsky.app/profile/unchain.tech">Bluesky</a>,{" "}
          <a href="https://twitter.com/zsh0x">Twitter/X</a>
        </li>
        <li>
          <p>Forge - </p>
          <a href="https://github.com/neila">Github</a>
        </li>
        {/* <li>
          <a rel="me" href="https://social.tchncs.de/@neila">
            Mastodon
          </a>
        </li>
        <li>
          <a href="https://lemmy.world/u/nla@discuss.tchncs.de">Lemmy</a>
        </li> */}
      </ul>
      {/* <p>
        I have no association with <code>neila.com</code> or with any locations
        in Spain, the metal band on bandcamp, or the RnB artist from Florida.
      </p> */}
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-4">
      <h1>Contact</h1>
      <div className="desktop:flex justify-evenly desktop:text-center">
        <div id="liame">
          <p className="text-1.125 break-words desktop:max-w-72">
            Email: <a href="mailto:sh0@choco.la">sh0@choco.la</a>
            <br />{" "}
            <span className="text-[0.85rem]">
              (PGP:{" "}
              <a href="https://keybase.io/neila/pgp_keys.asc">
                0xA605E499C3DD8A55
              </a>
              )
            </span>
          </p>
        </div>

        <div id="ppmx">
          <p className="text-1.125 break-words desktop:max-w-60">
            XMPP: <a href="xmpp:sh0@xmpp.jp">sh0@xmpp.jp</a>
          </p>
        </div>

        <div id="esabyek">
          <p className="text-1.125">
            Keybase: <a href="https://keybase.io/neila">neila</a>
          </p>
        </div>

        <div id="margelet">
          <p className="text-1.125">
            Telegram: <a href="https://t.me/neilasan">neilasan</a>
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
            <span className="text-[3rem]">A</span>BOUT{" "}
            <span className="text-[3rem]">S</span>HO
          </h1>

          {/* <h4 className="py-4 text-center">
            This page is about me. For information about this website, see the{" "}
            <Link href="/about">About page</Link>.
          </h4> */}

          <ProfilePic />

          <Work />

          {/* <DonateToAddresses /> */}

          <Websites />

          <Contact />
        </article>
      </BaseLayout>
    </>
  );
};

export default AboutMePage;
