import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";
import profilePic from "/public/images/profilePic.png";
import { MapPinIcon } from "@heroicons/react/24/outline";

const Title = (params: { section: string; color: string }) => {
  return (
    <div className="mt-5 mb-7 flex-grow-0 text-center">
      <h1 className={params.color}> {params.section} </h1>
    </div>
  );
};

const ToolLogo = (params: { logolink: string; logoname: string }) => {
  return (
    <div className="desktop:h-30 desktop:w-30 relative h-20 w-20 desktop:m-2">
      <Image
        src={params.logolink}
        alt={`${params.logoname} logo`}
        className="opacity-100"
        fill
        sizes="100vw"
      />
    </div>
  );
};

export default function about() {
  return (
    <div>
      <Head>
        <title>ABXUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Title section="ABOUT" color="text-[#01CDFF]" />

      {/* profile pic */}
      {/* td: breathing Halftone effect */}
      <div className="mx-auto flex h-32 w-32 justify-center overflow-hidden desktop:h-72 desktop:w-72">
        <Image
          src={profilePic}
          alt="profile image"
          className="border-none align-middle rounded-3xl grayscale hover:grayscale-0"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>

      {/*-- content - */}
      <div className="min-h-full p-8">
        <div className="mx-auto max-w-4xl space-y-24">
          {/* intro */}
          <section className="flex-col items-start desktop:flex">
            <div className="mx-auto space-y-5 leading-snug desktop:w-4/5">
              <p>
                <a
                  href="https://www.youtube.com/watch?v=UL5x60lpGIE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Konnichiwa
                </a>
                . I&apos;m SHØ, a creative developer from Japan. <em>Time</em>
                &apos;s 2006 person of the year.
              </p>
              <p>
                I like questioning things; perhaps even more than finding
                answers to them.
              </p>
              <p>
                I seek joy in the{" "}
                <a
                  href="https://openlibrary.org/books/OL31390125M/The_God_of_Small_Things"
                  target="_blank"
                  rel="noreferrer"
                >
                  small things
                </a>
                , like sleeping in makeshift spaces, or finding evidence of
                cultural context in everyday life.
              </p>

              <div className="mx-auto flex w-min flex-row items-center whitespace-nowrap rounded-md bg-[#F9EFF1] p-2 font-normal">
                <MapPinIcon className="mx-1 h-6 w-6 text-red-600" />
                <a
                  className="mr-1 text-red-600 hover:text-blue-400"
                  href="https://www.youtube.com/watch?v=SZzjw2UfUEk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tokyo, Japan
                </a>
              </div>
            </div>
          </section>

          {/* skills */}
          <section className="items-start space-x-0 desktop:flex desktop:space-x-10">
            <div className="top-72 transform space-y-1 desktop:sticky desktop:w-0 desktop:translate-y-10 desktop:rotate-270">
              <h2>Skills</h2>
            </div>
            <div className="mx-auto space-y-5 leading-snug desktop:w-full">
              {/*<SkillTree classNamecontent='w-full h-screen bg-purple-400 rounded-md border-double border-4 border-light-blue-500'/>*/}
              <ul className="list-inside list-disc space-y-3 leading-snug">
                <li>
                  Web design & development
                  <ul className="ml-12 list-none">
                    <li>DRY patterns/modular programming</li>
                    <li>Responsive web design</li>
                    <li>IxD</li>
                  </ul>
                </li>
                <li>
                  Blockchain & web3
                  <ul className="ml-12 list-none">
                    <li>smart contracts</li>
                    <li>DeFi</li>
                    <li>dApps</li>
                  </ul>
                </li>
                <li>
                  Machine learning & AI
                  <ul className="ml-12 list-none">
                    <li>NLP</li>
                    <li>Analytical forecasting</li>
                    <li>Recommendation systems</li>
                  </ul>
                </li>
                <li>
                  Simulation & modeling
                  <ul className="ml-12 list-none">
                    <li>Scenario optimization</li>
                    <li>Game theory simulations</li>
                    <li>Computational physics</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* tools */}
          <section className="items-start space-x-0 space-y-1 desktop:flex desktop:space-x-10">
            <div className="top-72 transform space-y-1 desktop:sticky desktop:w-0 desktop:translate-y-10 desktop:rotate-270">
              <h2> Current Toolkit</h2>
            </div>
            <div className="flex flex-wrap justify-start gap-1 desktop:w-full">
              <ToolLogo
                logolink="https://raw.githubusercontent.com/microsoft/TypeScript-Website/b89d197063b6849bbfc2edfb033f6082be950636/packages/typescriptlang-org/static/icons/ts-logo-512.png"
                logoname="Typescript"
              />
              <ToolLogo
                logolink="https://gist.githubusercontent.com/neila/13512d1b818c0cfb974088ff3abf2656/raw/9f105955b3053e5eead76770b370f582a1732ff7/solidity_logo_white.svg"
                logoname="Solidity"
              />
              <ToolLogo
                logolink='https://www.rust-lang.org/logos/rust-logo-512x512.png'
                logoname='Rust'
              />
              <ToolLogo
                logolink="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                logoname="Python"
              />
              {/* <ToolLogo logolink='https://raw.githubusercontent.com/cormullion/julia-logo-graphics/master/images/julia-dots.svg' logoname='Julia'/> */}
              {/* <ToolLogo logolink='https://raw.githubusercontent.com/egonelbre/gophers/master/vector/superhero/standing.svg' logoname='Golang'/> */}
              {/* <ToolLogo logolink='https://raw.githubusercontent.com/haskell-infra/hl/master/design/logo.svg' logoname='Haskell'/> */}
              <ToolLogo
                logolink="https://raw.githubusercontent.com/nodejs/nodejs.org/cb4ba73335f6590f42b08f4cda65291e5f2b7599/public/static/images/logo-hexagon.svg"
                logoname="Node.js"
              />
              <ToolLogo
                logolink='https://raw.githubusercontent.com/docker/docs/7bdcde7f1a36f79e798a9f7321b687e9807fde8d/assets/images/engine.svg'
                logoname='Docker'
              />
              <ToolLogo
                logolink="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                logoname="Git"
              />
              <ToolLogo
                logolink="https://avatars.githubusercontent.com/u/44036562"
                logoname="Github actions"
              />
              <ToolLogo
                logolink="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-logomark.svg"
                logoname="Firebase"
              />
              <ToolLogo
                logolink="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                logoname="Figma"
              />
              <ToolLogo
                logolink="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                logoname="Notion"
              />
            </div>
          </section>
          <section className="items-start space-x-0 space-y-1 desktop:flex desktop:space-x-10">
            <div className="top-72 transform space-y-1 desktop:sticky desktop:w-0 desktop:translate-y-10 desktop:rotate-270">
              <h2>Past Tools</h2>
            </div>
            <div className="flex flex-wrap justify-start gap-1 desktop:w-full">
              <ToolLogo
                logolink="https://upload.wikimedia.org/wikipedia/commons/2/20/Mathematica_Logo.svg"
                logoname="Mathematica"
              />
              <ToolLogo
                logolink="https://www.r-project.org/logo/Rlogo.svg"
                logoname="R"
              />
              <ToolLogo
                logolink="https://starbeamrainbowlabs.com/images/logos/swi-prolog.svg"
                logoname="Prolog"
              />
              <ToolLogo
                logolink="https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg"
                logoname="Microsoft Office"
              />
            </div>
          </section>

          {/* education */}
          {/* <section className="desktop:flex space-x-0 space-y-1 desktop:space-x-10 items-start">
            <div className="transform desktop:w-0 desktop:rotate-270 desktop:translate-y-24 desktop:sticky top-72">
              <h2>Education</h2>
            </div>
            <ul className="desktop:w-full mx-auto leading-snug space-y-3">
              <div>🎓 Minerva University '21 (B.Sc.)</div>
              <div>🎓 Pearson College UWC '17 (IB Diploma)</div>
            </ul>
          </section> */}

          {/* awards */}
          {/* <section className="desktop:flex space-x-0 space-y-1 desktop:space-x-10 items-start">
            <div className="transform desktop:w-0 desktop:rotate-270  desktop:translate-y-16 desktop:sticky top-72">
              <h2>Awards</h2>
            </div>
            <ul className="desktop:w-full mx-auto leading-snug space-y-3">
              <div>🏆 Fellow, '17-pres. // Masason foundation</div>
              <div>🏆 Scholar, '15-'17 // United World Colleges Japan</div>
            </ul>
          </section> */}
        </div>
      </div>

      {/* Lower menu + copyright */}
      <Footer />
    </div>
  );
}
