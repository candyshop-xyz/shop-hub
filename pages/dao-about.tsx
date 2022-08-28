
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
const About = () => {
  return (
    <>
      <PageHeader>
        <Header title="about | cereal box dao" />
        <Title title="cereal box dao" />

        <Subheader
          title="about"
          body="cereal box dao exists to proliferate the mfers meme, fund creators and builders, have fun and create value for members"
        />
      </PageHeader>

      <PageContent>
        <div>
          <div className="relative bg-[#EBEBEB] rounded-xl">
            <div className="bg-[#3467EB] md:absolute md:left-0 md:h-full md:w-1/2 sm:flex sm:items-center rounded-l-xl">
              <img
                src="cerealbg.png"
                className="fit-content"
                alt="timeline"
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-6">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <p className="mt-2 text-black text-5xl font-extrabold mferFont tracking-wider sm:text-4xl">
                  join cereal box dao
                </p>
                <p className="mt-3 text-lg text-gray-500">
                  you can join cereal box dao by minting or buying a cereal box nft
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
                    text={"mint nft"}
                    link="/dao-nftmintingapp"
                  />
                </div>
              </div>
            </div>
          </div>
          <TextContent title="mission">
            <p>
              cereal box dao exists to proliferate the mfers meme, funding creators and builders, have fun and create value for members.
            </p>
          </TextContent>
          <TextContent title="proliferating the mfers meme">
            <p>
              sartoshi created an amazing brand with mfers.  it embodies the fuck it attitude that we all have from time to time.  spend a little time in the {" "}
              <Link
                text="unofficial mfers discord"
                url="https://discord.gg/urX7sCDMUA"
                leavesPage={true}
              />{" "} and you get the mfers ethos — it’s real.
            </p>
                    <br />
            <p>
              proliferating the mfers meme means bringing the {" "}
              <Link
                text="cc0"
                url="https://creativecommons.org/share-your-work/public-domain/cc0/"
                leavesPage={true}
              />{" "} {" "}
              <Link text="mfers assets" url="/assets" leavesPage={false} />{" "} outside of the world of nfts.
            </p>
                    <br />
	    <p>
              <b>what does that look like?</b>
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
          </TextContent>
          <TextContent title="funding creators and builders">
            <p>
              funding creators and builders is the most efficient way to proliferate the mfers meme.
            </p>
                    <br />
            <p>
              it relieves the dao from the overhead of shouldering all of the proliferation efforts and recruits creators and builders into the meme army.  it’s a 1 + 1 = 3 proposition for proliferation.
            </p>
                    <br />
            <p>
              capital allocation to effective creators and builders will propel the mfers to a global brand of defiance.
            </p>
          </TextContent>
          <TextContent title="have fun">
            <p>
              if we aren’t having fun, it’s not worth it.
            </p>
                    <br />
	    <p>
              a dao is a group of people engaging in coordinated action.  that can get contentious and personal.
	    </p>
                    <br />
	    <p>
              cereal box dao will fight against this tendency by aligning roles with what people want to do.
	    </p>
                    <br />
	    <p>
              the following are the roles within the dao that generally reflect how people tend to identify (note: a person may identify with more than one role and change their roles over time):
	    </p>
                    <br />
            <ul className="list-disc list-inside pb-4">
              <li className="ml-6"><b>scout</b> - invest time in seeking out creators and builders and moving proposals through the governance process (this role is eligible for compensation)</li>
              <li className="ml-6"><b>creator/builder</b> - invest time in in-house creation and building to proliferate the mfers meme (this role is eligible for compensation)</li>
              <li className="ml-6"><b>voter</b> - invest time in evaluating and voting on proposals</li>
              <li className="ml-6"><b>holder</b> - enjoys the vibe and telling others about it</li>
              <li className="ml-6"><b>passive holder</b> - interested in holding the token but not being actively involved</li>
            </ul>
          </TextContent>
          <TextContent title="create value for members">
            <p>
              value is created by increasing demand for the token.
            </p>
                    <br />
            <p>
              demand increases for the token when the environment within the dao is something you would never want to leave.
            </p>
                    <br />
            <p>
              what does that look like?  fun, friendship, and the sense of building a brand bigger than ourselves.
            </p>
          </TextContent>
        </div>
      </PageContent>
    </>
  );
};

export default About;
