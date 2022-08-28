
import React from "react";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Title from "../components/Title";
import Button from "../components/common/Button";
import Subheader from "../components/Subheader";
import Link from "../components/Link";
import Status from "../components/common/Status";
import TextContent from "../components/Layout/TextContent";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Whatwedo = () => {
  return (
    <>
      <PageHeader>
        <Header title="what we do | cereal box dao" />
        <Title title="cereal box dao" />

        <Subheader
          title="what we do"
          body="cereal box dao funds creators and builders to do crazy shit...it’s that simple"
        />
      </PageHeader>

      <PageContent>
        <div>
          <div className="relative bg-[#EBEBEB] rounded-xl">
            <div className="bg-[#3467EB] md:absolute md:left-0 md:h-full md:w-1/2 sm:flex sm:items-center rounded-l-xl">
              <img
                src="builders.png"
                className="fit-content"
                alt="timeline"
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-6">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <p className="mt-2 text-black text-5xl font-extrabold mferFont tracking-wider sm:text-4xl">
                  we love creators and builders
                </p>
                <p className="mt-3 text-lg text-gray-500">
                  bring your crazy ideas on how to proliferate the mfers meme...get eth
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
                    text={"get funding"}
                    link=""
                  />
                </div>
              </div>
            </div>
          </div>
          <TextContent title="what we fund">
            <p>
              we fund digital and IRL activity proliferating the mfers meme.
            </p>
                    <br />
            <p>
              we are interested in bringing the mfers meme to:
      	    </p>
                    <br />
            <ul className="list-disc list-inside pb-4">
              <li className="ml-6">apparel</li>
              <li className="ml-6">music</li>
              <li className="ml-6">food and beverage</li>
              <li className="ml-6">sports</li>
              <li className="ml-6">entertainment</li>
              <li className="ml-6">cannabis-related products</li>
            </ul>
            <p>
              example include:
      	    </p>
                    <br />
              <ul className="list-disc list-inside pb-4">
              <li className="ml-6">high quality mfers apparel, delivered at accessible prices</li>
              <li className="ml-6">digital music built around the mfers meme</li>
              <li className="ml-6">craft food and beverage products with creative mfers themed packaging and lore</li>
              <li className="ml-6">sports sponsorship opportunities that bring the mfers meme to sports fans</li>
	      <li className="ml-6">viral video content preferably doing crazy shit and edited with mfers brand assets -- we have {" "}
              <Link
                text="great assets"
                url="/assets"
                leavesPage={false}
              />{" "} :-)</li>
            </ul>
          </TextContent>
        </div>
      </PageContent>
    </>
  );
};

export default Whatwedo;
