/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { v4 as uuidv4 } from "uuid";
import traits from "../api/traits.json";

import Subheader from "../components/Subheader";
// import Link from "next/link";
import Link from "../components/Link";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Button from "../components/common/Button";

const Traits = () => {
  const watch = traits.watch;
  const background = traits.background;
  const beard = traits.beard;
  const chain = traits.chain;
  const eyes = traits.eyes;
  const hatoverheadphones = traits.hatoverheadphones;
  const hatunderheadphones = traits.hatunderheadphones;
  const headphones = traits.headphones;
  const longhair = traits.longhair;
  const mouth = traits.mouth;
  const shirt = traits.shirt;
  const shorthair = traits.shorthair;
  const smoke = traits.smoke;
  const type = traits.type;
    
  const assetsPage = (
    <Link leavesPage={false} text="assets page" url="/assets" />
  );

  return (
    <>
      <PageHeader>
        <Header title="traits | mfers hub" />
        <Title title="traits" />

        <Subheader
          title="12 4:20 watches, 8 backgrounds, 2 beards, 2 chains, 10 eyes, 10 hats over headphones, 24 hats under headphones, 9 headphones, 2 long hair traits, 2 mouth traits, 12 shirts, 11 short hair traits, 3 smokes, 5 mfer types"
          body={
            <>
              All the individual traits sized to 1,000px x 1,000px. If you need other downloads check out the{" "}
              {assetsPage}.
            </>
          }
        />
        <Button link="/assets/mfers-layers.zip" text="download traits" download />
      </PageHeader>

      <PageContent>
        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            4:20 watches
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {watch &&
              watch.map((watch) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/watch/watch-${watch.image}.png`}
                    alt="watch"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {watch.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            backgrounds
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {background &&
              background.map((background) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/background/background-${background.image}.png`}
                    alt="background"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {background.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            beards
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {beard &&
              beard.map((beard) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/beard/beard-${beard.image}.png`}
                    alt="beard"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {beard.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            chains
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {chain &&
              chain.map((chain) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/chain/chain-${chain.image}.png`}
                    alt="body"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {chain.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            eyes
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {eyes &&
              eyes.map((eyes) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/eyes/eyes-${eyes.image}.png`}
                    alt="eyes"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {eyes.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            hats over headphones
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {hatoverheadphones &&
              hatoverheadphones.map((hatoverheadphones) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/hatoverheadphones/hatoverheadphones-${hatoverheadphones.image}.png`}
                    alt="hatoverheadphones"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {hatoverheadphones.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            hats under headphones
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {hatunderheadphones &&
              hatunderheadphones.map((hatunderheadphones) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/hatunderheadphones/hatunderheadphones-${hatunderheadphones.image}.png`}
                    alt="hatunderheadphones"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {hatunderheadphones.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            headphones
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {headphones &&
              headphones.map((headphones) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/headphones/headphones-${headphones.image}.png`}
                    alt="headphones"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {headphones.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            long hair traits
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {longhair &&
              longhair.map((longhair) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/longhair/longhair-${longhair.image}.png`}
                    alt="longhair"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {longhair.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
        
        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            mouth traits
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {mouth &&
              mouth.map((mouth) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/mouth/mouth-${mouth.image}.png`}
                    alt="mouth"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {mouth.name}
                  </p>
                </div>
              ))}
          </div>
        </div>        

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            shirts
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {shirt &&
              shirt.map((shirt) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/shirt/shirt-${shirt.image}.png`}
                    alt="shirt"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {shirt.name}
                  </p>
                </div>
              ))}
          </div>
        </div>        

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            short hair
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {shorthair &&
              shorthair.map((shorthair) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/shorthair/shorthair-${shorthair.image}.png`}
                    alt="shorthair"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {shorthair.name}
                  </p>
                </div>
              ))}
          </div>
        </div>        

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            smokes
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {smoke &&
              smoke.map((smoke) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/smoke/smoke-${smoke.image}.png`}
                    alt="smoke"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {smoke.name}
                  </p>
                </div>
              ))}
          </div>
        </div>        

        <div className="bg-grey-base py-6 xs:px-1 sm:px-4 rounded-xl  mb-8">
          <h1 className="text-5xl mferFont font-extrabold mb-6 text-center text-black">
            mfer types
          </h1>
          <div className="grid xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 ">
            {type &&
              type.map((type) => (
                <div key={uuidv4()} className="flex flex-col items-center mb-8">
                  <img
                    src={`/traits/type/type-${type.image}.png`}
                    alt="type"
                  />
                  <p className="text-nouns text-black text-center tracking-wider xs:text-sm sm:text-lg">
                    {type.name}
                  </p>
                </div>
              ))}
          </div>
        </div>        

      </PageContent>
    </>
  );
};

export default Traits;
