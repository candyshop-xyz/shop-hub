
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
const NFTMintingApp = () => {
  return (
    <>
      <PageHeader>
        <Header title="cereal box dao nft | cereal box dao" />
        <Title title="cereal box dao" />

        <Subheader
          title="cereal box dao nft"
          body="cereal box dao is an nft collection, a governance structure, and a governed treasury built in the tradition of nouns dao"
        />
      </PageHeader>

      <PageContent>
          <div>
          <TextContent title="welcome to cereal box dao">
            <p>
              join cereal box dao to be part of proliferating the mfers meme by funding creators and builders.  mint your cereal box dao nft below or on mobile 
              ({" "}<Link text="link" url="https://tinyurl.com/cerealboxdaonft" leavesPage={true} />{" "}) or purchase a cereal box dao nft on 
              {" "}<Link text="the dao marketplace" url="https://cerealboxdao.wlbl.xyz/" leavesPage={true} />{" "} or an exchange (
              {" "}<Link text="OpenSea" url="https://opensea.io/collection/cerealboxdao" leavesPage={true} />{" "},
              {" "}<Link text="LooksRare" url="https://looksrare.org/collections/0x956643aAF9976bC85a8Fcf991Fe17DBfC3412aFC" leavesPage={true} />{" "}, 
              {" "}<Link text="X2Y2" url="https://x2y2.io/collection/cerealboxdao/items" leavesPage={true} />{" "}, 
              {" "}<Link text="Gem.xyz" url="https://www.gem.xyz/collection/cereal-box-dao/" leavesPage={true} />{" "}, 
              {" "}<Link text="Rarible" url="https://rarible.com/cerealboxdao/items/" leavesPage={true} />{" "}).
            </p>
            <br />
            <p>
              note: the minting app will return an error if you mint with a hardware wallet.  please mint from a non-hardware wallet.
            </p>
          </TextContent>
                <iframe
        height="500px"
        width="100%"
        frameBorder="no"
        scrolling="no"
        seamless
        src="https://www.721.so/mint?config=%7B%22contractAddress%22%3A%220x956643aaf9976bc85a8fcf991fe17dbfc3412afc%22%2C%22background%22%3A%22%23F5F9Fc%22%2C%22cardBackground%22%3A%22%23F5F9Fc%22%2C%22chainId%22%3A%220x1%22%2C%22title%22%3A%22%20%22%2C%22schemaVersion%22%3A%221.0.0%22%7D"
      ></iframe>
          </div>
        <TextContent title="what is the cereal box dao nft?">
            <p>
              learn more by visiting {" "}<Link text="introducing cereal box dao & the cereal box dao nft" url="https://cerealbox.notion.site/introducing-cereal-box-dao-the-cereal-box-dao-nft-cd266624e3d845f088aa969f43308a34" leavesPage={true} />{" "}.
            </p>
        </TextContent>
        <TextContent title="cereal box dao onboarding">
            <p>
              check out the following links to onboard to cereal box dao:
      	    </p>
                    <br />
            <ul className="list-disc list-inside pb-4">
              <li className="ml-6">
                {" "}<Link text="authenticate through guild.xyz" url="https://guild.xyz/cerealboxdao" leavesPage={true} />{" "} using your wallet and discord login - this provides you with the cereal box dao role within the ceral box dao discord
              </li>
              <li className="ml-6">
                check out the {" "}<Link text="discord server rules" url="https://discord.com/channels/984533808554590219/984534041745309787" leavesPage={true} />{" "}
              </li>
              <li className="ml-6">
                {" "}<Link text="request access" url="https://discord.com/channels/984533808554590219/992241842244567171" leavesPage={true} />{" "} to peerboard, the discussion forum for cereal box dao proposals
              </li>
              <li className="ml-6">
                join cereal box dao’s {" "}<Link text="snapshot space" url="https://snapshot.org/#/cerealboxdao.eth" leavesPage={true} />{" "} for dao governance
              </li>
          </ul>
          <p>
            looking forward to our journey.  questions?  hit me up on twitter at {" "}<Link text="@bizxyz" url="https://twitter.com/bizxyz" leavesPage={true} />{" "}.
          </p>
        </TextContent>
      </PageContent>
    </>
  );
};

export default NFTMintingApp;
