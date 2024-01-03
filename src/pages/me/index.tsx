import BaseLayout from "@/components/layouts/Base";
import Image from "next/image";
import Link from "next/link";
import pp from "public/images/about/profilePic.png";

const Work = () => {
  return (
    <section id="abstract" className="py-4">
      {/* <h1>Work</h1> */}
      {/* TODO (8): acts as abstract until work is better documented upon which this turns into work section */}
      <p>
        <span className="text-2.25 font-5">I</span> am a freelance developer and
        researcher. I work in a variety of fields including web development
        (sysadmin, frontend), cybersecurity (web applications, cryptography,
        OSINT research), machine learning (NLP, forecast systems), and
        simulations modeling (agent-based modeling, newtonian systems).
      </p>
    </section>
  );
};

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

const Websites = () => {
  return (
    <section id="websites" className="py-4">
      <h1>Websites</h1>
      <ul>
        <li>
          <a rel="me" href="https://social.tchncs.de/@neila">
            Mastodon (English)
          </a>{" "}
          /{" "}
          <a href="https://bsky.app/profile/neila.bsky.social">
            Bluesky (日本語)
          </a>
        </li>
        <li>
          <a href="https://github.com/neila">Github</a>
        </li>
        <li>
          <a href="https://keybase.io/neila">Keybase</a>
        </li>
        <li>
          <a href="https://lemmy.world/u/nla@discuss.tchncs.de">Lemmy</a>
        </li>
      </ul>
      <p>
        I have no association with <code>neila.com</code>, the Spanish metal
        band on bandcamp, or with the RnB artist from Florida.
      </p>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-4">
      <h1>Contact</h1>
      <div className="desktop:flex justify-evenly desktop:text-center">
        <div id="liame" className="">
          <p className="text-1.125">
            Email: <a href="mailto:neila@akxra.art">neila@akxra.art</a>
            <br />
            (PGP public key{" "}
            <a href="https://keybase.io/neila/pgp_keys.asc">
              0xA605E499C3DD8A55
            </a>
            )
          </p>
        </div>

        <div id="margelet">
          <p className="text-1.125">
            Telegram: <a href="https://t.me/n_eila">n_eila</a>
          </p>
        </div>

        {/* TODO (7): add SimpleX */}

        <div id="xirtam">
          <p className="text-1.125">
            Matrix: <a href="matrix:n@tchncs.de">n@tchncs.de</a>
          </p>
        </div>

        <div id="ppmx">
          <p className="text-1.125">
            XMPP: <a href="xmpp:n@jabbers.one">n@jabbers.one</a>
          </p>
        </div>
      </div>
    </section>
  );
};

const AboutMePage = () => {
  return (
    <>
      <BaseLayout className="px-4">
        <article className="laptop:max-w-5xl mx-auto">
          <h1 className="top-heading text-center">
            <span className="text-[3rem]">A</span>BOUT{" "}
            <span className="text-[3rem]">N</span>EILA
          </h1>

          {/* <h4 className="py-4 text-center">
            This page is about me. For information about this website, see the{" "}
            <Link href="/about">About page</Link>.
          </h4> */}

          <ProfilePic />

          <Work />

          <Websites />

          <Contact />
        </article>
      </BaseLayout>
    </>
  );
};

export default AboutMePage;
