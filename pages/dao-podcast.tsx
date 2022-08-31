/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Subheader from "../components/Subheader";
import Podcasts from "../components/Podcasts";
import PageHeader from "../components/Layout/PageHeader";
import PageContent from "../components/Layout/PageContent";
import Button from "../components/common/Button";

const Podcast = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <PageHeader>
        <Header title="Sweet Times | Candy Shop" />
        <Title title="Sweet Times" />

        <Subheader
          title="by The Candy Shop"
          body=""
        />
        <Button
          link="https://anchor.fm/cerealboxdao"
          text="listen to all episodes"
        />
      </PageHeader>

      <PageContent>
        <Podcasts />
      </PageContent>
    </>
  );
};

export default Podcast;
