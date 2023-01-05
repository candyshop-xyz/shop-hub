
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
const Intro = () => {
  return (
    <>
      <PageHeader>
        <Header title="what are mfers | mfers playground" />
        <Title title="what are mfers" />
        <Subheader
          title=""
          body="reproduced from what are mfers by sartoshi originally published on february 12, 2022"
        />
      </PageHeader>

      <PageContent>
        <div>
          <div className="relative bg-[#EBEBEB] rounded-xl">
            <div className="bg-[#3467EB] md:absolute md:left-0 md:h-full md:w-1/2 sm:flex sm:items-center rounded-l-xl">
              <img
                src="intro.jpeg"
                className="fit-content"
                alt="timeline"
              />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-6">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <p className="mt-2 text-black text-5xl font-extrabold mferFont tracking-wider sm:text-4xl">
                  what are mfers
                </p>
                <p className="mt-3 text-lg text-gray-500">
                  by sartoshi
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
                    text={"Read on Mirror"}
                    link="https://mirror.xyz/sartoshi.eth/QukjtL1076-1SEoNJuqyc-x4Ut2v8_TocKkszo-S_nU"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <TextContent title="lots of mfers been asking ‘what are mfers’ so here’s the backstory">
            <p>
              the origin traces to my entry to the world of nfts
            </p>
                    <br />
            <p>
              in march 2021 i began looking at digital art on superrare and created an account there. i needed a name… we all know about satoshi & digital currency…but this was about a foray into digital art…suddenly ‘sartoshi’ was born. my pfp began as the default anonymous image on superrare and i collected a few pieces…
            </p>
          </TextContent>
          <TextContent title="then it all hit hyperspace.">
            <p>
              in a word: cryptopunks. loved them and was fascinated with what larva labs had created with essentially no blueprint. got my first punk in april 2021 - a mohawk punk with a cig. sartoshi the cryptopunk entered the twitterverse.
            </p>
                    <br />
            <p>
              i got a few punks because i believed they were an undervalued albeit speculative asset …and i thought they were fucking sweet -- once i had the feeling of owning one and knowing there were only 10,000, i could see the potential value down the road… but i also thought maybe it would be fun to trade them too, and as summer ‘21 turned into ‘jpg summer’, i was buying and selling punks each week and having a blast doing it…including some bid battles with the likes of deeze and other punk holders i got to know.
            </p>
          </TextContent>
          <TextContent title="meanwhile i tweeted jokes and memes and pointed out absurdities not only of the real world but of the nft world too.">
            <p>
              some stuff was just so over the top, like everyone always saying the nft they just got was the most amazing art they had every laid eyes upon as if they had seen a miracle. so i’d say stuff like this: “omg the art is amazing” -- “ser you’re at a grocery store and that’s a box of cereal.”
            </p>
                    <br />
            <p>
              i was also drawing cartoons and tweeted some of them out…some really hit, and people said i should mint some. i minted on foundation and always started them at the minimum reserve price of 0.1E…most of the time i did a 50/50 split with givedirectly charity (a great cause helping people in poverty--something i believe the crypto space can impact massively)… i was also saying motherfucker and mfer a lot in tweets. feels good to say it -- especially with a positive spin. u gotta try it yourself. like “gm mfer”--that became a go-to refrain. i created a small cartoon guy who was saying that and glitched him into a 1/1 piece on foundation. tho i have some classic art training (painting and the like), the cartoon style fit everything i was doing and experiencing, including creating memes related to nft life
            </p>
                    <br />
            <p>
              perhaps my fav meme i had seen was the “are you winning son?” template with the stick figure dad talking to his stick figure son who is sitting at the computer slouched with headphones on. that inspired many memes i made or drew regarding nft life. “are you winning son?” … “i’m illiquid af dad” -- stuff like that. i think my favorite is one i drew on a day where the markets were tanking, the kid is looking at a chart diving down on his computer, and he covers it with his hands and says something like “fuck dad can you knock?”
            </p>
          </TextContent>
          <TextContent title="a key moment was one day when i drew a cig on the kid and made it my pfp with my typical orange background.">
            <p>
              this crude stick figure kid with headphones and a quickly inked cig with smoke as he slouched in a chair with his arms extended to the keyboard was me…and all the tweets were from that smiling smoking motherfucker. whether a meme or joke or thoughts on the economics of nfts, that dude was typing them out--with a positive vibe but also a ‘don’t fuck with me’ vibe and the ‘it’s web3 i do what i want vibe.’ that’s how sartoshi looks -- doing nfts with a digital cig and tweeting shit out (remember kids real smoking is dangeroooous).
            </p>
          </TextContent>
          <TextContent title="what if we all have that motherfucker inside of us?">
            <p>
              we’re all degens in our own way, sitting at a computer and navigating a new world..artists, collectors, investors, gamers, teachers, whatever. what if an nft collection could capture that feeling so anyone could be their mfer inside? this is what inspired the mfers collection. now what size collection would it be? i think gmoney had once said that punks and bored apes could really resonate as 10k collections bc that number fits well with generating a community of owners. (aside: i totally missed bayc btw -- i had just gotten into punks before bayc launched and simply missed the frickin boat (yacht) -- what bayc has done is mindblowing). anyway i started sketching out stick figures for a 10k collection of mfers.
            </p>
                    <br />
            <p>
              but they needed to be stick figures to fit the right look--not low effort…more involved with many lines you could really see, so that you could discern the artist’s hand in creating all the layers and traits involved. when you zoom in you can see that, including some different opacities in line weights. but it still had to be that stick figure motherfucker--nothing overly polished or overly computerized. is the art ‘amazing’? ehhhhhh, more like kinda sweet if you’re into that thing. could your 6 year old draw it? i don’t fucking know -- maybe they could draw charlie fucking brown too.
            </p>
          </TextContent>
          <TextContent title="ok but how do you structure the collection of mfers…what traits and rarity?">
            <p>
              i wanted to capture some of the essence of my first nft obsession--the legendary cryptopunks. thus the types of mfers largely mirror the punk types: mostly humans, then about 88 zombies, 24 apes, and 9 aliens. (those numbers are not exact in mfers because of the random mint process--but they were weighted toward those numbers). i also included iconic punk traits i loved, such as hoodies, beanies, 3D glasses, and the like. a tribute to the og collection.
            </p>
                    <br />
            <p>
              after being immersed in nfts during jpg summer ‘21 i also wanted to do a tribute to what i considered many iconic nfts at that point -- so i added the 21 1/1 drawings in a style similar to the “are you winning dad” meme… these always have a character yelling something like “stay away from nfts they’re dangerooo---oh noooo!!!” and the kid has transformed into the nft -- like a bored ape, coolcat, cryptodickbutt, squiggle, ringer, nakamoto card, or even beeple himself.
            </p>
                    <br />
            <p>
              ok but who knows how to do the dev work the right way to ensure this is all done top notch and stands the test of time? i reached out to richerd (just check twitter if you don’t know) and he pointed me to colleagues at westcoastnft -- they put their all-star team on the project (santana, wei, lim, and others) who put the tech into the project (ethereum contract, minting functions, etc) as i created the art.
            </p>
                    <br />
            <p>
              as i was building the collection, punk4156 and punk6529 and others were tweeting about the potential benefits of experimenting with releasing nfts as public domain (cc0 license) where the creator basically releases the copyright over the creation so that anyone can essentially use it for whatever they want (making their own nft, products, merchandise, etc)--meanwhile blockchain shows that the owner of the original nft always still has the og item. nouns and gremplin’s cryptoadz went with this approach, and it fascinated me. i decided to do the same thing with mfers--a grand experiment into the new world of web3.
            </p>
          </TextContent>
          <TextContent title="after about 6969 messages with santana at westcoast after i kept changing the art we were ready to launch nov 30, 2021.">
            <p>
              mint price was set at 0.069E, and the first time i mentioned the project to anyone was in a tweet the day before mint, with a link to the minting page at mfers.art. there was no whitelist, no honoraries, no paid promos, no nothing. the site went live at 420pm (obv.) and they sold out in minutes--i was thankful and excited to see what a world with mfers might be like.
            </p>
                    <br />
            <p>
              the world of mfers i envisioned would epitomize the simple idea that “we all mfers.” there is no king, ruler, or defined roadmap--and mfers can build whatever they can think of with these mfers. i didn’t know what that would ultimately look like--and that was the point…nobody does. there’s also no official discord. mfers then created an ‘officially unofficial discord’ that now has thousands of members doing remarkable things, so i hear. i am not in it - this is by design. mfers don’t need sartoshi’s approval or looking over their shoulder as they experiment and build. my view of what is most valuable for me to offer to mfer holders is to amplify the best of their ideas and creations to reach vastly greater audiences…and add value for holders when the opportunities strike, including linking with artists who might create other nfts for mfer holders to claim.
            </p>
          </TextContent>
          <TextContent title="and mfers are building.">
            <p>
              there is a 3D mferverse with 3D mfers and upcoming tokenomics, there is mfers merch such as mfer hoodies and hats, there are mfer derivatives like mfers ahead (front facing), dead mfers (cool skull mfers), apemfers, collections of 1/1’s like mfers in paradise, and zillions of others being built as i type. there’s an mfers book. multiple mfers songs. twitter spaces in chinese with mfers worldwide. and yet as i write this, mfers have existed for just about 2 months--it’s all quite literally just starting. speaking of building, here are all the mfers images (uploaded by santana of westcoastnft) for anyone that wants to use them. (and keep in mind that mfer arms aren’t just reaching out to computers -- it’s piano keys, paint brushes, beer cans, car steering wheels, spaceships, poker tables, and everything else mfers do.)
            </p>
                    <br />
            <p>
              i tweeted recently that “you can state a roadmap that says where you will go, but you can also plant seeds and see where they grow” -- the seeds are all around now, and we will see where they grow. it’s very early. this philosophy explains many of my responses to comments i get all the time:
            </p>
                    <br />
            <ul className="list-disc list-inside pb-4">
              <li className="ml-6">“sartoshi you need an official discord” - no, we don’t; mfers built one for mfers</li>
              <li className="ml-6">“sartoshi you need to be in the discord as the leader” - no, i don’t…mfers are leading their own ways (but im happy to get the word out about many mfer creations and ideas)</li>
              <li className="ml-6">“sartoshi you need a roadmap” - no, mfers are paving their own roads</li>
              <li className="ml-6">“sartoshi you should do paid promos” - no, mfers move organically</li>
              <li className="ml-6">“sartoshi you need to send free mfers to this influencer or that celebrity” - no, those mfers are mfers just like us, mfer</li>
              <li className="ml-6">“sartoshi we need to get more people to change their pfp to mfers” - no, people will do it if they feel like it</li>
              <li className="ml-6">“sartoshi nobody should sell mfers below a certain price” - no, mfers do what they want…we all mfers and they still mfers</li>
              <li className="ml-6">“sartoshi what’s the utility?” - mfers are the utility mfer…it’s like a cryptopunk but you can build whatever you want with it</li>
              <li className="ml-6">“sartoshi will the floor go up?” - idk mfer</li>
              <li className="ml-6">“sartoshi my kid can draw that u suck i hate nfts i hate u too” - lol cheers mfer</li>
            </ul>

            <p>
              in conclusion we all mfers love u mfers & gm mfers we just getting started
            </p>
          </TextContent>
        </div>
      </PageContent>
    </>
  );
};

export default Intro;
