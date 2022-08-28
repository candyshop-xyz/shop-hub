/* eslint-disable @next/next/no-img-element */
import React from "react";
import algoliasearch from "algoliasearch/lite";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import NounishButton from "./NounishButton";
import Footer from "../Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const searchClient = algoliasearch(
  "PGIH0KF5F5",
  "faf1987de1d83c02e82fbf9bfd7ca5a9"
);

// autocomplete({
//   container: "#autocomplete",
//   placeholder: "Search the Nouniverse",
// });
const action = () => {
  //on click action to pass to button
};

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden flex justify-around tracking-wider pt-10">
        <div className="relative pb-16 sm:pb-24 ">
          <main className="mx-auto sm:px-4 tracking-wider text-black ">
            <div className="text-center flex flex-col justify-between h-full xs:px-6 sm:px-0">
          <h1 className="title font-extrabold text-7xl md:text-8xl mferFont tracking-wider flex gap-4 justify-center">
                The Candy Shop
              </h1>
          <h4 className="mferFont title">... taste the commons</h4>
            
              <div className="mt-5 sm:mx-auto grid grid-cols-2 grid-rows-2 xs:gap-3 sm:gap-8 sm:justify-center md:mt-8 lg:flex">
                <NounishButton
                  text="mfers"
                  image="mfer.png"
                  buttonId={"one"}
                  buttonAction={action}
                  path="intro"
                  color="bg-blue-base"
                />
                <NounishButton
                  text="shop"
                  image="nouns.png"
                  buttonId={"two"}
                  buttonAction={action}
                  path="traits"
                  color="bg-blue-base"
                />
                <NounishButton
                  text="tinyDino"
                  image="tinyDino.png"
                  buttonId={"three"}
                  buttonAction={action}
                  path="projects"
                  color="bg-blue-base"
                />
                <NounishButton
                  text="rektGuy"
                  image="rektGuy.png"
                  buttonId={"four"}
                  buttonAction={action}
                  path="dao-about"
                  color="bg-blue-base"
                />
                <NounishButton
                  text="smowl"
                  image="smowl.png"
                  buttonId={"five"}
                  buttonAction={action}
                  path="projects"
                  color="bg-blue-base"
                />
                <NounishButton
                  text="cryptoad"
                  image="cryptoad.png"
                  buttonId={"six"}
                  buttonAction={action}
                  path="projects"
                  color="bg-blue-base"
                />
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hero;
