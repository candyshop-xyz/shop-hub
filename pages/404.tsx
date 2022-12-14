/* eslint-disable @next/next/no-img-element */
import React from "react";
import Dino from "../components/Dino";
import Header from "../components/Header";
import PageContent from "../components/Layout/PageContent";
import PageHeader from "../components/Layout/PageHeader";
import Title from "../components/Title";

const Custom404 = () => {
  return (
    <>
      <PageHeader>
        <Header title="404 | mfers hub" />
        <Title title="404: page not found" />
      </PageHeader>

      <PageContent>
        <img className="" src="404.png" alt="error" />
      </PageContent>
    </>
  );
};

export default Custom404;
