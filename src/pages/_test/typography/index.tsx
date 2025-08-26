import type { NextPage } from 'next';
import Head from 'next/head';
import { useId } from 'react';
import Header from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>typography -test page- </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id={`html-tags-${useId()}`} className="py-4 space-y-4">
        <h2>html tags</h2>
        <h1 className="outline">h1 typography </h1>
        <h2 className="outline">h2 typography</h2>
        <h3 className="outline">h3 typography</h3>
        <p className="outline">p typography</p>
        <p className="outline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <div className="flex justify-around">
        <section id={`text-sizes-${useId()}`} className="py-4">
          <h2>text sizes</h2>
          <p className="text-5">text-5</p>
          <p className="text-4">text-4 (h1 pagetop)</p>
          <p className="text-2.25">text-h1 (h1 default)</p>
          <p className="text-2">text-h2 (h2 default)</p>
          <p className="text-1.875">text-h3 (h3 default)</p>
          <p className="text-1.5">text-1.5 (h4 default)</p>
          <p className="text-1.25">text-1.25 (p default)</p>
          <p className="text-1.125">text-1.125</p>
          <p className="text-1">text-1</p>
        </section>
        <section id={`font-weights-${useId()}`} className="py-4">
          <h2>font weights</h2>
          <p className="font-9">font-9</p>
          <p className="font-8">font-8</p>
          <p className="font-7">font-7 (h1 default)</p>
          <p className="font-6">font-6 (h2 default)</p>
          <p className="font-5">font-5 (h3 default)</p>
          <p className="font-4">font-4 (h4, p default)</p>
          <p className="font-3">font-3</p>
          <p className="font-2">font-2</p>
          <p className="font-1">font-1</p>
        </section>
      </div>

      <section id={`font-colors-${useId()}`} className="py-8 space-y-4">
        <h2>colors</h2>
        <p className="space-x-2">
          <span className="">base</span>
          <span className="text-info">info</span>
          <span className="text-success">success</span>
          <span className="text-warning">warning</span>
        </p>
      </section>
    </div>
  );
};

export default Home;
