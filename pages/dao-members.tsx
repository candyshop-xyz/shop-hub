/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";
import Title from "../components/Title";
import talent from "../api/members.json";
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa";
import { getRandomNounPic } from "../utils";
import Subheader from "../components/Subheader";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Button from "../components/common/Button";

const Members = () => {
  return (
    <>
      <PageHeader>
        <Header title="members | cereal box dao" />
        <Title title="cereal box dao" />

        <Subheader title="members" body="cereal box doa members come from all over the world from all walks of life - together we meme" />
        <Button
          text="add/remove/edit member listing"
          link="https://www.addressform.io/form/704e33cb-e57c-4988-9936-ae21a64c5ef9"
        />
      </PageHeader>

      <PageContent>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {talent.map((person, idx) => (
            <li
              key={person.skills}
              className="col-span-1  bg-white rounded-lg shadow-md divide-y divide-gray-200 flex flex-col justify-between"
            >
              <div className="w-full flex items-center justify-between p-6 space-x-6 ">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium text-nouns tracking-wider">
                      {person.name !== "" ? person.name : "-"}
                    </h3>

                    {person.title.length <= 1 ? (
                      <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full lowercase text">
                        {person.title}
                      </span>
                    ) : (
                      person.title.map((t) => (
                        <span
                          key={uuidv4()}
                          className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full lowercase text"
                        >
                          {t}
                        </span>
                      ))
                    )}
                  </div>

                  <p className="mt-1 text-gray-500 text-sm ">{person.skills}</p>
                </div>
                <img
                  className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"
                  src={`/members/${person.image}`}
                  alt={person.image}
                />
              </div>

              {(person.twitter || person.discord) && (
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200 bg-gray-100 rounded-b-lg	">
                    {person.twitter !== "" && (
                      <div className="w-0 flex-1 flex cursor-pointer hover:bg-gray-100 transition duration-150 rounded-bl-lg ">
                        <a
                          href={`https://twitter.com/${person.twitter}`}
                          target="_blank"
                          rel="noreferrer"
                          className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500 truncate px-2"
                        >
                          <TwitterIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3 truncate">
                            @{person.twitter}
                          </span>
                        </a>
                      </div>
                    )}

                    {person.discord !== "" && person.discordId !== "" && (
                      <div className="-ml-px w-0 flex-1 flex cursor-pointer hover:bg-gray-100 transition duration-150 rounded-br-lg ">
                        <a
                          href={` https://discord.com/users/${person.discordId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500 truncate px-2"
                        >
                          <DiscordIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3 lowercase truncate">
                            {person.discord}
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </PageContent>
    </>
  );
};

export default Members;
