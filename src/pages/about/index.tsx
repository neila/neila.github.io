import BaseLayout from "@/components/layouts/Base";
import Link from "next/link";

const AboutSitePage = () => {
  return (
    <>
      <BaseLayout pageTitle="About this website">
        <h1 className="top-heading text-center leading-[8rem]">
          {/* TODO (5): automate capitalization of first word in headings */}
          <span className="text-[3rem]">A</span>BOUT{" "}
          <span className="text-[3rem]">T</span>HIS{" "}
          <span className="text-[3rem]">W</span>EBSITE
        </h1>

        <p>
          This page is about nei.la content;{" "}
          {/* for the details of its
          implementatioan & design, see the{" "}
          <Link href="/about">Design page</Link>; and  */}
          for information about me, see <Link href="/me">My page</Link>.
        </p>

        {/* <h1>The content</h1>
        <h1>Technical specfictions</h1> */}
      </BaseLayout>
    </>
  );
};

export default AboutSitePage;
