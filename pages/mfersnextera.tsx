
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
const MfersNextEra = () => {
  return (
    <>
      <PageHeader>
        <Header title="mfers next era | cereal box dao" />
        <Title title="cereal box dao" />

        <Subheader
          title="mfers next era"
          body="a membership dao that funds projects in china proliferating the mfers meme"
        />
      </PageHeader>

      <PageContent>
          <div>
          <TextContent title="欢迎来到下一个时代">
            <p>
              join mfers next era and be part of supercharging mfers adoption in china.  mint your mfers next era nft below or on mobile 
              {" "}<Link text="link" url="https://tinyurl.com/mfersnextera" leavesPage={true} />{" "}) or purchase a mfers next era nft on an exchange (
              {" "}<Link text="LooksRare" url="https://looksrare.org/collections/0xb78A4a067a5D8727689E9aEad2b719272CE44fFd?queryID=bac9b3fb0358838ea822a1ccd78e1b45" leavesPage={true} />{" "}, 
              {" "}<Link text="X2Y2" url="https://x2y2.io/collection/mfersnextera/items" leavesPage={true} />{" "}, 
              {" "}<Link text="Gem.xyz" url="https://www.gem.xyz/collection/mfers-next-era/" leavesPage={true} />{" "}, 
              {" "}<Link text="Rarible" url="https://rarible.com/collection/0xb78a4a067a5d8727689e9aead2b719272ce44ffd/items" leavesPage={true} />{" "}).
            </p>
          </TextContent>
                <iframe
        height="500px"
        width="100%"
        frameBorder="no"
        scrolling="no"
        seamless
        src="https://www.721.so/mint?config=%7B%22contractAddress%22%3A%220xb78A4a067a5D8727689E9aEad2b719272CE44fFd%22%2C%22background%22%3A%22%23F5F9Fc%22%2C%22cardBackground%22%3A%22%23F5F9Fc%22%2C%22creatorAddress%22%3A%220xda7e63c63b9e98b307c185a7ce94061878b4b25e%22%2C%22chainId%22%3A%220x1%22%2C%22title%22%3A%22%20%22%2C%22schemaVersion%22%3A%221.0.0%22%7D"
      ></iframe>
          </div>
                  <TextContent title="what is mfers next era">
            <p>
              mfers next era is a membership dao and project of cereal box dao.  members govern the mfers next era treasury, funded by mint revenue and secondary sale royalties, by awarding grants to builders and creators in china proliferating the mfers meme.
            </p>
          </TextContent>

      </PageContent>
    </>
  );
};

export default MfersNextEra;
