
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

const Resources = () => {
  return (
    <>
      <PageHeader>
        <Header title="dao resources | cereal box dao" />
        <Title title="cereal box dao" />

        <Subheader
          title="dao resources"
          body="a resource hub for dao members"
        />
      </PageHeader>

      <PageContent>
        <div>
          <h1 className="font-extrabold text-3xl md:text-3xl mferFont tracking-wider flex gap-4 justify-left">
            dao treasury
          </h1>
          <p>
            {" "}
              <Link
                text="treasury.cerealboxdao.eth"
                url="https://etherscan.io/tokenholdings?a=0x649aee9eaa22cb48018a21d8626b0574c946c6f0"
                leavesPage={true}
              />{" "}
          </p>        
          <br />   
          <h1 className="font-extrabold text-3xl md:text-3xl mferFont tracking-wider flex gap-4 justify-left">
            voting
          </h1>
          <p>
            {" "}
              <Link
                text="discussion forum - peerboard"
                url="https://peerboard.com/746978650"
                leavesPage={true}
              />{" "}
          </p>
          <p>
            {" "}
              <Link
                text="discussion forum - collective.xyz"
                url="https://collective.xyz/eth/cerealboxdao"
                leavesPage={true}
              />{" "}
          </p>
          <p>
            {" "}
              <Link
                text="snapshot"
                url="https://snapshot.org/#/cerealboxdao.eth"
                leavesPage={true}
              />{" "}
          </p>         
          <br />   
          <h1 className="font-extrabold text-3xl md:text-3xl mferFont tracking-wider flex gap-4 justify-left">
            authentication
          </h1>
          <p>
            {" "}
              <Link
                text="guild.xyz"
                url="https://guild.xyz/cerealboxdao"
                leavesPage={true}
              />{" "}
          </p>
          <br />
          <h1 className="font-extrabold text-3xl md:text-3xl mferFont tracking-wider flex gap-4 justify-left">
            social
          </h1>
          <p>
            {" "}
              <Link
                text="discord"
                url="https://discord.gg/rfmECacxmG"
                leavesPage={true}
              />{" "}
          </p>            
          <p>
            {" "}
              <Link
                text="twitter"
                url="https://twitter.com/cerealboxdao"
                leavesPage={true}
              />{" "}
          </p>            
        </div>
      </PageContent>
    </>
  );
};

export default Resources;
