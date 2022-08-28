import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Subheader from "../components/Subheader";
import Title from "../components/Title";
import axios from "axios";
import { formatUnits } from "ethers/lib/utils";
import { BigNumber } from "ethers";
import TextContent from "../components/Layout/TextContent";
import Link from "../components/Link";

/*
 * Proposals for which data won't be calculated
 *
 * Set the proposals where DAO staked ETH in Lido, for example
 */
const excludedProposals = [13, 18, 22, 30, 31, 43, 44, 49, 52, 85];

const twentytwoNotionPage = "ac22114a6c004bafa500e2d824e32dc3";
export async function getStaticProps() {
  let data = [];

  let error = "";

  try {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/table/${twentytwoNotionPage}`
    );
    if (res.status !== 200)
      throw String(`Invalid server response: ${res.status} ${res.statusText}`);
    data = await res.json();

    if (!data) throw String("No data was found!");
    data = JSON.parse(JSON.stringify(data));
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      grantsData: data,
    },
  };
}
const funding = [
  {
    source: "eth below",
    range: "$1,200",
    recipients: 0.0007,
    totalEth: 0.0010,
    totalSup: 1000,
    recipientType: "eth",
    link: "funnyjungleland",
    linkText: "mint nft",
    tagline:
      "the eth below $1,200 nft will be purchased by cereal box dao for 0.0010 eth if the eth close price on coingecko.com is below $1,200 as of 08/31/2022",
    textColor: "text-[#E5284A]",
    bgColor: "bg-[#E5284A]",
    img: "bear.jpg",
  },
  {
    source: "eth between",
    range: "$1.2k - $1.5k",
    recipients: 0.0001,
    totalEth: 0.0010,
    totalSup: 1000,
    recipientType: "eth",
    link: "funnyjungleland",
    linkText: "mint nft",
    tagline:
      "the eth between $1.2k - $1.5k nft will be purchased by cereal box dao for 0.0010 eth if the eth close price on coingecko.com is between $1,200 and $1,500 as of 08/31/2022",
    textColor: "text-blue-base",
    bgColor: "bg-blue-base",
    img: "FunnyJungleland.jpg",
  },
  {
    source: "eth above",
    range: "$1,500",
    recipients: 0.0002,
    totalEth: 0.0010,
    totalSup: 1000,
    recipientType: "eth",
    link: "funnyjungleland",
    linkText: "mint nft",
    tagline:
      "the eth above $1,500 nft will be purchased by cereal box dao for 0.0010 eth if the eth close price on coingecko.com is above $1,500 as of 08/31/2022",
    textColor: "text-[#028940]",
    bgColor: "bg-[#028940]",
    img: "bull.jpg",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const FunnyJungleland = ({ grantsData }) => {
  const [totalProposalEthSpent, setTotalProposalEthSpent] = useState(undefined);
  const [totalProposals, setTotalProposals] = useState(undefined);

  async function getEthSpentOnProposals() {
    let totalSpent = 0;

    const data = await axios({
      url: "https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `
          query{
            proposals(orderBy: startBlock, orderDirection: asc) {
              id
              values
              status
            }
          }`,
      },
    });

    const props = data.data.data.proposals;

    props.forEach((prop) => {
      if (
        !excludedProposals.includes(parseInt(prop.id)) &&
        prop.status === "EXECUTED"
      ) {
        prop.values.forEach((value) => {
          totalSpent =
            totalSpent + parseFloat(formatUnits(BigNumber.from(value)));
        });
      }
    });

    // filter passed props
    const executedProps = props.filter((prop) => prop.status === "EXECUTED");
    // subtract excluded, passed props
    setTotalProposals(executedProps.length - excludedProposals.length);

    // Round the number for better look
    totalSpent = Math.round(totalSpent);

    setTotalProposalEthSpent(totalSpent);

    return totalSpent;
  }

  useEffect(() => {
    getEthSpentOnProposals();
  }, []);

  return (
    <>
      <PageHeader>
        <Header title="funny jungleland | cereal box dao" />
        <Title title="funny jungleland" />

        <Subheader
          title="a prediction market to increase community engagement in daos and nft collections"
          body="operated by cereal box dao"
        />
      </PageHeader>
      
      <PageContent>
        <div>
          <TextContent title="market summary">
            <p>
              the august market is the price of ether.  three markets are available: eth below $1,200 at the close on 08/31/2022, eth between $1,200 and $1,500 at the close on 08/31/2022, and eth above $1,500 at the close on 08/31/2022.  the mint will be held on 07/31/2022 at 12:00 p.m. (utc-7) and will last for 12 hours or until all tokens across the three markets have been minted, whicever is earlier.
            </p>
          </TextContent>
        </div>
        <dl className="mt-5 grid grid-cols-1 flex-col rounded-xl overflow-hidden sm:shadow-none md:grid-cols-3 xs:gap-8 sm:gap-4">
          {funding.map((item) => (
            <div key={item.recipients}>
              <a href={item.link} className="cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/funding/${item.img}`} alt={item.img} />
              </a>

              <div className="relative bg-white py-5 px-4 pb-16 sm:pt-6 sm:px-5 xs:shadow-sm sm:shadow-none xs:rounded-lg  overflow-hidden sm:divide-x divide-white ">
                <dt
                  className={`mferFont font-extrabold text-4xl tracking-wide pb-4 ${item.textColor}`}
                >
                  {item.source}
                </dt>

                <dd className="mt-1 flex flex-col justify-between items-baseline md:block lg:flex font-extrabold">
                  <div className="items-baseline text-3xl">{item.range} </div>

                  <div className="pt-3 text-sm flex flex-col gap-1">
                    <div>
                      <span
                        className={`${item.bgColor} text-white px-1 py-px rounded-md`}
                      >
                        {item.source === "Proposals"
                          ? totalProposals && totalProposals
                          : item.recipients}{" "}
                        {item.recipientType}
                      </span>{" "}
                      mint price
                    </div>
                    <div>
                      <span
                        className={`${item.bgColor} text-white px-1 py-px rounded-md`}
                      >
                        {item.source === "Proposals"
                          ? totalProposalEthSpent &&
                            totalProposalEthSpent.toLocaleString(undefined, {
                              maximumFractionDigits: 4,
                              minimumFractionDigits: 4,
                            })
                          : item.totalEth.toLocaleString(undefined, {
                              maximumFractionDigits: 4,
                              minimumFractionDigits: 4,
                            })}
                        {/* Ξ */} eth
                      </span>{" "}
                      winner redemption
                    </div>
                    <div>
                      <span
                        className={`${item.bgColor} text-white px-1 py-px rounded-md`}
                      >
                        {item.source === "Proposals"
                          ? totalProposalEthSpent &&
                            totalProposalEthSpent.toLocaleString(undefined, {
                              maximumFractionDigits: 0,
                              minimumFractionDigits: 0,
                            })
                          : item.totalSup.toLocaleString(undefined, {
                              maximumFractionDigits: 0,
                              minimumFractionDigits: 0,
                            })}
                      </span>{" "}
                      tokens
                    </div>
                    <span className="font-normal text-black pt-4">
                      {item.tagline}
                    </span>{" "}
                  </div>
                </dd>

                <div
                  className={`absolute hover:bg-opacity-80 transition cursor-pointer bottom-0 inset-x-0
                     rounded-b-xl ${item.bgColor} px-4 py-3 sm:px-5`}
                >
                  <div className="text-sm ">
                    <a href={item.link} className="font-medium text-white">
                      {" "}
                      {item.linkText} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </PageContent>
    </>
  );
};

export default FunnyJungleland;
